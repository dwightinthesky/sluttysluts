const express = require('express');
const { loadDb, mutateDb, resetDb, DATA_FILE } = require('./store');
const { moderateText, simulatePayment, commissionRate } = require('./rules');
const {
  nowIso,
  plusDaysIso,
  makeId,
  asNumber,
  requireFields,
  findUser,
  hasApprovedVerification,
  addAudit
} = require('./utils');

const app = express();
app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
  res.setHeader('x-request-id', makeId('req'));
  next();
});

function sendError(res, statusCode, code, message, extra = {}) {
  return res.status(statusCode).json({ code, message, ...extra });
}

function getActor(db, req) {
  const actorId = req.header('x-user-id');
  if (!actorId) return null;
  return findUser(db, actorId) || null;
}

function requireActorRole(res, actor, allowedRoles) {
  if (!actor) {
    sendError(res, 401, 'UNAUTHORIZED', 'Missing x-user-id header');
    return false;
  }

  if (!allowedRoles.includes(actor.role)) {
    sendError(res, 403, 'FORBIDDEN', `Allowed roles: ${allowedRoles.join(', ')}`);
    return false;
  }

  return true;
}

app.get('/health', (_, res) => {
  res.json({
    status: 'ok',
    service: 'high-risk-marketplace-backend',
    dataFile: DATA_FILE,
    timestamp: nowIso()
  });
});

app.get('/v1/dev/users', (_, res) => {
  const db = loadDb();
  res.json({ users: db.users });
});

app.post('/v1/dev/reset', (_, res) => {
  resetDb();
  res.status(202).json({ message: 'Database reset complete' });
});

app.post('/v1/age/verify', (req, res) => {
  const { userId, provider } = req.body || {};
  const missing = requireFields(req.body || {}, ['userId', 'provider']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['buyer', 'admin', 'ops'])) return null;
    if (actor.role === 'buyer' && actor.id !== userId) {
      return sendError(res, 403, 'FORBIDDEN', 'Buyer can only verify own account');
    }

    const user = findUser(db, userId);
    if (!user) return sendError(res, 404, 'USER_NOT_FOUND', 'User not found');
    if (user.role !== 'buyer') return sendError(res, 400, 'ROLE_MISMATCH', 'User must be buyer');

    const verificationCase = {
      id: makeId('verify'),
      userId,
      type: 'age',
      provider,
      providerCaseId: makeId('provider'),
      status: 'approved',
      reviewedAt: nowIso(),
      createdAt: nowIso()
    };

    db.verificationCases.push(verificationCase);
    addAudit(db, 'age_verification_approved', 'user', userId, actor.id, { provider });

    return res.status(202).json({
      message: 'Verification started',
      caseId: verificationCase.id,
      status: verificationCase.status
    });
  });
});

app.post('/v1/sellers/kyc', (req, res) => {
  const payload = req.body || {};
  const missing = requireFields(payload, ['sellerId', 'providerCaseId']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['seller', 'admin', 'ops'])) return null;
    if (actor.role === 'seller' && actor.id !== payload.sellerId) {
      return sendError(res, 403, 'FORBIDDEN', 'Seller can only submit own KYC');
    }

    const seller = findUser(db, payload.sellerId);
    if (!seller) return sendError(res, 404, 'SELLER_NOT_FOUND', 'Seller not found');
    if (seller.role !== 'seller') return sendError(res, 400, 'ROLE_MISMATCH', 'User must be seller');

    const verificationCase = {
      id: makeId('verify'),
      userId: payload.sellerId,
      type: 'kyc',
      provider: payload.provider || 'sumsub',
      providerCaseId: payload.providerCaseId,
      status: 'approved',
      reviewedAt: nowIso(),
      createdAt: nowIso()
    };

    db.verificationCases.push(verificationCase);
    addAudit(db, 'seller_kyc_approved', 'user', payload.sellerId, actor.id, {
      providerCaseId: payload.providerCaseId
    });

    return res.status(202).json({
      message: 'KYC submitted',
      caseId: verificationCase.id,
      status: verificationCase.status
    });
  });
});

app.post('/v1/listings', (req, res) => {
  const payload = req.body || {};
  const missing = requireFields(payload, ['sellerId', 'title', 'price', 'currency']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  const price = asNumber(payload.price);
  if (!Number.isFinite(price) || price <= 0) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'price must be a positive number');
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['seller', 'admin', 'ops'])) return null;
    if (actor.role === 'seller' && actor.id !== payload.sellerId) {
      return sendError(res, 403, 'FORBIDDEN', 'Seller can only create own listing');
    }

    const seller = findUser(db, payload.sellerId);
    if (!seller || seller.role !== 'seller') {
      return sendError(res, 404, 'SELLER_NOT_FOUND', 'Seller not found');
    }

    if (!hasApprovedVerification(db, payload.sellerId, 'kyc')) {
      return sendError(res, 409, 'KYC_REQUIRED', 'Seller KYC approval required');
    }

    const moderation = moderateText(`${payload.title}\n${payload.description || ''}`);

    if (moderation.action === 'block') {
      addAudit(db, 'listing_blocked', 'listing', 'N/A', actor.id, moderation);
      return sendError(res, 422, 'CONTENT_BLOCKED', 'Listing blocked by moderation', moderation);
    }

    const listing = {
      id: makeId('lst'),
      sellerId: payload.sellerId,
      title: String(payload.title),
      description: String(payload.description || ''),
      price,
      currency: String(payload.currency).toUpperCase(),
      tags: Array.isArray(payload.tags) ? payload.tags : [],
      status: moderation.action === 'review' ? 'pending_review' : 'active',
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    db.listings.push(listing);
    db.moderationEvents.push({
      id: makeId('mod'),
      entityType: 'listing',
      entityId: listing.id,
      provider: 'internal_rule_engine',
      riskScore: moderation.riskScore,
      action: moderation.action,
      reasons: moderation.reasons,
      createdAt: nowIso()
    });
    addAudit(db, 'listing_created', 'listing', listing.id, actor.id, { moderation: moderation.action });

    return res.status(201).json({ listing });
  });
});

app.get('/v1/listings', (req, res) => {
  const db = loadDb();
  const query = String(req.query.q || '').toLowerCase();
  const minPrice = req.query.minPrice !== undefined ? asNumber(req.query.minPrice) : null;
  const maxPrice = req.query.maxPrice !== undefined ? asNumber(req.query.maxPrice) : null;
  const status = req.query.status ? String(req.query.status) : 'active';

  let results = db.listings;

  if (status !== 'all') {
    results = results.filter((item) => item.status === status);
  }

  if (query) {
    results = results.filter(
      (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    );
  }

  if (Number.isFinite(minPrice)) {
    results = results.filter((item) => item.price >= minPrice);
  }

  if (Number.isFinite(maxPrice)) {
    results = results.filter((item) => item.price <= maxPrice);
  }

  return res.json({
    count: results.length,
    listings: results
  });
});

app.post('/v1/orders', (req, res) => {
  const payload = req.body || {};
  const missing = requireFields(payload, ['buyerId', 'listingId', 'amount', 'currency']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  const amount = asNumber(payload.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'amount must be a positive number');
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['buyer', 'admin', 'ops'])) return null;
    if (actor.role === 'buyer' && actor.id !== payload.buyerId) {
      return sendError(res, 403, 'FORBIDDEN', 'Buyer can only place own order');
    }

    const buyer = findUser(db, payload.buyerId);
    if (!buyer || buyer.role !== 'buyer') return sendError(res, 404, 'BUYER_NOT_FOUND', 'Buyer not found');
    if (!hasApprovedVerification(db, payload.buyerId, 'age')) {
      return sendError(res, 409, 'AGE_VERIFICATION_REQUIRED', 'Buyer age verification required');
    }

    const listing = db.listings.find((item) => item.id === payload.listingId);
    if (!listing) return sendError(res, 404, 'LISTING_NOT_FOUND', 'Listing not found');
    if (listing.status !== 'active') {
      return sendError(res, 409, 'LISTING_NOT_AVAILABLE', `Listing status is ${listing.status}`);
    }

    if (listing.sellerId === payload.buyerId) {
      return sendError(res, 409, 'SELF_PURCHASE_NOT_ALLOWED', 'Buyer cannot buy own listing');
    }

    if (amount !== listing.price) {
      return sendError(res, 400, 'AMOUNT_MISMATCH', 'Order amount must match listing price');
    }

    const paymentResult = simulatePayment({ amount, currency: String(payload.currency).toUpperCase() });

    const order = {
      id: makeId('ord'),
      buyerId: payload.buyerId,
      sellerId: listing.sellerId,
      listingId: payload.listingId,
      amount,
      currency: String(payload.currency).toUpperCase(),
      status: paymentResult.success ? 'held' : 'cancelled',
      disputeWindowEndsAt: plusDaysIso(14),
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    const payment = {
      id: makeId('pay'),
      orderId: order.id,
      psp: paymentResult.psp,
      pspTxnId: makeId('txn'),
      amount,
      currency: order.currency,
      status: paymentResult.status,
      failureReason: paymentResult.reason,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    db.orders.push(order);
    db.payments.push(payment);

    if (paymentResult.success) {
      listing.status = 'sold';
      listing.updatedAt = nowIso();
    }

    addAudit(db, 'order_created', 'order', order.id, actor.id, {
      paymentStatus: payment.status,
      psp: payment.psp
    });

    return res.status(201).json({
      order,
      payment,
      nextAction: paymentResult.success ? 'ship_item' : 'retry_payment'
    });
  });
});

app.post('/v1/orders/:orderId/delivery-confirmation', (req, res) => {
  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['buyer', 'admin', 'ops'])) return null;

    const order = db.orders.find((item) => item.id === req.params.orderId);
    if (!order) return sendError(res, 404, 'ORDER_NOT_FOUND', 'Order not found');

    if (actor.role === 'buyer' && actor.id !== order.buyerId) {
      return sendError(res, 403, 'FORBIDDEN', 'Buyer can only confirm own order');
    }

    if (!['held', 'delivered'].includes(order.status)) {
      return sendError(res, 409, 'INVALID_STATUS', `Order status ${order.status} cannot be confirmed`);
    }

    order.status = 'delivered';
    order.deliveredAt = nowIso();
    order.updatedAt = nowIso();

    addAudit(db, 'order_delivered_confirmed', 'order', order.id, actor.id);

    return res.status(202).json({
      message: 'Delivery confirmed',
      order
    });
  });
});

app.post('/v1/disputes', (req, res) => {
  const payload = req.body || {};
  const missing = requireFields(payload, ['orderId', 'reason']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['buyer', 'seller', 'admin', 'ops'])) return null;

    const order = db.orders.find((item) => item.id === payload.orderId);
    if (!order) return sendError(res, 404, 'ORDER_NOT_FOUND', 'Order not found');

    const isParticipant = actor.id === order.buyerId || actor.id === order.sellerId;
    if (!isParticipant && !['admin', 'ops'].includes(actor.role)) {
      return sendError(res, 403, 'FORBIDDEN', 'Only participants can open disputes');
    }

    const dispute = {
      id: makeId('dsp'),
      orderId: payload.orderId,
      openedBy: actor.id,
      reason: String(payload.reason),
      evidenceUrls: Array.isArray(payload.evidenceUrls) ? payload.evidenceUrls : [],
      status: 'open',
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    db.disputes.push(dispute);
    addAudit(db, 'dispute_opened', 'dispute', dispute.id, actor.id, { orderId: order.id });

    return res.status(201).json({ dispute });
  });
});

app.post('/v1/payouts/release', (req, res) => {
  const force = Boolean((req.body || {}).force);

  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['admin', 'ops'])) return null;

    const now = new Date();
    const released = [];
    const skipped = [];

    for (const order of db.orders) {
      if (order.status !== 'delivered') continue;

      const hasExistingPayout = db.payouts.some((item) => item.orderId === order.id);
      if (hasExistingPayout) {
        skipped.push({ orderId: order.id, reason: 'payout_exists' });
        continue;
      }

      const hasOpenDispute = db.disputes.some((item) => item.orderId === order.id && item.status === 'open');
      if (hasOpenDispute) {
        skipped.push({ orderId: order.id, reason: 'open_dispute' });
        continue;
      }

      if (!force && order.disputeWindowEndsAt && new Date(order.disputeWindowEndsAt) > now) {
        skipped.push({ orderId: order.id, reason: 'dispute_window_open' });
        continue;
      }

      const sellerHistoricalGross = db.payouts
        .filter((item) => item.sellerId === order.sellerId)
        .reduce((sum, item) => sum + item.grossAmount, 0);

      const rate = commissionRate(sellerHistoricalGross + order.amount);
      const platformFee = Number((order.amount * rate).toFixed(2));
      const netAmount = Number((order.amount - platformFee).toFixed(2));

      const payout = {
        id: makeId('po'),
        sellerId: order.sellerId,
        orderId: order.id,
        grossAmount: order.amount,
        platformFee,
        netAmount,
        feeRate: rate,
        status: 'sent',
        createdAt: nowIso(),
        updatedAt: nowIso()
      };

      db.payouts.push(payout);
      order.status = 'released';
      order.updatedAt = nowIso();
      released.push(payout);

      addAudit(db, 'payout_released', 'payout', payout.id, actor.id, { orderId: order.id, feeRate: rate });
    }

    return res.status(202).json({
      message: 'Payout release job completed',
      releasedCount: released.length,
      released,
      skipped
    });
  });
});

app.post('/v1/moderation/screen', (req, res) => {
  const payload = req.body || {};
  const missing = requireFields(payload, ['entityType', 'entityId']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['seller', 'buyer', 'admin', 'ops'])) return null;

    const moderation = moderateText(payload.text || '');

    const event = {
      id: makeId('mod'),
      entityType: String(payload.entityType),
      entityId: String(payload.entityId),
      provider: 'internal_rule_engine',
      riskScore: moderation.riskScore,
      action: moderation.action,
      reasons: moderation.reasons,
      createdAt: nowIso()
    };

    db.moderationEvents.push(event);
    addAudit(db, 'moderation_screened', String(payload.entityType), String(payload.entityId), actor.id, {
      action: moderation.action
    });

    return res.status(200).json(event);
  });
});

app.use((req, res) => {
  sendError(res, 404, 'NOT_FOUND', `Route ${req.method} ${req.originalUrl} not found`);
});

module.exports = { app };
