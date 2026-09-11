"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type StatusVariant = "success" | "info" | "danger" | "warning" | "neutral";

type StatusBadgeProps = {
  children: ReactNode;
  variant?: StatusVariant;
  pulse?: boolean;
};

const variants: Record<
  StatusVariant,
  {
    container: string;
    dot: string;
    text: string;
  }
> = {
  success: {
    container: "border-emerald-400/10 bg-emerald-400/[0.05]",
    dot: "bg-emerald-400",
    text: "text-emerald-300/70",
  },
  info: {
    container: "border-sky-400/10 bg-sky-400/[0.06]",
    dot: "bg-sky-400",
    text: "text-sky-300",
  },
  danger: {
    container: "border-red-400/10 bg-red-400/[0.06]",
    dot: "bg-red-400",
    text: "text-red-300",
  },
  warning: {
    container: "border-yellow-400/10 bg-yellow-400/[0.06]",
    dot: "bg-yellow-400",
    text: "text-yellow-200/70",
  },
  neutral: {
    container: "border-white/[0.08] bg-white/[0.03]",
    dot: "bg-zinc-400",
    text: "text-zinc-400",
  },
};

export default function StatusBadge({
  children,
  variant = "neutral",
  pulse = false,
}: StatusBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  const styles = variants[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 ${styles.container}`}
    >
      <motion.span
        animate={
          pulse && !shouldReduceMotion
            ? {
                opacity: [1, 0.3, 1],
                scale: [1, 0.85, 1],
              }
            : undefined
        }
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
      />

      <span
        className={`text-[9px] font-semibold uppercase tracking-[0.16em] ${styles.text}`}
      >
        {children}
      </span>
    </div>
  );
}
