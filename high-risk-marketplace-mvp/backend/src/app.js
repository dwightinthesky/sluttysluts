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

const PROMOTION_PLANS = [
  {
    id: 'top-24h',
    name: 'Top Placement 24h',
    billingModel: 'duration',
    durationDays: 1,
    clickQuota: null,
    price: 19,
    priorityWeight: 80
  },
  {
    id: 'top-7d',
    name: 'Top Placement 7d',
    billingModel: 'duration',
    durationDays: 7,
    clickQuota: null,
    price: 99,
    priorityWeight: 60
  },
  {
    id: 'boost-200-clicks',
    name: 'Boost 200 Clicks',
    billingModel: 'clicks',
    durationDays: null,
    clickQuota: 200,
    price: 49,
    priorityWeight: 70
  }
];

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

function isAdminLike(actor) {
  return Boolean(actor && ['admin', 'ops'].includes(actor.role));
}

function getPromotionPlan(planId) {
  return PROMOTION_PLANS.find((plan) => plan.id === planId) || null;
}

function isPromotionActive(promotion, nowTimeMs) {
  if (!promotion || promotion.status !== 'active') return false;

  const startMs = promotion.startAt ? new Date(promotion.startAt).getTime() : null;
  const endMs = promotion.endAt ? new Date(promotion.endAt).getTime() : null;

  if (Number.isFinite(startMs) && nowTimeMs < startMs) return false;
  if (Number.isFinite(endMs) && nowTimeMs >= endMs) return false;

  if (promotion.billingModel === 'clicks' && Number(promotion.remainingClicks) <= 0) {
    return false;
  }

  return true;
}

function sellerReputationBoost(db, sellerId) {
  const sellerOrders = db.orders.filter((item) => item.sellerId === sellerId);
  if (!sellerOrders.length) return 5;

  const successCount = sellerOrders.filter((item) => item.status === 'released').length;
  const ratio = successCount / sellerOrders.length;
  return Number((ratio * 10).toFixed(2));
}

function recencyBoost(createdAt) {
  const createdMs = new Date(createdAt).getTime();
  if (!Number.isFinite(createdMs)) return 0;
  const days = Math.max(0, (Date.now() - createdMs) / (24 * 60 * 60 * 1000));
  return Number(Math.max(0, 10 - days).toFixed(2));
}

function pickPromotionForListing(db, listingId, nowTimeMs) {
  const candidates = db.promotions
    .filter((item) => item.listingId === listingId)
    .filter((item) => isPromotionActive(item, nowTimeMs))
    .sort((a, b) => {
      if (b.priorityWeight !== a.priorityWeight) return b.priorityWeight - a.priorityWeight;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return candidates[0] || null;
}

function calculateWalletSummary(db, sellerId, currency) {
  const entries = db.walletEntries
    .filter((entry) => entry.sellerId === sellerId)
    .filter((entry) => !currency || entry.currency === currency);

  const creditCompleted = entries
    .filter((entry) => entry.type === 'credit' && ['available', 'completed'].includes(entry.status))
    .reduce((sum, entry) => sum + entry.amount, 0);

  const creditPending = entries
    .filter((entry) => entry.type === 'credit' && entry.status === 'pending')
    .reduce((sum, entry) => sum + entry.amount, 0);

  const debitReservedOrDone = entries
    .filter((entry) => entry.type === 'debit' && ['pending', 'completed'].includes(entry.status))
    .reduce((sum, entry) => sum + entry.amount, 0);

  const debitPending = entries
    .filter((entry) => entry.type === 'debit' && entry.status === 'pending')
    .reduce((sum, entry) => sum + entry.amount, 0);

  return {
    availableBalance: Number((creditCompleted - debitReservedOrDone).toFixed(2)),
    pendingBalance: Number((creditPending - debitPending).toFixed(2)),
    lifetimeCredits: Number((creditCompleted + creditPending).toFixed(2)),
    lifetimeDebits: Number(debitReservedOrDone.toFixed(2))
  };
}

function canAccessThread(actor, thread) {
  if (isAdminLike(actor)) return true;
  return Boolean(actor && (actor.id === thread.buyerId || actor.id === thread.sellerId));
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
  const nowTimeMs = Date.now();

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

  const ranked = results
    .map((item) => {
      const promotion = pickPromotionForListing(db, item.id, nowTimeMs);
      const promotionBoost = promotion ? promotion.priorityWeight : 0;
      const reputation = sellerReputationBoost(db, item.sellerId);
      const freshness = recencyBoost(item.createdAt);
      const rankingScore = Number((promotionBoost + reputation + freshness).toFixed(2));

      return {
        ...item,
        isPromoted: Boolean(promotion),
        ranking: {
          score: rankingScore,
          promotionBoost,
          reputationBoost: reputation,
          recencyBoost: freshness,
          promotionId: promotion ? promotion.id : null,
          planId: promotion ? promotion.planId : null
        }
      };
    })
    .sort((a, b) => {
      if (b.ranking.score !== a.ranking.score) return b.ranking.score - a.ranking.score;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return res.json({
    count: ranked.length,
    listings: ranked
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
      kind: 'order',
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
    if (!isParticipant && !isAdminLike(actor)) {
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
      db.walletEntries.push({
        id: makeId('wl'),
        sellerId: order.sellerId,
        type: 'credit',
        sourceType: 'payout',
        sourceId: payout.id,
        amount: netAmount,
        currency: order.currency,
        status: 'available',
        createdAt: nowIso(),
        updatedAt: nowIso()
      });

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

app.get('/v1/promotions/plans', (_, res) => {
  res.json({ plans: PROMOTION_PLANS });
});

app.post('/v1/promotions/purchase', (req, res) => {
  const payload = req.body || {};
  const missing = requireFields(payload, ['sellerId', 'listingId', 'planId', 'currency']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['seller', 'admin', 'ops'])) return null;
    if (actor.role === 'seller' && actor.id !== payload.sellerId) {
      return sendError(res, 403, 'FORBIDDEN', 'Seller can only buy own promotion');
    }

    const listing = db.listings.find((item) => item.id === payload.listingId);
    if (!listing) return sendError(res, 404, 'LISTING_NOT_FOUND', 'Listing not found');
    if (listing.sellerId !== payload.sellerId) {
      return sendError(res, 409, 'SELLER_LISTING_MISMATCH', 'Listing does not belong to seller');
    }

    const plan = getPromotionPlan(String(payload.planId));
    if (!plan) return sendError(res, 404, 'PLAN_NOT_FOUND', 'Promotion plan not found');

    const currency = String(payload.currency).toUpperCase();
    const paymentResult = simulatePayment({ amount: plan.price, currency });

    if (!paymentResult.success) {
      return sendError(res, 422, 'PAYMENT_FAILED', 'Promotion payment failed', {
        reason: paymentResult.reason,
        psp: paymentResult.psp
      });
    }

    const promotion = {
      id: makeId('promo'),
      sellerId: payload.sellerId,
      listingId: payload.listingId,
      planId: plan.id,
      billingModel: plan.billingModel,
      status: 'active',
      price: plan.price,
      currency,
      priorityWeight: plan.priorityWeight,
      clickQuota: plan.clickQuota,
      remainingClicks: plan.clickQuota,
      startAt: nowIso(),
      endAt: plan.durationDays ? plusDaysIso(plan.durationDays) : null,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    db.promotions.push(promotion);
    db.payments.push({
      id: makeId('pay'),
      orderId: null,
      kind: 'promotion',
      campaignId: promotion.id,
      psp: paymentResult.psp,
      pspTxnId: makeId('txn'),
      amount: plan.price,
      currency,
      status: paymentResult.status,
      failureReason: paymentResult.reason,
      createdAt: nowIso(),
      updatedAt: nowIso()
    });

    addAudit(db, 'promotion_purchased', 'promotion', promotion.id, actor.id, {
      listingId: payload.listingId,
      planId: plan.id
    });

    return res.status(201).json({ promotion, plan });
  });
});

app.get('/v1/sellers/:sellerId/promotions', (req, res) => {
  const db = loadDb();
  const actor = getActor(db, req);

  if (!requireActorRole(res, actor, ['seller', 'admin', 'ops'])) return;
  if (actor.role === 'seller' && actor.id !== req.params.sellerId) {
    sendError(res, 403, 'FORBIDDEN', 'Seller can only view own promotions');
    return;
  }

  const nowTimeMs = Date.now();
  const promotions = db.promotions
    .filter((item) => item.sellerId === req.params.sellerId)
    .map((item) => ({
      ...item,
      activeNow: isPromotionActive(item, nowTimeMs),
      consumedClicks:
        item.clickQuota && Number.isFinite(item.remainingClicks)
          ? Math.max(0, item.clickQuota - item.remainingClicks)
          : null
    }))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const totalSpend = promotions.reduce((sum, item) => sum + item.price, 0);
  const activeCount = promotions.filter((item) => item.activeNow).length;

  res.json({
    sellerId: req.params.sellerId,
    summary: {
      activeCount,
      totalCampaigns: promotions.length,
      totalSpend: Number(totalSpend.toFixed(2))
    },
    promotions
  });
});

app.post('/v1/promotions/:promotionId/consume-click', (req, res) => {
  return mutateDb((db) => {
    const actor = getActor(db, req);
    if (!requireActorRole(res, actor, ['buyer', 'seller', 'admin', 'ops'])) return null;

    const promotion = db.promotions.find((item) => item.id === req.params.promotionId);
    if (!promotion) return sendError(res, 404, 'PROMOTION_NOT_FOUND', 'Promotion not found');

    if (promotion.billingModel !== 'clicks') {
      return sendError(res, 409, 'NOT_CLICK_PLAN', 'Promotion is not click-based');
    }

    if (!isPromotionActive(promotion, Date.now())) {
      promotion.status = 'expired';
      promotion.updatedAt = nowIso();
      return sendError(res, 409, 'PROMOTION_INACTIVE', 'Promotion is no longer active');
    }

    promotion.remainingClicks -= 1;
    if (promotion.remainingClicks <= 0) {
      promotion.remainingClicks = 0;
      promotion.status = 'expired';
      promotion.endAt = nowIso();
    }

    promotion.updatedAt = nowIso();
    addAudit(db, 'promotion_click_consumed', 'promotion', promotion.id, actor.id, {
      remainingClicks: promotion.remainingClicks
    });

    return res.status(202).json({
      message: 'Click consumed',
      promotion
    });
  });
});

app.get('/v1/wallets/:sellerId/summary', (req, res) => {
  const db = loadDb();
  const actor = getActor(db, req);

  if (!requireActorRole(res, actor, ['seller', 'admin', 'ops'])) return;
  if (actor.role === 'seller' && actor.id !== req.params.sellerId) {
    sendError(res, 403, 'FORBIDDEN', 'Seller can only view own wallet');
    return;
  }

  const currency = String(req.query.currency || 'USD').toUpperCase();
  const summary = calculateWalletSummary(db, req.params.sellerId, currency);

  res.json({
    sellerId: req.params.sellerId,
    currency,
    ...summary
  });
});

app.post('/v1/wallets/:sellerId/withdrawals', (req, res) => {
  const payload = req.body || {};
  const missing = requireFields(payload, ['amount', 'currency', 'payoutMethod']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  const amount = asNumber(payload.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'amount must be a positive number');
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);

    if (!requireActorRole(res, actor, ['seller', 'admin', 'ops'])) return null;
    if (actor.role === 'seller' && actor.id !== req.params.sellerId) {
      return sendError(res, 403, 'FORBIDDEN', 'Seller can only withdraw from own wallet');
    }

    const currency = String(payload.currency).toUpperCase();
    const summary = calculateWalletSummary(db, req.params.sellerId, currency);

    if (summary.availableBalance < amount) {
      return sendError(res, 409, 'INSUFFICIENT_BALANCE', 'Not enough available balance', {
        availableBalance: summary.availableBalance
      });
    }

    const withdrawal = {
      id: makeId('wd'),
      sellerId: req.params.sellerId,
      amount,
      currency,
      payoutMethod: String(payload.payoutMethod),
      note: payload.note ? String(payload.note) : '',
      status: 'pending',
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    db.withdrawalRequests.push(withdrawal);
    db.walletEntries.push({
      id: makeId('wl'),
      sellerId: req.params.sellerId,
      type: 'debit',
      sourceType: 'withdrawal',
      sourceId: withdrawal.id,
      amount,
      currency,
      status: 'pending',
      createdAt: nowIso(),
      updatedAt: nowIso()
    });

    addAudit(db, 'withdrawal_requested', 'withdrawal', withdrawal.id, actor.id, {
      amount,
      currency
    });

    return res.status(201).json({ withdrawal });
  });
});

app.get('/v1/withdrawals', (req, res) => {
  const db = loadDb();
  const actor = getActor(db, req);

  if (!requireActorRole(res, actor, ['seller', 'admin', 'ops'])) return;

  const status = req.query.status ? String(req.query.status) : null;
  const sellerFilter = req.query.sellerId ? String(req.query.sellerId) : null;

  let rows = db.withdrawalRequests;

  if (!isAdminLike(actor)) {
    rows = rows.filter((item) => item.sellerId === actor.id);
  } else if (sellerFilter) {
    rows = rows.filter((item) => item.sellerId === sellerFilter);
  }

  if (status) {
    rows = rows.filter((item) => item.status === status);
  }

  res.json({ count: rows.length, withdrawals: rows });
});

app.post('/v1/withdrawals/:withdrawalId/approve', (req, res) => {
  return mutateDb((db) => {
    const actor = getActor(db, req);

    if (!requireActorRole(res, actor, ['admin', 'ops'])) return null;

    const withdrawal = db.withdrawalRequests.find((item) => item.id === req.params.withdrawalId);
    if (!withdrawal) return sendError(res, 404, 'WITHDRAWAL_NOT_FOUND', 'Withdrawal not found');
    if (withdrawal.status !== 'pending') {
      return sendError(res, 409, 'INVALID_STATUS', `Withdrawal status is ${withdrawal.status}`);
    }

    withdrawal.status = 'sent';
    withdrawal.processedBy = actor.id;
    withdrawal.processedAt = nowIso();
    withdrawal.updatedAt = nowIso();

    const ledgerEntry = db.walletEntries.find(
      (item) => item.sourceType === 'withdrawal' && item.sourceId === withdrawal.id && item.status === 'pending'
    );

    if (ledgerEntry) {
      ledgerEntry.status = 'completed';
      ledgerEntry.updatedAt = nowIso();
    }

    addAudit(db, 'withdrawal_approved', 'withdrawal', withdrawal.id, actor.id);

    return res.status(202).json({ withdrawal });
  });
});

app.post('/v1/withdrawals/:withdrawalId/reject', (req, res) => {
  return mutateDb((db) => {
    const actor = getActor(db, req);

    if (!requireActorRole(res, actor, ['admin', 'ops'])) return null;

    const withdrawal = db.withdrawalRequests.find((item) => item.id === req.params.withdrawalId);
    if (!withdrawal) return sendError(res, 404, 'WITHDRAWAL_NOT_FOUND', 'Withdrawal not found');
    if (withdrawal.status !== 'pending') {
      return sendError(res, 409, 'INVALID_STATUS', `Withdrawal status is ${withdrawal.status}`);
    }

    withdrawal.status = 'rejected';
    withdrawal.processedBy = actor.id;
    withdrawal.processedAt = nowIso();
    withdrawal.updatedAt = nowIso();

    const ledgerEntry = db.walletEntries.find(
      (item) => item.sourceType === 'withdrawal' && item.sourceId === withdrawal.id && item.status === 'pending'
    );

    if (ledgerEntry) {
      ledgerEntry.status = 'reversed';
      ledgerEntry.updatedAt = nowIso();
    }

    addAudit(db, 'withdrawal_rejected', 'withdrawal', withdrawal.id, actor.id);

    return res.status(202).json({ withdrawal });
  });
});

app.post('/v1/chat/threads', (req, res) => {
  const payload = req.body || {};
  const missing = requireFields(payload, ['buyerId', 'sellerId']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);

    if (!requireActorRole(res, actor, ['buyer', 'seller', 'admin', 'ops'])) return null;

    const buyer = findUser(db, payload.buyerId);
    const seller = findUser(db, payload.sellerId);

    if (!buyer || buyer.role !== 'buyer') return sendError(res, 404, 'BUYER_NOT_FOUND', 'Buyer not found');
    if (!seller || seller.role !== 'seller') return sendError(res, 404, 'SELLER_NOT_FOUND', 'Seller not found');

    if (!isAdminLike(actor) && actor.id !== payload.buyerId && actor.id !== payload.sellerId) {
      return sendError(res, 403, 'FORBIDDEN', 'Actor must participate in thread');
    }

    if (payload.orderId) {
      const order = db.orders.find((item) => item.id === payload.orderId);
      if (!order) return sendError(res, 404, 'ORDER_NOT_FOUND', 'Order not found');
      if (order.buyerId !== payload.buyerId || order.sellerId !== payload.sellerId) {
        return sendError(res, 409, 'THREAD_PARTICIPANT_MISMATCH', 'Participants do not match order');
      }
    }

    const thread = {
      id: makeId('thr'),
      buyerId: payload.buyerId,
      sellerId: payload.sellerId,
      orderId: payload.orderId || null,
      listingId: payload.listingId || null,
      status: 'open',
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    db.chatThreads.push(thread);
    addAudit(db, 'chat_thread_created', 'chat_thread', thread.id, actor.id);

    return res.status(201).json({ thread });
  });
});

app.get('/v1/chat/threads', (req, res) => {
  const db = loadDb();
  const actor = getActor(db, req);

  if (!requireActorRole(res, actor, ['buyer', 'seller', 'admin', 'ops'])) return;

  const status = req.query.status ? String(req.query.status) : null;

  let threads = db.chatThreads;
  if (!isAdminLike(actor)) {
    threads = threads.filter((item) => item.buyerId === actor.id || item.sellerId === actor.id);
  }

  if (status) {
    threads = threads.filter((item) => item.status === status);
  }

  const enriched = threads.map((thread) => {
    const messages = db.chatMessages.filter((message) => message.threadId === thread.id);
    const last = messages[messages.length - 1] || null;

    return {
      ...thread,
      messageCount: messages.length,
      lastMessageAt: last ? last.createdAt : null
    };
  });

  res.json({ count: enriched.length, threads: enriched });
});

app.get('/v1/chat/threads/:threadId/messages', (req, res) => {
  const db = loadDb();
  const actor = getActor(db, req);

  if (!requireActorRole(res, actor, ['buyer', 'seller', 'admin', 'ops'])) return;

  const thread = db.chatThreads.find((item) => item.id === req.params.threadId);
  if (!thread) {
    sendError(res, 404, 'THREAD_NOT_FOUND', 'Thread not found');
    return;
  }

  if (!canAccessThread(actor, thread)) {
    sendError(res, 403, 'FORBIDDEN', 'Actor cannot access this thread');
    return;
  }

  const limit = Math.min(100, Math.max(1, Number(req.query.limit || 50)));
  const messages = db.chatMessages
    .filter((item) => item.threadId === thread.id)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    .slice(-limit);

  res.json({ threadId: thread.id, count: messages.length, messages });
});

app.post('/v1/chat/threads/:threadId/messages', (req, res) => {
  const payload = req.body || {};
  const missing = requireFields(payload, ['senderId']);

  if (missing.length) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Missing required fields', { missing });
  }

  if (!payload.text && !payload.imageUrl) {
    return sendError(res, 400, 'VALIDATION_ERROR', 'Either text or imageUrl is required');
  }

  return mutateDb((db) => {
    const actor = getActor(db, req);

    if (!requireActorRole(res, actor, ['buyer', 'seller', 'admin', 'ops'])) return null;

    const thread = db.chatThreads.find((item) => item.id === req.params.threadId);
    if (!thread) return sendError(res, 404, 'THREAD_NOT_FOUND', 'Thread not found');

    if (!canAccessThread(actor, thread)) {
      return sendError(res, 403, 'FORBIDDEN', 'Actor cannot access this thread');
    }

    if (!isAdminLike(actor) && actor.id !== payload.senderId) {
      return sendError(res, 403, 'FORBIDDEN', 'Sender must match actor');
    }

    if (![thread.buyerId, thread.sellerId].includes(payload.senderId) && !isAdminLike(actor)) {
      return sendError(res, 409, 'SENDER_NOT_PARTICIPANT', 'Sender is not a participant of this thread');
    }

    const moderation = moderateText(String(payload.text || ''));
    if (moderation.action === 'block') {
      return sendError(res, 422, 'CONTENT_BLOCKED', 'Message blocked by moderation', moderation);
    }

    const message = {
      id: makeId('msg'),
      threadId: thread.id,
      senderId: String(payload.senderId),
      text: payload.text ? String(payload.text) : '',
      imageUrl: payload.imageUrl ? String(payload.imageUrl) : null,
      status: moderation.action === 'review' ? 'flagged' : 'visible',
      createdAt: nowIso()
    };

    db.chatMessages.push(message);

    if (moderation.action === 'review') {
      db.moderationEvents.push({
        id: makeId('mod'),
        entityType: 'chat_message',
        entityId: message.id,
        provider: 'internal_rule_engine',
        riskScore: moderation.riskScore,
        action: moderation.action,
        reasons: moderation.reasons,
        createdAt: nowIso()
      });
    }

    thread.updatedAt = nowIso();
    addAudit(db, 'chat_message_created', 'chat_message', message.id, actor.id, { threadId: thread.id });

    return res.status(201).json({ message });
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
