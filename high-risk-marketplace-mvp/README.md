# High-Risk Niche Marketplace MVP (Compliance-First)

## 專案定位
這是一個以「法遵、風險控管、隱私工程」為核心的雙邊交易平台 MVP，目標市場為高風險成人利基商品（含貼身衣物類商品）。

> 重要聲明：本專案提供產品與工程框架，不構成法律或稅務意見；上線前需由目標市場的執業律師與合規顧問最終審核。

## MVP 核心目標
- 建立可擴展的雙邊市場基礎能力（賣家上架、買家下單、履約、分潤）。
- 導入強制年齡驗證 + KYC/KYB + AML 監控流程。
- 建立支付抽象層，支援多 PSP 路由與備援。
- 建立匿名化物流資料流（不在平台長期保存不必要的可識別資訊）。
- 落實內容審核與交易外流攔截（站內訊息合規）。
- 建立 Promotion Center、Wallet 提現與站內 Chat 的最小可用實作。

## 不在 MVP 範圍
- 自建持牌金融機構能力（改採持牌合作夥伴）。
- 自營物流倉儲（改採 3PL 串接）。
- 跨多國稅務自動化報表（先支援單一主營司法轄區）。

## 專案結構
- `docs/PRD_zh-TW.md`：產品需求文件（需求、流程、KPI）
- `docs/COMPLIANCE_CHECKLIST_zh-TW.md`：法遵與政策清單
- `docs/RISK_REGISTER_zh-TW.md`：風險登錄與應對
- `docs/ROADMAP_90D_zh-TW.md`：90 天落地路線圖
- `api/openapi.yaml`：API 規格草案
- `sql/schema.sql`：資料庫結構草案（PostgreSQL）
- `ops/KPI_DASHBOARD_TEMPLATE_zh-TW.md`：營運儀表板模板
- `web/index.html`：專案導覽頁
- `web/getting-started.html`：後端快速開始頁（四語系）
- `web/i18n/core.js`、`web/i18n/translations.js`：跨頁語系切換核心
- `backend/Dockerfile`、`docker-compose.yml`：容器部署設定
- `deploy/DEPLOYMENT_GUIDE_zh-TW.md`：跨平台部署指南

## 開工建議順序
1. 先確認 `docs/COMPLIANCE_CHECKLIST_zh-TW.md` 的適用司法轄區。
2. 鎖定支付與 KYC 供應商後，再凍結 `api/openapi.yaml`。
3. 依 `sql/schema.sql` 建立 staging DB，串接最小可行流程：
   `註冊 -> 驗證 -> 上架 -> 下單 -> 履約確認 -> 撥款`。

## 成功指標（MVP）
- 賣家驗證通過率 >= 85%
- 首筆付款成功率 >= 75%
- 7 日爭議率 <= 2%
- 90 日留存（賣家） >= 35%
- P1 隱私事故 = 0

## Backend MVP（可執行）

### 位置
- `backend/src/server.js`
- `backend/src/app.js`
- `backend/scripts/smoke-test.sh`

### 已補完模組
- Promotion Center
  - 促銷方案列表：`GET /v1/promotions/plans`
  - 購買置頂/點擊促銷：`POST /v1/promotions/purchase`
  - 賣家活動查詢：`GET /v1/sellers/:sellerId/promotions`
  - 點擊扣量：`POST /v1/promotions/:promotionId/consume-click`
- Wallet / Withdraw
  - 賣家錢包摘要：`GET /v1/wallets/:sellerId/summary`
  - 賣家帳本（append-only 視圖）：`GET /v1/wallets/:sellerId/ledger`
  - 提現申請：`POST /v1/wallets/:sellerId/withdrawals`
  - 提現審核：`POST /v1/withdrawals/:withdrawalId/approve|reject`
- High-Risk 金流流程
  - 建立待付款訂單（含拆帳欄位）：`POST /v1/orders`
  - Hosted Checkout Webhook：`POST /v1/payments/webhooks/high-risk`
  - 訂單欄位包含：`basePrice / buyerFee / sellerCommission / totalCharged / sellerEarnings / reserveHeld / payoutableAmount`
- Ops Moderation Console（先審後發）
  - 待審核佇列：`GET /v1/ops/moderation/queue`
  - 審核決策（approve/reject）：`POST /v1/ops/moderation/listings/:listingId/decision`
- Chat Service
  - 建立會話：`POST /v1/chat/threads`
  - 會話列表：`GET /v1/chat/threads`
  - 訊息收發：`GET|POST /v1/chat/threads/:threadId/messages`
- Explore 排序
  - `GET /v1/listings` 會依 `promotionBoost + sellerReputation + recency` 排序。

### 快速啟動
```bash
cd backend
npm install
npm start
```

預設服務位址：`http://localhost:8080`

### Demo 測試帳號（內建）
- Buyer: `buyer-demo`
- Seller: `seller-demo`
- Admin: `admin-demo`
- Ops: `ops-demo`

所有受保護 API 需帶 `x-user-id` header。
Webhook 需帶 `x-webhook-token`（預設 `dev-webhook-token`，可用環境變數 `HIGH_RISK_WEBHOOK_TOKEN` 覆寫）。
Webhook 可選帶 `x-webhook-timestamp` 或 payload `eventCreatedAt`（支援 replay-window 驗證）。

Webhook 冪等性與重放保護（可用環境變數調整）：
- `WEBHOOK_REPLAY_WINDOW_SECONDS`（預設 86400）
- `WEBHOOK_MAX_FUTURE_SKEW_SECONDS`（預設 300）

### 一鍵 smoke test
先在另一個 terminal 啟動服務，再執行：
```bash
cd backend
npm run smoke
```

測試流程：
- 重置資料
- 買家年齡驗證
- 賣家 KYC
- 賣家上架
- 購買促銷 + 點擊扣量
- Explore 排序查詢
- 買家下單（建立 pending + Hosted Checkout）
- 模擬 PSP webhook 回傳 paid
- 到貨確認
- 管理員撥款
- 錢包查詢 + 提現審核
- 建立聊天 + 訊息傳送

## 部署（Deployment）

### GitHub Pages（靜態頁）
- 推送到 `main` 後，GitHub Actions 會自動部署。
- Landing 路徑：`/high-risk-marketplace-mvp/web/index.html`
- Console 路徑：`/high-risk-marketplace-mvp/web/app.html`
- Landing 右上角提供 `Creator / Customer` 角色入口與語言切換（Eng / Zh-TW / Hungarian / French）。
- 2026/02 改版：Landing、Console、Getting Started 已統一為企業級視覺語言與響應式 UI。

### Docker（後端 API）
```bash
docker compose up --build -d
curl http://localhost:8080/health
```
