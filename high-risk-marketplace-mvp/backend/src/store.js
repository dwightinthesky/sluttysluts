const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve(__dirname, '../data');
const DATA_FILE = path.resolve(DATA_DIR, 'dev-db.json');

const DEFAULT_DB = {
  users: [
    { id: 'buyer-demo', role: 'buyer', email: 'buyer@example.com', status: 'active', createdAt: new Date().toISOString() },
    { id: 'seller-demo', role: 'seller', email: 'seller@example.com', status: 'active', createdAt: new Date().toISOString() },
    { id: 'admin-demo', role: 'admin', email: 'admin@example.com', status: 'active', createdAt: new Date().toISOString() },
    { id: 'ops-demo', role: 'ops', email: 'ops@example.com', status: 'active', createdAt: new Date().toISOString() }
  ],
  verificationCases: [],
  listings: [],
  orders: [],
  payments: [],
  checkoutSessions: [],
  paymentWebhookEvents: [],
  payouts: [],
  promotions: [],
  walletEntries: [],
  withdrawalRequests: [],
  chatThreads: [],
  chatMessages: [],
  disputes: [],
  moderationEvents: [],
  auditEvents: []
};

function normalizeDb(db) {
  const normalized = { ...db };

  for (const [key, defaultValue] of Object.entries(DEFAULT_DB)) {
    if (normalized[key] === undefined) {
      normalized[key] = Array.isArray(defaultValue) ? [] : defaultValue;
    }
  }

  return normalized;
}

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(DEFAULT_DB, null, 2));
  }
}

function loadDb() {
  ensureStore();
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return normalizeDb(JSON.parse(raw));
}

function saveDb(db) {
  ensureStore();
  fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2));
}

function mutateDb(mutator) {
  const db = loadDb();
  const result = mutator(db);
  saveDb(db);
  return result;
}

function resetDb() {
  saveDb(JSON.parse(JSON.stringify(DEFAULT_DB)));
}

module.exports = {
  DATA_FILE,
  loadDb,
  saveDb,
  mutateDb,
  resetDb
};
