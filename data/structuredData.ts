import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";

function isRealUrl(value?: string) {
  if (!value) {
    return false;
  }

  return (
    value.startsWith("https://") ||
    value.startsWith("http://")
  );
}

const sameAs = [
  contact.github,
  contact.linkedin,
].filter(
  (url): url is string =>
    typeof url === "string" &&
    isRealUrl(url),
);

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: siteConfig.name,

  url: siteConfig.url,

  jobTitle: "Software Engineer",

  description:
    "Software Engineer specializing in full-stack development, automation systems, data engineering, and software solutions that improve real-world operational processes.",

  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Automation Systems",
    "Data Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "Node.js",
    "FastAPI",
    "SQL",
    "Power BI",
    "PLC Data",
  ],

  ...(sameAs.length > 0
    ? {
        sameAs,
      }
    : {}),
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: siteConfig.name,

  url: siteConfig.url,

  description: siteConfig.description,

  inLanguage: "en-US",

  publisher: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};