"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Flame } from "lucide-react";
import { bentoSpring } from "./bento-motion";

export function HeroTile({ studentName = "Student", streakDays = 7 }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      aria-labelledby="hero-heading"
      whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
      transition={bentoSpring}
      className="bento-card group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl p-6 will-change-transform md:col-span-2"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-violet-400/30 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <p className="text-sm font-medium text-zinc-500">Good to see you</p>
        <h1
          id="hero-heading"
          className="mt-1 text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Welcome back, {studentName}!
        </h1>
        <p className="mt-2 max-w-md text-sm text-zinc-400">
          Pick up where you left off and keep your learning streak alive.
        </p>
      </div>

      <p className="relative z-10 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
        <Flame className="h-4 w-4 text-orange-400" aria-hidden />
        <span className="text-sm font-medium text-white">
          <span className="sr-only">Daily streak: </span>
          {streakDays} day streak
        </span>
      </p>
    </motion.section>
  );
}
