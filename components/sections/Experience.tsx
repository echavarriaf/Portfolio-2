"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import ExperienceItem from "@/components/ui/ExperienceItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 70%"],
  });

  const lineScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1],
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
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
                03
              </span>

              <span className="h-px w-10 bg-white/10" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Experience
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              From enterprise
              <br />

              <span className="text-zinc-500">
                systems to automation.
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
            My career has evolved across enterprise software,
            full-stack engineering, data systems, and warehouse
            automation — with the same focus throughout: understanding
            how systems work and making them better.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 lg:mt-28">
          {/* Timeline background */}
          <div className="absolute bottom-20 left-[23px] top-1 w-px bg-white/[0.07] md:left-[203px]" />

          {/* Animated timeline progress */}
          <motion.div
            style={{
              scaleY: shouldReduceMotion ? 1 : lineScale,
              transformOrigin: "top",
            }}
            className="absolute bottom-20 left-[23px] top-1 w-px bg-gradient-to-b from-sky-400 via-cyan-400/50 to-transparent md:left-[203px]"
          />

          <div>
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.period}-${experience.title}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom statement */}
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 border-t border-white/[0.06] pt-12 md:grid-cols-[180px_1fr] md:gap-12 lg:pt-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
            The throughline
          </p>

          <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-[-0.025em] text-zinc-400 sm:text-3xl">
            I&apos;m most effective when I can understand a
            process end-to-end and use{" "}
            <span className="text-white">
              software, automation, and data
            </span>{" "}
            together to improve it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}