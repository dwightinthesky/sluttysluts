const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve(__dirname, '../data');
const DATA_FILE = path.resolve(DATA_DIR, 'saas-db.json');

function nowIso() {
  return new Date().toISOString();
}

function defaultDb() {
  const createdAt = nowIso();
  return {
    tenants: [
      {
        id: 'tenant_demo',
        code: 'yji4cl31j4gj3',
        name: 'Compliance Commerce SaaS',
        plan: 'pro',
        status: 'active',
        createdAt
      }
    ],
    users: [
      {
        id: 'admin_demo',
        tenantId: 'tenant_demo',
        role: 'admin',
        email: 'admin@demo.local',
        password: 'demo1234',
        status: 'active',
        createdAt
      },
      {
        id: 'ops_demo',
        tenantId: 'tenant_demo',
        role: 'ops',
        email: 'ops@demo.local',
        password: 'demo1234',
        status: 'active',
        createdAt
      },
      {
        id: 'seller_demo',
        tenantId: 'tenant_demo',
        role: 'seller',
        email: 'seller@demo.local',
        password: 'demo1234',
        status: 'active',
        createdAt
      },
      {
        id: 'buyer_demo',
        tenantId: 'tenant_demo',
        role: 'buyer',
        email: 'buyer@demo.local',
        password: 'demo1234',
        status: 'active',
        createdAt
      }
    ],
    sessions: [],
    verificationCases: [],
    listings: [],
    orders: [],
    payments: [],
    payouts: [],
    disputes: [],
    moderationEvents: [],
    subscriptionEvents: [
      {
        id: 'subevt_001',
        tenantId: 'tenant_demo',
        type: 'plan_started',
        plan: 'pro',
        amount: 99,
        currency: 'USD',
        createdAt
      }
    ],
    auditEvents: []
  };
}

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultDb(), null, 2));
  }
}

function loadDb() {
  ensureStore();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
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
  saveDb(defaultDb());
}

module.exports = {
  DATA_FILE,
  loadDb,
  mutateDb,
  resetDb
};
