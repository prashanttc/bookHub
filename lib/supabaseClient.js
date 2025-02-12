import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabaseUrl = "https://xcxvvhztylexdromzfwe.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClientComponentClient({
  options: { persistSession: true, autoRefreshToken: true },
  supabaseKey,
  supabaseUrl,
});