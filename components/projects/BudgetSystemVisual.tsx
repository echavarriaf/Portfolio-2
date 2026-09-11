"use client";

import { motion, useReducedMotion } from "motion/react";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import WindowHeader from "@/components/ui/WindowHeader";
import CheckIcon from "../ui/icons/CheckIcon";

export default function BudgetSystemVisual() {
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

            <StatusBadge variant="info">Active</StatusBadge>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <StatCard value="$4,850" label="Income" />

            <StatCard value="$2,940" label="Committed" />

            <StatCard
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

                <span className="font-mono text-[9px] text-zinc-700">Q1</span>
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

                <CreditCardRow name="Primary" amount="$712" usage="Household" />
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
