"use client";
import React, { useState, useEffect } from "react";
import BorrowedBookCard from "../BorrowedBookCard";
import { sampleBooks } from "@/constants";

const BookList = () => {
    const books = sampleBooks
  const [visibleCount, setVisibleCount] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    if (isExpanded) {
        setVisibleCount(3)
    } else {
      setVisibleCount(books.length);
    }
    setIsExpanded(!isExpanded);

  };

  return (
    <section className="mt-10 w-[60%]">
      <div className="flex justify-between">
        <h1 className="font-bebas-neue text-4xl text-light-100 ">
          borrowed Books
        </h1>
        <p
          onClick={toggleVisibility}
          className="text-light-200 cursor-pointer bg-dark-300 p-2 font-semibold  rounded-lg"
        >
          {isExpanded ? "See Less" : "See More"}
        </p>
      </div>
      <div className="relative">
        <ul className="book-list relative">
          {books.slice(0, visibleCount).map((book) => (
            <BorrowedBookCard key={book.title} {...book} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BookList;
