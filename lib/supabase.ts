import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function isSupabaseConfigured(): boolean {
  return Boolean(url && serviceKey);
}

// Server-side client (service role). Only ever used inside API routes / server code,
// never exposed to the browser. Uses the service key, so row-level security is bypassed.
export const supabase: SupabaseClient | null = isSupabaseConfigured()
  ? createClient(url!, serviceKey!, { auth: { persistSession: false } })
  : null;

export function dbError(action: string, message?: string): never {
  const msg = message || "unknown";
  if (!isSupabaseConfigured()) {
    throw new Error(
      `Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY. (${action})`
    );
  }
  throw new Error(`Database error during ${action}: ${msg}`);
}