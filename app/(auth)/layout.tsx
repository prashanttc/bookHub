import Image from "next/image";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-flex min-h-screen flex-1 bg-pattern bg-cover bg-top bg-dark-100 items-center">
      <div className="flex w-full justify-between">
        <div className="md:p-20 p-10 md:px-32 w-full">{children}</div>
        <Image
          src="/img.png"
          height={1000}
          width={1000}
          alt="login-img"
          className="object-cover hidden md:block h-screen"
        />
      </div>
    </main>
  );
};

export default layout;
