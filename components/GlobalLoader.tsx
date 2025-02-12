"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    loading && (
      <div className="fixed inset-0 flex flex-col gap-3 items-center justify-center bg-dark-300/80 backdrop-blur-md z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <h1 className="text-white text-2xl sm:text-3xl font-ibm-plex-sans">
          Loading...
        </h1>
      </div>
    )
  );
}
