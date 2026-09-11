export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type ArchitectureActivity = {
  left: string;
  right: string;
};

export type ArchitectureStep = {
  number: string;
  title: string;
  description: string;
  stageLabel: string;
  activity: ArchitectureActivity;
};

export type CaseStudyImpact = {
  before: string;
  after: string;
  label: string;
};

export type CaseStudySectionTitles = {
  problem: string;
  solution: string;
  architecture: string;
  impact: string;
  technology: string;
};

export type CaseStudy = {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;

  metrics: CaseStudyMetric[];

  sectionTitles: CaseStudySectionTitles;

  problem: string[];
  solution: string[];

  architecture: ArchitectureStep[];

  impact: CaseStudyImpact[];

  technologies: string[];
};

export const caseStudies: CaseStudy[] = [
  /*
   * ============================================================
   * 01 — WAREHOUSE AUTOMATION
   * ============================================================
   */
  {
    slug: "warehouse-automation",

    number: "01",

    category: "Automation · Software · Data",

    title: "Warehouse Automation Intelligence",

    subtitle:
      "Turning machine and operational data into actionable information.",

    description:
      "A software system designed to reduce the time required to understand machine conditions, improve troubleshooting visibility, and automate recurring operational reporting.",

    metrics: [
      {
        value: "1+ hr",
        label: "Previous troubleshooting process",
      },
      {
        value: "Near instant",
        label: "Fault visibility after implementation",
      },
      {
        value: "2–3 hrs/day",
        label: "Manual reporting previously required",
      },
    ],

    sectionTitles: {
      problem: "The information existed. Getting to it was the problem.",

      solution: "Bring operational data closer to the decision.",

      architecture: "From machine signal to useful information.",

      impact: "Less searching. More actionable information.",

      technology: "A practical stack for an operational problem.",
    },

    problem: [
      "When a machine fault occurred, identifying the problem could require physically checking equipment and components one by one.",
      "A single troubleshooting process could take an hour or more before the relevant failure condition was identified.",
      "Recurring operational reporting also required approximately two to three hours of manual work each day.",
      "The information already existed inside operational systems and PLC tags, but it was not presented in a form that made fast decisions easy.",
    ],

    solution: [
      "Read relevant PLC tags programmatically with Python instead of relying only on manual machine inspection.",
      "Transform raw machine states into information that clearly communicates whether equipment is running, blocked, ready, or faulted.",
      "Expose the information through a software interface that allows users to determine where attention is required much faster.",
      "Automate recurring reporting workflows so operational information can flow into Excel and Power BI without requiring hours of manual preparation.",
    ],

    architecture: [
      {
        number: "01",
        title: "PLC Data",
        description:
          "Operational tags provide the raw machine state and fault information.",
        stageLabel: "Signal",
        activity: {
          left: "PLC TAG",
          right: "signal active",
        },
      },
      {
        number: "02",
        title: "Python",
        description: "Python reads and processes the relevant PLC signals.",
        stageLabel: "Process",
        activity: {
          left: "PYTHON",
          right: "processed",
        },
      },
      {
        number: "03",
        title: "Application Layer",
        description:
          "Next.js, Node.js, and SQLite organize and expose useful operational information.",
        stageLabel: "Application",
        activity: {
          left: "APP",
          right: "available",
        },
      },
      {
        number: "04",
        title: "Reporting",
        description:
          "Automated output supports Excel and Power BI reporting workflows.",
        stageLabel: "Output",
        activity: {
          left: "REPORT",
          right: "generated",
        },
      },
    ],

    impact: [
      {
        before: "1 hour or more",
        after: "Near immediate",
        label: "Machine fault visibility",
      },
      {
        before: "2–3 hours per day",
        after: "Automated",
        label: "Operational reporting",
      },
      {
        before: "Machine-by-machine inspection",
        after: "Targeted information",
        label: "Troubleshooting workflow",
      },
    ],

    technologies: [
      "Python",
      "PLC Tags",
      "Next.js",
      "JavaScript",
      "Node.js",
      "SQLite",
      "Excel",
      "Power BI",
    ],
  },

  /*
   * ============================================================
   * 02 — PRESUPUESTO
   * ============================================================
   */
  {
    slug: "presupuesto-felo",

    number: "02",

    category: "Full-Stack · FinTech",

    title: "Presupuesto",

    subtitle:
      "A budgeting system built around how money actually moves through a household.",

    description:
      "A full-stack personal finance platform that combines multi-user access, biweekly budgeting, fixed commitments, credit cards, carry-over logic, and payment reminders into one operational view.",

    metrics: [
      {
        value: "Multi-user",
        label: "Independent user access",
      },
      {
        value: "Biweekly",
        label: "Budgeting model",
      },
      {
        value: "Automated",
        label: "Carry-over and financial logic",
      },
    ],

    sectionTitles: {
      problem:
        "Household finances rarely fit neatly inside a monthly spreadsheet.",

      solution:
        "Model the financial workflow instead of forcing the workflow into a template.",

      architecture: "From user activity to structured financial state.",

      impact:
        "Less manual reconciliation. More clarity about what is actually available.",

      technology:
        "A full-stack architecture built for evolving financial rules.",
    },

    problem: [
      "Traditional budgeting tools often focus on monthly totals, while the actual household workflow operates around biweekly income, recurring commitments, credit cards, and variable expenses.",
      "Fixed payments, expenses, income, card activity, and remaining balances needed to stay connected rather than being tracked as separate pieces of information.",
      "Supporting more than one user introduced another requirement: each account needed isolated data and controlled access instead of inheriting another user's financial state.",
      "Recurring calculations such as carry-over and upcoming payment obligations created unnecessary manual work when performed repeatedly by hand.",
    ],

    solution: [
      "Build a Next.js and TypeScript application around biweekly budgeting instead of treating it as an adaptation of a monthly budget.",
      "Use Firebase Authentication and an approval workflow to support multiple users while keeping financial data separated by account.",
      "Store income, expenses, fixed commitments, credit cards, and related financial state in Firestore using user-scoped data structures.",
      "Automate period carry-over, credit-card calculations, payment recommendations, and reminder logic so recurring financial operations require less manual intervention.",
    ],

    architecture: [
      {
        number: "01",
        title: "User Interface",
        description:
          "Next.js and TypeScript provide the dashboard and financial workflows used to record and review activity.",
        stageLabel: "Interface",
        activity: {
          left: "UI",
          right: "updated",
        },
      },
      {
        number: "02",
        title: "Authentication",
        description:
          "Firebase Authentication and access approval determine who can enter the application and which data they can access.",
        stageLabel: "Access",
        activity: {
          left: "AUTH",
          right: "approved",
        },
      },
      {
        number: "03",
        title: "Financial Data",
        description:
          "Firestore stores user-scoped income, expenses, commitments, cards, and budgeting state.",
        stageLabel: "Data",
        activity: {
          left: "FIRESTORE",
          right: "synced",
        },
      },
      {
        number: "04",
        title: "Automation",
        description:
          "Server-side logic handles carry-over, payment calculations, reminders, and recurring financial rules.",
        stageLabel: "Automation",
        activity: {
          left: "RULES",
          right: "applied",
        },
      },
    ],

    impact: [
      {
        before: "Fragmented financial tracking",
        after: "Unified dashboard",
        label: "Budget visibility",
      },
      {
        before: "Shared application state",
        after: "User-isolated data",
        label: "Multi-user architecture",
      },
      {
        before: "Manual period rollover",
        after: "Automated carry-over",
        label: "Biweekly workflow",
      },
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Firebase Auth",
      "Firestore",
      "Server APIs",
      "Vercel",
    ],
  },

  /*
   * ============================================================
   * 03 — CORRECTIVE ACTION SYSTEM
   * ============================================================
   */
  {
    slug: "corrective-action-system",

    number: "03",

    category: "Business Apps · Automation",

    title: "Corrective Action System",

    subtitle:
      "Turning scattered operational follow-up into a structured workflow.",

    description:
      "A business application designed to centralize corrective actions, improve ownership and visibility, and automate the workflow around operational follow-up.",

    metrics: [
      {
        value: "Centralized",
        label: "Corrective action records",
      },
      {
        value: "Automated",
        label: "Workflow and notifications",
      },
      {
        value: "Structured",
        label: "Operational follow-up",
      },
    ],

    sectionTitles: {
      problem:
        "Corrective actions lose value when the follow-up process is fragmented.",

      solution:
        "Turn the process into a workflow with ownership, state, and automation.",

      architecture: "From corrective-action entry to structured follow-up.",

      impact: "A clearer path from issue identification to resolution.",

      technology: "Low-code tools applied to a real operational workflow.",
    },

    problem: [
      "Corrective-action processes can become difficult to manage when information is spread across manual forms, messages, or disconnected records.",
      "Without a centralized workflow, it becomes harder to understand who owns an action, what state it is in, and whether follow-up has occurred.",
      "Manual communication adds additional work and increases the chance that an action remains unresolved longer than necessary.",
      "The challenge was not simply storing information; the application needed to represent the actual operational process.",
    ],

    solution: [
      "Create a Power Apps interface where corrective actions can be entered and managed through one consistent workflow.",
      "Structure each action around ownership, status, and the information required to move it toward completion.",
      "Use Power Automate to handle recurring workflow actions and reduce manual follow-up.",
      "Centralize operational information so users can understand the current state of corrective actions without reconstructing it from multiple sources.",
    ],

    architecture: [
      {
        number: "01",
        title: "Action Intake",
        description:
          "Power Apps provides a structured interface for creating and reviewing corrective actions.",
        stageLabel: "Input",
        activity: {
          left: "ACTION",
          right: "created",
        },
      },
      {
        number: "02",
        title: "Business Logic",
        description:
          "Application rules organize status, ownership, required information, and workflow behavior.",
        stageLabel: "Rules",
        activity: {
          left: "STATUS",
          right: "validated",
        },
      },
      {
        number: "03",
        title: "Automation",
        description:
          "Power Automate executes workflow actions that would otherwise require manual follow-up.",
        stageLabel: "Workflow",
        activity: {
          left: "FLOW",
          right: "triggered",
        },
      },
      {
        number: "04",
        title: "Operational Follow-up",
        description:
          "Centralized records make action status and accountability easier to understand.",
        stageLabel: "Follow-up",
        activity: {
          left: "OWNER",
          right: "tracked",
        },
      },
    ],

    impact: [
      {
        before: "Fragmented records",
        after: "Centralized actions",
        label: "Information management",
      },
      {
        before: "Manual follow-up",
        after: "Automated workflow",
        label: "Process execution",
      },
      {
        before: "Limited status visibility",
        after: "Structured tracking",
        label: "Operational awareness",
      },
    ],

    technologies: [
      "Power Apps",
      "Power Automate",
      "Microsoft 365",
      "Workflow Design",
      "Business Logic",
      "Process Automation",
    ],
  },

  /*
   * ============================================================
   * 04 — APPLIED ML SERVICES
   * ============================================================
   */
  {
    slug: "applied-ml-services",

    number: "04",

    category: "Machine Learning · APIs",

    title: "Applied ML Services",

    subtitle: "Taking machine-learning models beyond the notebook.",

    description:
      "End-to-end machine-learning implementations that connect data preparation, trained Python models, prediction APIs, and frontend applications.",

    metrics: [
      {
        value: "API-first",
        label: "Prediction delivery",
      },
      {
        value: "End-to-end",
        label: "Data to user interface",
      },
      {
        value: "Reusable",
        label: "Model inference layer",
      },
    ],

    sectionTitles: {
      problem:
        "A trained model is only useful when something can actually use it.",

      solution: "Turn model inference into a reusable software service.",

      architecture: "From raw features to an application-ready prediction.",

      impact: "Machine learning becomes part of a usable software system.",

      technology: "A lightweight stack for serving and consuming predictions.",
    },

    problem: [
      "Machine-learning experiments frequently end with a model that works inside a development environment but is disconnected from an application.",
      "Prediction logic needs a stable interface so clients do not need to understand the internal model implementation.",
      "Data preparation, inference, API behavior, and frontend consumption all need to agree on a predictable contract.",
      "The objective was to treat machine learning as one component of a software system rather than as an isolated experiment.",
    ],

    solution: [
      "Prepare and transform model inputs with Python and data-processing tools such as Pandas.",
      "Persist trained models so inference can be performed without retraining during every request.",
      "Expose prediction behavior through FastAPI endpoints with a clear request and response contract.",
      "Connect frontend applications to the API so model results can be used through an interactive interface.",
    ],

    architecture: [
      {
        number: "01",
        title: "Data Preparation",
        description:
          "Python and Pandas transform raw input into the structure expected by the model.",
        stageLabel: "Data",
        activity: {
          left: "FEATURES",
          right: "prepared",
        },
      },
      {
        number: "02",
        title: "Model",
        description:
          "A trained and persisted model performs inference against validated feature inputs.",
        stageLabel: "Model",
        activity: {
          left: "MODEL",
          right: "loaded",
        },
      },
      {
        number: "03",
        title: "Prediction API",
        description:
          "FastAPI exposes model inference through a reusable HTTP interface.",
        stageLabel: "API",
        activity: {
          left: "PREDICT",
          right: "served",
        },
      },
      {
        number: "04",
        title: "Client Application",
        description:
          "React-based interfaces consume prediction responses and present the result to the user.",
        stageLabel: "Client",
        activity: {
          left: "RESULT",
          right: "rendered",
        },
      },
    ],

    impact: [
      {
        before: "Model-only experiment",
        after: "Usable service",
        label: "Model delivery",
      },
      {
        before: "Direct model coupling",
        after: "Reusable API",
        label: "Application integration",
      },
      {
        before: "Backend-only inference",
        after: "Interactive experience",
        label: "User access",
      },
    ],

    technologies: [
      "Python",
      "FastAPI",
      "Pandas",
      "Machine Learning",
      "REST API",
      "React",
      "joblib",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy | undefined {
  const currentIndex = caseStudies.findIndex(
    (caseStudy) => caseStudy.slug === slug,
  );

  if (currentIndex === -1) {
    return undefined;
  }

  const nextIndex = (currentIndex + 1) % caseStudies.length;

  return caseStudies[nextIndex];
}
