"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CourseCard } from "./CourseCard";

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export function CourseGrid({ courses }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="bento-card flex flex-col gap-4 rounded-2xl p-6"
    >
      <header>
        <h2 id="courses-heading" className="text-lg font-semibold text-white">
          Your courses
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          {courses.length === 0
            ? "No courses yet. Add rows to your Supabase courses table."
            : `${courses.length} course${courses.length === 1 ? "" : "s"} in progress`}
        </p>
      </header>

      {courses.length === 0 ? (
        <p className="rounded-xl border border-dashed border-white/10 py-12 text-center text-sm text-zinc-500">
          Your course cards will appear here once data is available.
        </p>
      ) : (
        <motion.ul
          className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          animate="show"
        >
          {courses.map((course) => (
            <motion.li
              key={course.id}
              variants={prefersReducedMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : cardVariants}
              className="will-change-transform"
            >
              <CourseCard course={course} />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </section>
  );
}
