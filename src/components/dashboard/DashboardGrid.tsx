import { HeroTile } from "./HeroTile";
import { CourseGrid } from "./CourseGrid";
import { ActivityTile } from "./ActivityTile";

export function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
      <HeroTile />
      <CourseGrid />
      <ActivityTile />
    </div>
  );
}
