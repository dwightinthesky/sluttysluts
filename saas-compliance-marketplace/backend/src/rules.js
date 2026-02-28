const BLOCK_KEYWORDS = ['underage', 'minor', 'forced', 'rape', 'non-consensual', 'illegal'];
const REVIEW_KEYWORDS = ['telegram', 'whatsapp', 'cashapp', 'direct transfer', 'off-platform', 'blood'];

const SUPPORTED_CURRENCIES = new Set(['USD', 'EUR', 'GBP']);

function moderateText(text) {
  const source = String(text || '').toLowerCase();

  if (BLOCK_KEYWORDS.some((word) => source.includes(word))) {
    return { action: 'block', riskScore: 99.9, reason: 'blocked_keyword' };
  }

  if (REVIEW_KEYWORDS.some((word) => source.includes(word))) {
    return { action: 'review', riskScore: 65, reason: 'review_keyword' };
  }

  return { action: 'allow', riskScore: 8, reason: 'clear' };
}

function commissionRate(totalSellerRevenue) {
  if (totalSellerRevenue <= 1000) return 0.15;
  if (totalSellerRevenue <= 5000) return 0.1;
  return 0.05;
}

function simulatePayment({ amount, currency, method }) {
  if (!SUPPORTED_CURRENCIES.has(currency)) {
    return { success: false, status: 'failed', reason: 'unsupported_currency', processor: 'segpay' };
  }

  if (!['card', 'crypto', 'bank_transfer'].includes(method)) {
    return { success: false, status: 'failed', reason: 'unsupported_method', processor: 'segpay' };
  }

  if (amount <= 0 || amount > 5000) {
    return { success: false, status: 'failed', reason: 'risk_limit_exceeded', processor: 'corepay' };
  }

  const processor = method === 'crypto' ? 'coingate' : 'segpay';
  return { success: true, status: 'captured', reason: null, processor };
}

module.exports = {
  moderateText,
  commissionRate,
  simulatePayment
};
