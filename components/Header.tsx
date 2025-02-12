"use client";
import { useUser } from "@/context/UserContext";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  const { loading, user } = useUser();
  if (loading) return <p>Loading...</p>;
  return (
    <header className="my-5 flex justify-between gap-5 ">
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
            href="/student/search"
            className={cn(
              "text-base cursor-pointer capitalize",
              path === "/student/search" ? "text-light-200" : "text-light-100"
            )}
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            href="/student/profile"
            className={cn(
              "text-base cursor-pointer capitalize",
              path === "/student/profile" ? "text-light-200" : "text-light-100"
            )}
          >
            profile{" "}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
