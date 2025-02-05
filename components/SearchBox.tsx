"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";

const SearchBox = ({ onsearch }: { onsearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onsearch(query);
  };
  return (
    <div className="search">
      <Image width={24} height={24} src="/icons/search-fill.svg" alt="search" />
      <Input
        className="search-input"
        placeholder=" search by book title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default SearchBox;
