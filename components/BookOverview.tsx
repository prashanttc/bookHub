"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import BookCover from "./BookCover";
import { usePathname, useRouter } from "next/navigation";
import { bookBorrow, getBookById } from "@/lib/helperFuntions/book";
import FullLoader from "./FullLoader";
import { useUser } from "@/context/UserContext";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import ErrorPopUp from "./ErrorPopUp";

const BookOverview = () => {
  const { user } = useUser();
  const path = usePathname();
  const [book, setBook] = useState<bookProps | null>(null);
  const [borrowloading, setBorrowloading] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const id = path.split("/")[3];
  const bookId = id;
  const userId = user?.id;
  useEffect(() => {
    const fetchBookDetails = async () => {
      isLoading(true);
      const bookData = await getBookById(bookId);
      if (bookData) {
        setBook(bookData.book);
        isLoading(false);
      }
    };
    fetchBookDetails();
  }, []);
  if (loading) {
    return <FullLoader />;
  }

  const borrowBook = async () => {
    setBorrowloading(true);
    const data = await bookBorrow({ userId, bookId });
    if (data.error) {
      setOpen(true);
      setError(data.error);
    }
    if(!data.error){
      toast.success("book borrowed successfully");
    }
    setBorrowloading(false);
  };
  return (
    <section className="book-overview mx-5">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="">{book?.title}</h1>
        <div className="book-info">
          <p>
            By{" "}
            <span className="font-semibold text-light-200 ">
              {book?.author}
            </span>
          </p>
          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{book?.genre}</span>
          </p>
          <div className="flex flex-row  gap-1">
            <Image src="/icons/star.svg" alt="star" height={22} width={22} />
            <p>{book?.rating}</p>
          </div>
        </div>
        <div className="book-copies">
          <p>
            Total books: <span>{book?.copies}</span>
          </p>
          <p>
            available books: <span>{book?.available}</span>
          </p>
        </div>
        <p className="book-description">{book?.description}</p>
        <Button
          className="book-overview_btn"
          onClick={borrowBook}
          disabled={borrowloading}
        >
          {borrowloading ? (
            <Loader className="animate-spin " />
          ) : (
            <>
              <Image src="/icons/book.svg" height={24} width={24} alt="book" />
              <p className="font-bebas-neue text-xl text-dark-100">
                borrow book
              </p>
            </>
          )}
        </Button>
      </div>
      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            varient="wide"
            className="z-10"
            coverColor={book?.color || "#ffffff"}
            cover={book?.imageUrl!}
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              varient="wide"
              coverColor={book?.color || "#ffffff"}
              cover={book?.imageUrl!}
            />
          </div>
        </div>
      </div>
      <ErrorPopUp open={open} setOpen={setOpen} errorMessage={error} />
    </section>
  );
};

export default BookOverview;
