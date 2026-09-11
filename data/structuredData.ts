import type { CaseStudy } from "@/data/caseStudies";

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

export function getCaseStudyStructuredData(
  caseStudy: CaseStudy,
) {
  const caseStudyUrl =
    `${siteConfig.url}/work/${caseStudy.slug}`;

  const creativeWorkId =
    `${caseStudyUrl}/#case-study`;

  return {
    "@context": "https://schema.org",

    "@type": "CreativeWork",

    "@id": creativeWorkId,

    url: caseStudyUrl,

    name: caseStudy.title,

    headline: caseStudy.title,

    description:
      caseStudy.description,

    abstract:
      caseStudy.subtitle,

    genre:
      "Software Engineering Case Study",

    inLanguage:
      "en-US",

    keywords: [
      caseStudy.category,
      ...caseStudy.technologies,
    ],

    author: {
      "@id": personId,
    },

    creator: {
      "@id": personId,
    },

    publisher: {
      "@id": personId,
    },

    isPartOf: {
      "@id": websiteId,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": caseStudyUrl,
    },

    about: [
      caseStudy.category,
      ...caseStudy.technologies,
    ],
  };
}