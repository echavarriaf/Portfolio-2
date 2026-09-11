"use client";

import Link from "next/link";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import type { MouseEvent, ReactNode } from "react";

type ProjectMetric = {
  label: string;
  value: string;
};

type ProjectCardProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  metrics: ProjectMetric[];
  children: ReactNode;
  href?: string;
};

export default function ProjectCard({
  number,
  category,
  title,
  description,
  technologies,
  metrics,
  children,
  href,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);

  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 24,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 24,
  });

  const glowX = useTransform(mouseX, [-0.5, 0.5], ["20%", "80%"]);

  const glowY = useTransform(mouseY, [-0.5, 0.5], ["20%", "80%"]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 40,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div
        className="relative perspective-[1400px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={
            shouldReduceMotion
              ? undefined
              : {
                  rotateX: smoothRotateX,
                  rotateY: smoothRotateY,
                  transformStyle: "preserve-3d",
                }
          }
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090909]/80 shadow-2xl shadow-black/30 backdrop-blur-xl sm:rounded-[2rem]"
        >
          {!shouldReduceMotion && (
            <motion.div
              aria-hidden="true"
              style={{
                left: glowX,
                top: glowY,
              }}
              className="pointer-events-none absolute hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.06] blur-[100px] md:block"
            />
          )}

          <div className="relative z-10 grid xl:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col border-b border-white/[0.07] p-5 sm:p-7 md:p-9 xl:border-b-0 xl:border-r xl:p-10 2xl:p-12">
              <div className="flex items-start justify-between gap-4">
                <p className="max-w-[80%] text-[10px] font-semibold uppercase leading-5 tracking-[0.2em] text-sky-400 sm:text-xs sm:tracking-[0.25em]">
                  {category}
                </p>

                <span className="shrink-0 font-mono text-xs text-zinc-700 sm:text-sm">
                  {number}
                </span>
              </div>

              <h3 className="mt-7 max-w-xl text-[clamp(1.8rem,7vw,3rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:mt-8">
                {title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-base">
                {description}
              </p>

              <div className="mt-7 grid gap-3 min-[430px]:grid-cols-2 sm:mt-9">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="min-w-0 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                  >
                    <p className="break-words text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl xl:text-2xl">
                      {metric.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 xl:mt-auto xl:pt-10">
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300 sm:text-[11px]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {href && (
                  <div className="mt-8">
                    <Link
                      href={href}
                      className="group/link inline-flex items-center gap-3 text-sm font-semibold text-white"
                    >
                      <span>
                        View case study
                        <span className="sr-only">: {title}</span>
                      </span>

                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      >
                        <path
                          d="M5 12H19M19 12L13 6M19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="relative min-h-[430px] overflow-hidden p-3 min-[430px]:p-5 sm:min-h-[500px] sm:p-7 md:p-8 xl:min-h-[620px] xl:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.07),transparent_35%)]"
              />

              <motion.div
                style={{
                  transform: shouldReduceMotion
                    ? undefined
                    : "translateZ(35px)",
                }}
                className="relative h-full"
              >
                {children}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
