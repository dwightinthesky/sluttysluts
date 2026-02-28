const express = require('express');
const { loadDb, mutateDb, resetDb, DATA_FILE } = require('./store');
const { moderateText, commissionRate, simulatePayment } = require('./rules');
const { nowIso, plusDaysIso, makeId, num, missingFields } = require('./utils');

const app = express();
app.use(express.json({ limit: '1mb' }));

function sendError(res, status, code, message, extra = {}) {
  return res.status(status).json({ code, message, ...extra });
}

function addAudit(db, eventType, entityType, entityId, actorId, metadata = {}) {
  db.auditEvents.push({
    id: makeId('audit'),
    eventType,
    entityType,
    entityId,
    actorId: actorId || null,
    metadata,
    createdAt: nowIso()
  });
}

function findUser(db, userId) {
  return db.users.find((user) => user.id === userId);
}

function findUserByEmail(db, email) {
  return db.users.find((user) => user.email.toLowerCase() === String(email).toLowerCase());
}

function verifyApproved(db, userId, type) {
  return db.verificationCases.some((item) => item.userId === userId && item.type === type && item.status === 'approved');
}

function resolveActor(db, req) {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith('Bearer ')) {
    const token = auth.slice(7);
    const session = db.sessions.find((x) => x.token === token);
    if (session) {
      return findUser(db, session.userId) || null;
    }
  }

  const userId = req.header('x-user-id');
  if (userId) return findUser(db, userId) || null;
  return null;
}

function requireRole(res, actor, roles) {
  if (!actor) {
    sendError(res, 401, 'UNAUTHORIZED', 'Missing authorization (Bearer token or x-user-id)');
    return false;
  }

  if (!roles.includes(actor.role)) {
    sendError(res, 403, 'FORBIDDEN', `Allowed roles: ${roles.join(', ')}`);
    return false;
  }

  return true;
}

function requireSameTenant(res, actor, targetTenantId) {
  if (!actor || actor.tenantId !== targetTenantId) {
    sendError(res, 403, 'FORBIDDEN', 'Cross-tenant operation is not allowed');
    return false;
  }
  return true;
}

app.get('/api/health', (_, res) => {
  return res.json({
    status: 'ok',
    service: 'compliance-commerce-saas',
    dataFile: DATA_FILE,
    timestamp: nowIso()
  });
});

app.get('/api/dev/users', (_, res) => {
  const db = loadDb();
  return res.json({ users: db.users.map(({ password, ...safe }) => safe) });
});

app.post('/api/dev/reset', (_, res) => {
  resetDb();
  return res.status(202).json({ message: 'database reset complete' });
});

app.post('/api/auth/login', (req, res) => {
  const payload = req.body || {};
  const missing = missingFields(payload, ['email', 'password']);
  if (missing.length) return sendError(res, 400, 'VALIDATION_ERROR', 'Missing fields', { missing });

  return mutateDb((db) => {
    const user = findUserByEmail(db, payload.email);
    if (!user || user.password !== payload.password) {
      return sendError(res, 401, 'AUTH_FAILED', 'Invalid credentials');
    }

    const token = makeId('tok');
    db.sessions.push({ id: makeId('sess'), userId: user.id, token, createdAt: nowIso() });
    addAudit(db, 'login_success', 'user', user.id, user.id);

    const { password, ...safeUser } = user;
    return res.json({ token, user: safeUser });
  });
});

app.get('/api/tenants/:tenantId/dashboard', (req, res) => {
  const db = loadDb();
  const actor = resolveActor(db, req);

  if (!requireRole(res, actor, ['admin', 'ops'])) return;
  if (!requireSameTenant(res, actor, req.params.tenantId)) return;

  const tenantId = req.params.tenantId;
  const orders = db.orders.filter((x) => x.tenantId === tenantId);
  const payouts = db.payouts.filter((x) => x.tenantId === tenantId);
  const disputes = db.disputes.filter((x) => x.tenantId === tenantId);
  const listings = db.listings.filter((x) => x.tenantId === tenantId);

  const grossVolume = orders.filter((x) => ['held', 'delivered', 'released'].includes(x.status)).reduce((s, x) => s + x.amount, 0);
  const platformRevenue = payouts.reduce((s, x) => s + x.platformFee, 0);

  return res.json({
    tenantId,
    metrics: {
      activeListings: listings.filter((x) => x.status === 'active').length,
      ordersTotal: orders.length,
      disputesOpen: disputes.filter((x) => x.status === 'open').length,
      grossVolume,
      platformRevenue
    }
  });
});

app.post('/api/verification/age', (req, res) => {
  const payload = req.body || {};
  const missing = missingFields(payload, ['userId', 'provider']);
  if (missing.length) return sendError(res, 400, 'VALIDATION_ERROR', 'Missing fields', { missing });

  return mutateDb((db) => {
    const actor = resolveActor(db, req);
    if (!requireRole(res, actor, ['buyer', 'ops', 'admin'])) return null;

    const user = findUser(db, payload.userId);
    if (!user) return sendError(res, 404, 'USER_NOT_FOUND', 'User not found');
    if (!requireSameTenant(res, actor, user.tenantId)) return null;
    if (user.role !== 'buyer') return sendError(res, 400, 'ROLE_MISMATCH', 'Target user must be buyer');

    if (actor.role === 'buyer' && actor.id !== user.id) {
      return sendError(res, 403, 'FORBIDDEN', 'Buyer can only verify own age');
    }

    const v = {
      id: makeId('verify'),
      tenantId: user.tenantId,
      userId: user.id,
      type: 'age',
      provider: payload.provider,
      status: 'approved',
      reviewedAt: nowIso(),
      createdAt: nowIso()
    };

    db.verificationCases.push(v);
    addAudit(db, 'age_verification_approved', 'verification', v.id, actor.id, { userId: user.id });

    return res.status(202).json({ verification: v });
  });
});

app.post('/api/verification/kyc', (req, res) => {
  const payload = req.body || {};
  const missing = missingFields(payload, ['userId', 'providerCaseId']);
  if (missing.length) return sendError(res, 400, 'VALIDATION_ERROR', 'Missing fields', { missing });

  return mutateDb((db) => {
    const actor = resolveActor(db, req);
    if (!requireRole(res, actor, ['seller', 'ops', 'admin'])) return null;

    const user = findUser(db, payload.userId);
    if (!user) return sendError(res, 404, 'USER_NOT_FOUND', 'User not found');
    if (!requireSameTenant(res, actor, user.tenantId)) return null;
    if (user.role !== 'seller') return sendError(res, 400, 'ROLE_MISMATCH', 'Target user must be seller');

    if (actor.role === 'seller' && actor.id !== user.id) {
      return sendError(res, 403, 'FORBIDDEN', 'Seller can only submit own KYC');
    }

    const v = {
      id: makeId('verify'),
      tenantId: user.tenantId,
      userId: user.id,
      type: 'kyc',
      provider: payload.provider || 'sumsub',
      providerCaseId: payload.providerCaseId,
      status: 'approved',
      reviewedAt: nowIso(),
      createdAt: nowIso()
    };

    db.verificationCases.push(v);
    addAudit(db, 'seller_kyc_approved', 'verification', v.id, actor.id, { userId: user.id });

    return res.status(202).json({ verification: v });
  });
});

app.post('/api/listings', (req, res) => {
  const payload = req.body || {};
  const missing = missingFields(payload, ['sellerId', 'title', 'price', 'currency']);
  if (missing.length) return sendError(res, 400, 'VALIDATION_ERROR', 'Missing fields', { missing });

  const price = num(payload.price);
  if (!Number.isFinite(price) || price <= 0) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'price must be a positive number');
  }

  return mutateDb((db) => {
    const actor = resolveActor(db, req);
    if (!requireRole(res, actor, ['seller', 'ops', 'admin'])) return null;

    const seller = findUser(db, payload.sellerId);
    if (!seller || seller.role !== 'seller') return sendError(res, 404, 'SELLER_NOT_FOUND', 'Seller not found');
    if (!requireSameTenant(res, actor, seller.tenantId)) return null;

    if (actor.role === 'seller' && actor.id !== seller.id) {
      return sendError(res, 403, 'FORBIDDEN', 'Seller can only create own listing');
    }

    if (!verifyApproved(db, seller.id, 'kyc')) {
      return sendError(res, 409, 'KYC_REQUIRED', 'Seller must complete KYC before listing creation');
    }

    const moderation = moderateText(`${payload.title}\n${payload.description || ''}`);
    if (moderation.action === 'block') {
      addAudit(db, 'listing_blocked', 'listing', 'N/A', actor.id, moderation);
      return sendError(res, 422, 'CONTENT_BLOCKED', 'Content blocked by moderation', moderation);
    }

    const listing = {
      id: makeId('lst'),
      tenantId: seller.tenantId,
      sellerId: seller.id,
      title: String(payload.title),
      description: String(payload.description || ''),
      price,
      currency: String(payload.currency).toUpperCase(),
      inventory: num(payload.inventory || 1),
      status: moderation.action === 'review' ? 'pending_review' : 'active',
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    db.listings.push(listing);
    db.moderationEvents.push({
      id: makeId('mod'),
      tenantId: listing.tenantId,
      entityType: 'listing',
      entityId: listing.id,
      action: moderation.action,
      riskScore: moderation.riskScore,
      reason: moderation.reason,
      createdAt: nowIso()
    });

    addAudit(db, 'listing_created', 'listing', listing.id, actor.id, { moderation: moderation.action });
    return res.status(201).json({ listing });
  });
});

app.get('/api/listings', (req, res) => {
  const db = loadDb();
  const actor = resolveActor(db, req);
  if (!actor) return sendError(res, 401, 'UNAUTHORIZED', 'Missing authorization');

  const status = req.query.status ? String(req.query.status) : 'active';
  const search = String(req.query.q || '').toLowerCase();

  let results = db.listings.filter((x) => x.tenantId === actor.tenantId);
  if (status !== 'all') results = results.filter((x) => x.status === status);
  if (search) {
    results = results.filter((x) => x.title.toLowerCase().includes(search) || x.description.toLowerCase().includes(search));
  }

  return res.json({ count: results.length, listings: results });
});

app.post('/api/orders', (req, res) => {
  const payload = req.body || {};
  const missing = missingFields(payload, ['buyerId', 'listingId', 'quantity', 'paymentMethod']);
  if (missing.length) return sendError(res, 400, 'VALIDATION_ERROR', 'Missing fields', { missing });

  const quantity = Math.floor(num(payload.quantity));
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'quantity must be positive integer');
  }

  return mutateDb((db) => {
    const actor = resolveActor(db, req);
    if (!requireRole(res, actor, ['buyer', 'ops', 'admin'])) return null;

    const buyer = findUser(db, payload.buyerId);
    if (!buyer || buyer.role !== 'buyer') return sendError(res, 404, 'BUYER_NOT_FOUND', 'Buyer not found');
    if (!requireSameTenant(res, actor, buyer.tenantId)) return null;

    if (actor.role === 'buyer' && actor.id !== buyer.id) {
      return sendError(res, 403, 'FORBIDDEN', 'Buyer can only place own order');
    }

    if (!verifyApproved(db, buyer.id, 'age')) {
      return sendError(res, 409, 'AGE_VERIFICATION_REQUIRED', 'Buyer must pass age verification');
    }

    const listing = db.listings.find((x) => x.id === payload.listingId && x.tenantId === buyer.tenantId);
    if (!listing) return sendError(res, 404, 'LISTING_NOT_FOUND', 'Listing not found');
    if (listing.status !== 'active') return sendError(res, 409, 'LISTING_NOT_AVAILABLE', `Listing status is ${listing.status}`);
    if (listing.inventory < quantity) return sendError(res, 409, 'OUT_OF_STOCK', 'Not enough inventory');

    const amount = Number((listing.price * quantity).toFixed(2));
    const paymentResult = simulatePayment({ amount, currency: listing.currency, method: payload.paymentMethod });

    const order = {
      id: makeId('ord'),
      tenantId: buyer.tenantId,
      buyerId: buyer.id,
      sellerId: listing.sellerId,
      listingId: listing.id,
      quantity,
      amount,
      currency: listing.currency,
      paymentMethod: payload.paymentMethod,
      status: paymentResult.success ? 'held' : 'cancelled',
      disputeWindowEndsAt: plusDaysIso(14),
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    const payment = {
      id: makeId('pay'),
      tenantId: buyer.tenantId,
      orderId: order.id,
      processor: paymentResult.processor,
      status: paymentResult.status,
      amount,
      currency: listing.currency,
      failureReason: paymentResult.reason,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    db.orders.push(order);
    db.payments.push(payment);

    if (paymentResult.success) {
      listing.inventory -= quantity;
      if (listing.inventory === 0) listing.status = 'sold';
      listing.updatedAt = nowIso();
    }

    addAudit(db, 'order_created', 'order', order.id, actor.id, { paymentStatus: payment.status, processor: payment.processor });

    return res.status(201).json({ order, payment, nextAction: paymentResult.success ? 'ship_and_confirm' : 'retry_payment' });
  });
});

app.get('/api/orders', (req, res) => {
  const db = loadDb();
  const actor = resolveActor(db, req);
  if (!actor) return sendError(res, 401, 'UNAUTHORIZED', 'Missing authorization');

  let orders = db.orders.filter((x) => x.tenantId === actor.tenantId);
  if (actor.role === 'buyer') orders = orders.filter((x) => x.buyerId === actor.id);
  if (actor.role === 'seller') orders = orders.filter((x) => x.sellerId === actor.id);

  return res.json({ count: orders.length, orders });
});

app.post('/api/orders/:orderId/confirm-delivery', (req, res) => {
  return mutateDb((db) => {
    const actor = resolveActor(db, req);
    if (!requireRole(res, actor, ['buyer', 'ops', 'admin'])) return null;

    const order = db.orders.find((x) => x.id === req.params.orderId);
    if (!order) return sendError(res, 404, 'ORDER_NOT_FOUND', 'Order not found');
    if (!requireSameTenant(res, actor, order.tenantId)) return null;

    if (actor.role === 'buyer' && actor.id !== order.buyerId) {
      return sendError(res, 403, 'FORBIDDEN', 'Buyer can only confirm own order');
    }

    if (!['held', 'delivered'].includes(order.status)) {
      return sendError(res, 409, 'INVALID_STATUS', `Cannot confirm from status ${order.status}`);
    }

    order.status = 'delivered';
    order.deliveredAt = nowIso();
    order.updatedAt = nowIso();

    addAudit(db, 'delivery_confirmed', 'order', order.id, actor.id);
    return res.status(202).json({ order });
  });
});

app.post('/api/disputes', (req, res) => {
  const payload = req.body || {};
  const missing = missingFields(payload, ['orderId', 'reason']);
  if (missing.length) return sendError(res, 400, 'VALIDATION_ERROR', 'Missing fields', { missing });

  return mutateDb((db) => {
    const actor = resolveActor(db, req);
    if (!requireRole(res, actor, ['buyer', 'seller', 'ops', 'admin'])) return null;

    const order = db.orders.find((x) => x.id === payload.orderId);
    if (!order) return sendError(res, 404, 'ORDER_NOT_FOUND', 'Order not found');
    if (!requireSameTenant(res, actor, order.tenantId)) return null;

    const isParticipant = actor.id === order.buyerId || actor.id === order.sellerId;
    if (!isParticipant && !['admin', 'ops'].includes(actor.role)) {
      return sendError(res, 403, 'FORBIDDEN', 'Only participants can open disputes');
    }

    const dispute = {
      id: makeId('dsp'),
      tenantId: order.tenantId,
      orderId: order.id,
      openedBy: actor.id,
      reason: String(payload.reason),
      status: 'open',
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    db.disputes.push(dispute);
    addAudit(db, 'dispute_opened', 'dispute', dispute.id, actor.id, { orderId: order.id });

    return res.status(201).json({ dispute });
  });
});

app.post('/api/payouts/release', (req, res) => {
  const force = Boolean((req.body || {}).force);

  return mutateDb((db) => {
    const actor = resolveActor(db, req);
    if (!requireRole(res, actor, ['ops', 'admin'])) return null;

    const now = new Date();
    const released = [];
    const skipped = [];

    const orders = db.orders.filter((x) => x.tenantId === actor.tenantId && x.status === 'delivered');

    for (const order of orders) {
      if (db.payouts.some((x) => x.orderId === order.id)) {
        skipped.push({ orderId: order.id, reason: 'already_released' });
        continue;
      }

      if (db.disputes.some((x) => x.orderId === order.id && x.status === 'open')) {
        skipped.push({ orderId: order.id, reason: 'open_dispute' });
        continue;
      }

      if (!force && new Date(order.disputeWindowEndsAt) > now) {
        skipped.push({ orderId: order.id, reason: 'dispute_window_open' });
        continue;
      }

      const historicalRevenue = db.payouts
        .filter((x) => x.tenantId === order.tenantId && x.sellerId === order.sellerId)
        .reduce((sum, item) => sum + item.grossAmount, 0);

      const feeRate = commissionRate(historicalRevenue + order.amount);
      const platformFee = Number((order.amount * feeRate).toFixed(2));
      const netAmount = Number((order.amount - platformFee).toFixed(2));

      const payout = {
        id: makeId('po'),
        tenantId: order.tenantId,
        orderId: order.id,
        sellerId: order.sellerId,
        grossAmount: order.amount,
        platformFee,
        netAmount,
        feeRate,
        status: 'sent',
        createdAt: nowIso(),
        updatedAt: nowIso()
      };

      db.payouts.push(payout);
      order.status = 'released';
      order.updatedAt = nowIso();
      released.push(payout);

      addAudit(db, 'payout_released', 'payout', payout.id, actor.id, { orderId: order.id, feeRate });
    }

    return res.status(202).json({ releasedCount: released.length, released, skipped });
  });
});

app.post('/api/moderation/screen', (req, res) => {
  const payload = req.body || {};
  const missing = missingFields(payload, ['entityType', 'entityId', 'text']);
  if (missing.length) return sendError(res, 400, 'VALIDATION_ERROR', 'Missing fields', { missing });

  return mutateDb((db) => {
    const actor = resolveActor(db, req);
    if (!requireRole(res, actor, ['buyer', 'seller', 'ops', 'admin'])) return null;

    const moderation = moderateText(payload.text);
    const event = {
      id: makeId('mod'),
      tenantId: actor.tenantId,
      entityType: String(payload.entityType),
      entityId: String(payload.entityId),
      action: moderation.action,
      riskScore: moderation.riskScore,
      reason: moderation.reason,
      createdAt: nowIso()
    };

    db.moderationEvents.push(event);
    addAudit(db, 'moderation_screened', 'moderation_event', event.id, actor.id);

    return res.json(event);
  });
});

app.get('/api/analytics/metrics', (req, res) => {
  const db = loadDb();
  const actor = resolveActor(db, req);
  if (!requireRole(res, actor, ['admin', 'ops'])) return;

  const tenantId = req.query.tenantId || actor.tenantId;
  if (!requireSameTenant(res, actor, tenantId)) return;

  const orders = db.orders.filter((x) => x.tenantId === tenantId);
  const payments = db.payments.filter((x) => x.tenantId === tenantId);
  const moderation = db.moderationEvents.filter((x) => x.tenantId === tenantId);
  const disputes = db.disputes.filter((x) => x.tenantId === tenantId);

  const paymentSuccessRate = payments.length
    ? Number(((payments.filter((x) => x.status === 'captured').length / payments.length) * 100).toFixed(2))
    : 0;

  const disputeRate = orders.length
    ? Number(((disputes.length / orders.length) * 100).toFixed(2))
    : 0;

  const reviewRate = moderation.length
    ? Number(((moderation.filter((x) => x.action !== 'allow').length / moderation.length) * 100).toFixed(2))
    : 0;

  return res.json({
    tenantId,
    paymentSuccessRate,
    disputeRate,
    moderationInterventionRate: reviewRate,
    totalOrders: orders.length,
    totalPayments: payments.length,
    totalModerationChecks: moderation.length
  });
});

app.use((req, res) => {
  return sendError(res, 404, 'NOT_FOUND', `Route ${req.method} ${req.originalUrl} not found`);
});

module.exports = { app };
