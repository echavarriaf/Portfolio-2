"use client";

import { motion, useReducedMotion } from "motion/react";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "SQL",
  "Power BI",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 lg:px-8"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-sky-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400 sm:text-sm">
                Software · Automation · Data
              </p>
            </motion.div>

            <motion.h1
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
            >
              I build systems
              <br />

              <span>that turn </span>

              <span className="text-zinc-500">friction</span>

              <br />

              <span>into </span>

              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                flow.
              </span>
            </motion.h1>

            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
            >
              Software Engineer focused on building full-stack applications,
              automation systems, and data-driven solutions that solve real
              operational problems.
            </motion.p>

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="#work"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.03,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-sky-400"
              >
                View my work

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-1"
                >
                  <path
                    d="M12 5V19M12 19L6 13M12 19L18 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.03,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                Let&apos;s talk
              </motion.a>
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                    }
              }
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: shouldReduceMotion ? 0 : 0.5,
              }}
              className="mt-14 flex max-w-2xl flex-wrap gap-x-6 gap-y-3"
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-600 transition-colors duration-300 hover:text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 60,
                    rotate: 2,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            transition={{
              duration: 1,
              delay: shouldReduceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto hidden w-full max-w-xl lg:block"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-transparent to-cyan-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909]/80 shadow-2xl shadow-black/50 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <span className="font-mono text-xs text-zinc-600">
                    impact.ts
                  </span>
                </div>

                <div className="p-6 font-mono text-sm leading-7 sm:p-8">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-sky-300">problem</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-orange-300">
                      &quot;manual_process&quot;
                    </span>
                    <span className="text-zinc-500">;</span>
                  </div>

                  <div className="mt-3">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-sky-300">solution</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-yellow-200">buildSystem</span>
                    <span className="text-zinc-400">(</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-cyan-300">automation</span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-cyan-300">software</span>,
                  </div>

                  <div className="pl-6">
                    <span className="text-cyan-300">data</span>,
                  </div>

                  <div className="text-zinc-400">);</div>

                  <div className="mt-3">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-yellow-200">solution</span>
                    <span className="text-zinc-500">.</span>
                    <span className="text-sky-300">createImpact</span>
                    <span className="text-zinc-400">();</span>
                  </div>
                </div>

                <div className="border-t border-white/10 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                opacity: [1, 0.35, 1],
                                scale: [1, 0.85, 1],
                              }
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="h-2 w-2 rounded-full bg-emerald-400"
                      />

                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                        Operational
                      </span>
                    </div>

                    <span className="font-mono text-xs text-zinc-600">
                      01
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, 8, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-10 -left-12 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 shadow-xl backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Focus
              </p>

              <p className="mt-2 text-sm font-medium text-zinc-200">
                Real-world impact
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {!shouldReduceMotion && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            Scroll
          </span>

          <div className="relative h-10 w-px overflow-hidden bg-white/10">
            <motion.div
              animate={{
                y: [-40, 40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-5 w-px bg-sky-400"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}