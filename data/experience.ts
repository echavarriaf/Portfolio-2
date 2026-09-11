export type Experience = {
  period: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    period: "Feb 2025 — Present",
    title: "Automation Data Specialist",
    company: "Walmart Distribution Center · PDC 3010",
    description:
      "Working at the intersection of warehouse automation, operational data, and software to improve visibility, reduce manual work, and support faster decision-making.",
    highlights: [
      "Manage and improve product data used by automated warehouse systems.",
      "Build software and automation that surface operational information faster.",
      "Connect PLC and operational data with reporting and decision-support workflows.",
    ],
    technologies: [
      "Python",
      "Next.js",
      "Node.js",
      "SQL",
      "Power BI",
      "Automation",
    ],
    current: true,
  },
  {
    period: "Previous Experience",
    title: "Full-Stack & Data Engineering",
    company: "Software Engineering",
    description:
      "Built end-to-end applications, APIs, data workflows, and database-backed systems across frontend and backend environments.",
    highlights: [
      "Developed full-stack applications using modern JavaScript and React ecosystems.",
      "Designed backend services, APIs, databases, and data-processing workflows.",
      "Worked across application architecture, authentication, deployment, and system integration.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Node.js",
      "SQL",
      "MongoDB",
    ],
  },
  {
    period: "Earlier Career",
    title: "RPG / AS400 Programmer Analyst",
    company: "Banking & Enterprise Systems",
    description:
      "Developed and supported business-critical enterprise applications, building a strong foundation in systems analysis, production reliability, and data-driven software.",
    highlights: [
      "Developed and maintained enterprise applications in banking environments.",
      "Worked with RPG, IBM AS/400 systems, relational data, and production processes.",
      "Analyzed business requirements and translated operational needs into software solutions.",
    ],
    technologies: [
      "RPG",
      "IBM i / AS400",
      "SQL",
      "Enterprise Systems",
      "Systems Analysis",
    ],
  },
];
