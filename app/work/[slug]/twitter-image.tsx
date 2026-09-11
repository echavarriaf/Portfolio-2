import { ImageResponse } from "next/og";

import CaseStudySocialImage from "@/components/seo/CaseStudySocialImage";

import { caseStudies, getCaseStudy } from "@/data/caseStudies";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Felix Echavarria software engineering case study";

type TwitterImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function TwitterImage({ params }: TwitterImageProps) {
  const { slug } = await params;

  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            Felix Echavarria
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 16,
              color: "#71717a",
              fontSize: 20,
            }}
          >
            Software · Automation · Data
          </div>
        </div>
      </div>,
      size,
    );
  }

  return new ImageResponse(
    <CaseStudySocialImage caseStudy={caseStudy} />,
    size,
  );
}
