"use client";

import { motion, useReducedMotion } from "motion/react";

import TechMarquee from "@/components/ui/TechMarquee";

import {
  capabilities,
  technologies,
} from "@/data/capabilities";

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 sm:py-36 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-sky-400">
                04
              </span>

              <span className="h-px w-10 bg-white/10" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Capabilities
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              More than
              <br />

              <span className="text-zinc-500">
                a tech stack.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="max-w-2xl text-lg leading-8 text-zinc-400 lg:justify-self-end"
          >
            Tools matter, but the real value comes from knowing
            how to combine them. My work sits across software,
            automation, and data — often connecting all three
            inside the same solution.
          </motion.p>
        </div>

        {/* Capability cards */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.07] lg:mt-28 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.number}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: shouldReduceMotion
                  ? 0
                  : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                    }
              }
              className="group relative bg-[#070707] p-7 sm:p-9 lg:min-h-[480px] lg:p-10"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-400/[0.00] blur-[80px] transition-colors duration-500 group-hover:bg-sky-400/[0.07]" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-700">
                    {capability.number}
                  </span>

                  <span className="h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-sky-400/40" />
                </div>

                <h3 className="mt-12 max-w-[260px] text-3xl font-semibold leading-tight tracking-[-0.04em] text-zinc-100">
                  {capability.title}
                </h3>

                <p className="mt-6 text-sm leading-7 text-zinc-500">
                  {capability.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-2 lg:mt-auto lg:pt-12">
                  {capability.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-zinc-600 transition-all duration-300 group-hover:border-white/[0.1] group-hover:text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 lg:mt-28"
        >
          <div className="mb-6 flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Technologies I work with
            </p>

            <p className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-700 sm:block">
              Hover to pause
            </p>
          </div>

          <div className="space-y-2">
            <TechMarquee
              items={technologies}
              direction="left"
              speed={32}
            />

            <TechMarquee
              items={[...technologies].reverse()}
              direction="right"
              speed={24}
            />
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 grid gap-8 border-t border-white/[0.06] pt-12 md:grid-cols-[0.7fr_1.3fr] lg:mt-28 lg:pt-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
            The goal
          </p>

          <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-[-0.025em] text-zinc-400 sm:text-3xl">
            Choose the right technology for the problem — not
            the other way around — and build systems that are{" "}
            <span className="text-white">
              useful, maintainable, and measurable.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}