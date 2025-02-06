import AuthForm from "@/components/forms/AuthForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full pt-20  p-10 md:p-32 flex flex-col gap-4">
      <div className="flex gap-2 mb-5">
        <Image src="/icons/logo.svg" height={50} width={50} alt="book-logo" />
        <h1 className="text-white text-3xl  font-semibold font-ibm-plex-sans">
          BookHub
        </h1>
      </div>
      <h1 className="text-white text-3xl font-semibold">
        Create your library account
      </h1>
      <p className="text-light-100 ">already a user? please <Link href='/signIn' className="text-light-200 underline"> login here</Link></p>
      <AuthForm type='signUp'/>
    </div>
  );
};

export default page;
