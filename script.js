const lectureData = {
  l2: {
    title: "Lecture 2: Financial vs Managerial Accounting",
    summary:
      "Financial accounting focuses on external reporting and standards, while managerial accounting supports internal planning, control, and decisions.",
    points: [
      {
        heading: "Primary Users",
        text: "Financial accounting serves investors, lenders, regulators, and external stakeholders. Managerial accounting serves managers and employees.",
      },
      {
        heading: "Rules and Flexibility",
        text: "Financial reports follow GAAP/IFRS. Managerial reports are flexible and designed around operational needs.",
      },
      {
        heading: "Time Orientation",
        text: "Financial accounting is historical and objective. Managerial accounting is forward-looking with forecasts and budgets.",
      },
      {
        heading: "Level of Detail",
        text: "Financial accounting summarizes the whole business. Managerial accounting can drill down by product, department, and process.",
      },
      {
        heading: "Statement Building Practice",
        text: "Students should know basic structure of balance sheet and income statement terms such as COGS, gross profit, EBIT, and net income.",
      },
    ],
  },
  l3: {
    title: "Lecture 3: Cost Terms, Concepts, and Classifications",
    summary:
      "Costs are grouped to support decisions and attached to a cost object such as a product, service, customer, or department.",
    points: [
      {
        heading: "Manufacturing Costs",
        text: "Direct materials, direct labor, and manufacturing overhead are product costs tied to production.",
      },
      {
        heading: "Non-Manufacturing Costs",
        text: "Selling and administrative costs are period costs and are expensed in the period incurred.",
      },
      {
        heading: "Direct vs Indirect",
        text: "Direct costs trace easily to a cost object. Indirect costs require allocation (e.g., rent, utilities, supervisor salary).",
      },
      {
        heading: "Sunk Cost",
        text: "A past cost that cannot be recovered should not affect current decision alternatives.",
      },
      {
        heading: "Avoidable and Relevant Costs",
        text: "Avoidable costs disappear if an activity stops. Relevant costs are expected future costs that differ between alternatives.",
      },
    ],
  },
  l4: {
    title: "Lecture 4: Cost Behavior and the High-Low Method",
    summary:
      "Cost behavior explains how total cost changes with activity level and helps separate mixed costs into fixed and variable elements.",
    points: [
      {
        heading: "Variable Cost Behavior",
        text: "Total variable cost changes in proportion to activity, while variable cost per unit remains constant.",
      },
      {
        heading: "Fixed Cost Behavior",
        text: "Total fixed cost remains constant in the relevant range, while fixed cost per unit declines as volume increases.",
      },
      {
        heading: "Mixed Costs",
        text: "Mixed cost includes both fixed and variable components, such as utilities with base fee plus usage charge.",
      },
      {
        heading: "High-Low Step 1",
        text: "Select the periods with highest and lowest activity (not highest and lowest cost).",
      },
      {
        heading: "High-Low Step 2 and 3",
        text: "Variable cost per unit = (Cost high - Cost low)/(Activity high - Activity low). Fixed cost = Total cost - (uVC × Activity).",
      },
    ],
  },
  l5: {
    title: "Lecture 5: CVP Analysis and Break-Even Point",
    summary:
      "CVP links volume, cost, and profit so managers can estimate how sales changes affect EBIT and risk.",
    points: [
      {
        heading: "Contribution Margin",
        text: "CM = Sales - Variable costs. Unit CM = Selling price - Unit variable cost. CM covers fixed costs first, then profit.",
      },
      {
        heading: "CM Ratio",
        text: "CM Ratio = Unit CM / Selling price. It shows how much of each sales dollar contributes to fixed costs and profit.",
      },
      {
        heading: "EBIT Formula Forms",
        text: "EBIT = Sales - Total costs = (SP × Q) - (uVC × Q) - FC = (uCM × Q) - FC.",
      },
      {
        heading: "Break-Even Units",
        text: "Break-even units = FC / uCM. At this quantity, EBIT equals zero.",
      },
      {
        heading: "Break-Even Sales Dollars",
        text: "Break-even sales = Break-even units × SP, or FC / CM ratio.",
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
