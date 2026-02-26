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
      "This topic extends CVP to planning goals and understanding how sensitive operating profit is to sales volume changes.",
    points: [
      {
        heading: "Target Profit Units",
        text: "Required units = (FC + Target profit) / uCM.",
      },
      {
        heading: "Margin of Safety (MOS)",
        text: "MOS = Actual sales - Break-even sales. It measures how far sales can drop before losses begin.",
      },
      {
        heading: "MOS Ratio",
        text: "MOS ratio = MOS / Actual sales. A higher ratio means a stronger safety cushion.",
      },
      {
        heading: "Degree of Operating Leverage",
        text: "DOL = Contribution margin / EBIT. It measures profit sensitivity to sales changes.",
      },
      {
        heading: "Interpreting High vs Low DOL",
        text: "High DOL means more fixed cost and greater upside/downside volatility. Low DOL means less EBIT sensitivity to sales swings.",
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

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function renderLecture(lectureKey) {
  const lecture = lectureData[lectureKey];
  const title = document.getElementById("lecture-title");
  const summary = document.getElementById("lecture-summary");
  const points = document.getElementById("lecture-points");

  title.textContent = lecture.title;
  summary.textContent = lecture.summary;
  points.innerHTML = lecture.points
    .map(
      (point) => `
      <article class="point-card">
        <h3>${point.heading}</h3>
        <p>${point.text}</p>
      </article>
    `
    )
    .join("");
}

function setupLectureNav() {
  const nav = document.getElementById("lecture-nav");
  nav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lecture]");
    if (!button) {
      return;
    }

    nav.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderLecture(button.dataset.lecture);
  });
}

function renderFlashcards() {
  const container = document.getElementById("flashcards");
  container.innerHTML = flashcardData
    .map(
      (card, index) => `
      <button class="flashcard" type="button" data-card="${index}">
        <span class="label">FORMULA CARD</span>
        <h3>${card.term}</h3>
        <p>${card.prompt}</p>
        <p class="answer">${card.answer}</p>
      </button>
    `
    )
    .join("");

  container.addEventListener("click", (event) => {
    const card = event.target.closest(".flashcard");
    if (!card) {
      return;
    }
    card.classList.toggle("revealed");
  });
}

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = quizData
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
}

function gradeQuiz() {
  let score = 0;
  quizData.forEach((q, idx) => {
    const block = document.querySelector(`[data-quiz="${idx}"]`);
    const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
    block.classList.remove("correct", "wrong");

    if (!selected) {
      return;
    }

    if (Number(selected.value) === q.correct) {
      score += 1;
      block.classList.add("correct");
    } else {
      block.classList.add("wrong");
    }
  });

  const scoreText = `Score: ${score}/${quizData.length} (${Math.round((score / quizData.length) * 100)}%)`;
  document.getElementById("quiz-score").textContent = scoreText;
}

function resetQuiz() {
  document.querySelectorAll('#quiz-container input[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  document.querySelectorAll(".quiz-item").forEach((item) => {
    item.classList.remove("correct", "wrong");
  });
  document.getElementById("quiz-score").textContent = "";
}

function safeNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function runCvp() {
  const sp = safeNumber(document.getElementById("sp").value);
  const uvc = safeNumber(document.getElementById("uvc").value);
  const fc = safeNumber(document.getElementById("fc").value);
  const units = safeNumber(document.getElementById("units").value);
  const targetProfit = safeNumber(document.getElementById("tp").value);
  const output = document.getElementById("cvp-output");

  const ucm = sp - uvc;
  if (ucm <= 0 || sp <= 0) {
    output.innerHTML =
      "Unit contribution margin must be positive (Selling Price > Unit Variable Cost).";
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
    <strong>Unit CM:</strong> ${money.format(ucm)}<br />
    <strong>Total CM:</strong> ${money.format(cm)}<br />
    <strong>EBIT:</strong> ${money.format(ebit)}<br />
    <strong>Break-Even Units:</strong> ${beUnits.toFixed(2)}<br />
    <strong>Break-Even Sales:</strong> ${money.format(beSales)}<br />
    <strong>Required Units for Target Profit:</strong> ${targetUnits.toFixed(2)}<br />
    <strong>Margin of Safety (Sales):</strong> ${money.format(mosSales)} (${mosRatio.toFixed(
      2
    )}%)<br />
    <strong>DOL:</strong> ${dol === null ? "Undefined at EBIT = 0" : dol.toFixed(3)}
  `;
}

function runHighLow() {
  const highUnits = safeNumber(document.getElementById("high-units").value);
  const highCost = safeNumber(document.getElementById("high-cost").value);
  const lowUnits = safeNumber(document.getElementById("low-units").value);
  const lowCost = safeNumber(document.getElementById("low-cost").value);
  const output = document.getElementById("high-low-output");

  if (highUnits === lowUnits) {
    output.textContent = "High and low activity units must be different.";
    return;
  }

  const variablePerUnit = (highCost - lowCost) / (highUnits - lowUnits);
  const fixedCost = highCost - variablePerUnit * highUnits;

  output.innerHTML = `
    <strong>Estimated Variable Cost per Unit:</strong> ${money.format(variablePerUnit)}<br />
    <strong>Estimated Fixed Cost:</strong> ${money.format(fixedCost)}<br />
    <strong>Mixed Cost Equation:</strong> Total Cost = ${money.format(fixedCost)} + (${money.format(
      variablePerUnit
    )} × Units)
  `;
}

function setupJumpButtons() {
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.jump);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function bootstrap() {
  renderLecture("l2");
  setupLectureNav();
  renderFlashcards();
  renderQuiz();
  setupJumpButtons();

  document.getElementById("submit-quiz").addEventListener("click", gradeQuiz);
  document.getElementById("reset-quiz").addEventListener("click", resetQuiz);
  document.getElementById("run-cvp").addEventListener("click", runCvp);
  document.getElementById("run-high-low").addEventListener("click", runHighLow);

  runCvp();
  runHighLow();
}

bootstrap();
