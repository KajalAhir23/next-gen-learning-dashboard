"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { navItems } from "./nav-items";
import { NavLink } from "./NavLink";
import { useNav } from "./NavProvider";

export function Sidebar() {
  const { activeId, selectNav } = useNav();
  const [collapsed, setCollapsed] = useState(false);
  const showLabels = !collapsed;

  return (
    <nav
      aria-label="Main navigation"
      className={`hidden h-screen shrink-0 flex-col border-r border-white/10 bg-[#030303] md:flex ${
        collapsed ? "lg:w-[4.5rem]" : "lg:w-56"
      } w-[4.5rem]`}
    >
      <div
        className={`flex items-center gap-3 border-b border-white/10 p-4 ${
          showLabels ? "lg:justify-start" : "justify-center"
        }`}
      >
        <GraduationCap className="h-6 w-6 shrink-0 text-white" aria-hidden />
        {showLabels && (
          <span className="hidden truncate text-sm font-semibold tracking-tight lg:inline">
            LearnDash
          </span>
        )}
      </div>

      <ul className="flex flex-1 flex-col gap-1 p-2" role="list">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              item={item}
              isActive={activeId === item.id}
              onSelect={selectNav}
              layoutId="sidebar-nav-indicator"
              showLabel={showLabels}
              variant="sidebar"
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setCollapsed((prev) => !prev)}
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="m-2 hidden items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white lg:flex"
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4" aria-hidden />
        ) : (
          <>
            <ChevronLeft className="h-4 w-4" aria-hidden />
            <span className="text-xs">Collapse</span>
          </>
        )}
      </button>
    </nav>
  );
}
