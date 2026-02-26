const lectureData = {
  l2: {
    title: "Lecture 2: Financial vs Managerial Accounting",
    summary:
      "Lecture 2 explains why external financial statements are not enough for internal decisions, and how managerial accounting fills that gap with detailed, decision-ready analysis.",
    points: [
      {
        heading: "Why Managerial Accounting Exists",
        text: "In the Dana Matthews case, company-level profit looked weak, but financial statements did not show product-level profitability. Managers still needed product-by-product insight to act.",
      },
      {
        heading: "Why Financial Statements Were Not Enough",
        text: "Financial accounting is designed for external users under GAAP/IFRS. It does not normally disclose sensitive internal profitability details by product line.",
      },
      {
        heading: "Primary Purpose",
        text: "Financial accounting reports organizational performance to outside stakeholders. Managerial accounting supports internal planning, control, and decision quality.",
      },
      {
        heading: "Information Users",
        text: "Financial accounting serves investors, lenders, regulators, and creditors. Managerial accounting serves managers, teams, and operating decision makers.",
      },
      {
        heading: "Report Type and Frequency",
        text: "Financial reports are standardized statements issued periodically (monthly, quarterly, annually). Managerial reports are produced whenever needed: daily, weekly, or by project.",
      },
      {
        heading: "Regulation and Audit",
        text: "Financial accounting is legally required and externally audited. Managerial accounting has no mandatory format but is critical for internal performance and strategy.",
      },
      {
        heading: "Time Orientation",
        text: "Financial accounting emphasizes historical, objective records. Managerial accounting is future-oriented, using forecasts, plans, and scenario analysis.",
      },
      {
        heading: "Level of Detail and Data Type",
        text: "Financial accounting summarizes the full company with mostly quantitative data. Managerial accounting drills down to product, customer, and department using quantitative and qualitative data.",
      },
      {
        heading: "Typical MA Question: Special Orders",
        text: "If the company receives an extra order outside normal operations, what is the minimum acceptable price or cost threshold?",
      },
      {
        heading: "Typical MA Question: Cost Structure",
        text: "Should the business choose higher fixed costs or a more variable-cost model? How should HQ overhead be allocated across products or services?",
      },
      {
        heading: "Typical MA Question: Strategic Choices",
        text: "Should we make or buy, launch or drop a product, or cut price to drive volume? Which product mix should be prioritized under capacity constraints?",
      },
      {
        heading: "Balance Sheet Structure (Practice)",
        text: "Core equation: Assets = Liabilities + Stockholders' Equity. Classified sections include current assets, long-term assets, current liabilities, long-term liabilities, and equity.",
      },
      {
        heading: "Income Statement Structure (Practice)",
        text: "Flow: Sales - COGS = Gross Profit; minus operating expenses = EBIT; minus non-operating expenses and tax = Net Income.",
      },
      {
        heading: "Link to Retained Earnings",
        text: "Retained earnings increase with net income and decrease with dividends, connecting income statement results to balance sheet equity.",
      },
    ],
  },
  l3: {
    title: "Lecture 3: Cost Terms, Concepts, and Classifications",
    summary:
      "Lecture 3 defines cost as a decision-support construct and shows how managers classify costs by behavior, traceability, and decision relevance.",
    points: [
      {
        heading: "What a Cost Means",
        text: "A cost is an accounting construction created to support decisions. It represents resources consumed by a chosen object.",
      },
      {
        heading: "Cost Object",
        text: "A cost object is anything you want to measure: product, service, department, retail store, customer segment, or project.",
      },
      {
        heading: "Three Classification Lenses",
        text: "Costs are classified by behavior (variable/fixed), traceability (direct/indirect), and decision context (relevant, sunk, avoidable, etc.).",
      },
      {
        heading: "Variable Costs (Behavior Lens)",
        text: "Total variable cost changes proportionally with activity volume (units, miles, service hours, sales volume).",
      },
      {
        heading: "Fixed Costs (Behavior Lens)",
        text: "Total fixed cost stays constant within the relevant range, even if volume changes significantly or drops to zero.",
      },
      {
        heading: "Direct Costs (Traceability Lens)",
        text: "Direct costs can be traced clearly to one cost object, such as direct materials, direct labor, or dedicated equipment rental.",
      },
      {
        heading: "Indirect Costs (Traceability Lens)",
        text: "Indirect costs are shared across multiple cost objects and must be allocated, such as factory rent, utilities, supervision, and support labor.",
      },
      {
        heading: "Direct Variable Example",
        text: "Fuel used for one specific trip or raw material consumed per unit is both direct and variable.",
      },
      {
        heading: "Direct Fixed Example",
        text: "Annual insurance for one dedicated asset is direct to that asset but fixed over the policy period.",
      },
      {
        heading: "Indirect Variable Example",
        text: "Shared electricity can vary with usage but still be indirect if usage is not metered by cost object.",
      },
      {
        heading: "Indirect Fixed Example",
        text: "CEO salary and headquarters support costs are fixed and usually indirect to individual products.",
      },
      {
        heading: "Sunk Cost (Decision Lens)",
        text: "Past, unrecoverable spending is sunk and must be ignored in current decisions because it does not change across alternatives.",
      },
      {
        heading: "Opportunity Cost (Decision Lens)",
        text: "Opportunity cost is the benefit you give up by choosing one option over the best alternative option.",
      },
      {
        heading: "Avoidable and Relevant Costs",
        text: "Avoidable costs disappear if an activity stops. Relevant costs are expected future costs that differ between alternatives.",
      },
      {
        heading: "Externality Costs",
        text: "Some social or environmental costs may be unpaid now but become economically important later (e.g., carbon-related costs).",
      },
      {
        heading: "Manufacturing Cost Structure",
        text: "Total manufacturing cost = Direct Materials + Direct Labor + Manufacturing Overhead. Direct materials plus direct labor are prime costs.",
      },
      {
        heading: "Period (Non-Manufacturing) Costs",
        text: "Selling and administrative costs are period costs, such as office rent, office utilities, sales commissions, marketing, and admin salaries.",
      },
    ],
  },
  l4: {
    title: "Lecture 4: Cost Behavior and the High-Low Method",
    summary:
      "Lecture 4 explains how cost behavior shapes business risk, margin potential, and forecasting, then shows how to split mixed costs with the high-low method.",
    points: [
      {
        heading: "Why Cost Behavior Matters",
        text: "Before simulating profit, managers must classify costs as variable or fixed. Cost structure strongly affects risk and operating outcomes.",
      },
      {
        heading: "Cost Structure and Risk",
        text: "In uncertain markets, firms often prefer a more variable-cost model to reduce downside exposure when volume drops.",
      },
      {
        heading: "Cost Structure and Expansion",
        text: "In stable growth phases, higher fixed-cost structures can increase profit leverage when sales scale up.",
      },
      {
        heading: "Business Model Example",
        text: "Platform models can stay capital-light by shifting vehicle ownership and maintenance to partners. If ownership shifts back, fixed assets and fixed costs jump.",
      },
      {
        heading: "Variable Cost Behavior",
        text: "Total variable cost moves proportionally with activity (units, miles, service volume), while unit variable cost is assumed constant in the basic model.",
      },
      {
        heading: "Typical Variable Cost Items",
        text: "Examples include raw materials, overtime or temporary labor, sales commissions, packaging, and usage-based utility components.",
      },
      {
        heading: "Real-World Deviation",
        text: "Unit variable cost may change in practice due to commodity price swings, supplier terms, and market disruptions.",
      },
      {
        heading: "Economies of Scale and Discounts",
        text: "Bulk purchasing can lower unit input cost, but some pricing policies keep unit rates unchanged across package sizes.",
      },
      {
        heading: "Fixed Cost Behavior",
        text: "Within a relevant range and time horizon, total fixed cost remains unchanged, even if production drops to zero.",
      },
      {
        heading: "Unit Fixed Cost Declines with Volume",
        text: "Because the same total fixed amount is spread across more units, fixed cost per unit falls as quantity rises.",
      },
      {
        heading: "Critical MA Rule",
        text: "For decision-making and profit analysis, treat fixed costs as a total amount. Avoid using unit fixed cost as a decision driver.",
      },
      {
        heading: "Step Fixed Costs",
        text: "Fixed costs move in steps when capacity expands or contracts, such as adding managers, offices, servers, or equipment.",
      },
      {
        heading: "Capacity Shock Examples",
        text: "Demand collapses can force fixed-cost cuts (layoffs, closures), while demand spikes can require new infrastructure and raise fixed costs.",
      },
      {
        heading: "Mixed Costs",
        text: "Mixed costs include both fixed and variable parts, such as maintenance plans with a base fee plus usage-related expense.",
      },
      {
        heading: "High-Low Step 1",
        text: "Use the highest and lowest activity levels, not the highest and lowest cost values.",
      },
      {
        heading: "High-Low Step 2",
        text: "Unit variable cost = (Cost at high activity - Cost at low activity) / (High activity - Low activity).",
      },
      {
        heading: "High-Low Step 3",
        text: "Fixed cost = Total cost - (Unit variable cost × Activity). Using either high or low point should give the same fixed estimate.",
      },
      {
        heading: "Total Cost Equation",
        text: "Total Cost = (uVC × Qty) + FC.",
      },
      {
        heading: "EBIT Equation Forms",
        text: "EBIT = Revenue - Cost = (SP × Qty) - (uVC × Qty) - FC = (SP - uVC) × Qty - FC.",
      },
      {
        heading: "Seminar Application: Price-Cut Decision",
        text: "When price drops and volume rises, compute the maximum fixed-cost increase that still keeps new EBIT at least equal to old EBIT.",
      },
      {
        heading: "Seminar Application: Cost Classification",
        text: "Practice separating direct materials, rent, salary-plus-commission, and mixed utilities into fixed and variable parts to estimate total production cost.",
      },
    ],
  },
  l5: {
    title: "Lecture 5: CVP Analysis and Break-Even Point",
    summary:
      "Lecture 5 introduces CVP as a practical model for linking price, cost, and volume to operating profit and break-even risk.",
    points: [
      {
        heading: "Core Variables",
        text: "CVP uses SP (selling price), uVC (unit variable cost), FC (total fixed cost), Qty (quantity), and EBIT (operating profit).",
      },
      {
        heading: "Baseline EBIT Formula",
        text: "EBIT = Revenue - Cost = (SP × Qty) - (uVC × Qty) - FC.",
      },
      {
        heading: "What Contribution Margin Means",
        text: "Contribution margin is the amount left after variable costs. It first covers fixed costs, then generates profit.",
      },
      {
        heading: "Total Contribution Margin",
        text: "Total CM = Total Sales - Total Variable Cost.",
      },
      {
        heading: "Unit Contribution Margin (uCM)",
        text: "uCM = SP - uVC. It shows how much one additional unit contributes to FC recovery and profit.",
      },
      {
        heading: "Contribution Margin Ratio",
        text: "CM Ratio = uCM / SP, or Total CM / Total Sales. It is the share of each sales dollar available for FC and profit.",
      },
      {
        heading: "EBIT in CM Form",
        text: "EBIT = (SP - uVC) × Qty - FC = (uCM × Qty) - FC.",
      },
      {
        heading: "Break-Even Definition",
        text: "Break-even is the activity level where EBIT = 0, so total revenue equals total cost.",
      },
      {
        heading: "Break-Even Logic",
        text: "At BEP, total contribution margin equals total fixed cost (CM = FC).",
      },
      {
        heading: "Break-Even Units",
        text: "BEP (units) = FC / uCM.",
      },
      {
        heading: "Break-Even Sales Dollars",
        text: "BEP (sales) = BEP units × SP, or FC / CM ratio.",
      },
      {
        heading: "Risk KPI Interpretation",
        text: "Break-even is a risk KPI because it shows the minimum sales needed to avoid losses.",
      },
      {
        heading: "CVP Chart Axes",
        text: "X-axis is activity level (units or sales volume). Y-axis is dollars/euros.",
      },
      {
        heading: "CVP Chart Lines",
        text: "Total cost starts at FC on the Y-axis and rises with variable cost slope. Revenue starts at origin with slope equal to SP.",
      },
      {
        heading: "BEP on the Graph",
        text: "The intersection of revenue and total cost lines is the break-even point.",
      },
      {
        heading: "Profit and Loss Regions",
        text: "Right of BEP: profit region (Revenue > Cost). Left of BEP: loss region (Revenue < Cost).",
      },
      {
        heading: "What-If: Higher Fixed Cost",
        text: "If FC rises, BEP increases. New BEP units = (old FC + added FC) / uCM.",
      },
      {
        heading: "What-If: Improve EBIT",
        text: "Managers compare actions such as raising SP, reducing uVC, or cutting FC and select the scenario with the highest final EBIT.",
      },
    ],
  },
  l6: {
    title: "Lecture 6: Target Profit, Margin of Safety, and DOL",
    summary:
      "Lecture 6 extends CVP from break-even into planning and risk management through target profit, margin of safety, and operating leverage.",
    points: [
      {
        heading: "Target Profit Concept",
        text: "Managers do not stop at break-even. They estimate how much volume is needed to reach a chosen profit objective.",
      },
      {
        heading: "Target Profit Assumption",
        text: "The basic target-profit model assumes SP, uVC, and FC stay constant over the planning range.",
      },
      {
        heading: "Target Profit in Units",
        text: "Required units = (FC + Target profit) / uCM.",
      },
      {
        heading: "Target Profit in Sales Dollars",
        text: "Required sales = (FC + Target profit) / CM ratio, or required units × SP.",
      },
      {
        heading: "Margin of Safety Concept",
        text: "MOS is the amount by which expected or actual sales exceed break-even sales; it is the cushion before losses start.",
      },
      {
        heading: "Margin of Safety Formula",
        text: "MOS (value or units) = Actual/Expected Sales - Break-Even Sales.",
      },
      {
        heading: "Margin of Safety Ratio",
        text: "MOS ratio = MOS / Actual Sales. A larger percentage means lower short-term downside risk.",
      },
      {
        heading: "MOS as a Risk KPI",
        text: "Like break-even, MOS is a core risk indicator because it quantifies tolerance to sales decline.",
      },
      {
        heading: "EBIT from MOS",
        text: "Above break-even, each extra unit contribution becomes profit. So EBIT = MOS in units × uCM.",
      },
      {
        heading: "Operating Leverage Meaning",
        text: "Operating leverage measures how strongly EBIT reacts to sales-volume changes based on the fixed-vs-variable cost mix.",
      },
      {
        heading: "DOL Formula",
        text: "DOL = Contribution Margin / EBIT.",
      },
      {
        heading: "DOL as Elasticity",
        text: "DOL also equals % change in EBIT / % change in sales volume.",
      },
      {
        heading: "Forecasting with DOL",
        text: "Expected EBIT growth (%) = Expected sales growth (%) × DOL.",
      },
      {
        heading: "High DOL Model",
        text: "High fixed-cost structures (asset-heavy, in-house production) amplify both upside and downside once volume changes.",
      },
      {
        heading: "Low DOL Model",
        text: "Variable-cost-heavy models (outsourcing/platform structures) have lower profit volatility but less explosive upside.",
      },
      {
        heading: "Seminar: Location Choice Logic",
        text: "When comparing plants with different fixed and variable structures, evaluate BEP, MOS, and risk profile before selecting a site.",
      },
      {
        heading: "Seminar: Indifference Point",
        text: "Set both options' EBIT equal to find the volume where profits are identical: (uCM1 × Q - FC1) = (uCM2 × Q - FC2).",
      },
      {
        heading: "Seminar: High DOL Proof",
        text: "If DOL = 3.0, a 10% sales increase implies about 30% EBIT increase (and the same magnification works in declines).",
      },
      {
        heading: "Seminar: Multi-Product Target Profit",
        text: "For multi-product planning, use weighted-average contribution margin based on product mix to allocate required total units.",
      },
    ],
  },
};

const flashcardData = [
  {
    term: "Total Variable Cost",
    prompt: "How do you compute total variable cost?",
    answer: "Total Variable Cost = Unit Variable Cost × Quantity",
  },
  {
    term: "Unit Contribution Margin",
    prompt: "What is the formula for uCM?",
    answer: "uCM = Selling Price per Unit - Unit Variable Cost",
  },
  {
    term: "Contribution Margin Ratio",
    prompt: "How do you compute CM ratio?",
    answer: "CM Ratio = Unit Contribution Margin / Selling Price per Unit",
  },
  {
    term: "EBIT via CVP",
    prompt: "What is EBIT in CVP form?",
    answer: "EBIT = (uCM × Quantity) - Fixed Costs",
  },
  {
    term: "Break-Even Units",
    prompt: "What formula gives break-even quantity?",
    answer: "Break-Even Units = Fixed Costs / Unit Contribution Margin",
  },
  {
    term: "Break-Even Sales",
    prompt: "How can break-even sales dollars be computed?",
    answer: "Break-Even Sales = Fixed Costs / CM Ratio",
  },
  {
    term: "Target Profit Units",
    prompt: "How many units are needed for a target profit?",
    answer: "Required Units = (Fixed Costs + Target Profit) / uCM",
  },
  {
    term: "Margin of Safety",
    prompt: "How do you calculate margin of safety?",
    answer: "MOS = Actual Sales - Break-Even Sales",
  },
  {
    term: "Degree of Operating Leverage",
    prompt: "How is DOL calculated?",
    answer: "DOL = Contribution Margin / EBIT",
  },
  {
    term: "High-Low Variable Cost",
    prompt: "How is variable cost per unit estimated in high-low?",
    answer: "uVC = (Cost at High Activity - Cost at Low Activity) / (High Units - Low Units)",
  },
];

const quizData = [
  {
    question: "Which statement best describes managerial accounting?",
    options: [
      "It is only for tax filing and external regulators.",
      "It supports internal planning and decision-making.",
      "It cannot include non-financial data.",
      "It must follow IFRS formatting for every report.",
    ],
    correct: 1,
  },
  {
    question: "Which of the following is typically a manufacturing overhead cost?",
    options: [
      "Direct material wood for furniture",
      "Sales commission",
      "Factory rent",
      "Direct labor assembly wages",
    ],
    correct: 2,
  },
  {
    question: "A sunk cost should be treated how in current decisions?",
    options: [
      "Always included because cash was paid",
      "Ignored because it cannot be changed",
      "Allocated to all alternatives equally",
      "Converted into variable cost",
    ],
    correct: 1,
  },
  {
    question: "If output doubles within the relevant range, what happens to total fixed cost?",
    options: [
      "It doubles",
      "It drops by half",
      "It stays the same",
      "It becomes a sunk cost",
    ],
    correct: 2,
  },
  {
    question: "Which formula gives break-even units?",
    options: [
      "FC / uCM",
      "uCM / FC",
      "Sales / Variable Cost",
      "FC / SP",
    ],
    correct: 0,
  },
  {
    question: "If CM is $50,000 and EBIT is $10,000, DOL equals:",
    options: ["0.2", "2", "5", "60,000"],
    correct: 2,
  },
  {
    question: "Margin of safety is best defined as:",
    options: [
      "Fixed costs minus variable costs",
      "Actual sales minus break-even sales",
      "Contribution margin minus fixed costs",
      "Target profit divided by contribution margin",
    ],
    correct: 1,
  },
  {
    question: "In the high-low method, you select periods by:",
    options: [
      "Highest and lowest total cost",
      "Highest and lowest EBIT",
      "Highest and lowest activity level",
      "Earliest and latest month",
    ],
    correct: 2,
  },
];

const lectureDataZhTW = {
  l2: {
    title: "第 2 講：財務會計 vs 管理會計",
    summary: "比較外部財報需求與內部管理決策需求，理解為何管理會計不可或缺。",
    points: [
      {
        heading: "核心情境",
        text: "財務報表可以看整體績效，但看不到產品別獲利能力；管理會計可補上這個缺口。",
      },
      {
        heading: "使用者差異",
        text: "財務會計面向投資人、債權人與監管機關；管理會計面向經理人與內部團隊。",
      },
      {
        heading: "規範差異",
        text: "財務會計需符合 GAAP/IFRS 並接受外部審計；管理會計則依企業需求彈性設計。",
      },
      {
        heading: "時間導向",
        text: "財務會計偏歷史紀錄；管理會計偏未來預測、規劃與控制。",
      },
      {
        heading: "資料型態與細節",
        text: "財務會計多為全公司彙總量化資訊；管理會計能下鑽到部門、產品、流程並加入質化資訊。",
      },
      {
        heading: "常見管理問題",
        text: "例如特別訂單最低可接受價格、是否外包、如何分攤總部成本、產能受限下的產品組合。",
      },
      {
        heading: "報表結構練習",
        text: "熟悉資產負債表分類與損益表流程（Sales -> COGS -> Gross Profit -> EBIT -> Net Income）。",
      },
    ],
  },
  l3: {
    title: "第 3 講：成本術語、概念與分類",
    summary: "成本是決策用的知識建構，需依不同管理目的做分類。",
    points: [
      {
        heading: "什麼是成本",
        text: "成本是為了分析決策而彙整的資源消耗衡量值。",
      },
      {
        heading: "成本標的",
        text: "可為產品、服務、部門、專案、客群或任何你想計算成本的對象。",
      },
      {
        heading: "三大分類維度",
        text: "依成本習性、可追溯性、與決策相關性進行分類。",
      },
      {
        heading: "變動成本與固定成本",
        text: "變動成本隨活動量變化；固定成本在相關範圍內保持總額不變。",
      },
      {
        heading: "直接成本與間接成本",
        text: "直接成本可直接歸屬，間接成本需以分攤方法配置。",
      },
      {
        heading: "決策成本",
        text: "沉沒成本要忽略；機會成本是放棄次佳方案的利益；相關成本是方案間會改變的未來成本。",
      },
      {
        heading: "製造與期間成本",
        text: "製造成本 = 直接材料 + 直接人工 + 製造費用；銷管費屬期間成本。",
      },
    ],
  },
  l4: {
    title: "第 4 講：成本習性與高低點法",
    summary: "掌握固定/變動/混合成本的行為，並用高低點法拆解混合成本。",
    points: [
      {
        heading: "為何先做成本分類",
        text: "利潤模擬與風險評估高度依賴成本結構。",
      },
      {
        heading: "成本結構與商業模式",
        text: "不確定環境偏好高變動成本；成熟擴張期常接受較高固定成本換取槓桿。",
      },
      {
        heading: "變動成本重點",
        text: "總變動成本隨活動量等比例變動，模型中通常先假設單位變動成本固定。",
      },
      {
        heading: "固定成本重點",
        text: "總固定成本在相關範圍內不變，但單位固定成本會隨產量增加而下降。",
      },
      {
        heading: "階梯式固定成本",
        text: "當產能升級或收縮，固定成本會跳階變動。",
      },
      {
        heading: "管理原則",
        text: "決策時以固定成本總額思考，避免用單位固定成本誤判。",
      },
      {
        heading: "高低點法三步驟",
        text: "選活動量高低點 -> 算 uVC 斜率 -> 回代求固定成本。",
      },
      {
        heading: "EBIT 推導",
        text: "EBIT = (SP - uVC) × Qty - FC，是後續 CVP 的核心方程。",
      },
    ],
  },
  l5: {
    title: "第 5 講：CVP 分析（第一部分）",
    summary: "以邊際貢獻與損益兩平點分析營運風險與獲利下限。",
    points: [
      {
        heading: "核心變數",
        text: "SP、uVC、FC、Qty 與 EBIT 是 CVP 的基本參數。",
      },
      {
        heading: "邊際貢獻 CM",
        text: "CM = Sales - Variable Cost，可先彌補固定成本，再創造利潤。",
      },
      {
        heading: "單位邊際貢獻 uCM",
        text: "uCM = SP - uVC，代表每多賣一單位可帶來的貢獻。",
      },
      {
        heading: "邊際貢獻率",
        text: "CM Ratio = uCM / SP，顯示每 1 元銷售中有多少可用於 FC 與利潤。",
      },
      {
        heading: "EBIT 的 CM 形式",
        text: "EBIT = (uCM × Qty) - FC。",
      },
      {
        heading: "損益兩平點定義",
        text: "BEP 是 EBIT = 0 的活動水準，此時 CM = FC。",
      },
      {
        heading: "BEP 公式",
        text: "BEP(數量) = FC / uCM；BEP(金額) = FC / CM Ratio。",
      },
      {
        heading: "圖形解讀",
        text: "收入線與總成本線交點即 BEP；右側為獲利區，左側為虧損區。",
      },
    ],
  },
  l6: {
    title: "第 6 講：目標利潤、安全邊際與營運槓桿",
    summary: "把 CVP 從損益兩平延伸到利潤規劃與波動風險管理。",
    points: [
      {
        heading: "目標利潤",
        text: "所需銷售量 = (FC + 目標利潤) / uCM，可估算達標所需規模。",
      },
      {
        heading: "安全邊際 MOS",
        text: "MOS = 實際銷售 - 損益兩平銷售，衡量距離虧損的緩衝空間。",
      },
      {
        heading: "安全邊際率",
        text: "MOS Ratio = MOS / 實際銷售，比例越高通常風險越低。",
      },
      {
        heading: "MOS 與 EBIT",
        text: "超過 BEP 後每單位邊際貢獻幾乎直接轉為利潤：EBIT = MOS(數量) × uCM。",
      },
      {
        heading: "營運槓桿 DOL",
        text: "DOL = CM / EBIT，衡量銷售變動對 EBIT 的放大效果。",
      },
      {
        heading: "高 DOL vs 低 DOL",
        text: "高 DOL 上下波動都大；低 DOL 較穩定但成長爆發力較小。",
      },
      {
        heading: "無異點分析",
        text: "比較兩方案時可令 EBIT 相等找出無異點，作為選址或產能決策基準。",
      },
      {
        heading: "多產品規劃",
        text: "多產品目標利潤需使用加權平均邊際貢獻並搭配產品組合比例。",
      },
    ],
  },
};

const lectureDataDe = {
  l2: {
    title: "Vorlesung 2: Financial vs. Managerial Accounting",
    summary:
      "Vergleicht externe Finanzberichterstattung mit interner Steuerung und zeigt, warum Management Accounting notwendig ist.",
    points: [
      {
        heading: "Ausgangsproblem",
        text: "Finanzberichte zeigen Gesamtgewinn, aber nicht die Profitabilitat je Produktlinie.",
      },
      {
        heading: "Unterschiedliche Nutzer",
        text: "Financial Accounting bedient Investoren, Kreditgeber und Regulatoren; Management Accounting dient internen Entscheidungen.",
      },
      {
        heading: "Regeln und Flexibilitat",
        text: "Financial Accounting folgt GAAP/IFRS und Audit-Regeln; Management Accounting ist formatfrei und zweckorientiert.",
      },
      {
        heading: "Zeitbezug",
        text: "Financial Accounting ist historisch; Management Accounting ist zukunftsorientiert mit Planung und Forecasts.",
      },
      {
        heading: "Detailtiefe",
        text: "Extern eher aggregiert, intern sehr granular nach Produkt, Bereich und Prozess.",
      },
      {
        heading: "Typische MA-Fragen",
        text: "Sonderauftragspreis, Make-or-Buy, Kostenverteilung und Priorisierung bei Kapazitatsengpassen.",
      },
      {
        heading: "Berichtsstruktur",
        text: "Balance Sheet und Income Statement bilden die Basis fur spateres Kosten- und Gewinnmanagement.",
      },
    ],
  },
  l3: {
    title: "Vorlesung 3: Kostenbegriffe und Klassifikationen",
    summary:
      "Definiert Kosten als Entscheidungsinstrument und ordnet sie nach Verhalten, Zurechenbarkeit und Relevanz.",
    points: [
      {
        heading: "Was ist ein Cost Object?",
        text: "Jedes Objekt, dessen Kosten gemessen werden sollen: Produkt, Service, Kunde, Bereich oder Projekt.",
      },
      {
        heading: "Drei Blickwinkel",
        text: "Kostenverhalten, direkte/indirekte Zuordnung und Entscheidungsrelevanz.",
      },
      {
        heading: "Variable vs. fixe Kosten",
        text: "Variable Kosten verandern sich mit Aktivitat; fixe Kosten bleiben im relevanten Bereich konstant.",
      },
      {
        heading: "Direkt vs. indirekt",
        text: "Direkte Kosten sind klar zuordenbar; indirekte Kosten mussen verteilt werden.",
      },
      {
        heading: "Sunk Costs",
        text: "Vergangene, nicht mehr veranderbare Kosten sind fur aktuelle Entscheidungen irrelevant.",
      },
      {
        heading: "Opportunity Costs",
        text: "Entgangener Nutzen der besten nicht gewahlten Alternative.",
      },
      {
        heading: "Fertigungskostenstruktur",
        text: "Direktmaterial + Direktlohn + Manufacturing Overhead = Manufacturing Cost.",
      },
      {
        heading: "Period Costs",
        text: "Vertriebs- und Verwaltungskosten werden periodenbezogen erfasst.",
      },
    ],
  },
  l4: {
    title: "Vorlesung 4: Kostenverhalten und High-Low-Methode",
    summary:
      "Zeigt, wie Kostenverhalten Risiko und Skalierung beeinflusst und wie Mischkosten in fixe/variable Teile zerlegt werden.",
    points: [
      {
        heading: "Warum Kostenverhalten wichtig ist",
        text: "Die Kostenstruktur bestimmt, wie stark Gewinn auf Mengenanderungen reagiert.",
      },
      {
        heading: "Variable Kosten",
        text: "Gesamt variabel proportional zur Aktivitat; Stuckkosten im Grundmodell zunachst konstant.",
      },
      {
        heading: "Fixe Kosten",
        text: "Gesamt fix innerhalb des relevanten Bereichs; fixe Kosten je Einheit sinken bei hoherem Volumen.",
      },
      {
        heading: "Step-Fixed Costs",
        text: "Bei Kapazitatssprungen steigen fixe Kosten stufenweise.",
      },
      {
        heading: "Management-Regel",
        text: "Fur Entscheidungen fixe Kosten als Gesamtsumme betrachten, nicht als Stuckwert.",
      },
      {
        heading: "Mischkosten",
        text: "Enthalten einen fixen Sockel und einen variablen Anteil.",
      },
      {
        heading: "High-Low-Schritte",
        text: "Aktivitats-Hoch/Tief identifizieren, variable Rate berechnen, fixen Anteil ruckrechnen.",
      },
      {
        heading: "EBIT-Formel",
        text: "EBIT = (SP - uVC) × Qty - FC.",
      },
    ],
  },
  l5: {
    title: "Vorlesung 5: CVP Analyse (Teil 1)",
    summary:
      "Fokussiert auf Contribution Margin und Break-even als zentrales Risiko- und Steuerungsmodell.",
    points: [
      {
        heading: "CVP-Basis",
        text: "SP, uVC, FC und Qty verbinden sich zu EBIT in einem einfachen Modell.",
      },
      {
        heading: "Contribution Margin",
        text: "CM deckt zuerst fixe Kosten und erzeugt danach Gewinn.",
      },
      {
        heading: "uCM und CM Ratio",
        text: "uCM = SP - uVC; CM Ratio zeigt den Gewinnbeitrag pro Umsatz-Euro.",
      },
      {
        heading: "Break-even-Logik",
        text: "Am Break-even gilt EBIT = 0 und damit CM = FC.",
      },
      {
        heading: "BEP-Formeln",
        text: "BEP Units = FC / uCM, BEP Sales = FC / CM Ratio.",
      },
      {
        heading: "Grafische Interpretation",
        text: "Schnittpunkt von Umsatz- und Kostenlinie trennt Verlust- und Gewinnbereich.",
      },
      {
        heading: "What-if-Analyse",
        text: "Preis, variable Kosten und fixe Kosten konnen simuliert und auf EBIT verglichen werden.",
      },
    ],
  },
  l6: {
    title: "Vorlesung 6: Target Profit, Safety Margin, Operating Leverage",
    summary:
      "Erweitert CVP um Zielgewinn, Sicherheitsabstand und Gewinnvolatilitat durch Kostenstruktur.",
    points: [
      {
        heading: "Target Profit",
        text: "Benotigte Menge = (FC + Zielgewinn) / uCM.",
      },
      {
        heading: "Margin of Safety",
        text: "MOS = Tatsachlicher Umsatz - Break-even-Umsatz.",
      },
      {
        heading: "MOS Ratio",
        text: "Je hoher die MOS-Quote, desto groser der Puffer gegen Nachfrageruckgang.",
      },
      {
        heading: "EBIT-Bezug",
        text: "Uber Break-even wird zusatzlicher CM direkt zu EBIT.",
      },
      {
        heading: "DOL",
        text: "DOL = Contribution Margin / EBIT und misst die Gewinnsensitivitat.",
      },
      {
        heading: "Interpretation",
        text: "Hoher DOL = hoher Hebel und hoheres Risiko; niedriger DOL = stabilere Ergebnisse.",
      },
      {
        heading: "Indifference Point",
        text: "Setzt zwei Alternativen auf gleichen EBIT und liefert die kritische Menge fur Standort- oder Strukturwahl.",
      },
      {
        heading: "Mehrprodukt-Fall",
        text: "Target-Profit-Rechnung nutzt den gewichteten durchschnittlichen Beitrag bei gegebenem Produktmix.",
      },
    ],
  },
};

const flashcardDataZhTW = [
  { term: "總變動成本", prompt: "如何計算總變動成本？", answer: "總變動成本 = 單位變動成本 × 數量" },
  { term: "單位邊際貢獻", prompt: "uCM 公式是什麼？", answer: "uCM = 單價 - 單位變動成本" },
  { term: "邊際貢獻率", prompt: "CM Ratio 怎麼算？", answer: "CM Ratio = 單位邊際貢獻 / 單價" },
  { term: "CVP 的 EBIT", prompt: "CVP 形式的 EBIT？", answer: "EBIT = (uCM × 數量) - 固定成本" },
  { term: "損益兩平數量", prompt: "BEP 數量公式？", answer: "BEP(數量) = 固定成本 / uCM" },
  { term: "損益兩平金額", prompt: "BEP 銷售金額怎麼算？", answer: "BEP(金額) = 固定成本 / CM Ratio" },
  { term: "目標利潤所需數量", prompt: "達成目標利潤需要多少量？", answer: "所需數量 = (固定成本 + 目標利潤) / uCM" },
  { term: "安全邊際", prompt: "MOS 公式是什麼？", answer: "MOS = 實際銷售 - 損益兩平銷售" },
  { term: "營運槓桿 DOL", prompt: "DOL 如何計算？", answer: "DOL = 邊際貢獻 / EBIT" },
  { term: "高低點法 uVC", prompt: "高低點法怎麼估單位變動成本？", answer: "uVC = (高點成本-低點成本)/(高點活動-低點活動)" },
];

const flashcardDataDe = [
  { term: "Gesamte variable Kosten", prompt: "Wie berechnet man die variablen Gesamtkosten?", answer: "Variable Gesamtkosten = uVC × Menge" },
  { term: "uCM", prompt: "Was ist die Formel fur uCM?", answer: "uCM = Verkaufspreis - variable Stuckkosten" },
  { term: "CM-Quote", prompt: "Wie berechnet man die CM-Quote?", answer: "CM-Quote = uCM / Verkaufspreis" },
  { term: "EBIT im CVP-Modell", prompt: "Wie lautet EBIT in CVP-Form?", answer: "EBIT = (uCM × Menge) - fixe Kosten" },
  { term: "Break-even-Menge", prompt: "Formel fur Break-even in Einheiten?", answer: "BEP (Menge) = fixe Kosten / uCM" },
  { term: "Break-even-Umsatz", prompt: "Formel fur Break-even-Umsatz?", answer: "BEP (Umsatz) = fixe Kosten / CM-Quote" },
  { term: "Zielgewinn-Menge", prompt: "Wie viele Einheiten fur Zielgewinn?", answer: "Menge = (fixe Kosten + Zielgewinn) / uCM" },
  { term: "Sicherheitsmarge", prompt: "Wie lautet MOS?", answer: "MOS = Ist-Umsatz - Break-even-Umsatz" },
  { term: "DOL", prompt: "Wie wird DOL berechnet?", answer: "DOL = Contribution Margin / EBIT" },
  { term: "High-Low uVC", prompt: "Wie schatzt man uVC mit High-Low?", answer: "uVC = (Kosten hoch - Kosten tief)/(Aktivitat hoch - Aktivitat tief)" },
];

const quizDataZhTW = [
  {
    question: "哪個敘述最能描述管理會計？",
    options: [
      "只用於報稅與外部監理",
      "支援內部規劃與決策",
      "不能使用非財務資料",
      "每份報告都必須完全依 IFRS 格式",
    ],
    correct: 1,
  },
  {
    question: "下列何者通常屬於製造費用（Overhead）？",
    options: ["家具木材", "銷售佣金", "工廠租金", "裝配線直接人工"],
    correct: 2,
  },
  {
    question: "沉沒成本在當前決策中應如何處理？",
    options: ["一定要納入", "忽略，因為已無法改變", "平均分攤給所有方案", "轉成變動成本"],
    correct: 1,
  },
  {
    question: "在相關範圍內，產量倍增時總固定成本會如何？",
    options: ["也倍增", "減半", "維持不變", "變成沉沒成本"],
    correct: 2,
  },
  {
    question: "哪個公式可算損益兩平數量？",
    options: ["FC / uCM", "uCM / FC", "Sales / Variable Cost", "FC / SP"],
    correct: 0,
  },
  {
    question: "若 CM 為 50,000 且 EBIT 為 10,000，DOL 是多少？",
    options: ["0.2", "2", "5", "60,000"],
    correct: 2,
  },
  {
    question: "安全邊際最佳定義是：",
    options: ["固定成本減變動成本", "實際銷售減損益兩平銷售", "邊際貢獻減固定成本", "目標利潤除以邊際貢獻"],
    correct: 1,
  },
  {
    question: "高低點法應依什麼挑選資料點？",
    options: ["最高與最低總成本", "最高與最低 EBIT", "最高與最低活動量", "最早與最晚月份"],
    correct: 2,
  },
];

const quizDataDe = [
  {
    question: "Welche Aussage beschreibt Management Accounting am besten?",
    options: [
      "Nur fur Steuern und externe Regulatoren",
      "Unterstutzt interne Planung und Entscheidungen",
      "Darf keine nicht-finanziellen Daten nutzen",
      "Muss immer exakt IFRS-Formate nutzen",
    ],
    correct: 1,
  },
  {
    question: "Welche Position ist typischerweise Manufacturing Overhead?",
    options: ["Direktes Holzmaterial", "Vertriebsprovision", "Fabrikmiete", "Direkter Fertigungslohn"],
    correct: 2,
  },
  {
    question: "Wie behandelt man Sunk Costs in aktuellen Entscheidungen?",
    options: ["Immer einbeziehen", "Ignorieren, da nicht veranderbar", "Gleichmaig auf alle Optionen verteilen", "In variable Kosten umwandeln"],
    correct: 1,
  },
  {
    question: "Was passiert mit den fixen Gesamtkosten, wenn Output sich verdoppelt?",
    options: ["Sie verdoppeln sich", "Sie halbieren sich", "Sie bleiben gleich", "Sie werden zu Sunk Costs"],
    correct: 2,
  },
  {
    question: "Welche Formel liefert die Break-even-Menge?",
    options: ["FC / uCM", "uCM / FC", "Umsatz / variable Kosten", "FC / SP"],
    correct: 0,
  },
  {
    question: "Wenn CM = 50.000 und EBIT = 10.000, ist DOL:",
    options: ["0,2", "2", "5", "60.000"],
    correct: 2,
  },
  {
    question: "Margin of Safety ist am besten definiert als:",
    options: ["Fixkosten minus variable Kosten", "Ist-Umsatz minus Break-even-Umsatz", "Contribution Margin minus Fixkosten", "Zielgewinn geteilt durch CM"],
    correct: 1,
  },
  {
    question: "Beim High-Low-Verfahren wahlt man Perioden nach:",
    options: ["Hochsten und niedrigsten Gesamtkosten", "Hochstem und niedrigstem EBIT", "Hochstem und niedrigstem Aktivitatsniveau", "Fruhester und spatester Monat"],
    correct: 2,
  },
];

const contentByLanguage = {
  en: { lectures: lectureData, flashcards: flashcardData, quiz: quizData },
  zhTW: { lectures: lectureDataZhTW, flashcards: flashcardDataZhTW, quiz: quizDataZhTW },
  de: { lectures: lectureDataDe, flashcards: flashcardDataDe, quiz: quizDataDe },
};
const curatedQuestionBankZhTW = window.curatedQuestionBankZhTW || {};

const uiText = {
  en: {
    topbarNote: "Managerial Accounting Studio",
    topbarKicker: "Focused Revision Workspace",
    heroEyebrow: "AC11 Midterm Intensive",
    heroTitle: "Learn the numbers. Read the risk. Make the decision.",
    heroSubtitle:
      "WeWork-inspired learning interface for managerial accounting: precise lecture notes, formula drills, quiz checks, and CVP tools in one clean workspace.",
    startReviewBtn: "Start Reviewing",
    practiceQuizBtn: "Practice Quiz",
    openToolkitBtn: "Open Toolkit",
    metricLectures: "Lectures",
    metricCards: "Formula Cards",
    metricQuiz: "Quiz Questions",
    sprintLabel: "Sprint Plan",
    sprintTitle: "15-minute high-retention flow",
    sprint1: "Scan lecture highlights by topic.",
    sprint2: "Flip formula cards and memorize core equations.",
    sprint3: "Run quiz and confirm weak areas.",
    sprint4: "Use CVP tools for quick numeric checks.",
    sprintTip: "Tip: Re-run the quiz after each lecture for stronger retention.",
    quickLecture: "Lecture Notes",
    quickFormula: "Formula Deck",
    quickQuiz: "Quiz Check",
    quickCvp: "CVP Lab",
    lectureMapTitle: "Lecture Map",
    lectureMapCopy: "Move by chapter and review each concept block before doing the quiz.",
    progressLabel: "Current Focus",
    toolsLabel: "Study Tools",
    searchLabel: "Search in current lecture",
    searchPlaceholder: "Type a keyword...",
    markCompleteBtn: "Mark lecture complete",
    markIncompleteBtn: "Mark lecture incomplete",
    resetProgressBtn: "Reset progress",
    completionMeta: "Completed {done}/{total} lectures",
    overallProgressText: "Progress: {percent}%",
    lectureProgress: "{current} of {total} lectures active",
    prevLectureBtn: "Previous Lecture",
    nextLectureBtn: "Next Lecture",
    shortcutsHint: "Shortcuts: 1-4 switch workspace, N/P lectures, / search, ←/→ quiz question",
    formulaTitle: "Formula Flashcards",
    formulaCopy: "Click a card to reveal the formula and when to use it.",
    flashcardLabel: "Formula Card",
    quizTitle: "Practice Quiz",
    quizCopy: "Check understanding with quick multiple-choice questions.",
    quizDifficultyLabel: "Difficulty",
    quizDifficultyAll: "All",
    quizDifficultyEasy: "Easy",
    quizDifficultyMedium: "Medium",
    quizDifficultyHard: "Hard",
    quizUnitMeta: "Current unit: {unit} ({count} questions)",
    quizFlowMeta: "Question {current}/{total} · Answered {answered}",
    quizEmpty: "No questions available for this filter.",
    quizPrevQuestionBtn: "Previous Question",
    quizNextQuestionBtn: "Next Question",
    quizNextUnansweredBtn: "Next Unanswered",
    toastMarkedComplete: "Lecture marked complete.",
    toastMarkedIncomplete: "Lecture marked incomplete.",
    toastProgressReset: "Progress reset.",
    toastQuizReset: "Quiz answers cleared.",
    toastQuizShuffled: "Quiz shuffled.",
    toastQuizSubmitted: "Quiz graded.",
    toastPanelOpened: "Opened {panel}.",
    quizQuestionHeadingPrompt: "Which concept best matches this key point?",
    quizQuestionTextPrompt: "Which statement best explains this concept?",
    submitQuizBtn: "Submit Quiz",
    resetBtn: "Reset",
    shuffleQuizBtn: "Shuffle Quiz",
    cvpTitle: "CVP Toolkit",
    cvpCopy:
      "Calculate break-even, target profit volume, high-low estimates, margin of safety, and operating leverage.",
    cvpCoreTitle: "CVP Core Calculator",
    calcSellingPrice: "Selling Price per Unit",
    calcVarCost: "Variable Cost per Unit",
    calcFixedCost: "Fixed Costs",
    calcActualUnits: "Actual Sales Units",
    calcTargetProfit: "Target Profit",
    runCvpBtn: "Run CVP",
    highLowTitle: "High-Low Method",
    highUnits: "High Activity Units",
    highCost: "Cost at High Activity",
    lowUnits: "Low Activity Units",
    lowCost: "Cost at Low Activity",
    runHighLowBtn: "Estimate Mixed Cost",
    footerCopy:
      "Built for accounting revision: Financial vs managerial accounting, cost behavior, CVP, break-even, target profit, margin of safety, and DOL.",
    navLabels: {
      l2: "Lecture 2: Financial vs Managerial",
      l3: "Lecture 3: Cost Terms and Classifications",
      l4: "Lecture 4: Cost Behavior and High-Low",
      l5: "Lecture 5: CVP and Break-Even",
      l6: "Lecture 6: Target Profit, MOS, DOL",
    },
    noSearchResultsTitle: "No matching points",
    noSearchResultsText: "Try another keyword or clear the search.",
    scoreText: "Score: {score}/{total} ({percent}%)",
    calc: {
      invalidUcm: "Unit contribution margin must be positive (Selling Price > Unit Variable Cost).",
      unitCM: "Unit CM",
      totalCM: "Total CM",
      ebit: "EBIT",
      beUnits: "Break-Even Units",
      beSales: "Break-Even Sales",
      targetUnits: "Required Units for Target Profit",
      mosSales: "Margin of Safety (Sales)",
      dol: "DOL",
      dolUndefined: "Undefined at EBIT = 0",
      highLowError: "High and low activity units must be different.",
      estimatedVariable: "Estimated Variable Cost per Unit",
      estimatedFixed: "Estimated Fixed Cost",
      mixedEquation: "Mixed Cost Equation",
    },
  },
  zhTW: {
    topbarNote: "管理會計學習工作台",
    topbarKicker: "專注複習模式",
    heroEyebrow: "AC11 期中衝刺",
    heroTitle: "看懂數字、看懂風險、做對決策。",
    heroSubtitle:
      "以 WeWork 風格打造的管理會計頁面：重點講義、公式快卡、測驗檢核與 CVP 計算一次整合。",
    startReviewBtn: "開始複習",
    practiceQuizBtn: "開始測驗",
    openToolkitBtn: "開啟工具箱",
    metricLectures: "章節",
    metricCards: "公式卡",
    metricQuiz: "測驗題",
    sprintLabel: "衝刺路徑",
    sprintTitle: "15 分鐘高效率流程",
    sprint1: "先看章節重點與關鍵觀念。",
    sprint2: "翻公式卡，記住核心公式。",
    sprint3: "做小測驗，找出弱點。",
    sprint4: "用 CVP 工具做數值驗證。",
    sprintTip: "建議每看完一講就重做一次測驗。",
    quickLecture: "講義重點",
    quickFormula: "公式卡片",
    quickQuiz: "測驗檢核",
    quickCvp: "CVP 實驗室",
    lectureMapTitle: "章節導覽",
    lectureMapCopy: "依序切換章節，先掌握觀念再做測驗。",
    progressLabel: "目前焦點",
    toolsLabel: "學習工具",
    searchLabel: "搜尋目前章節",
    searchPlaceholder: "輸入關鍵字...",
    markCompleteBtn: "標記本講已完成",
    markIncompleteBtn: "取消完成標記",
    resetProgressBtn: "重置進度",
    completionMeta: "已完成 {done}/{total} 講",
    overallProgressText: "完成率：{percent}%",
    lectureProgress: "目前第 {current} / {total} 講",
    prevLectureBtn: "上一講",
    nextLectureBtn: "下一講",
    shortcutsHint: "快捷鍵：1-4 切換工作區、N/P 切章、/ 搜尋、←/→ 測驗換題",
    formulaTitle: "公式複習卡",
    formulaCopy: "點一下卡片即可顯示公式與用途。",
    flashcardLabel: "公式卡",
    quizTitle: "練習測驗",
    quizCopy: "用選擇題快速確認理解程度。",
    quizDifficultyLabel: "難度",
    quizDifficultyAll: "全部",
    quizDifficultyEasy: "簡單",
    quizDifficultyMedium: "中等",
    quizDifficultyHard: "困難",
    quizUnitMeta: "目前單元：{unit}（{count} 題）",
    quizFlowMeta: "第 {current}/{total} 題・已作答 {answered}",
    quizEmpty: "此篩選目前沒有可用題目。",
    quizPrevQuestionBtn: "上一題",
    quizNextQuestionBtn: "下一題",
    quizNextUnansweredBtn: "下一題未作答",
    toastMarkedComplete: "已標記本講完成。",
    toastMarkedIncomplete: "已取消本講完成標記。",
    toastProgressReset: "學習進度已重置。",
    toastQuizReset: "測驗作答已清除。",
    toastQuizShuffled: "題目順序已重排。",
    toastQuizSubmitted: "測驗已批改。",
    toastPanelOpened: "已切換到 {panel}。",
    quizQuestionHeadingPrompt: "以下重點最對應哪個概念？",
    quizQuestionTextPrompt: "以下概念最對應哪段敘述？",
    submitQuizBtn: "提交測驗",
    resetBtn: "重置",
    shuffleQuizBtn: "重排題目",
    cvpTitle: "CVP 工具箱",
    cvpCopy: "計算損益兩平、目標利潤、High-Low 拆分、安全邊際與營運槓桿。",
    cvpCoreTitle: "CVP 核心計算器",
    calcSellingPrice: "單位售價",
    calcVarCost: "單位變動成本",
    calcFixedCost: "固定成本總額",
    calcActualUnits: "實際銷售量",
    calcTargetProfit: "目標利潤",
    runCvpBtn: "執行 CVP",
    highLowTitle: "高低點法",
    highUnits: "高活動量",
    highCost: "高活動量成本",
    lowUnits: "低活動量",
    lowCost: "低活動量成本",
    runHighLowBtn: "估算混合成本",
    footerCopy: "本頁整合管理會計重點：成本分類、CVP、損益兩平、目標利潤、安全邊際與 DOL。",
    navLabels: {
      l2: "第2講：財務 vs 管理會計",
      l3: "第3講：成本術語與分類",
      l4: "第4講：成本習性與高低點法",
      l5: "第5講：CVP 與損益兩平",
      l6: "第6講：目標利潤/MOS/DOL",
    },
    noSearchResultsTitle: "沒有符合的重點",
    noSearchResultsText: "請嘗試其他關鍵字，或清空搜尋。",
    scoreText: "得分：{score}/{total}（{percent}%）",
    calc: {
      invalidUcm: "單位邊際貢獻需為正值（單價必須大於單位變動成本）。",
      unitCM: "單位邊際貢獻",
      totalCM: "總邊際貢獻",
      ebit: "EBIT",
      beUnits: "損益兩平數量",
      beSales: "損益兩平銷售額",
      targetUnits: "達目標利潤所需數量",
      mosSales: "安全邊際（銷售額）",
      dol: "營運槓桿 DOL",
      dolUndefined: "EBIT = 0 時無法定義",
      highLowError: "高低活動量不能相同。",
      estimatedVariable: "估計單位變動成本",
      estimatedFixed: "估計固定成本",
      mixedEquation: "混合成本方程式",
    },
  },
  de: {
    topbarNote: "Management Accounting Studio",
    topbarKicker: "Fokussierter Lernbereich",
    heroEyebrow: "AC11 Klausur Sprint",
    heroTitle: "Zahlen verstehen. Risiko lesen. Entscheidung treffen.",
    heroSubtitle:
      "WeWork-inspirierte Lernoberflache fur Management Accounting mit Notizen, Formelkarten, Quiz und CVP-Toolset.",
    startReviewBtn: "Lernen starten",
    practiceQuizBtn: "Quiz starten",
    openToolkitBtn: "Toolkit offnen",
    metricLectures: "Vorlesungen",
    metricCards: "Formelkarten",
    metricQuiz: "Quizfragen",
    sprintLabel: "Sprint Plan",
    sprintTitle: "15-Minuten Lernfluss",
    sprint1: "Kapitel-Highlights durchgehen.",
    sprint2: "Formelkarten klicken und merken.",
    sprint3: "Quiz machen und Lucken erkennen.",
    sprint4: "CVP-Tools fur Zahlencheck nutzen.",
    sprintTip: "Tipp: Quiz nach jedem Kapitel erneut starten.",
    quickLecture: "Notizen",
    quickFormula: "Formelkarten",
    quickQuiz: "Quiz Check",
    quickCvp: "CVP Labor",
    lectureMapTitle: "Kapitel-Navigation",
    lectureMapCopy: "Kapitel nacheinander bearbeiten und dann das Quiz nutzen.",
    progressLabel: "Aktueller Fokus",
    toolsLabel: "Lernwerkzeuge",
    searchLabel: "Im aktuellen Kapitel suchen",
    searchPlaceholder: "Suchbegriff eingeben...",
    markCompleteBtn: "Kapitel als erledigt markieren",
    markIncompleteBtn: "Erledigt-Markierung entfernen",
    resetProgressBtn: "Fortschritt zurucksetzen",
    completionMeta: "Abgeschlossen: {done}/{total} Kapitel",
    overallProgressText: "Fortschritt: {percent}%",
    lectureProgress: "{current} von {total} Kapiteln aktiv",
    prevLectureBtn: "Vorheriges Kapitel",
    nextLectureBtn: "Nachstes Kapitel",
    shortcutsHint: "Shortcuts: 1-4 Bereich wechseln, N/P Kapitel, / Suche, ←/→ Quizfrage",
    formulaTitle: "Formel Flashcards",
    formulaCopy: "Karte anklicken, um Formel und Anwendung zu sehen.",
    flashcardLabel: "Formelkarte",
    quizTitle: "Praxis Quiz",
    quizCopy: "Verstandnis mit kurzen Multiple-Choice-Fragen prufen.",
    quizDifficultyLabel: "Schwierigkeit",
    quizDifficultyAll: "Alle",
    quizDifficultyEasy: "Leicht",
    quizDifficultyMedium: "Mittel",
    quizDifficultyHard: "Schwer",
    quizUnitMeta: "Aktuelle Einheit: {unit} ({count} Fragen)",
    quizFlowMeta: "Frage {current}/{total} · Beantwortet {answered}",
    quizEmpty: "Fur diesen Filter sind keine Fragen verfugbar.",
    quizPrevQuestionBtn: "Vorherige Frage",
    quizNextQuestionBtn: "Nachste Frage",
    quizNextUnansweredBtn: "Nachste unbeantwortete",
    toastMarkedComplete: "Kapitel als erledigt markiert.",
    toastMarkedIncomplete: "Erledigt-Markierung entfernt.",
    toastProgressReset: "Fortschritt zuruckgesetzt.",
    toastQuizReset: "Quiz-Antworten geleert.",
    toastQuizShuffled: "Quiz neu gemischt.",
    toastQuizSubmitted: "Quiz ausgewertet.",
    toastPanelOpened: "{panel} geoffnet.",
    quizQuestionHeadingPrompt: "Welches Konzept passt am besten zu diesem Punkt?",
    quizQuestionTextPrompt: "Welche Aussage beschreibt dieses Konzept am besten?",
    submitQuizBtn: "Quiz auswerten",
    resetBtn: "Zurucksetzen",
    shuffleQuizBtn: "Quiz mischen",
    cvpTitle: "CVP Toolkit",
    cvpCopy: "Break-even, Zielgewinn, High-Low, Safety Margin und DOL berechnen.",
    cvpCoreTitle: "CVP Kernrechner",
    calcSellingPrice: "Verkaufspreis je Einheit",
    calcVarCost: "Variable Kosten je Einheit",
    calcFixedCost: "Fixkosten gesamt",
    calcActualUnits: "Ist-Absatzmenge",
    calcTargetProfit: "Zielgewinn",
    runCvpBtn: "CVP berechnen",
    highLowTitle: "High-Low-Methode",
    highUnits: "Hoch-Aktivitat (Menge)",
    highCost: "Kosten bei Hoch-Aktivitat",
    lowUnits: "Tief-Aktivitat (Menge)",
    lowCost: "Kosten bei Tief-Aktivitat",
    runHighLowBtn: "Mischkosten schatzen",
    footerCopy:
      "Lernapp fur Management Accounting: Kostenverhalten, CVP, Break-even, Zielgewinn, Margin of Safety und DOL.",
    navLabels: {
      l2: "V2: Financial vs Managerial",
      l3: "V3: Kostenbegriffe",
      l4: "V4: Kostenverhalten",
      l5: "V5: CVP und Break-even",
      l6: "V6: Zielgewinn/MOS/DOL",
    },
    noSearchResultsTitle: "Keine passenden Punkte",
    noSearchResultsText: "Bitte anderen Begriff testen oder Suche leeren.",
    scoreText: "Ergebnis: {score}/{total} ({percent}%)",
    calc: {
      invalidUcm: "uCM muss positiv sein (Verkaufspreis > variable Stuckkosten).",
      unitCM: "uCM",
      totalCM: "CM gesamt",
      ebit: "EBIT",
      beUnits: "Break-even Menge",
      beSales: "Break-even Umsatz",
      targetUnits: "Menge fur Zielgewinn",
      mosSales: "Margin of Safety (Umsatz)",
      dol: "DOL",
      dolUndefined: "Bei EBIT = 0 nicht definiert",
      highLowError: "Hoch- und Tiefaktivitat durfen nicht gleich sein.",
      estimatedVariable: "Geschaetzte variable Kosten je Einheit",
      estimatedFixed: "Geschaetzte Fixkosten",
      mixedEquation: "Mischkosten-Gleichung",
    },
  },
};

const localeByLanguage = {
  en: "en-US",
  zhTW: "zh-TW",
  de: "de-DE",
};

const htmlLangByLanguage = {
  en: "en",
  zhTW: "zh-Hant",
  de: "de",
};

const lectureOrder = ["l2", "l3", "l4", "l5", "l6"];
const workspacePanelOrder = ["lecture-panel", "formula-panel", "quiz-panel", "calculator-panel"];
const LANGUAGE_KEY = "studyflow_language";
const COMPLETED_KEY = "studyflow_completed_lectures";
const LAST_LECTURE_KEY = "studyflow_last_lecture";

let currentLanguage = "en";
let currentLectureKey = "l2";
let currentQuizData = [];
let currentQuizDifficulty = "all";
let currentQuizQuestionIndex = 0;
let currentPanelId = "lecture-panel";
let toastTimerId = null;
let completedLectures = new Set();

function getContent() {
  return contentByLanguage[currentLanguage] || contentByLanguage.en;
}

function getUi() {
  return uiText[currentLanguage] || uiText.en;
}

function formatTemplate(template, values) {
  return Object.entries(values).reduce((acc, [key, value]) => {
    return acc.replaceAll(`{${key}}`, String(value));
  }, template);
}

function showToast(message) {
  const toast = document.getElementById("app-toast");
  if (!toast || !message) {
    return;
  }

  if (toastTimerId) {
    clearTimeout(toastTimerId);
  }

  toast.textContent = message;
  toast.classList.add("show");
  toastTimerId = setTimeout(() => {
    toast.classList.remove("show");
  }, 1600);
}

function getPanelLabel(panelId) {
  const ui = getUi();
  const panelLabels = {
    "lecture-panel": ui.quickLecture,
    "formula-panel": ui.quickFormula,
    "quiz-panel": ui.quickQuiz,
    "calculator-panel": ui.quickCvp,
  };
  return panelLabels[panelId] || panelId;
}

function activateWorkspacePanel(panelId, options = {}) {
  const { scroll = true, announce = false } = options;
  if (!workspacePanelOrder.includes(panelId)) {
    return;
  }

  currentPanelId = panelId;

  document.querySelectorAll(".content .panel").forEach((panel) => {
    const isVisible = panel.id === panelId;
    panel.classList.toggle("panel-visible", isVisible);
    panel.classList.toggle("panel-hidden", !isVisible);
    panel.setAttribute("aria-hidden", String(!isVisible));
  });

  document.querySelectorAll(".quick-item[data-jump]").forEach((button) => {
    button.classList.toggle("active", button.dataset.jump === panelId);
  });

  if (scroll) {
    const target = document.getElementById(panelId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (announce) {
    showToast(formatTemplate(getUi().toastPanelOpened, { panel: getPanelLabel(panelId) }));
  }
}

function getCurrencyFormatter() {
  return new Intl.NumberFormat(localeByLanguage[currentLanguage] || "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

function formatMoney(value) {
  return getCurrencyFormatter().format(value);
}

function loadLanguage() {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  if (stored && contentByLanguage[stored]) {
    return stored;
  }
  return "en";
}

function loadCompletedLectures() {
  try {
    const raw = localStorage.getItem(COMPLETED_KEY);
    if (!raw) {
      return new Set();
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return new Set();
    }
    return new Set(parsed.filter((key) => lectureOrder.includes(key)));
  } catch {
    return new Set();
  }
}

function saveCompletedLectures() {
  localStorage.setItem(COMPLETED_KEY, JSON.stringify(Array.from(completedLectures)));
}

function loadLastLecture() {
  const stored = localStorage.getItem(LAST_LECTURE_KEY);
  if (stored && lectureOrder.includes(stored)) {
    return stored;
  }
  return "l2";
}

function saveLastLecture(lectureKey) {
  if (lectureOrder.includes(lectureKey)) {
    localStorage.setItem(LAST_LECTURE_KEY, lectureKey);
  }
}

function applyStaticTranslations() {
  const ui = getUi();
  document.documentElement.lang = htmlLangByLanguage[currentLanguage] || "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (ui[key]) {
      element.textContent = ui[key];
    }
  });

  const searchInput = document.getElementById("lecture-search");
  if (searchInput) {
    searchInput.placeholder = ui.searchPlaceholder;
  }
}

function updateMetrics() {
  const content = getContent();
  const lecture = content.lectures[currentLectureKey];
  const quizCount = currentQuizData.length || (lecture ? lecture.points.length * 2 : 0);
  document.getElementById("metric-lectures-count").textContent = String(lectureOrder.length);
  document.getElementById("metric-cards-count").textContent = String(content.flashcards.length);
  document.getElementById("metric-quiz-count").textContent = String(quizCount);
}

function renderLectureNav() {
  const nav = document.getElementById("lecture-nav");
  const labels = getUi().navLabels;

  nav.innerHTML = lectureOrder
    .map((key) => {
      const activeClass = key === currentLectureKey ? "active" : "";
      const label = labels[key] || key.toUpperCase();
      const completedMark = completedLectures.has(key) ? "✓" : "";
      return `<button class=\"nav-item ${activeClass}\" data-lecture=\"${key}\"><span class=\"nav-text\">${label}</span><span class=\"nav-status\">${completedMark}</span></button>`;
    })
    .join("");
}

function updateCompletionWidgets() {
  const ui = getUi();
  const toggleBtn = document.getElementById("toggle-complete");
  const completionMeta = document.getElementById("completion-meta");
  const overallProgressBar = document.getElementById("overall-progress-bar");
  const overallProgressText = document.getElementById("overall-progress-text");
  if (!toggleBtn || !completionMeta || !overallProgressBar || !overallProgressText) {
    return;
  }
  const isDone = completedLectures.has(currentLectureKey);
  const percent = Math.round((completedLectures.size / lectureOrder.length) * 100);

  toggleBtn.textContent = isDone ? ui.markIncompleteBtn : ui.markCompleteBtn;
  completionMeta.textContent = formatTemplate(ui.completionMeta, {
    done: completedLectures.size,
    total: lectureOrder.length,
  });
  overallProgressBar.style.width = `${percent}%`;
  overallProgressText.textContent = formatTemplate(ui.overallProgressText, { percent });
}

function updateLectureStatus(lectureKey) {
  const focusTitle = document.getElementById("current-lecture-tag");
  const progressText = document.getElementById("lecture-progress");
  const lectures = getContent().lectures;
  const lecture = lectures[lectureKey];
  const ui = getUi();

  if (!focusTitle || !progressText || !lecture) {
    return;
  }

  const position = lectureOrder.indexOf(lectureKey);
  const lectureIndex = position >= 0 ? position + 1 : 1;

  focusTitle.textContent = lecture.title;
  progressText.textContent = formatTemplate(ui.lectureProgress, {
    current: lectureIndex,
    total: lectureOrder.length,
  });
}

function updateLectureControlButtons() {
  const index = lectureOrder.indexOf(currentLectureKey);
  const prev = document.getElementById("prev-lecture");
  const next = document.getElementById("next-lecture");

  if (!prev || !next) {
    return;
  }

  prev.disabled = index <= 0;
  next.disabled = index >= lectureOrder.length - 1;
}

function renderLecture(lectureKey = currentLectureKey, options = {}) {
  const { refreshQuiz = true } = options;
  currentLectureKey = lectureKey;
  saveLastLecture(lectureKey);
  const ui = getUi();
  const lecture = getContent().lectures[lectureKey];
  const title = document.getElementById("lecture-title");
  const summary = document.getElementById("lecture-summary");
  const points = document.getElementById("lecture-points");
  const query = document.getElementById("lecture-search").value.trim().toLowerCase();

  title.textContent = lecture.title;
  summary.textContent = lecture.summary;

  const filteredPoints = lecture.points.filter((point) => {
    if (!query) {
      return true;
    }
    const combined = `${point.heading} ${point.text}`.toLowerCase();
    return combined.includes(query);
  });

  points.innerHTML = filteredPoints.length
    ? filteredPoints
        .map(
          (point) => `
      <article class="point-card">
        <h3>${point.heading}</h3>
        <p>${point.text}</p>
      </article>
    `
        )
        .join("")
    : `
      <article class="point-card">
        <h3>${ui.noSearchResultsTitle}</h3>
        <p>${ui.noSearchResultsText}</p>
      </article>
    `;

  renderLectureNav();
  updateLectureStatus(lectureKey);
  updateCompletionWidgets();
  updateLectureControlButtons();

  if (refreshQuiz) {
    refreshQuizForLecture(lectureKey);
  } else {
    updateQuizMeta(lectureKey);
  }
}

function setupLectureNav() {
  const nav = document.getElementById("lecture-nav");
  nav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lecture]");
    if (!button) {
      return;
    }
    renderLecture(button.dataset.lecture);
  });
}

function navigateLecture(offset) {
  const currentIndex = lectureOrder.indexOf(currentLectureKey);
  const nextIndex = currentIndex + offset;
  if (nextIndex < 0 || nextIndex >= lectureOrder.length) {
    return;
  }
  renderLecture(lectureOrder[nextIndex]);
}

function setupLectureFlowControls() {
  const prev = document.getElementById("prev-lecture");
  const next = document.getElementById("next-lecture");

  prev.addEventListener("click", () => navigateLecture(-1));
  next.addEventListener("click", () => navigateLecture(1));
}

function renderFlashcards() {
  const ui = getUi();
  const cards = getContent().flashcards;
  const container = document.getElementById("flashcards");
  container.innerHTML = cards
    .map(
      (card, index) => `
      <button class="flashcard" type="button" data-card="${index}">
        <span class="label">${ui.flashcardLabel}</span>
        <h3>${card.term}</h3>
        <p>${card.prompt}</p>
        <p class="answer">${card.answer}</p>
      </button>
    `
    )
    .join("");
}

function setupFlashcards() {
  const container = document.getElementById("flashcards");
  container.addEventListener("click", (event) => {
    const card = event.target.closest(".flashcard");
    if (!card) {
      return;
    }
    card.classList.toggle("revealed");
  });
}

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildMultipleChoiceOptions(correctOption, optionPool) {
  const distractorPool = Array.from(new Set(optionPool.filter((option) => option !== correctOption)));
  const distractors = shuffleArray(distractorPool).slice(0, 3);
  const options = shuffleArray([correctOption, ...distractors]);
  return {
    options,
    correctIndex: options.indexOf(correctOption),
  };
}

function getCuratedQuestionGroups(lectureKey = currentLectureKey) {
  if (currentLanguage !== "zhTW") {
    return null;
  }
  return curatedQuestionBankZhTW[lectureKey] || null;
}

function getSelectedCuratedItems(groups, difficulty = currentQuizDifficulty) {
  if (!groups) {
    return [];
  }
  if (difficulty === "easy" || difficulty === "medium" || difficulty === "hard") {
    return [...(groups[difficulty] || [])];
  }
  return [...(groups.easy || []), ...(groups.medium || []), ...(groups.hard || [])];
}

function buildCuratedUnitQuiz(lectureKey = currentLectureKey) {
  const groups = getCuratedQuestionGroups(lectureKey);
  if (!groups) {
    return [];
  }

  const selectedItems = getSelectedCuratedItems(groups, currentQuizDifficulty);
  if (!selectedItems.length) {
    return [];
  }

  const answerPool = getSelectedCuratedItems(groups, "all").map((item) => item.answer);
  return selectedItems.map((item) => {
    const choices = buildMultipleChoiceOptions(item.answer, answerPool);
    return {
      question: item.question,
      options: choices.options,
      correct: choices.correctIndex,
    };
  });
}

function buildGeneratedUnitQuiz(lectureKey = currentLectureKey) {
  const lecture = getContent().lectures[lectureKey];
  if (!lecture || !Array.isArray(lecture.points) || !lecture.points.length) {
    return [];
  }

  const ui = getUi();
  const headingPool = lecture.points.map((point) => point.heading);
  const textPool = lecture.points.map((point) => point.text);
  const questions = lecture.points.flatMap((point) => {
    const headingOptions = buildMultipleChoiceOptions(point.heading, headingPool);
    const textOptions = buildMultipleChoiceOptions(point.text, textPool);

    return [
      {
        question: `${ui.quizQuestionHeadingPrompt} "${point.text}"`,
        options: headingOptions.options,
        correct: headingOptions.correctIndex,
      },
      {
        question: `${ui.quizQuestionTextPrompt} "${point.heading}"`,
        options: textOptions.options,
        correct: textOptions.correctIndex,
      },
    ];
  });

  const taggedQuestions = questions.map((question, index) => {
    const mod = index % 3;
    const difficulty = mod === 0 ? "easy" : mod === 1 ? "medium" : "hard";
    return {
      ...question,
      difficulty,
    };
  });

  if (currentQuizDifficulty === "easy" || currentQuizDifficulty === "medium" || currentQuizDifficulty === "hard") {
    return shuffleArray(taggedQuestions.filter((question) => question.difficulty === currentQuizDifficulty));
  }

  return shuffleArray(taggedQuestions);
}

function buildUnitQuiz(lectureKey = currentLectureKey) {
  const hasCuratedGroups = Boolean(getCuratedQuestionGroups(lectureKey));
  if (hasCuratedGroups) {
    const curatedQuiz = buildCuratedUnitQuiz(lectureKey);
    return shuffleArray(curatedQuiz);
  }
  return buildGeneratedUnitQuiz(lectureKey);
}

function updateQuizMeta(lectureKey = currentLectureKey) {
  const meta = document.getElementById("quiz-unit-meta");
  const lecture = getContent().lectures[lectureKey];
  if (!meta || !lecture) {
    return;
  }

  meta.textContent = formatTemplate(getUi().quizUnitMeta, {
    unit: lecture.title,
    count: currentQuizData.length,
  });
}

function refreshQuizForLecture(lectureKey = currentLectureKey) {
  currentQuizData = buildUnitQuiz(lectureKey);
  currentQuizQuestionIndex = 0;
  renderQuiz();
  resetQuiz({ silent: true });
  updateQuizMeta(lectureKey);
  updateQuizDifficultyControls(lectureKey);
  updateMetrics();
}

function countAnsweredQuestions() {
  return currentQuizData.reduce((count, _question, idx) => {
    const answered = document.querySelector(`input[name="q-${idx}"]:checked`);
    return answered ? count + 1 : count;
  }, 0);
}

function findNextUnansweredQuestion(startIndex = currentQuizQuestionIndex + 1) {
  if (!currentQuizData.length) {
    return -1;
  }

  for (let offset = 0; offset < currentQuizData.length; offset += 1) {
    const index = (startIndex + offset) % currentQuizData.length;
    const answered = document.querySelector(`input[name="q-${index}"]:checked`);
    if (!answered) {
      return index;
    }
  }

  return -1;
}

function updateQuizFlowUi() {
  const ui = getUi();
  const total = currentQuizData.length;
  const progressMeta = document.getElementById("quiz-progress-meta");
  const progressBar = document.getElementById("quiz-progress-bar");
  const prevButton = document.getElementById("quiz-prev-question");
  const nextButton = document.getElementById("quiz-next-question");
  const nextUnansweredButton = document.getElementById("quiz-next-unanswered");

  if (!progressMeta || !progressBar || !prevButton || !nextButton || !nextUnansweredButton) {
    return;
  }

  if (!total) {
    progressMeta.textContent = ui.quizEmpty;
    progressBar.style.width = "0%";
    prevButton.disabled = true;
    nextButton.disabled = true;
    nextUnansweredButton.disabled = true;
    return;
  }

  if (currentQuizQuestionIndex < 0) {
    currentQuizQuestionIndex = 0;
  } else if (currentQuizQuestionIndex > total - 1) {
    currentQuizQuestionIndex = total - 1;
  }

  document.querySelectorAll(".quiz-item[data-quiz]").forEach((item, idx) => {
    item.classList.toggle("active", idx === currentQuizQuestionIndex);
  });

  const answered = countAnsweredQuestions();
  const progressPercent = Math.round((answered / total) * 100);
  progressBar.style.width = `${progressPercent}%`;
  progressMeta.textContent = formatTemplate(ui.quizFlowMeta, {
    current: currentQuizQuestionIndex + 1,
    total,
    answered,
  });

  prevButton.disabled = currentQuizQuestionIndex <= 0;
  nextButton.disabled = currentQuizQuestionIndex >= total - 1;
  nextUnansweredButton.disabled = answered >= total;

  document.querySelectorAll(".quiz-chip").forEach((chip) => {
    const chipIndex = Number(chip.dataset.quizJump);
    const selected = document.querySelector(`input[name="q-${chipIndex}"]:checked`);
    chip.classList.toggle("active", chipIndex === currentQuizQuestionIndex);
    chip.classList.toggle("answered", Boolean(selected));
  });
}

function showQuizQuestion(index) {
  currentQuizQuestionIndex = index;
  updateQuizFlowUi();
}

function jumpToNextUnansweredQuestion() {
  const nextIndex = findNextUnansweredQuestion();
  if (nextIndex >= 0) {
    showQuizQuestion(nextIndex);
  }
}

function resetQuiz(options = {}) {
  const { silent = false } = options;
  document.querySelectorAll('#quiz-container input[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  document.querySelectorAll(".quiz-item").forEach((item) => {
    item.classList.remove("correct", "wrong");
  });
  document.getElementById("quiz-score").textContent = "";
  currentQuizQuestionIndex = 0;
  updateQuizFlowUi();
  if (!silent) {
    showToast(getUi().toastQuizReset);
  }
}

function renderQuiz() {
  const ui = getUi();
  const container = document.getElementById("quiz-container");
  const nav = document.getElementById("quiz-question-nav");
  if (!container || !nav) {
    return;
  }

  if (!currentQuizData.length) {
    container.innerHTML = `
      <article class="quiz-item active">
        <p>${ui.quizEmpty}</p>
      </article>
    `;
    nav.innerHTML = "";
    updateQuizFlowUi();
    return;
  }

  container.innerHTML = currentQuizData
    .map(
      (q, idx) => `
      <article class="quiz-item" data-quiz="${idx}">
        <p>${idx + 1}. ${q.question}</p>
        <div class="options">
          ${q.options
            .map(
              (option, optionIndex) => `
            <label>
              <input type="radio" name="q-${idx}" value="${optionIndex}" />
              <span>${option}</span>
            </label>
          `
            )
            .join("")}
        </div>
      </article>
    `
    )
    .join("");

  nav.innerHTML = currentQuizData
    .map(
      (_question, idx) =>
        `<button type="button" class="quiz-chip" data-quiz-jump="${idx}">${idx + 1}</button>`
    )
    .join("");

  updateQuizFlowUi();
}

function gradeQuiz() {
  const ui = getUi();
  if (!currentQuizData.length) {
    document.getElementById("quiz-score").textContent = ui.quizEmpty;
    return;
  }

  let score = 0;

  currentQuizData.forEach((question, idx) => {
    const block = document.querySelector(`[data-quiz="${idx}"]`);
    const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
    block.classList.remove("correct", "wrong");

    if (!selected) {
      return;
    }

    if (Number(selected.value) === question.correct) {
      score += 1;
      block.classList.add("correct");
    } else {
      block.classList.add("wrong");
    }
  });

  const percent = Math.round((score / currentQuizData.length) * 100);
  document.getElementById("quiz-score").textContent = formatTemplate(ui.scoreText, {
    score,
    total: currentQuizData.length,
    percent,
  });
  updateQuizFlowUi();
  showToast(ui.toastQuizSubmitted);
}

function shuffleQuiz() {
  const ui = getUi();
  currentQuizData = shuffleArray(currentQuizData);
  renderQuiz();
  resetQuiz({ silent: true });
  updateQuizMeta(currentLectureKey);
  showToast(ui.toastQuizShuffled);
}

function safeNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function runCvp() {
  const calcText = getUi().calc;
  const sp = safeNumber(document.getElementById("sp").value);
  const uvc = safeNumber(document.getElementById("uvc").value);
  const fc = safeNumber(document.getElementById("fc").value);
  const units = safeNumber(document.getElementById("units").value);
  const targetProfit = safeNumber(document.getElementById("tp").value);
  const output = document.getElementById("cvp-output");

  const ucm = sp - uvc;
  if (ucm <= 0 || sp <= 0) {
    output.innerHTML = calcText.invalidUcm;
    return;
  }

  const cm = ucm * units;
  const sales = sp * units;
  const ebit = cm - fc;
  const cmRatio = ucm / sp;
  const beUnits = fc / ucm;
  const beSales = fc / cmRatio;
  const targetUnits = (fc + targetProfit) / ucm;
  const mosSales = sales - beSales;
  const mosRatio = sales > 0 ? (mosSales / sales) * 100 : 0;
  const dol = ebit !== 0 ? cm / ebit : null;

  output.innerHTML = `
    <strong>${calcText.unitCM}:</strong> ${formatMoney(ucm)}<br />
    <strong>${calcText.totalCM}:</strong> ${formatMoney(cm)}<br />
    <strong>${calcText.ebit}:</strong> ${formatMoney(ebit)}<br />
    <strong>${calcText.beUnits}:</strong> ${beUnits.toFixed(2)}<br />
    <strong>${calcText.beSales}:</strong> ${formatMoney(beSales)}<br />
    <strong>${calcText.targetUnits}:</strong> ${targetUnits.toFixed(2)}<br />
    <strong>${calcText.mosSales}:</strong> ${formatMoney(mosSales)} (${mosRatio.toFixed(2)}%)<br />
    <strong>${calcText.dol}:</strong> ${dol === null ? calcText.dolUndefined : dol.toFixed(3)}
  `;
}

function runHighLow() {
  const calcText = getUi().calc;
  const highUnits = safeNumber(document.getElementById("high-units").value);
  const highCost = safeNumber(document.getElementById("high-cost").value);
  const lowUnits = safeNumber(document.getElementById("low-units").value);
  const lowCost = safeNumber(document.getElementById("low-cost").value);
  const output = document.getElementById("high-low-output");

  if (highUnits === lowUnits) {
    output.textContent = calcText.highLowError;
    return;
  }

  const variablePerUnit = (highCost - lowCost) / (highUnits - lowUnits);
  const fixedCost = highCost - variablePerUnit * highUnits;

  output.innerHTML = `
    <strong>${calcText.estimatedVariable}:</strong> ${formatMoney(variablePerUnit)}<br />
    <strong>${calcText.estimatedFixed}:</strong> ${formatMoney(fixedCost)}<br />
    <strong>${calcText.mixedEquation}:</strong> Total Cost = ${formatMoney(fixedCost)} + (${formatMoney(
      variablePerUnit
    )} × Units)
  `;
}

function setupJumpButtons() {
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetPanel = button.dataset.jump;
      activateWorkspacePanel(targetPanel, {
        scroll: true,
        announce: button.classList.contains("quick-item"),
      });
    });
  });
}

function setLanguage(language, persist = true) {
  if (!contentByLanguage[language]) {
    return;
  }

  currentLanguage = language;
  if (persist) {
    localStorage.setItem(LANGUAGE_KEY, language);
  }

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });

  applyStaticTranslations();
  renderLectureNav();
  renderFlashcards();
  renderLecture(currentLectureKey, { refreshQuiz: true });
  runCvp();
  runHighLow();
}

function setupLanguageSwitcher() {
  const switcher = document.querySelector(".lang-switch");
  switcher.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language]");
    if (!button) {
      return;
    }
    setLanguage(button.dataset.language);
  });
}

function setupStudyTools() {
  const searchInput = document.getElementById("lecture-search");
  const toggleCompleteButton = document.getElementById("toggle-complete");
  const resetProgressButton = document.getElementById("reset-progress");

  searchInput.addEventListener("input", () => {
    renderLecture(currentLectureKey, { refreshQuiz: false });
  });

  toggleCompleteButton.addEventListener("click", () => {
    const ui = getUi();
    if (completedLectures.has(currentLectureKey)) {
      completedLectures.delete(currentLectureKey);
      showToast(ui.toastMarkedIncomplete);
    } else {
      completedLectures.add(currentLectureKey);
      showToast(ui.toastMarkedComplete);
    }
    saveCompletedLectures();
    renderLectureNav();
    updateCompletionWidgets();
  });

  resetProgressButton.addEventListener("click", () => {
    const ui = getUi();
    completedLectures = new Set();
    saveCompletedLectures();
    renderLectureNav();
    updateCompletionWidgets();
    showToast(ui.toastProgressReset);
  });
}

function setupKeyboardShortcuts() {
  const panelByShortcut = {
    "1": "lecture-panel",
    "2": "formula-panel",
    "3": "quiz-panel",
    "4": "calculator-panel",
  };

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTypingField =
      target instanceof HTMLElement &&
      (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

    if (event.key === "/" && !isTypingField) {
      event.preventDefault();
      document.getElementById("lecture-search").focus();
      return;
    }

    if (isTypingField) {
      return;
    }

    if (panelByShortcut[event.key]) {
      activateWorkspacePanel(panelByShortcut[event.key], { announce: true });
    } else if (event.key === "n" || event.key === "N") {
      navigateLecture(1);
    } else if (event.key === "p" || event.key === "P") {
      navigateLecture(-1);
    } else if (event.key === "ArrowRight" && currentPanelId === "quiz-panel") {
      showQuizQuestion(currentQuizQuestionIndex + 1);
    } else if (event.key === "ArrowLeft" && currentPanelId === "quiz-panel") {
      showQuizQuestion(currentQuizQuestionIndex - 1);
    }
  });
}

function setupQuizActions() {
  document.getElementById("submit-quiz").addEventListener("click", gradeQuiz);
  document.getElementById("reset-quiz").addEventListener("click", () => resetQuiz());
  document.getElementById("shuffle-quiz").addEventListener("click", shuffleQuiz);
  document.getElementById("quiz-prev-question").addEventListener("click", () => {
    showQuizQuestion(currentQuizQuestionIndex - 1);
  });
  document.getElementById("quiz-next-question").addEventListener("click", () => {
    showQuizQuestion(currentQuizQuestionIndex + 1);
  });
  document.getElementById("quiz-next-unanswered").addEventListener("click", jumpToNextUnansweredQuestion);

  document.getElementById("quiz-question-nav").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-quiz-jump]");
    if (!chip) {
      return;
    }
    showQuizQuestion(Number(chip.dataset.quizJump));
  });

  document.getElementById("quiz-container").addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.type !== "radio") {
      return;
    }
    const questionIndex = Number(input.name.replace("q-", ""));
    if (Number.isFinite(questionIndex)) {
      currentQuizQuestionIndex = questionIndex;
    }
    updateQuizFlowUi();
  });
}

function updateQuizDifficultyControls(lectureKey = currentLectureKey) {
  const select = document.getElementById("quiz-difficulty");
  if (!select) {
    return;
  }
  const validDifficulties = new Set(["all", "easy", "medium", "hard"]);
  if (!validDifficulties.has(currentQuizDifficulty)) {
    currentQuizDifficulty = "all";
  }
  select.disabled = false;
  select.value = currentQuizDifficulty;
}

function setupQuizDifficultyFilter() {
  const select = document.getElementById("quiz-difficulty");
  if (!select) {
    return;
  }
  select.addEventListener("change", () => {
    currentQuizDifficulty = select.value;
    refreshQuizForLecture(currentLectureKey);
  });
}

function bootstrap() {
  completedLectures = loadCompletedLectures();
  currentLanguage = loadLanguage();
  currentLectureKey = loadLastLecture();

  setupLectureNav();
  setupLectureFlowControls();
  setupFlashcards();
  setupJumpButtons();
  setupLanguageSwitcher();
  setupStudyTools();
  setupKeyboardShortcuts();
  setupQuizActions();
  setupQuizDifficultyFilter();

  document.getElementById("run-cvp").addEventListener("click", runCvp);
  document.getElementById("run-high-low").addEventListener("click", runHighLow);

  setLanguage(currentLanguage, false);
  activateWorkspacePanel(currentPanelId, { scroll: false, announce: false });
}

bootstrap();
