import type { ReactNode } from "react";

import JsonLd from "@/components/seo/JsonLd";

import { getCaseStudy } from "@/data/caseStudies";
import { getCaseStudyStructuredData } from "@/data/structuredData";

type CaseStudyLayoutProps = {
  children: ReactNode;

  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyLayout({
  children,
  params,
}: CaseStudyLayoutProps) {
  const { slug } = await params;

  const caseStudy =
    getCaseStudy(slug);

  return (
    <>
      {caseStudy && (
        <JsonLd
          data={getCaseStudyStructuredData(
            caseStudy,
          )}
        />
      )}

      {children}
    </>
  );
}