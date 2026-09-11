import type { Metadata } from "next";

import Link from "next/link";

import { notFound } from "next/navigation";

import ArchitectureFlow from "@/components/case-studies/ArchitectureFlow";

import Footer from "@/components/layout/Footer";

import InteractiveBackground from "@/components/ui/InteractiveBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";

import {
  caseStudies,
  getCaseStudy,
  getNextCaseStudy,
} from "@/data/caseStudies";

import { siteConfig } from "@/data/site";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  const title = `${caseStudy.title} | Case Study`;

  return {
    title,

    description: caseStudy.description,

    alternates: {
      canonical: `/work/${caseStudy.slug}`,
    },

    openGraph: {
      title,
      description: caseStudy.description,
      url: `/work/${caseStudy.slug}`,
      siteName: siteConfig.name,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: caseStudy.description,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
    await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const { slug } = await params;

  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const nextCaseStudy =
    getNextCaseStudy(caseStudy.slug);

  return (
    <>
      <ScrollProgress />

      <InteractiveBackground />

      <main className="relative z-10">
        {/* Navigation */}
        <header className="px-5 pt-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#050505]/75 px-5 py-4 backdrop-blur-xl">
            <Link
              href="/"
              className="group flex items-center text-lg font-bold tracking-[-0.04em]"
            >
              <span className="transition-colors group-hover:text-sky-300">
                FE
              </span>

              <span className="ml-0.5 text-sky-400">
                .
              </span>
            </Link>

            <Link
              href="/#work"
              className="group flex items-center gap-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                ←
              </span>

              Back to work
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="px-5 pb-24 pt-24 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-sky-400">
                {caseStudy.number}
              </span>

              <span className="h-px w-10 bg-white/10" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                {caseStudy.category}
              </span>
            </div>

            <h1 className="mt-10 max-w-6xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.93] tracking-[-0.06em]">
              {caseStudy.title}
            </h1>

            <p className="mt-8 max-w-4xl text-[clamp(1.4rem,3vw,2.5rem)] font-medium leading-tight tracking-[-0.035em] text-zinc-500">
              {caseStudy.subtitle}
            </p>

            <p className="mt-10 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              {caseStudy.description}
            </p>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-3">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-[#070707] p-6 sm:p-8"
                >
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {metric.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <CaseSection
          number="01"
          label="The problem"
          title={caseStudy.sectionTitles.problem}
        >
          <div className="space-y-5">
            {caseStudy.problem.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-zinc-400 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CaseSection>

        {/* Solution */}
        <CaseSection
          number="02"
          label="The solution"
          title={caseStudy.sectionTitles.solution}
        >
          <div className="space-y-4">
            {caseStudy.solution.map(
              (item, index) => (
                <div
                  key={item}
                  className="flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-sky-400">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                    {item}
                  </p>
                </div>
              ),
            )}
          </div>
        </CaseSection>

        {/* Architecture */}
        <CaseSection
          number="03"
          label="Architecture"
          title={
            caseStudy.sectionTitles.architecture
          }
          wide
        >
          <ArchitectureFlow
            steps={caseStudy.architecture}
            stageLabels={
              caseStudy.architectureStageLabels
            }
          />
        </CaseSection>

        {/* Impact */}
        <CaseSection
          number="04"
          label="Impact"
          title={caseStudy.sectionTitles.impact}
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/[0.07]">
            {caseStudy.impact.map(
              (impact, index) => (
                <div
                  key={impact.label}
                  className={`grid gap-6 bg-[#070707] p-6 sm:p-8 md:grid-cols-[1fr_auto_1fr] md:items-center ${
                    index !== 0
                      ? "border-t border-white/[0.07]"
                      : ""
                  }`}
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                      Before
                    </p>

                    <p className="mt-3 text-xl font-semibold text-zinc-500 sm:text-2xl">
                      {impact.before}
                    </p>
                  </div>

                  <div className="hidden text-zinc-700 md:block">
                    →
                  </div>

                  <div className="md:text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-400">
                      After
                    </p>

                    <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                      {impact.after}
                    </p>

                    <p className="mt-2 text-xs text-zinc-600">
                      {impact.label}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </CaseSection>

        {/* Technologies */}
        <CaseSection
          number="05"
          label="Technology"
          title={
            caseStudy.sectionTitles.technology
          }
        >
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-3 font-mono text-xs text-zinc-400"
                >
                  {technology}
                </span>
              ),
            )}
          </div>
        </CaseSection>

        {/* Next case study */}
        {nextCaseStudy && (
          <section className="border-t border-white/[0.06] px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Next case study
              </p>

              <Link
                href={`/work/${nextCaseStudy.slug}`}
                className="group mt-8 block"
              >
                <div className="flex flex-col gap-8 border-y border-white/[0.07] py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                      {nextCaseStudy.category}
                    </p>

                    <h2 className="mt-4 text-[clamp(2.3rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.055em] transition-colors duration-300 group-hover:text-sky-300">
                      {nextCaseStudy.title}
                    </h2>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] text-xl text-zinc-400 transition-all duration-300 group-hover:translate-x-2 group-hover:border-sky-400/30 group-hover:bg-sky-400/[0.08] group-hover:text-sky-300 sm:h-16 sm:w-16">
                    →
                  </div>
                </div>
              </Link>

              <div className="mt-12 text-center">
                <Link
                  href="/#work"
                  className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
                >
                  View all projects
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

function CaseSection({
  number,
  label,
  title,
  children,
  wide = false,
}: {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className="overflow-hidden border-t border-white/[0.06] px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {wide ? (
          <div>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-sky-400">
                  {number}
                </span>

                <span className="h-px w-10 bg-white/10" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  {label}
                </span>
              </div>

              <h2 className="mt-8 text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            </div>

            <div className="mt-14 sm:mt-16 lg:mt-20">
              {children}
            </div>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-sky-400">
                  {number}
                </span>

                <span className="h-px w-10 bg-white/10" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  {label}
                </span>
              </div>

              <h2 className="mt-8 max-w-xl text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            </div>

            <div className="min-w-0">
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}