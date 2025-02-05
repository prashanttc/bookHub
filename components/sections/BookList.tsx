"use client";
import React, { useState, useEffect } from "react";
import BookCard from "../BookCard";

const BookList = ({ books }: { books: books[] }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const updateVisibleCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setVisibleCount(3);
    } else {
      setVisibleCount(5);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const toggleVisibility = () => {
    if (isExpanded) {
      updateVisibleCount();
    } else {
      setVisibleCount(books.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <h1 className="font-bebas-neue text-4xl text-light-100 ">
          Popular Books
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
            <BookCard key={book.title} {...book} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BookList;
