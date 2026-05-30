import { AppShell } from "@/components/layout/AppShell";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";

export default function Loading() {
  return (
    <AppShell>
      <main className="flex-1 overflow-y-auto px-4 py-6 pb-24 md:px-8 md:py-8 md:pb-8">
        <DashboardSkeleton />
      </main>
    </AppShell>
  );
}
