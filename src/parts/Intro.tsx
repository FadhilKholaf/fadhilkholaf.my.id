import { cn } from "@/utils/cn";
import { useState } from "react";

export default function Intro() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <main
      className={cn(
        "absolute z-40 flex h-screen w-screen items-center justify-center overflow-hidden text-nowrap bg-secondary text-2xl transition-all duration-1000 ease-out",
        {
          "w-0": !loading,
        },
      )}
    >
      Muhammad Fadhil Kholaf
    </main>
  );
}
