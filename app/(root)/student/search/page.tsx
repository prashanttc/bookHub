"use client";
import BookCard from "@/components/BookCard";
import SearchBox from "@/components/SearchBox";
import Sort from "@/components/Sort";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useBooks } from "@/context/BookContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const { books, loading } = useBooks();
  const [filterBook, setFilterBook] = useState(books);
  const [title, setTitle] = useState("");
  useEffect(() => {
    setFilterBook(books);
  }, [books]);

  const handlesearch = (query: string) => {
    setTitle(query);
    if (query.trim()) {
      setFilterBook(
        books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilterBook(books);
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
        <div className="flex flex-col md:flex-row  md:justify-between md:items-center gap-10">
          <h1 className="text-white text-xl md:text-3xl font-medium">
            Search Results{" "}
            <span className="text-light-200 font-semibold  ">{title}</span>:{" "}
            <span className="text-light-200">{filterBook.length}</span>
          </h1>
          <Sort />
        </div>
      </div>
       {filterBook.length !==0 ?(
        <div className="w-full ">
        <ul className="book-list relative">
          {loading
            ? filterBook.map((book) => (
                <Skeleton
                  key={book.title}
                  className="w-[90vw] gap-10 md:w-[250px] rounded-2xl bg-[#12141D] p-5 md:min-h-[410px] md:max-h-[410px] flex flex-row md:flex-col"
                />
              ))
            : filterBook.map((book) => <BookCard key={book.title} {...book} />)}
        </ul>
      </div> 
       ):(
        <div className="w-full  flex items-center justify-center flex-col gap-5">
        <div className="w-[200px] h-[200px]  bg-dark-400 rounded-full">
          <Image src='/images/no-books.png' height={1000} width={1000} alt="no book" className=""/>
        </div>
        <h1 className="text-white font-semibold">no results found</h1>
        <p className="text-white font-light w-full md:w-[400px] text-center">We couldn’t find any books matching your search. Try using different keywords or check for typos.</p>
      </div>
       )}
    
    </section>
  );
};

export default page;
