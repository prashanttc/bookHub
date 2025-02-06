import AuthForm from "@/components/forms/AuthForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#12141D] w-full h-full rounded-2xl p-10 flex flex-col gap-4">
      <div className="flex gap-2 mb-5">
        <Image src="/icons/logo.svg" height={32} width={32} alt="book-logo" />
        <h1 className="text-white text-2xl  font-semibold font-ibm-plex-sans">
          BookHub
        </h1>
      </div>
      <h1 className="text-white text-3xl font-semibold">
        Create your library account
      </h1>
      <p className="text-light-100 ">please fill out all the information</p>
      <AuthForm/>
    </div>
  );
};

export default page;
