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

        {/* Projects */}
        <div className="mt-20 space-y-10 lg:mt-28 lg:space-y-14">
          {/* Project 01 */}
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

          {/* Project 02 */}
          <ProjectCard
            number="02"
            category="Full-Stack · FinTech"
            title="Presupuesto Felo"
            description="A multi-user personal finance platform designed around real household cash flow, biweekly budgeting, fixed commitments, credit cards, access control, and automated alerts."
            technologies={[
              "Next.js",
              "TypeScript",
              "Firebase",
              "Firestore",
              "Auth",
              "Vercel",
            ]}
            metrics={[
              {
                value: "Multi-user",
                label: "Role-based access",
              },
              {
                value: "Biweekly",
                label: "Automated carry-over",
              },
            ]}
          >
            <BudgetSystemVisual />
          </ProjectCard>

          {/* Project 03 */}
          <ProjectCard
            number="03"
            category="Business Apps · Automation"
            title="Corrective Action System"
            description="An operational application built to organize corrective actions, centralize follow-up, improve accountability, and replace fragmented manual workflows."
            technologies={[
              "Power Apps",
              "Power Automate",
              "Microsoft 365",
              "Workflow Design",
            ]}
            metrics={[
              {
                value: "Centralized",
                label: "Corrective action tracking",
              },
              {
                value: "Automated",
                label: "Workflow and follow-up",
              },
            ]}
          >
            <CorrectiveActionVisual />
          </ProjectCard>

          {/* Project 04 */}
          <ProjectCard
            number="04"
            category="Machine Learning · APIs"
            title="Applied ML Services"
            description="End-to-end machine learning experiments that turn Python models into usable applications through prediction APIs and interactive frontend experiences."
            technologies={[
              "Python",
              "FastAPI",
              "React",
              "Machine Learning",
              "REST API",
              "Pandas",
            ]}
            metrics={[
              {
                value: "API-first",
                label: "Model delivery",
              },
              {
                value: "End-to-end",
                label: "Data to interface",
              },
            ]}
          >
            <MLSystemVisual />
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PROJECT 01                                  */
/* -------------------------------------------------------------------------- */

function WarehouseSystemVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[410px] items-center justify-center lg:min-h-[540px]">
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
        <WindowHeader title="automation-dashboard" />

        <div className="grid grid-cols-[58px_1fr] sm:grid-cols-[72px_1fr]">
          <div className="border-r border-white/[0.07] p-3">
            <div className="mx-auto h-7 w-7 rounded-lg border border-sky-400/20 bg-sky-400/10" />

            <div className="mt-8 space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`mx-auto h-2 rounded-full ${
                    item === 1 ? "w-7 bg-sky-400/50" : "w-5 bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

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

              <LiveBadge />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              <DashboardStat value="09" label="Lines" />
              <DashboardStat value="01" label="Machine" />
              <DashboardStat value="LIVE" label="PLC" />
            </div>

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
                <StatusRow name="Motor Drive" status="Running" active />
                <StatusRow name="Photo Eye" status="Blocked" />
                <StatusRow name="Safety Circuit" status="Ready" active />
                <StatusRow name="Conveyor Zone" status="Fault" fault />
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 sm:mt-5">
              <div className="flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Operational signal
                </p>

                <p className="font-mono text-[9px] text-zinc-700">realtime</p>
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
            <ChartIcon />
          </div>

          <div>
            <p className="text-xs font-medium text-zinc-300">Auto-generated</p>

            <p className="mt-0.5 text-[9px] text-zinc-600">
              Excel → Power BI
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PROJECT 02                                  */
/* -------------------------------------------------------------------------- */

function BudgetSystemVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[410px] items-center justify-center lg:min-h-[540px]">
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -6, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-full max-w-[610px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/50"
      >
        <WindowHeader title="budget-dashboard" />

        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Current period
              </p>

              <h4 className="mt-1 text-sm font-semibold text-zinc-200">
                September · Q1
              </h4>
            </div>

            <div className="rounded-full border border-sky-400/10 bg-sky-400/[0.06] px-3 py-1.5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-sky-300">
                Active
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <FinanceStat value="$4,850" label="Income" />
            <FinanceStat value="$2,940" label="Committed" />
            <FinanceStat
              value="$1,910"
              label="Available"
              className="col-span-2 sm:col-span-1"
            />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <div className="flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Spending
                </p>

                <span className="font-mono text-[9px] text-zinc-700">
                  Q1
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <BudgetBar label="Fixed" value="72%" width="72%" />
                <BudgetBar label="Variable" value="46%" width="46%" />
                <BudgetBar label="Savings" value="58%" width="58%" />
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                Credit cards
              </p>

              <div className="mt-4 space-y-3">
                <CreditCardRow
                  name="Apple"
                  amount="$428"
                  usage="Other expenses"
                />

                <CreditCardRow
                  name="Primary"
                  amount="$712"
                  usage="Household"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                <CheckIcon />
              </div>

              <div>
                <p className="text-[10px] font-medium text-zinc-300">
                  Carry-over calculated
                </p>

                <p className="mt-0.5 text-[9px] text-zinc-600">
                  Remaining balance moved automatically
                </p>
              </div>
            </div>

            <span className="font-mono text-[9px] text-emerald-300/70">
              DONE
            </span>
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
        }}
        className="absolute -right-3 top-9 z-30 hidden w-[170px] rounded-2xl border border-white/10 bg-black/85 p-4 shadow-xl backdrop-blur-xl sm:block lg:-right-8"
      >
        <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          Payment alert
        </p>

        <p className="mt-2 text-xs font-medium text-zinc-300">
          Apple payment approaching
        </p>

        <p className="mt-2 font-mono text-[10px] text-sky-300">
          5 days before cutoff
        </p>
      </motion.div>

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -7, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -bottom-3 left-3 z-30 hidden rounded-2xl border border-white/10 bg-black/85 p-4 shadow-xl backdrop-blur-xl sm:block lg:-left-5"
      >
        <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          Access
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-xs text-zinc-300">User approved</span>
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PROJECT 03                                  */
/* -------------------------------------------------------------------------- */

function CorrectiveActionVisual() {
  const shouldReduceMotion = useReducedMotion();

  const columns = [
    {
      title: "Open",
      count: "03",
      items: ["Safety review", "Process gap"],
    },
    {
      title: "In progress",
      count: "02",
      items: ["Equipment action", "Training"],
    },
    {
      title: "Resolved",
      count: "08",
      items: ["Documentation", "Inspection"],
    },
  ];

  return (
    <div className="relative flex h-full min-h-[410px] items-center justify-center lg:min-h-[540px]">
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -5, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-full max-w-[630px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/50"
      >
        <WindowHeader title="corrective-actions" />

        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                Operations
              </p>

              <h4 className="mt-1 text-sm font-semibold text-zinc-200">
                Corrective Actions
              </h4>
            </div>

            <button
              type="button"
              className="rounded-lg bg-white px-3 py-2 text-[9px] font-semibold text-black"
            >
              + New action
            </button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {columns.map((column, columnIndex) => (
              <div
                key={column.title}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium text-zinc-400">
                    {column.title}
                  </span>

                  <span className="font-mono text-[9px] text-zinc-700">
                    {column.count}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 12,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: shouldReduceMotion
                          ? 0
                          : columnIndex * 0.08 + itemIndex * 0.06,
                      }}
                      className="rounded-lg border border-white/[0.06] bg-black/30 p-3"
                    >
                      <p className="text-[10px] font-medium text-zinc-300">
                        {item}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex -space-x-1">
                          <span className="h-4 w-4 rounded-full border border-[#0b0b0b] bg-zinc-700" />
                          <span className="h-4 w-4 rounded-full border border-[#0b0b0b] bg-zinc-600" />
                        </div>

                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            columnIndex === 0
                              ? "bg-red-400"
                              : columnIndex === 1
                                ? "bg-yellow-400"
                                : "bg-emerald-400"
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <WorkflowStat value="13" label="Total" />
            <WorkflowStat value="02" label="Active" />
            <WorkflowStat value="08" label="Closed" />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, 7, 0],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-3 bottom-12 z-30 hidden rounded-2xl border border-white/10 bg-black/85 p-4 shadow-xl backdrop-blur-xl sm:block lg:-right-7"
      >
        <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          Workflow
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />

          <span className="text-xs text-zinc-300">Owner notified</span>
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PROJECT 04                                  */
/* -------------------------------------------------------------------------- */

function MLSystemVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[410px] items-center justify-center lg:min-h-[540px]">
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -6, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-full max-w-[620px] overflow-hidden rounded-2xl border border-white/10 bg-[#090909] shadow-2xl shadow-black/50"
      >
        <WindowHeader title="prediction-service" />

        <div className="grid sm:grid-cols-[1fr_0.9fr]">
          <div className="border-b border-white/[0.07] p-5 sm:border-b-0 sm:border-r sm:p-6">
            <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
              Prediction input
            </p>

            <div className="mt-5 space-y-3">
              <ModelInput label="Feature A" value="742" />
              <ModelInput label="Feature B" value="0.82" />
              <ModelInput label="Feature C" value="14" />
            </div>

            <div className="mt-5 flex h-9 items-center justify-center rounded-lg bg-white text-[10px] font-semibold text-black">
              Run prediction
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
              Model response
            </p>

            <div className="mt-5 rounded-xl border border-sky-400/10 bg-sky-400/[0.04] p-4">
              <p className="font-mono text-[9px] text-sky-300/70">
                prediction
              </p>

              <motion.p
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.9,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mt-2 text-3xl font-bold tracking-[-0.05em] text-white"
              >
                87.4%
              </motion.p>

              <p className="mt-1 text-[9px] text-zinc-600">
                confidence score
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <p className="font-mono text-[9px] text-zinc-600">
                POST /predict
              </p>

              <div className="mt-3 space-y-1 font-mono text-[9px] leading-5">
                <p>
                  <span className="text-purple-300">{"{"}</span>
                </p>

                <p className="pl-3 text-zinc-500">
                  <span className="text-sky-300">
                    &quot;prediction&quot;
                  </span>
                  : <span className="text-orange-300">0.874</span>,
                </p>

                <p className="pl-3 text-zinc-500">
                  <span className="text-sky-300">
                    &quot;status&quot;
                  </span>
                  :{" "}
                  <span className="text-emerald-300">
                    &quot;success&quot;
                  </span>
                </p>

                <p>
                  <span className="text-purple-300">{"}"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <TechStatus label="Python" />
              <TechStatus label="FastAPI" />
              <TechStatus label="React" />
            </div>

            <span className="font-mono text-[9px] text-emerald-300/60">
              200 OK
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -8, 0],
                rotate: [0, 1, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-3 top-12 z-30 hidden rounded-2xl border border-white/10 bg-black/85 p-4 shadow-xl backdrop-blur-xl sm:block lg:-left-8"
      >
        <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          Pipeline
        </p>

        <div className="mt-3 flex items-center gap-2">
          <PipelineNode label="Data" />
          <span className="text-[9px] text-zinc-700">→</span>
          <PipelineNode label="Model" />
          <span className="text-[9px] text-zinc-700">→</span>
          <PipelineNode label="API" />
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SHARED COMPONENTS                             */
/* -------------------------------------------------------------------------- */

function WindowHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <span className="h-2 w-2 rounded-full bg-green-400/60" />
      </div>

      <span className="font-mono text-[10px] text-zinc-700">{title}</span>
    </div>
  );
}

function LiveBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
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

        <span className="text-[10px] text-zinc-500 sm:text-xs">{name}</span>
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

function FinanceStat({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 ${className}`}
    >
      <p className="text-sm font-semibold tracking-[-0.03em] text-zinc-200">
        {value}
      </p>

      <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-zinc-700">
        {label}
      </p>
    </div>
  );
}

function BudgetBar({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-zinc-500">{label}</span>
        <span className="font-mono text-[9px] text-zinc-600">{value}</span>
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full bg-sky-400/60"
        />
      </div>
    </div>
  );
}

function CreditCardRow({
  name,
  amount,
  usage,
}: {
  name: string;
  amount: string;
  usage: string;
}) {
  return (
    <div className="rounded-lg border border-white/[0.05] bg-black/20 p-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium text-zinc-300">{name}</span>
        <span className="font-mono text-[9px] text-zinc-400">{amount}</span>
      </div>

      <p className="mt-1 text-[8px] text-zinc-700">{usage}</p>
    </div>
  );
}

function WorkflowStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-center">
      <p className="font-mono text-xs font-semibold text-zinc-300">{value}</p>

      <p className="mt-1 text-[8px] uppercase tracking-[0.13em] text-zinc-700">
        {label}
      </p>
    </div>
  );
}

function ModelInput({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <label className="text-[9px] text-zinc-600">{label}</label>

      <div className="mt-1.5 flex h-9 items-center rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 font-mono text-[10px] text-zinc-400">
        {value}
      </div>
    </div>
  );
}

function TechStatus({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

      <span className="font-mono text-[8px] text-zinc-600">{label}</span>
    </div>
  );
}

function PipelineNode({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[8px] text-zinc-500">
      {label}
    </span>
  );
}

function ChartIcon() {
  return (
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
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5 text-emerald-300"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}