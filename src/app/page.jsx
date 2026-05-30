import { Suspense } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <AppShell>
      <main className="flex-1 overflow-y-auto px-4 py-6 pb-24 md:px-6 md:py-8 md:pb-8 lg:px-8">
        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardContent />
        </Suspense>
      </main>
    </AppShell>
  );
}
