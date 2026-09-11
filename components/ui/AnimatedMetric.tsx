"use client";

import { motion, useInView, useReducedMotion } from "motion/react";

import { useEffect, useRef, useState } from "react";

type AnimatedMetricProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
  duration?: number;
};

export default function AnimatedMetric({
  value,
  prefix = "",
  suffix = "",
  label,
  description,
  duration = 1400,
}: AnimatedMetricProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | null>(null);

  const [displayValue, setDisplayValue] = useState(0);

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      /*
       * Ease out cubic.
       *
       * Starts quickly and slows as it approaches
       * the final number.
       */
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const nextValue = Math.round(value * easedProgress);

      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration, isInView, shouldReduceMotion, value]);

  const visibleValue = shouldReduceMotion ? value : displayValue;

  return (
    <motion.div
      ref={containerRef}
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
        amount: 0.4,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-400/[0.00] blur-[60px] transition-colors duration-500 group-hover:bg-sky-400/[0.06]"
      />

      <div className="relative">
        <p className="text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
          {prefix}
          {visibleValue}
          {suffix}
        </p>

        <p className="mt-4 text-sm font-medium text-zinc-300">{label}</p>

        {description && (
          <p className="mt-2 text-xs leading-6 text-zinc-600">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
