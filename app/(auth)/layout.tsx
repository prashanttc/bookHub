import Image from "next/image";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full min-h-screen bg-[#12141D]">
      <div className="flex w-full h-full">
        <div className=" md:w-[60%] flex items-center justify-center">{children}</div>
        <Image
          src="/img.png"
          height={1000}
          width={1000}
          alt="login-img"
          className="object-cover hidden md:block fixed right-0 w-[40%]  "
        />
      </div>
    </main>
  );
};

export default layout;
