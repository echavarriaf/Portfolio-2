"use client";

import { motion, useReducedMotion } from "motion/react";
import StatCard from "@/components/ui/StatCard";
import WindowHeader from "@/components/ui/WindowHeader";

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

export default function CorrectiveActionVisual() {
  const shouldReduceMotion = useReducedMotion();

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
            <StatCard value="13" label="Total" centered />

            <StatCard value="02" label="Active" centered />

            <StatCard value="08" label="Closed" centered />
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
