import { Flame } from "lucide-react";

interface HeroTileProps {
  streakDays?: number;
}

export function HeroTile({ streakDays = 7 }: HeroTileProps) {
  return (
    <section className="bento-card flex flex-col justify-between gap-6 rounded-2xl p-6 md:col-span-2">
      <div>
        <p className="text-sm font-medium text-zinc-500">Good to see you</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Welcome back!
        </h1>
        <p className="mt-2 max-w-md text-sm text-zinc-400">
          Pick up where you left off and keep your learning streak alive.
        </p>
      </div>

      <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
        <Flame className="h-4 w-4 text-orange-400" aria-hidden />
        <span className="text-sm font-medium text-white">
          {streakDays} day streak
        </span>
      </div>
    </section>
  );
}
