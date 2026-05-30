import { AppShell } from "@/components/layout/AppShell";
import { DashboardGrid } from "@/components/dashboard/DashboardGrid";

export default function Home() {
  return (
    <AppShell>
      <main className="flex-1 overflow-y-auto px-4 py-6 pb-24 md:px-8 md:py-8 md:pb-8">
        <DashboardGrid />
      </main>
    </AppShell>
  );
}
