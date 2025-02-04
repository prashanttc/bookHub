"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5 ">
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          height={40}
          width={40}
          alt="logo"
          className=""
        />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/"
            className={cn(
              "text-base cursor-pointer capitalize",
              path === "/" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link>
        </li>
        <li>
          <Link
            href="/search"
            className={cn(
              "text-base cursor-pointer capitalize",
              path === "/search" ? "text-light-200" : "text-light-100"
            )}
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={cn(
              "text-base cursor-pointer capitalize",
              path === "/search" ? "text-light-200" : "text-light-100"
            )}
          >
            <div className="h-10 w-10 rounded-full bg-light-200 text-black flex items-center justify-center font-semibold">
              PC
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
