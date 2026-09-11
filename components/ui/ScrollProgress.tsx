"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[2px] w-full bg-white/[0.03]"
    >
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
        }}
        className="h-full w-full bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400"
      />
    </div>
  );
}
