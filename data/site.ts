const explicitSiteUrl =
  process.env.SITE_URL?.trim();

const vercelProductionUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined;

const fallbackUrl =
  "http://localhost:3000";

const rawSiteUrl =
  explicitSiteUrl ||
  vercelProductionUrl ||
  fallbackUrl;

const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteConfig = {
  name: "Felix Echavarria",

  title:
    "Felix Echavarria | Software Engineer · Automation · Data",

  shortTitle: "Felix Echavarria",

  description:
    "Software Engineer specializing in full-stack development, automation systems, data engineering, and software solutions that improve real-world operational processes.",

  url: siteUrl,

  locale: "en_US",

  keywords: [
    "Felix Echavarria",
    "Software Engineer",
    "Full Stack Developer",
    "Automation Engineer",
    "Data Engineer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "FastAPI Developer",
    "Automation",
    "PLC Data",
    "Power BI",
    "Software Engineering",
  ],

  author: {
    name: "Felix Echavarria",
  },
};