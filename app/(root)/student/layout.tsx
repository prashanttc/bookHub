import Header from "@/components/Header";
import { UserProvider } from "@/context/UserContext";
import { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container items-center">
      <UserProvider>
        <div className=" w-full">
          <Header />
          <div className="mt-20 pb-20">{children}</div>
        </div>
      </UserProvider>
    </main>
  );
};

export default layout;
