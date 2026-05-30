/**
 * Normalizes Supabase URL (strips /rest/v1 if pasted from API docs).
 */
export function getSupabaseUrl() {
  const raw = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  return raw.replace(/\/rest\/v1\/?$/i, "").replace(/\/+$/, "");
}

export function getSupabaseAnonKey() {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";
}

export function isValidSupabaseKey(key) {
  if (!key) return false;
  return (
    (key.startsWith("eyJ") && key.length > 100) ||
    (key.startsWith("sb_publishable_") && key.length > 20)
  );
}

export function isValidSupabaseUrl(url) {
  return /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(url);
}
