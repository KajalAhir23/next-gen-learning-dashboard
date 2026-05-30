"use client";

import { motion, useReducedMotion } from "framer-motion";
import { bentoSpring } from "./bento-motion";

const CHART_HEIGHTS = [35, 55, 40, 70, 50, 85, 45, 60, 75, 30, 65, 80];

export function ActivityTile() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      aria-labelledby="activity-heading"
      whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
      transition={bentoSpring}
      className="bento-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6 will-change-transform"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-cyan-400/25 transition-opacity duration-300 group-hover:opacity-100"
      />

      <header className="relative z-10">
        <h2 id="activity-heading" className="text-lg font-semibold text-white">
          Activity
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Contribution chart placeholder
        </p>
      </header>

      <figure className="relative z-10 flex flex-1 flex-col gap-2">
        <div
          className="flex flex-1 items-end justify-between gap-1 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-3 py-4"
          aria-hidden
        >
          {CHART_HEIGHTS.map((height, i) => (
            <div
              key={i}
              className="w-full max-w-3 rounded-sm bg-white/10"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <figcaption className="sr-only">
          Static preview of weekly learning activity
        </figcaption>
      </figure>
    </motion.section>
  );
}
