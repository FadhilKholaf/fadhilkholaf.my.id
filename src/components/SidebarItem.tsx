import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";

export default function SidebarItem({
  text,
  scrollTo,
  className,
}: {
  text: string;
  scrollTo: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <Link
      href={scrollTo}
      data-scroll
      data-scroll-to
      className={cn(
        "translate-x-8 -rotate-90 font-semibold transition-all duration-500 ease-out",
        className,
        {
          "translate-x-0": !loading,
        },
      )}
    >
      {text}
    </Link>
  );
}
