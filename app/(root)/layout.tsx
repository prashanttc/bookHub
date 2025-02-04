import Header from "@/components/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container items-center">
      <div className=" w-full">
        <Header/>
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default layout;
