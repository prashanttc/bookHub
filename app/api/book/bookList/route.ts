import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const supabaseAuth = createRouteHandlerClient({ cookies });
    const {
      data: { user },
      error: authError,
    } = await supabaseAuth.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 401 });
    }

    const { data, error } = await supabase
      .from("Book")
      .select("*")

    if (error) {
      return NextResponse.json({ error: "Error fetching Books" }, { status: 500 });
    }

    return NextResponse.json({ book: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
