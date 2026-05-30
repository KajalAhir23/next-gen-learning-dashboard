"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const springTransition = {
  type: "spring",
  stiffness: 380,
  damping: 28,
};

export function NavLink({
  item,
  isActive,
  onSelect,
  layoutId,
  showLabel = true,
  variant = "sidebar",
}) {
  const { label, href, icon: Icon } = item;

  const baseLinkClass =
    variant === "sidebar"
      ? "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
      : "relative flex flex-col items-center gap-1 rounded-lg px-3 py-2 min-w-[3.5rem] transition-colors";

  const activeTextClass = isActive ? "text-white" : "text-zinc-400 hover:text-white";

  return (
    <Link
      href={href}
      onClick={() => onSelect(item.id)}
      title={!showLabel ? label : undefined}
      aria-current={isActive ? "page" : undefined}
      className={`${baseLinkClass} ${activeTextClass}`}
    >
      {isActive && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 rounded-lg bg-white/10"
          transition={springTransition}
          style={{ willChange: "transform" }}
          aria-hidden
        />
      )}
      <span
        className={`relative z-10 flex items-center ${
          variant === "sidebar" ? "gap-3" : "flex-col gap-1"
        }`}
      >
        <Icon
          className={variant === "sidebar" ? "h-5 w-5 shrink-0" : "h-5 w-5"}
          aria-hidden
        />
        {(variant === "mobile" || showLabel) && (
          <span
            className={
              variant === "sidebar"
                ? "hidden truncate lg:inline"
                : "text-[10px] font-medium leading-none"
            }
          >
            {label}
          </span>
        )}
      </span>
    </Link>
  );
}
