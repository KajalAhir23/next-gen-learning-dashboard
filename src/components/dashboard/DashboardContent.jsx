import { AnimatedDashboardGrid } from "./AnimatedDashboardGrid";
import { fetchCourses } from "@/lib/data/fetch-courses";
import { getStudentName } from "@/lib/student-name";

export async function DashboardContent() {
  const [courses, studentName] = await Promise.all([
    fetchCourses(),
    Promise.resolve(getStudentName()),
  ]);

  return (
    <AnimatedDashboardGrid courses={courses} studentName={studentName} />
  );
}
