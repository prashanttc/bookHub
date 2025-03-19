import prisma from "@/lib/prisma";
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

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { userId, bookId } = await req.json();

    const book = await prisma.book.findUnique({
      where: { id: bookId },
    });
    if (!book)
      return NextResponse.json({ error: "book not found" }, { status: 404 });

    if (book.available <= 0) {
      return NextResponse.json(
        { error: "book is out of stock" },
        { status: 400 }
      );
    }
    const existingTransaction = await prisma.transaction.findFirst({
      where: {
        userId,
        bookId,
        status: "ISSUED",
      },
    });
    if (existingTransaction) {
      return NextResponse.json(
        { error: "you already borrowed this book" },
        { status: 400 }
      );
    }
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    await prisma.transaction.create({
      data: {
        userId,
        bookId,
        dueDate,
      },
    });

    await prisma.book.update({
      where: { id: bookId },
      data: { available: { decrement: 1 } },
    });
    return NextResponse.json({ message:"book borrowed successfully"  }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 401 }
    );
  }
}
