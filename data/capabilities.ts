export type Capability = {
  number: string;
  title: string;
  description: string;
  skills: string[];
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Designing and building complete applications across frontend, backend, APIs, authentication, databases, and deployment.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "Firebase",
      "MongoDB",
    ],
  },
  {
    number: "02",
    title: "Automation Systems",
    description:
      "Connecting software with operational environments to reduce repetitive work, improve visibility, and support faster decisions.",
    skills: [
      "Python",
      "PLC Data",
      "Process Automation",
      "System Integration",
      "Power Apps",
      "Power Automate",
      "Operational Systems",
    ],
  },
  {
    number: "03",
    title: "Data Engineering",
    description:
      "Transforming raw operational and business data into reliable pipelines, reporting systems, APIs, and decision-ready information.",
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Pandas",
      "SQLite",
      "SQL Server",
      "Data APIs",
      "Machine Learning",
    ],
  },
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "FastAPI",
  "SQL",
  "SQL Server",
  "MongoDB",
  "Firebase",
  "Firestore",
  "Power BI",
  "Power Apps",
  "Power Automate",
  "PLC Data",
  "Docker",
  "REST APIs",
  "GraphQL",
  "Machine Learning",
];
