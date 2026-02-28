const { randomUUID } = require('crypto');

function nowIso() {
  return new Date().toISOString();
}

function plusDaysIso(days) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString();
}

function makeId(prefix) {
  return `${prefix}_${randomUUID()}`;
}

function asNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : NaN;
}

function requireFields(payload, requiredFields) {
  const missing = requiredFields.filter((key) => payload[key] === undefined || payload[key] === null || payload[key] === '');
  return missing;
}

function findUser(db, userId) {
  return db.users.find((user) => user.id === userId);
}

function hasApprovedVerification(db, userId, type) {
  return db.verificationCases.some(
    (item) => item.userId === userId && item.type === type && item.status === 'approved'
  );
}

function addAudit(db, eventType, entityType, entityId, actorId, metadata = {}) {
  db.auditEvents.push({
    id: makeId('audit'),
    actorId: actorId || null,
    eventType,
    entityType,
    entityId,
    metadata,
    createdAt: nowIso()
  });
}

module.exports = {
  nowIso,
  plusDaysIso,
  makeId,
  asNumber,
  requireFields,
  findUser,
  hasApprovedVerification,
  addAudit
};
