# SluttySluts Marketplace Platform

Compliance-first, two-sided marketplace SaaS MVP with:
- Role-first routing (`Customer` / `Creator`)
- Promotion monetization (duration + click-based)
- Reserve-aware wallet & payouts
- Idempotent webhook handling
- Ops moderation workflow

## Live Demo
- Landing: [GitHub Pages](https://dwightinthesky.github.io/sluttysluts/high-risk-marketplace-mvp/)
- Workspace: [Console](https://dwightinthesky.github.io/sluttysluts/high-risk-marketplace-mvp/web/app.html)

## Project Layout
Main implementation lives in:
- `high-risk-marketplace-mvp/`

Important paths:
- `high-risk-marketplace-mvp/web/` - multi-page frontend (landing, workspace, checkout, product, getting-started)
- `high-risk-marketplace-mvp/backend/` - API MVP (orders, promo, wallet, webhook, moderation, dispute, chat)
- `high-risk-marketplace-mvp/docs/` - PRD, compliance checklist, risk register, roadmap
- `high-risk-marketplace-mvp/sql/schema.sql` - relational schema blueprint

## Quick Start (Local)
### 1) Backend
```bash
cd high-risk-marketplace-mvp/backend
npm install
npm start
```
Backend runs at `http://localhost:8080`.

### 2) Frontend
```bash
cd high-risk-marketplace-mvp/web
npm install
npm run build:ts
python3 -m http.server 4173
```
Open:
- `http://127.0.0.1:4173/index.html`
- `http://127.0.0.1:4173/app.html?role=customer&lang=en`

## Quality Gates (Web)
```bash
cd high-risk-marketplace-mvp/web
npm run quality:all
```
Includes:
- TypeScript build
- UI contract checks
- Lighthouse checks
- Pa11y accessibility checks

## Deployment
- GitHub Pages is deployed from `main` via GitHub Actions.
- Repo: [dwightinthesky/sluttysluts](https://github.com/dwightinthesky/sluttysluts)

## More Details
- Product + architecture + API + compliance details:
  - `high-risk-marketplace-mvp/README.md`
