import Link from "next/link";
import { navItems } from "./nav-items";

export function MobileNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-white/10 bg-[#030303]/95 px-2 py-2 backdrop-blur-md md:hidden"
    >
      {navItems.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          className="flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:text-white"
        >
          <Icon className="h-5 w-5" aria-hidden />
          <span className="text-[10px] font-medium">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
