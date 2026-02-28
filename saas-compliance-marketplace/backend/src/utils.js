const { randomUUID } = require('crypto');

function nowIso() {
  return new Date().toISOString();
}

function plusDaysIso(days) {
  const dt = new Date();
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString();
}

function makeId(prefix) {
  return `${prefix}_${randomUUID()}`;
}

function num(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function missingFields(payload, fields) {
  return fields.filter((key) => payload[key] === undefined || payload[key] === null || payload[key] === '');
}

module.exports = {
  nowIso,
  plusDaysIso,
  makeId,
  num,
  missingFields
};
