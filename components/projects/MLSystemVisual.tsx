"use client";

import { motion, useReducedMotion } from "motion/react";
import WindowHeader from "@/components/ui/WindowHeader";

export default function MLSystemVisual() {
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

            <button
              type="button"
              className="mt-5 flex h-9 w-full items-center justify-center rounded-lg bg-white text-[10px] font-semibold text-black transition-colors hover:bg-sky-400"
            >
              Run prediction
            </button>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
              Model response
            </p>

            <div className="mt-5 rounded-xl border border-sky-400/10 bg-sky-400/[0.04] p-4">
              <p className="font-mono text-[9px] text-sky-300/70">prediction</p>

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

              <p className="mt-1 text-[9px] text-zinc-600">confidence score</p>
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
                  <span className="text-sky-300">&quot;prediction&quot;</span>:{" "}
                  <span className="text-orange-300">0.874</span>,
                </p>

                <p className="pl-3 text-zinc-500">
                  <span className="text-sky-300">&quot;status&quot;</span>:{" "}
                  <span className="text-emerald-300">&quot;success&quot;</span>
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

function ModelInput({ label, value }: { label: string; value: string }) {
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
