# 部署指南（可攜版）

## 目標
本專案可同時支援：
- GitHub Pages（靜態前端文件）
- 任意容器平台（後端 API）

## 1) GitHub Pages（已配置）
當分支 `main` 有新 commit 時，GitHub Actions 會自動部署。

部署後主要路徑：
- `/high-risk-marketplace-mvp/web/index.html`
- `/high-risk-marketplace-mvp/web/getting-started.html`

## 2) 本機或任何平台：Docker 部署 backend
在專案根目錄執行：

```bash
docker compose up --build -d
```

驗證：

```bash
curl http://localhost:8080/health
```

## 3) 部署到其他平台（Render/Railway/Fly.io/VPS）
原則：使用 `high-risk-marketplace-mvp/backend/Dockerfile` 直接部署。

必要環境變數：
- `PORT`（平台通常自動提供）
- `PSP_PRIORITY`（可選）

健康檢查端點：
- `GET /health`

## 4) 遷移檢核清單
- 使用環境變數，不寫死平台 URL。
- 持久化 `backend/data`（若要保留測試資料）。
- 設定 HTTPS 與自訂網域。
- 上線前改為真實 DB（PostgreSQL）與真實 KYC/PSP 供應商。
