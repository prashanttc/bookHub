import prisma from "@/lib/prisma";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabaseAuth = createRouteHandlerClient({ cookies });
    const {
      data: { user },
      error: authError,
    } = await supabaseAuth.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const Student = await prisma.user.findUnique({
      where: {
        authUserId: user.id,
      },
      select: { id: true },
    });
    const books = await prisma.transaction.findMany({
      where: {
        userId: Student?.id,
        status: "ISSUED",
      },
      include: {
        book: true,
      },
    });
    if (!books.length) {
      return NextResponse.json({ error: "no book issued" }, { status: 404 });
    }
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 401 }
    );
  }
}
