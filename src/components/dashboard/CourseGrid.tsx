import { BookOpen } from "lucide-react";

const PLACEHOLDER_COUNT = 4;

export function CourseGrid() {
  return (
    <section
      id="courses"
      aria-label="Your courses"
      className="bento-card flex flex-col gap-4 rounded-2xl p-6"
    >
      <header>
        <h2 className="text-lg font-semibold text-white">Your courses</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Course tiles will load here from Supabase.
        </p>
      </header>

      <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
        {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
              <BookOpen className="h-5 w-5 text-zinc-500" aria-hidden />
            </div>
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-3 w-24 rounded bg-white/10" />
              <div className="h-2 w-full rounded bg-white/5" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
