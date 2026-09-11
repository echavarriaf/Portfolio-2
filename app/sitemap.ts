import type { MetadataRoute } from "next";

import { caseStudies } from "@/data/caseStudies";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map(
    (caseStudy) => ({
      url: `${siteConfig.url}/work/${caseStudy.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    ...caseStudyPages,
  ];
}
