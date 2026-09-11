"use client";

import { Fragment } from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { ArchitectureStep } from "@/data/caseStudies";
import ArchitectureIcon from "../ui/icons/ArchitectureIcon";

type ArchitectureFlowProps = {
  steps: ArchitectureStep[];
  stageLabels?: string[];
};

export default function ArchitectureFlow({
  steps,
  stageLabels = [],
}: ArchitectureFlowProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full">
      {/* Large desktop */}
      <div className="hidden w-full xl:flex xl:items-stretch">
        {steps.map((step, index) => (
          <Fragment key={step.number}>
            <ArchitectureNode
              step={step}
              index={index}
              stageLabel={stageLabels[index]}
              shouldReduceMotion={shouldReduceMotion}
            />

            {index < steps.length - 1 && (
              <DesktopConnector
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile / tablet / small desktop */}
      <div className="mx-auto max-w-3xl xl:hidden">
        {steps.map((step, index) => (
          <Fragment key={step.number}>
            <ArchitectureNode
              step={step}
              index={index}
              stageLabel={stageLabels[index]}
              shouldReduceMotion={shouldReduceMotion}
            />

            {index < steps.length - 1 && (
              <MobileConnector
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function ArchitectureNode({
  step,
  index,
  stageLabel,
  shouldReduceMotion,
}: {
  step: ArchitectureStep;
  index: number;
  stageLabel?: string;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 25,
              scale: 0.97,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.65,
        delay: shouldReduceMotion
          ? 0
          : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className="group relative flex min-h-[270px] min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808] p-6 transition-colors duration-300 hover:border-sky-400/20 sm:p-7 xl:p-6 2xl:p-7"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-400/[0.00] blur-[70px] transition-colors duration-500 group-hover:bg-sky-400/[0.08]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs text-sky-400">
            {step.number}
          </span>

          {stageLabel && (
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-700 2xl:text-[9px]">
              {stageLabel}
            </span>
          )}
        </div>

        <ArchitectureIcon index={index} />

        <h3 className="mt-7 text-xl font-semibold leading-tight tracking-[-0.035em] text-white">
          {step.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-zinc-500">
          {step.description}
        </p>

        <div className="mt-auto pt-7">
          <NodeActivity
            index={index}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>
      </div>
    </motion.article>
  );
}

function DesktopConnector({
  index,
  shouldReduceMotion,
}: {
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div className="relative flex w-10 shrink-0 items-center justify-center 2xl:w-14">
      {/* Base line */}
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/[0.08]" />

      {/* Animated line */}
      <motion.div
        initial={
          shouldReduceMotion
            ? {
                scaleX: 1,
              }
            : {
                scaleX: 0,
              }
        }
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: shouldReduceMotion
            ? 0
            : 0.25 + index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "left",
        }}
        className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-sky-400/70 to-cyan-300/30"
      />

      {!shouldReduceMotion && (
        <motion.span
          animate={{
            left: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: index * 0.45,
            ease: "easeInOut",
            repeatDelay: 0.5,
          }}
          className="absolute top-1/2 z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_15px_rgba(125,211,252,0.8)]"
        />
      )}

      <span className="relative z-10 rounded-full bg-[#050505] px-1.5 font-mono text-[10px] text-zinc-700">
        →
      </span>
    </div>
  );
}

function MobileConnector({
  index,
  shouldReduceMotion,
}: {
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div className="relative mx-auto h-16 w-10">
      <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-white/[0.08]" />

      <motion.div
        initial={
          shouldReduceMotion
            ? {
                scaleY: 1,
              }
            : {
                scaleY: 0,
              }
        }
        whileInView={{
          scaleY: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: shouldReduceMotion
            ? 0
            : 0.15 + index * 0.1,
        }}
        style={{
          transformOrigin: "top",
        }}
        className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-sky-400/70 to-cyan-300/20"
      />

      {!shouldReduceMotion && (
        <motion.span
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.35,
            repeatDelay: 0.4,
          }}
          className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(125,211,252,0.8)]"
        />
      )}

      <div className="absolute bottom-1 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-[#050505]">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-zinc-700"
        >
          <path
            d="M12 5V19M12 19L7 14M12 19L17 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function NodeActivity({
  index,
  shouldReduceMotion,
}: {
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const labels = [
    {
      left: "TAG",
      right: "TRUE",
    },
    {
      left: "read()",
      right: "processed",
    },
    {
      left: "API",
      right: "ready",
    },
    {
      left: "REPORT",
      right: "generated",
    },
  ];

  const activity =
    labels[index] ?? labels[labels.length - 1];

  return (
    <div className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-white/[0.05] bg-black/30 px-3 py-2.5">
      <span className="shrink-0 font-mono text-[9px] text-zinc-600">
        {activity.left}
      </span>

      <div className="flex min-w-0 items-center gap-2">
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
            delay: index * 0.15,
          }}
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
        />

        <span className="truncate font-mono text-[9px] text-zinc-500">
          {activity.right}
        </span>
      </div>
    </div>
  );
}