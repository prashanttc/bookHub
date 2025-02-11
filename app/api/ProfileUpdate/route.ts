import { supabase } from "@/lib/supabaseClient";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const supabaseAuth = createRouteHandlerClient({ cookies });
    const {
      data: { user },
      error: authError,
    } = await supabaseAuth.auth.getUser();
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }
    const { id, year, name, department, phone } = await req.json();
    const { data: phoneExists, error: phoneError } = await supabase
      .from("User")
      .select("id")
      .eq("phone", phone)
      .neq("id", id)  
      .maybeSingle();

    if (phoneError) {
      return NextResponse.json(
        { error: phoneError.message|| "something wen wrong with phone" },
        { status: 400 }
      );
    }
    if (phoneExists) {
      return NextResponse.json(
        { error: "Phone number already in use" },
        { status: 400 }
      );
    }
    const { data, error: updateError } = await supabase
      .from("User")
      .update({
        name,
        phone,
        department,
        year,
      })
      .eq("id", id)
      .select();
    console.log("error", updateError?.message);
    console.log("data", data);
    if (updateError) {
      return NextResponse.json(
        { error: "Error updating user details" },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
