"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <AppShell>
      <main className="flex flex-1 items-center justify-center px-4 py-16 pb-24 md:pb-16">
        <section className="bento-card max-w-md rounded-2xl p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
            <AlertCircle className="h-6 w-6 text-red-400" aria-hidden />
          </div>
          <h1 className="mt-4 text-lg font-semibold text-white">
            Unable to load dashboard
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            We couldn&apos;t connect to Supabase or fetch your courses. Check
            your environment variables and database connection, then try again.
          </p>
          {error.message && (
            <p className="mt-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-zinc-500">
              {error.message}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Try again
          </button>
        </section>
      </main>
    </AppShell>
  );
}
