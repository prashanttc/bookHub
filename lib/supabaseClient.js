import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xcxvvhztylexdromzfwe.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)


async function checkConnection() {
  const { data, error } = await supabase.from("User").select("*");
  console.log({ data, error });
}

checkConnection();