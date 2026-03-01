#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const webDir = process.cwd();
const pages = ['index.html', 'app.html', 'checkout.html', 'product-detail.html', 'getting-started.html'];

const failures = [];

for (const page of pages) {
  const file = path.join(webDir, page);
  if (!fs.existsSync(file)) {
    failures.push(`${page}: missing file`);
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');

  if (!html.includes('./styles/brand-system.css')) {
    failures.push(`${page}: missing shared design stylesheet`);
  }

  const bodyTag = html.match(/<body[^>]*>/i)?.[0] || '';
  if (!/data-brand-system=["']1["']/.test(bodyTag)) {
    failures.push(`${page}: <body> missing data-brand-system=\"1\"`);
  }
  if (!/data-page=["'][^"']+["']/.test(bodyTag)) {
    failures.push(`${page}: <body> missing data-page identifier`);
  }

  if (!/class=["'][^"']*\btopbar\b/i.test(html)) {
    failures.push(`${page}: missing topbar header`);
  }

  if (!/<h1[\s>]/i.test(html) && !/id=["']brandTitle["']/.test(html)) {
    failures.push(`${page}: missing primary heading signal`);
  }
}

if (failures.length) {
  console.error('UI contract check failed:\n');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('UI contract check passed for all public pages.');
