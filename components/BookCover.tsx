import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import BookCoverSvg from "./BookCoverSvg";

type bookcoverVarient = "extraSmall" | "small" | "regular" | "medium" | "wide";

const varientStyle: Record<bookcoverVarient, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};
type Props = {
  cover: string;
  varient: bookcoverVarient;
  className?: string;
  coverColor: string;
};
const BookCover = ({
  varient = "regular",
  cover = "https://placehold.co/400x600/png",
  className,
  coverColor = "#012B48",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300 ",
        className,
        varientStyle[varient]
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10 "
        style={{ left: "12%", width: "85.5%", height: "88%" }}
      >
        <Image
          src={cover}
          alt="cover"
          fill
          className="rounded-sm object-cover"
        />
      </div>
    </div>
  );
};

export default BookCover;
