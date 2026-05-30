"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroTile } from "./HeroTile";
import { CourseGrid } from "./CourseGrid";
import { ActivityTile } from "./ActivityTile";
import { dashboardStagger, tileEntrance } from "./bento-motion";

export function AnimatedDashboardGrid({ courses, studentName }) {
  const prefersReducedMotion = useReducedMotion();
  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : tileEntrance;

  return (
    <section
      aria-label="Learning dashboard"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6"
    >
      <motion.div
        className="contents"
        variants={dashboardStagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="md:col-span-2">
          <HeroTile studentName={studentName} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <CourseGrid courses={courses} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ActivityTile />
        </motion.div>
      </motion.div>
    </section>
  );
}
