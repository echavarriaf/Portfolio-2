"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Experience } from "@/data/experience";

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

export default function ExperienceItem({
  experience,
  index,
}: ExperienceItemProps) {
  const shouldReduceMotion = useReducedMotion();

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
        amount: 0.25,
      }}
      transition={{
        duration: 0.75,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid grid-cols-[48px_1fr] gap-x-2 md:grid-cols-[180px_48px_1fr] md:gap-x-0"
    >
      {/* Desktop period */}
      <div className="hidden pr-8 pt-1 text-right md:block">
        <p className="font-mono text-xs leading-6 text-zinc-600">
          {experience.period}
        </p>
      </div>

      {/* Timeline dot */}
      <div className="relative flex justify-center">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  scale: 0,
                }
          }
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.45,
            delay: shouldReduceMotion ? 0 : 0.15 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full border ${
            experience.current
              ? "border-sky-400/40 bg-sky-400/10"
              : "border-white/15 bg-[#050505]"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              experience.current ? "bg-sky-400" : "bg-zinc-600"
            }`}
          />

          {experience.current && !shouldReduceMotion && (
            <motion.span
              animate={{
                scale: [1, 1.8, 1.8],
                opacity: [0.4, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full border border-sky-400"
            />
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="pb-20 md:pl-8 lg:pb-24">
        {/* Mobile period */}
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-600 md:hidden">
          {experience.period}
        </p>

        <div className="group rounded-[1.75rem] border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.035] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                  {experience.title}
                </h3>

                {experience.current && (
                  <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.06] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-300/80">
                    Current
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm font-medium text-sky-400/80">
                {experience.company}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400">
            {experience.description}
          </p>

          <div className="mt-8 space-y-4">
            {experience.highlights.map((highlight) => (
              <div key={highlight} className="flex gap-4">
                <div className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-sky-400/70" />

                <p className="text-sm leading-6 text-zinc-500">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.07] bg-black/20 px-3 py-1.5 font-mono text-[10px] text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
