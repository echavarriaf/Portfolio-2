import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";

const personId =
  `${siteConfig.url}/#person`;

const websiteId =
  `${siteConfig.url}/#website`;

function isValidPublicUrl(
  value?: string,
): value is string {
  if (!value) {
    return false;
  }

  if (
    value.includes("YOUR_") ||
    value.includes("example.com")
  ) {
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
].filter(isValidPublicUrl);

export const globalStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Person",
      "@id": personId,

      name: siteConfig.name,

      url: siteConfig.url,

      jobTitle: "Software Engineer",

      description:
        siteConfig.description,

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
    },

    {
      "@type": "WebSite",
      "@id": websiteId,

      url: siteConfig.url,

      name: siteConfig.name,

      description:
        siteConfig.description,

      inLanguage: "en-US",

      publisher: {
        "@id": personId,
      },

      author: {
        "@id": personId,
      },
    },
  ],
};