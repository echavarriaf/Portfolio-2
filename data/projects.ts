export type ProjectVisual =
  "warehouse" | "budget" | "corrective-action" | "machine-learning";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  metrics: ProjectMetric[];
  visual: ProjectVisual;
  slug: string;
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Automation · Software · Data",
    title: "Warehouse Automation Intelligence",
    description:
      "A software layer that transforms PLC and operational data into useful information for faster troubleshooting, reporting, and decision-making.",
    technologies: [
      "Python",
      "PLC Data",
      "Next.js",
      "Node.js",
      "SQLite",
      "Power BI",
    ],
    metrics: [
      {
        value: "1+ hr → near instant",
        label: "Fault visibility",
      },
      {
        value: "2–3 hrs/day",
        label: "Manual reporting automated",
      },
    ],
    visual: "warehouse",
    slug: "warehouse-automation",
  },
  {
    number: "02",
    category: "Full-Stack · FinTech",
    title: "Presupuesto",
    description:
      "A multi-user personal finance platform designed around real household cash flow, biweekly budgeting, fixed commitments, credit cards, access control, and automated alerts.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Auth",
      "Vercel",
    ],
    metrics: [
      {
        value: "Multi-user",
        label: "Role-based access",
      },
      {
        value: "Biweekly",
        label: "Automated carry-over",
      },
    ],
    visual: "budget",
    slug: "presupuesto-felo",
  },
  {
    number: "03",
    category: "Business Apps · Automation",
    title: "Corrective Action System",
    description:
      "An operational application built to organize corrective actions, centralize follow-up, improve accountability, and replace fragmented manual workflows.",
    technologies: [
      "Power Apps",
      "Power Automate",
      "Microsoft 365",
      "Workflow Design",
    ],
    metrics: [
      {
        value: "Centralized",
        label: "Corrective action tracking",
      },
      {
        value: "Automated",
        label: "Workflow and follow-up",
      },
    ],
    visual: "corrective-action",
    slug: "corrective-action-system",
  },
  {
    number: "04",
    category: "Machine Learning · APIs",
    title: "Applied ML Services",
    description:
      "End-to-end machine learning experiments that turn Python models into usable applications through prediction APIs and interactive frontend experiences.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Machine Learning",
      "REST API",
      "Pandas",
    ],
    metrics: [
      {
        value: "API-first",
        label: "Model delivery",
      },
      {
        value: "End-to-end",
        label: "Data to interface",
      },
    ],
    visual: "machine-learning",
    slug: "applied-ml-services",
  },
];
