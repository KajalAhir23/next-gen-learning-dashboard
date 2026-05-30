const CHART_HEIGHTS = [35, 55, 40, 70, 50, 85, 45, 60, 75, 30, 65, 80];

export function ActivityTile() {
  return (
    <section
      aria-label="Learning activity"
      className="bento-card flex flex-col gap-4 rounded-2xl p-6"
    >
      <header>
        <h2 className="text-lg font-semibold text-white">Activity</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Contribution chart placeholder
        </p>
      </header>

      <div
        className="flex flex-1 items-end justify-between gap-1 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-3 py-4"
        role="img"
        aria-label="Placeholder contribution chart"
      >
        {CHART_HEIGHTS.map((height, i) => (
          <div
            key={i}
            className="w-full max-w-3 rounded-sm bg-white/10"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </section>
  );
}
