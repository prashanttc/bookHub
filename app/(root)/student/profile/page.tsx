"use client";
import GlobalLoader from "@/components/GlobalLoader";
import BorrowedBookList from "@/components/sections/BorrowedBookList";
import { Button } from "@/components/ui/button";
import UserEdit from "@/components/UserEdit";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [open, isOpen] = useState(false);
  const { loading, user } = useUser();
  if (loading) return <GlobalLoader />;
  return (
    <section className="flex md:flex-row flex-col gap-10">
      <div className=" w-full md:min-w-[430px] md:w-[33%] h-fit bg-gradient-to-b from-[#232839] to-[#12141D]  rounded-[30px] relative px-10 pb-10 pt-20">
        <Image
          src="/icons/bookmark.png"
          height={100}
          width={100}
          alt="bookmark"
          className="absolute -top-3 left-[46%] w-10 "
        />
        <div className=" mt-5 gap-3 md:gap-10 flex  justify-center flex-wrap">
          <div className="min-h-32 max-h-32 max-w-32 min-w-32 rounded-full bg-yellow-100 overflow-hidden">
            <Image
              src={user.avatar || "/images/images.jpg"}
              height={100}
              width={100}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
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
              {user.name}
            </h1>
            <h1 className="text-light-100 text-sm ">{user.email}</h1>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-white text-xl md:text-2xl font-semibold uppercase">
            details
          </h1>
          <div className="mt-5 flex w-full gap-10">
            <ul className=" flex flex-col gap-3 text-sm md:text-xl w-full font-semibold text-light-100">
              <div className="flex w-full justify-between">
                <li>enrollment no. :</li>
                <li className="text-white">{user.enrollmentNumber}</li>
              </div>{" "}
              <div className="flex w-full justify-between">
                <li>year :</li>
                <li className="text-white">{user.year}</li>
              </div>{" "}
              <div className="flex w-full justify-between">
                <li> department :</li>
                <li className="text-white">{user.department}</li>
              </div>{" "}
              <div className="flex w-full justify-between ">
                <li>phone:</li>
                <li className="text-white">{user.phone}</li>
              </div>{" "}
            </ul>
          </div>
        </div>
        <div className="mt-10 ">
          <UserEdit />
        </div>
      </div>
      <BorrowedBookList />
    </section>
  );
};

export default page;
