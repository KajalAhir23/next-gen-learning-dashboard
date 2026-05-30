import { NavProvider } from "./NavProvider";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

export function AppShell({ children }) {
  return (
    <NavProvider>
      <div className="flex min-h-screen bg-[#030303]">
        <Sidebar />
        {children}
        <MobileNav />
      </div>
    </NavProvider>
  );
}
