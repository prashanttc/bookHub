"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getAllBook } from "@/lib/helperFuntions/book";
import { toast } from "sonner";

interface BookContextType {
  books: bookProps[];
  loading: boolean;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<bookProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const response = await getAllBook();
        if (!response.book) {
          toast.error("Error fetching books");
        } else {
          setBooks(response.book);
        }
      } catch (error) {
        toast.error("Failed to load books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, loading }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
};
