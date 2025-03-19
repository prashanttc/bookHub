import React from "react";
import BookCover from "./BookCover";
import Image from "next/image";

const BorrowedBookCard = ({
  title,
  genre,
  imageUrl,
  color,
  dueDate,
}: lonedBookProps) => {
  return (
    <div className=" w-full md:w-[250px] rounded-2xl bg-[#12141D] p-5 flex md:block items-center justify-center">
      <div
        className={`w-full bg-${[
          color,
        ]} rounded-2xl flex items-center justify-center p-5`}
      >
        <BookCover cover={imageUrl} varient="medium" coverColor={color} />
      </div>
      <div className="mt-2 flex md:w-full w-[50%] flex-col gap-3">
        <h1 className="text-xl font-semibold text-white ">{title}</h1>
        <h1 className="text-light-100 text-sm italic">{genre}</h1>
        <div className="flex gap-1">
          <Image src="/icons/borrowed.svg" height={15} width={15} alt="book" />
          <h1 className="text-light-100 text-sm ">
            {" "}
            borrowed on{" "}
            {new Date(dueDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            })}{" "}
          </h1>
        </div>
        <h1 className=" text-sm text-white">4 day left to due</h1>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
