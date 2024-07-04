"use client";

import { cn } from "@/utils/cn";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    function CursorFollow(e: MouseEvent) {
      cursor?.setAttribute(
        "style",
        `transform: translate(${e.clientX - 20}px, ${e.clientY}px);`,
      );
    }

    window.addEventListener("mousemove", (e) => CursorFollow(e));

    return () => {
      window.removeEventListener("mousemove", (e) => CursorFollow(e));
    };
  }, []);

  return (
    <span
      className={cn(
        "cursor pointer-events-none invisible fixed z-[999] mix-blend-difference transition-all duration-500 ease-out before:absolute before:h-1 before:w-10 before:rotate-45 before:rounded-full before:bg-secondary before:mix-blend-difference after:absolute after:h-1 after:w-10 after:-rotate-45 after:rounded-full after:bg-secondary after:mix-blend-difference lg:visible",
      )}
    ></span>
  );
}
