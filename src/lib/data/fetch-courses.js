import { createClient } from "@/lib/supabase/server";
import { mockCourses } from "./mock-courses";

/** @typedef {import('@/types/course').Course} Course */

const PLACEHOLDER_PATTERNS = [
  "your_supabase",
  "your_anon",
  "your_project",
  "placeholder",
  "example.com",
  "paste_",
  "xxxxxxxx",
  "xxxx.supabase",
  "anon_public_key_here",
  "anon_key_here",
];

function isSupabaseConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !key) return false;

  const lowerUrl = url.toLowerCase();
  const lowerKey = key.toLowerCase();

  if (
    PLACEHOLDER_PATTERNS.some(
      (pattern) => lowerUrl.includes(pattern) || lowerKey.includes(pattern)
    )
  ) {
    return false;
  }

  const validUrl = /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(url);
  const validKey = key.startsWith("eyJ") && key.length > 100;

  return validUrl && validKey;
}

function useMockInDev(reason) {
  if (process.env.NODE_ENV === "development") {
    console.warn(`[LearnDash] ${reason} — using mock courses.`);
    return mockCourses;
  }
  return null;
}

/**
 * Fetch all courses from Supabase (Server Component only).
 * @returns {Promise<Course[]>}
 */
export async function fetchCourses() {
  if (!isSupabaseConfigured()) {
    const fallback = useMockInDev(
      "Supabase not configured (check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local)"
    );
    if (fallback) return fallback;

    throw new Error(
      "Supabase is not configured. Copy .env.example to .env.local and add your real Project URL and anon key from Supabase Dashboard → Settings → API."
    );
  }

  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("courses")
      .select("id, title, progress, icon_name, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      const fallback = useMockInDev(
        `Supabase query failed: ${error.message}`
      );
      if (fallback) return fallback;

      throw new Error(`Failed to load courses: ${error.message}`);
    }

    return /** @type {Course[]} */ (data ?? []);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const fallback = useMockInDev(`Could not reach Supabase (${message})`);
    if (fallback) return fallback;

    throw new Error(
      `Failed to load courses: ${message}. Check your Supabase URL, anon key, and that the project is not paused.`
    );
  }
}
