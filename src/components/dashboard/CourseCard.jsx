"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { resolveLucideIcon } from "@/lib/icons";
import { bentoSpring } from "./bento-motion";

export function CourseCard({ course }) {
  const prefersReducedMotion = useReducedMotion();
  const iconComponent = resolveLucideIcon(course.icon_name);
  const progress = Math.min(100, Math.max(0, course.progress));
  const progressScale = progress / 100;

  return (
    <motion.article
      whileHover={
        prefersReducedMotion ? undefined : { scale: 1.02, opacity: 1 }
      }
      transition={bentoSpring}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-4 will-change-transform"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/15 via-fuchsia-500/5 to-cyan-500/10 opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-1 ring-violet-400/40 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            {React.createElement(iconComponent, {
              className: "h-5 w-5 text-violet-300",
              "aria-hidden": true,
            })}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-medium text-white">{course.title}</h3>
            <p className="mt-0.5 text-xs text-zinc-500">In progress</p>
          </div>
          <span className="text-sm font-semibold tabular-nums text-zinc-300">
            {progress}%
          </span>
        </div>

        <div
          className="h-1.5 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${course.title} progress`}
        >
          <motion.div
            className="h-full w-full origin-left rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 will-change-transform"
            initial={{
              scaleX: prefersReducedMotion ? progressScale : 0,
              opacity: prefersReducedMotion ? 1 : 0.5,
            }}
            animate={{ scaleX: progressScale, opacity: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }
            }
          />
        </div>
      </div>
    </motion.article>
  );
}
