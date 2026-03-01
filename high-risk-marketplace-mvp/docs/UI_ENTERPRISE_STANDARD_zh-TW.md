# UI Enterprise Standard（Web）

## 目標
將 `web/` 所有介面（Landing / Workspace / Checkout / Product / Getting Started）維持在同一品牌語言，並透過 CI 強制執行，避免後續改版風格漂移。

## 設計系統契約（UI Contract）
- 每個公開頁面必須引入共用樣式：`./styles/brand-system.css`
- 每個 `<body>` 必須包含：
  - `data-brand-system="1"`
  - `data-page="<page-id>"`
- 每頁必須有 `topbar` 導覽區，確保跨頁體驗一致。

## 視覺規範
- Typography：
  - Sans：`Space Grotesk`
  - Serif：`Playfair Display`
- Core Tokens：
  - 背景：深色漸層 + 雜訊紋理
  - Surface：半透明玻璃層
  - Accent：Rose Red（品牌）+ Blue（對比輔助）
- 元件：
  - 按鈕、輸入框、卡片使用統一圓角、邊框、陰影、focus ring
  - 互動回饋：hover / active / focus-visible 一致

## UX 規範
- 行動版優先維持可操作性（mobile menu / quick dock / sticky actions）
- 主要流程頁（Checkout）需具備：
  - 明確流程階段
  - 即時欄位驗證
  - 費用透明與信任訊號
- Workspace 需具備：
  - 快捷鍵
  - 深連結面板狀態（`?panel=`）
  - 載入骨架（避免白屏）

## 品質閘門（CI）
- Workflow：`.github/workflows/web-quality.yml`
- 在 PR / push 會執行：
  1. `npm ci`
  2. `npm run build:ts`
  3. `npm run quality:ui-contract`
- 部署流程（`deploy-pages.yml`）也會先跑同一組品質檢查。

## 本機驗證
```bash
cd high-risk-marketplace-mvp/web
npm ci
npm run quality:all
```

## 變更流程建議
1. 優先改 `styles/brand-system.css`，不要先在單頁覆寫。
2. 若需單頁差異化，使用 `body[data-page="..."]` 精準覆寫。
3. 每次改版都跑 `quality:all`，確保可部署品質。
