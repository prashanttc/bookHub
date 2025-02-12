import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { email, password } = await req.json();
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "No user exists with this email!" }, { status: 400 });
    }
    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    const session = await supabase.auth.setSession({
      access_token: data.session?.access_token!,
      refresh_token: data.session?.refresh_token!,
    });
    if (signInError) {
      return NextResponse.json({ error: "Email or password is incorrect" }, { status: 400 });
    }
    return NextResponse.json({ success: true, user: data.user , session:session }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
