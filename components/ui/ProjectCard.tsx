"use client";

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
};

export default function ProjectCard({
  number,
  category,
  title,
  description,
  technologies,
  metrics,
  children,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

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
              y: 50,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
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
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#090909]/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          {!shouldReduceMotion && (
            <motion.div
              aria-hidden="true"
              style={{
                left: glowX,
                top: glowY,
              }}
              className="pointer-events-none absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.06] blur-[100px]"
            />
          )}

          <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Project information */}
            <div className="flex flex-col border-b border-white/[0.07] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
              <div className="flex items-center justify-between gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                  {category}
                </p>

                <span className="font-mono text-sm text-zinc-700">
                  {number}
                </span>
              </div>

              <h3 className="mt-8 max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl xl:text-5xl">
                {title}
              </h3>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
                {description}
              </p>

              <div className="mt-9 grid grid-cols-2 gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                  >
                    <p className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                      {metric.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project visual */}
            <div className="relative min-h-[460px] overflow-hidden p-5 sm:p-8 lg:min-h-[620px] lg:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.07),transparent_35%)]"
              />

              <motion.div
                style={{
                  transform:
                    shouldReduceMotion
                      ? undefined
                      : "translateZ(45px)",
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