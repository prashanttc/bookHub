import BorrowedBookList from "@/components/sections/BorrowedBookList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="flex md:flex-row flex-col gap-10">
      <div className=" w-full md:w-[33%] h-fit bg-gradient-to-b from-[#232839] to-[#12141D]  rounded-[30px] relative px-10 pb-10 pt-20">
        <Image
          src="/icons/bookmark.png"
          height={100}
          width={100}
          alt="bookmark"
          className="absolute -top-3 left-[46%] w-10 "
        />
        <div className=" mt-5 gap-3 md:gap-10 flex  justify-center flex-wrap">
          <div className="min-h-32 max-h-32 max-w-32 min-w-32 rounded-full bg-yellow-100" />
          <div className="flex flex-col items-center justify-center gap-5 mt-5 md:mt-0">
            <div className="flex gap-2 items-center justify-center">
              <Image
                src="/icons/Vector.svg"
                width={1000}
                height={1000}
                alt="verified"
                className="w-5 h-5"
              />
              <h1 className="text-light-100 ">Verified student</h1>
            </div>
            <h1 className="text-light-200 font-semibold text-xl md:text-3xl">
              Prashant chouhan
            </h1>
            <h1 className="text-light-100 text-sm ">
              prashantchouhan711@gmail.com
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-white text-xl md:text-2xl font-semibold uppercase">
            details
          </h1>
          <div className="mt-5 flex gap-10">
            <ul className=" text-md md:text-xl font-semibold text-light-100 flex flex-col gap-3">
              <li>enrollment no. :</li>
              <li>year :</li>
              <li>department :</li>
              <li>contact number :</li>
            </ul>
            <ul className="text-md md:text-xl font-semibold text-white flex flex-col gap-3">
              <li>0832AD221047</li>
              <li>3rd</li>
              <li>AIDS</li>
              <li>8602267729</li>
            </ul>
          </div>
        </div>
        <Button className="mt-10 ">edit details</Button>
      </div>
      <BorrowedBookList />
    </section>
  );
};

export default page;
