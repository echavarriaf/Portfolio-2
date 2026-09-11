"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] px-6 lg:px-8">
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 15,
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
          duration: 0.7,
        }}
        className="mx-auto flex max-w-7xl flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between"
      >
        <a
          href="#home"
          className="group flex w-fit items-center text-xl font-bold tracking-[-0.04em]"
        >
          <span className="transition-colors duration-300 group-hover:text-sky-300">
            FE
          </span>

          <span className="ml-0.5 text-sky-400 transition-transform duration-300 group-hover:translate-x-0.5">
            .
          </span>
        </a>

        <div className="flex flex-col gap-2 text-xs text-zinc-600 sm:items-end">
          <p>
            © {year} Felix Echavarria
          </p>

          <p className="font-mono text-[10px]">
            Built with Next.js · TypeScript · Motion
          </p>
        </div>
      </motion.div>
    </footer>
  );
}