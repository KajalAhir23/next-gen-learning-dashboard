"use client";

import { navItems } from "./nav-items";
import { NavLink } from "./NavLink";
import { useNav } from "./NavProvider";

export function MobileNav() {
  const { activeId, selectNav } = useNav();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#030303]/95 px-2 py-2 backdrop-blur-md md:hidden"
    >
      <ul className="flex items-center justify-around" role="list">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              item={item}
              isActive={activeId === item.id}
              onSelect={selectNav}
              layoutId="mobile-nav-indicator"
              showLabel
              variant="mobile"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
