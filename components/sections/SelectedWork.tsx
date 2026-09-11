"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion } from "motion/react";

import BudgetSystemVisual from "@/components/projects/BudgetSystemVisual";
import CorrectiveActionVisual from "@/components/projects/CorrectiveActionVisual";
import MLSystemVisual from "@/components/projects/MLSystemVisual";
import WarehouseSystemVisual from "@/components/projects/WarehouseSystemVisual";
import ProjectCard from "@/components/ui/ProjectCard";

import {
  projects,
  type ProjectVisual,
} from "@/data/projects";

const projectVisuals: Record<ProjectVisual, ComponentType> = {
  warehouse: WarehouseSystemVisual,
  budget: BudgetSystemVisual,
  "corrective-action": CorrectiveActionVisual,
  "machine-learning": MLSystemVisual,
};

export default function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 sm:py-36 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-sky-400">
                02
              </span>

              <span className="h-px w-10 bg-white/10" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Selected Work
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Built around
              <br />
              <span className="text-zinc-500">
                real problems.
              </span>
            </h2>
          </motion.div>

          <motion.p
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="max-w-2xl text-lg leading-8 text-zinc-400 lg:justify-self-end"
          >
            I focus on systems where software has a measurable
            operational impact — reducing manual work, improving
            visibility, and helping people make faster decisions.
          </motion.p>
        </div>

        <div className="mt-20 space-y-10 lg:mt-28 lg:space-y-14">
          {projects.map((project) => {
            const Visual = projectVisuals[project.visual];

            return (
              <ProjectCard
                key={project.number}
                number={project.number}
                category={project.category}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                metrics={project.metrics}
              >
                <Visual />
              </ProjectCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}