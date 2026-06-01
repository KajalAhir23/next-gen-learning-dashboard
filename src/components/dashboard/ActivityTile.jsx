"use client";

import { motion, useReducedMotion } from "framer-motion";
import { bentoSpring } from "./bento-motion";

const CHART_HEIGHTS = [35, 55, 40, 70, 50, 85, 45, 60, 75, 30, 65, 80];

const chartContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
};

const barVariants = {
  hidden: { scaleY: 0, opacity: 0.3 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 16,
    },
  },
};

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
          Contribution chart preview
        </p>
      </header>

      <figure className="relative z-10 flex flex-1 flex-col gap-2">
        <motion.div
          className="flex flex-1 items-end justify-between gap-1 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-3 py-4"
          variants={prefersReducedMotion ? undefined : chartContainerVariants}
          initial="hidden"
          animate="show"
          aria-hidden
        >
          {CHART_HEIGHTS.map((height, i) => (
            <motion.div
              key={i}
              className="w-full max-w-3 rounded-sm bg-gradient-to-t from-violet-500/40 to-cyan-400/80 origin-bottom will-change-transform"
              style={{ height: `${height}%` }}
              variants={prefersReducedMotion ? undefined : barVariants}
            />
          ))}
        </motion.div>
        <figcaption className="sr-only">
          Animated preview of weekly learning activity
        </figcaption>
      </figure>
    </motion.section>
  );
}
