"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { navItems } from "./nav-items";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`hidden md:flex h-screen shrink-0 flex-col border-r border-white/10 bg-[#030303] transition-[width] duration-300 ease-in-out ${
        collapsed ? "w-[4.5rem]" : "w-56"
      }`}
    >
      <div
        className={`flex items-center gap-3 border-b border-white/10 p-4 ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <GraduationCap className="h-6 w-6 shrink-0 text-white" aria-hidden />
        {!collapsed && (
          <span className="truncate text-sm font-semibold tracking-tight">
            LearnDash
          </span>
        )}
      </div>

      <ul className="flex flex-1 flex-col gap-1 p-2">
        {navItems.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              title={collapsed ? label : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white ${
                collapsed ? "justify-center" : ""
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden />
              {!collapsed && <span>{label}</span>}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setCollapsed((prev) => !prev)}
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="m-2 flex items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
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
