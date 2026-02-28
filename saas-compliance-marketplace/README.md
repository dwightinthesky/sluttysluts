# Compliance Commerce SaaS (New Project)

以「法遵、風控、隱私工程」為核心的高風險利基市場 SaaS 新專案。

## 專案代碼
- Workspace code: `yji4cl31j4gj3`

## 專案結構
- `frontend/`：四語 SaaS 控制台（繁中 / English / Magyar / Français）
- `backend/`：Node.js API（租戶、驗證、上架、下單、爭議、撥款、風控、分析）
- `deploy/`：部署說明
- `docker-compose.yml`：容器啟動

## Backend 快速啟動
```bash
cd backend
npm install
npm start
```
- 預設 API: `http://localhost:8090`

## Backend Smoke Test
先啟動 backend，再執行：
```bash
cd backend
npm run smoke
```

## Frontend 使用
直接開啟 `frontend/index.html`，或用任何靜態伺服器啟動。

## Docker
```bash
docker compose up --build -d
```

## Demo 帳號
- `admin_demo` (admin)
- `ops_demo` (ops)
- `seller_demo` (seller)
- `buyer_demo` (buyer)

## 功能覆蓋
- 年齡驗證、KYC 驗證
- 商品上架 + 內容審核
- 下單 + 模擬支付
- 到貨確認 + 撥款
- 爭議與基本分析指標
