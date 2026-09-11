"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export default function InteractiveBackground() {
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 20,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 20,
    mass: 0.8,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Main ambient glow */}
      <div className="absolute left-1/2 top-[-300px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-sky-500/[0.07] blur-[160px]" />

      {/* Cursor glow */}
      {!shouldReduceMotion && (
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          className="absolute left-0 top-0"
        >
          <div className="h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.08] blur-[100px]" />
        </motion.div>
      )}

      {/* Secondary glow */}
      <div className="absolute -right-[250px] top-[35%] h-[550px] w-[550px] rounded-full bg-cyan-400/[0.04] blur-[140px]" />

      {/* Bottom glow */}
      <div className="absolute -left-[250px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_85%)] opacity-50" />
    </div>
  );
}