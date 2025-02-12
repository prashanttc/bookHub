import Header from "@/components/Header";
import { UserProvider } from "@/context/UserContext";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner"
import { BookProvider } from "@/context/BookContext";


const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container items-center">
      <UserProvider>
        <BookProvider>
        <div className=" w-full">
          <Header />
          <div className="mt-20 pb-20">{children}</div>
          <Toaster />
        </div>
        </BookProvider>
      </UserProvider>
    </main>
  );
};

export default layout;
