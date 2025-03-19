import { toast } from "sonner";

export const getAllBook = async () => {
  try {
    const response = await fetch("/api/book/bookList", {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch books details");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return { error: "Failed to load books data" };
  }
};

export const getBookById = async (bookId: string) => {
  try {
    const response = await fetch("/api/book/singleBook", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookId }),
    });
    if (!response.ok) {
      return toast.error("failed to load book");
    }
    return response.json();
  } catch (error) {
    return toast.error("unexpected error occured");
  }
};

export const bookBorrow = async ({
  userId,
  bookId,
}: {
  userId: string;
  bookId: string;
}) => {
  try {
    const response = await fetch("/api/book/borrowBook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, bookId }),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
};
