const ALLOWED_CURRENCIES = new Set(['USD', 'EUR', 'GBP']);

const BLOCK_KEYWORDS = ['underage', 'minor', 'rape', 'forced', 'non-consensual', 'bestiality'];
const REVIEW_KEYWORDS = ['blood', 'meet outside', 'telegram', 'whatsapp', 'cashapp', 'crypto direct'];

function normalizeText(value) {
  return String(value || '').toLowerCase();
}

function moderateText(text) {
  const normalized = normalizeText(text);

  if (BLOCK_KEYWORDS.some((word) => normalized.includes(word))) {
    return { action: 'block', riskScore: 99.9, reasons: ['blocked_keyword'] };
  }

  if (REVIEW_KEYWORDS.some((word) => normalized.includes(word))) {
    return { action: 'review', riskScore: 65, reasons: ['review_keyword'] };
  }

  return { action: 'allow', riskScore: 5, reasons: [] };
}

function choosePsp() {
  const raw = process.env.PSP_PRIORITY || 'segpay,corepay,ccbill';
  const providers = raw
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);

  return providers.length ? providers[0] : 'segpay';
}

function simulatePayment({ amount, currency }) {
  const psp = choosePsp();

  if (!ALLOWED_CURRENCIES.has(currency)) {
    return {
      success: false,
      psp,
      status: 'failed',
      reason: 'unsupported_currency'
    };
  }

  if (amount <= 0 || amount > 10000) {
    return {
      success: false,
      psp,
      status: 'failed',
      reason: 'risk_limit_exceeded'
    };
  }

  return {
    success: true,
    psp,
    status: 'captured',
    reason: null
  };
}

function commissionRate(cumulativeSellerRevenue) {
  if (cumulativeSellerRevenue <= 1000) return 0.15;
  if (cumulativeSellerRevenue <= 5000) return 0.1;
  return 0.05;
}

module.exports = {
  moderateText,
  simulatePayment,
  commissionRate
};
