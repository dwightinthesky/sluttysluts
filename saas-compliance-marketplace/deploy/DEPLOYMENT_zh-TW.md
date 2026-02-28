# 部署說明

## 1. GitHub Pages（前端）
此專案可部署到 GitHub Pages 作為 SaaS 操作台前端。

部署路徑（本 repo）：
- `/saas-compliance-marketplace/frontend/index.html`

## 2. Backend 部署
後端可用以下方式部署：
- Docker（推薦）
- Render / Railway / Fly.io（以 `backend/Dockerfile` 部署）
- VPS（Node.js 22 + PM2）

健康檢查：
- `GET /api/health`

## 3. 上線最小檢核
- 環境變數設定（PORT）
- CORS/網域設定（若前後端分離）
- 持久化儲存（目前為檔案 DB）
- 上線前改接正式 DB + 真實 KYC/PSP
