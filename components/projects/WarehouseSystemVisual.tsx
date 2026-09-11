"use client";

import { motion, useReducedMotion } from "motion/react";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import WindowHeader from "@/components/ui/WindowHeader";
import ChartIcon from "../ui/icons/ChartIcon";
import StatusRow from "../ui/StatusRow";

export default function WarehouseSystemVisual() {
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

              <StatusBadge variant="success" pulse>
                Live
              </StatusBadge>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              <StatCard value="09" label="Lines" />
              <StatCard value="01" label="Machine" />
              <StatCard value="LIVE" label="PLC" />
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

                <StatusBadge variant="danger">Faulted</StatusBadge>
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

        <p className="mt-2 font-mono text-xs text-sky-300">Conveyor.Faulted</p>

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

            <p className="mt-0.5 text-[9px] text-zinc-600">Excel → Power BI</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
