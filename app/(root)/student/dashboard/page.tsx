"use client";
import BookList from "@/components/sections/BookList";
import { Skeleton } from "@/components/ui/skeleton";
import { useBooks } from "@/context/BookContext";
import { useUser } from "@/context/UserContext";

const Home = () => {
  const { books, loading: bookloading } = useBooks();
  const { user, loading: userloading } = useUser();
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="text-white flex flex-col justify-center items-center text-center w-fit gap-5">
        {userloading ? (
          <Skeleton className="w-32 h-10 rounded-lg" />
        ) : (
          <>
            <p className="uppercase font-ibm-plex-sans text-light-100 ">
              Welcome{" "}
              <span className="text-white lowercase text-2xl">
                {user?.name}!!
              </span>
            </p>
          </>
        )}
        <h1 className="font-ibm-plex-sans text-2xl md:text-5xl font-semibold leading-tight">
          Explore and Search for <br />
          <span className="text-light-200">Any Book</span> In Our Library
        </h1>
      </div>
      <BookList books={books} loading={bookloading} />
      <BookList books={books} loading={bookloading} />
    </div>
  );
};

export default Home;
