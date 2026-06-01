/**
 * Student display name for the hero greeting.
 * Set NEXT_PUBLIC_STUDENT_NAME in .env.local
 */
export function getStudentName() {
  const name = process.env.NEXT_PUBLIC_STUDENT_NAME?.trim();
  return name || "Kajal";
}
