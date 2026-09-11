"use client";

import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "@/components/ui/ProjectCard";

export default function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 sm:py-36 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
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
            }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-sky-400">02</span>

              <span className="h-px w-10 bg-white/10" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Selected Work
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Built around
              <br />
              <span className="text-zinc-500">real problems.</span>
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
            I focus on systems where software has a measurable operational
            impact — reducing manual work, improving visibility, and helping
            people make faster decisions.
          </motion.p>
        </div>

        <div className="mt-20 lg:mt-28">
          <ProjectCard
            number="01"
            category="Automation · Software · Data"
            title="Warehouse Automation Intelligence"
            description="A software layer that transforms PLC and operational data into useful information for faster troubleshooting, reporting, and decision-making."
            technologies={[
              "Python",
              "PLC Data",
              "Next.js",
              "Node.js",
              "SQLite",
              "Power BI",
            ]}
            metrics={[
              {
                value: "1+ hr → near instant",
                label: "Fault visibility",
              },
              {
                value: "2–3 hrs/day",
                label: "Manual reporting automated",
              },
            ]}
          >
            <WarehouseSystemVisual />
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

function WarehouseSystemVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[410px] items-center justify-center lg:min-h-[540px]">
      {/* Main dashboard */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -7, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-full max-w-[620px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/50"
      >
        {/* Browser bar */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400/60" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
            <span className="h-2 w-2 rounded-full bg-green-400/60" />
          </div>

          <span className="font-mono text-[10px] text-zinc-700">
            automation-dashboard
          </span>
        </div>

        <div className="grid grid-cols-[58px_1fr] sm:grid-cols-[72px_1fr]">
          {/* Sidebar */}
          <div className="border-r border-white/[0.07] p-3">
            <div className="mx-auto h-7 w-7 rounded-lg border border-sky-400/20 bg-sky-400/10" />

            <div className="mt-8 space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`mx-auto h-2 rounded-full ${
                    item === 1
                      ? "w-7 bg-sky-400/50"
                      : "w-5 bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  System status
                </p>

                <h4 className="mt-1 text-sm font-semibold text-zinc-200 sm:text-base">
                  Machine Monitoring
                </h4>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.05] px-3 py-1">
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: [1, 0.3, 1],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300/70">
                  Live
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              <DashboardStat value="09" label="Lines" />
              <DashboardStat value="01" label="Machine" />
              <DashboardStat value="LIVE" label="PLC" />
            </div>

            {/* Machine */}
            <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 sm:mt-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    Selected asset
                  </p>

                  <p className="mt-1 text-xs font-medium text-zinc-300">
                    Conveyor System
                  </p>
                </div>

                <span className="rounded-full bg-red-400/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-red-300">
                  Faulted
                </span>
              </div>

              <div className="mt-5 space-y-2">
                <StatusRow
                  name="Motor Drive"
                  status="Running"
                  active
                />

                <StatusRow
                  name="Photo Eye"
                  status="Blocked"
                />

                <StatusRow
                  name="Safety Circuit"
                  status="Ready"
                  active
                />

                <StatusRow
                  name="Conveyor Zone"
                  status="Fault"
                  fault
                />
              </div>
            </div>

            {/* Chart */}
            <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 sm:mt-5">
              <div className="flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Operational signal
                </p>

                <p className="font-mono text-[9px] text-zinc-700">
                  realtime
                </p>
              </div>

              <div className="mt-5 flex h-16 items-end gap-1">
                {[32, 45, 38, 58, 52, 72, 48, 76, 62, 85, 70, 90].map(
                  (height, index) => (
                    <motion.div
                      key={`${height}-${index}`}
                      initial={{
                        height: shouldReduceMotion ? `${height}%` : 0,
                      }}
                      whileInView={{
                        height: `${height}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: shouldReduceMotion ? 0 : index * 0.04,
                      }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-sky-500/20 to-sky-400/70"
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating PLC card */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, 7, 0],
                x: [0, -3, 0],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-2 top-6 z-30 hidden rounded-2xl border border-white/10 bg-black/80 p-4 shadow-xl backdrop-blur-xl sm:block lg:-right-5"
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          PLC Tag
        </p>

        <p className="mt-2 font-mono text-xs text-sky-300">
          Conveyor.Faulted
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />

          <span className="text-[10px] text-zinc-500">TRUE</span>
        </div>
      </motion.div>

      {/* Floating report card */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute -bottom-2 left-3 z-30 hidden rounded-2xl border border-white/10 bg-black/80 p-4 shadow-xl backdrop-blur-xl sm:block lg:-left-5"
      >
        <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          Reporting
        </p>

        <div className="mt-2 flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-400/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 text-sky-300"
              aria-hidden="true"
            >
              <path
                d="M4 19V9M10 19V5M16 19V12M22 19V2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <p className="text-xs font-medium text-zinc-300">
              Auto-generated
            </p>

            <p className="mt-0.5 text-[9px] text-zinc-600">
              Excel → Power BI
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DashboardStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 sm:p-3">
      <p className="font-mono text-xs font-semibold text-zinc-200 sm:text-sm">
        {value}
      </p>

      <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-zinc-700 sm:text-[9px]">
        {label}
      </p>
    </div>
  );
}

function StatusRow({
  name,
  status,
  active = false,
  fault = false,
}: {
  name: string;
  status: string;
  active?: boolean;
  fault?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-black/20 px-3 py-2">
      <div className="flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            fault
              ? "bg-red-400"
              : active
                ? "bg-emerald-400"
                : "bg-yellow-400"
          }`}
        />

        <span className="text-[10px] text-zinc-500 sm:text-xs">
          {name}
        </span>
      </div>

      <span
        className={`font-mono text-[9px] ${
          fault
            ? "text-red-300"
            : active
              ? "text-emerald-300/70"
              : "text-yellow-200/60"
        }`}
      >
        {status}
      </span>
    </div>
  );
}