"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type AnimatedMetricProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  duration?: number;
};

export default function AnimatedMetric({
  value,
  prefix = "",
  suffix = "",
  label,
  description,
  duration = 1.5,
}: AnimatedMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const shouldReduceMotion = useReducedMotion();

  const [displayValue, setDisplayValue] = useState(
    shouldReduceMotion ? value : 0,
  );

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    let animationFrame: number;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / (duration * 1000), 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, isInView, shouldReduceMotion, value]);

  return (
    <motion.div
      ref={ref}
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
            }
      }
      className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-sky-400/20 hover:bg-white/[0.04]"
    >
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-400/[0.04] blur-3xl transition-all duration-500 group-hover:bg-sky-400/[0.08]" />

      <div className="relative">
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
            {prefix}
            {displayValue}
            {suffix}
          </span>
        </div>

        <p className="mt-4 text-sm font-semibold text-zinc-200">{label}</p>

        <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
      </div>
    </motion.div>
  );
}