import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { email, enrollmentNumber, name, password, department, year, phone } = await req.json();

    const { data: existingUser, error: checkError } = await supabase
      .from("User")
      .select("id, email, phone, enrollmentNumber")
      .or(
        `email.eq.${email},phone.eq.${phone},enrollmentNumber.eq.${enrollmentNumber}`
      )
      .limit(1)
      .maybeSingle();

    if (checkError) {
      return NextResponse.json({ error: "Database error. Please try again." }, { status: 500 });
    }
    if (existingUser) {
      return NextResponse.json({ error: "User already exists with this email, phone, or enrollment number." }, { status: 400 });
    }

    const { data: user, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      return NextResponse.json({ error: signUpError.message }, { status: 400 });
    }

    const { error: insertError } = await supabase.from("User").insert([
      {
        authUserId: user.user?.id,
        name,
        email,
        phone,
        enrollmentNumber,
        department,
        year,
      },
    ]);

    if (insertError) {
      return NextResponse.json({ error: "Error inserting user details" }, { status: 500 });
    }

    return NextResponse.json({ success: true, user: user.user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
