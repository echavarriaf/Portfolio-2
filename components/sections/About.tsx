"use client";

import { motion, useReducedMotion } from "motion/react";
import AnimatedMetric from "@/components/ui/AnimatedMetric";

const metrics = [
  {
    value: 60,
    suffix: "+",
    label: "Minutes reduced",
    description:
      "Machine troubleshooting that could take an hour or more can now surface actionable information almost immediately.",
  },
  {
    value: 3,
    suffix: " hrs",
    label: "Daily reporting automated",
    description:
      "Recurring operational reporting that consumed hours each day was transformed into an automated workflow.",
  },
  {
    value: 3,
    label: "Engineering disciplines",
    description:
      "Software development, automation, and data working together to solve operational problems.",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 sm:py-36 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Left */}
          <div>
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
              className="flex items-center gap-4"
            >
              <span className="font-mono text-xs text-sky-400">01</span>

              <span className="h-px w-10 bg-white/10" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                About
              </span>
            </motion.div>

            <motion.h2
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
                amount: 0.35,
              }}
              transition={{
                duration: 0.8,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              Engineering solutions where{" "}
              <span className="text-zinc-500">software meets</span>{" "}
              the real world.
            </motion.h2>
          </div>

          {/* Right */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-end"
          >
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              My background spans enterprise systems, full-stack development,
              data engineering, and industrial automation. I focus on finding
              repetitive or inefficient processes and turning them into
              reliable software systems.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Today, I work close to real operational environments, combining
              application development, PLC data, APIs, reporting, and
              automation to help people make faster decisions with better
              information.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Full-Stack Development",
                "Automation",
                "Data Engineering",
                "Operational Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-medium text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Metrics */}
        <div className="mt-20 grid gap-5 md:grid-cols-3 lg:mt-28">
          {metrics.map((metric) => (
            <AnimatedMetric key={metric.label} {...metric} />
          ))}
        </div>

        {/* Philosophy */}
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 grid gap-10 border-t border-white/[0.06] pt-12 md:grid-cols-[0.7fr_1.3fr] lg:mt-28 lg:pt-16"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              How I think
            </p>
          </div>

          <div>
            <p className="max-w-3xl text-2xl font-medium leading-relaxed tracking-[-0.025em] text-zinc-300 sm:text-3xl">
              Good software is not just code that works. It should remove
              friction, simplify decisions, and give people{" "}
              <span className="text-white">
                time back to focus on higher-value work.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}