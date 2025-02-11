"use client";
import BookCard from "@/components/BookCard";
import SearchBox from "@/components/SearchBox";
import Sort from "@/components/Sort";
import { sampleBooks } from "@/constants";
import React, { useState } from "react";

const page = () => {
  const [filterBook, setFilterBook] = useState(sampleBooks);
  const handlesearch = (query: string) => {
    if (query.trim()) {
      setFilterBook(
        sampleBooks.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilterBook(sampleBooks);
    }
  };
  return (
    <section className="flex items-center flex-col gap-20 justify-center">
      <div className="text-white flex flex-col justify-center items-center text-center w-fit gap-5">
        <p className="uppercase font-ibm-plex-sans text-light-100 ">
          discover all books here
        </p>
        <h1 className="font-ibm-plex-sans text-2xl md:text-5xl font-semibold leading-tight ">
          Explore and Search for <br />{" "}
          <span className="text-light-200">Any Book </span>In Our Library
        </h1>
        <SearchBox onsearch={handlesearch} />
      </div>
      <div className="w-full">
        <div className="flex  justify-between items-center">
          <h1 className="text-white text-xl md:text-3xl font-medium">
            Search Results
          </h1>
          <Sort />
        </div>
      </div>
      <div className="w-full ">
        <ul className="book-list relative">
          {filterBook.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
