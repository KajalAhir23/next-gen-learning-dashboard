export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
      <section className="bento-card animate-pulse rounded-2xl p-6 md:col-span-2">
        <div className="h-4 w-28 rounded bg-white/10" />
        <div className="mt-3 h-9 w-56 rounded bg-white/10" />
        <div className="mt-3 h-4 w-72 max-w-full rounded bg-white/5" />
        <div className="mt-6 h-9 w-32 rounded-full bg-white/10" />
      </section>

      <section className="bento-card animate-pulse rounded-2xl p-6">
        <div className="h-5 w-32 rounded bg-white/10" />
        <div className="mt-2 h-4 w-48 rounded bg-white/5" />
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Array.from({ length: 4 }, (_, i) => (
            <li
              key={i}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div className="flex gap-3">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-white/10" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-24 rounded bg-white/10" />
                  <div className="h-2 w-full rounded bg-white/5" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bento-card animate-pulse rounded-2xl p-6">
        <div className="h-5 w-24 rounded bg-white/10" />
        <div className="mt-2 h-4 w-40 rounded bg-white/5" />
        <div className="mt-4 flex h-40 items-end gap-1 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-4">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="w-full rounded-sm bg-white/10"
              style={{ height: `${30 + (i % 5) * 12}%` }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
