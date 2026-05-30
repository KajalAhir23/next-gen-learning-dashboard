/** Shared Framer Motion spring for Bento tile interactions */
export const bentoSpring = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const tileEntrance = {
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

export const dashboardStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};
