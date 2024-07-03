import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

export default function LeftSidebar() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (loading) {
      const loadingInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(loadingInterval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 10);

      return () => clearInterval(loadingInterval);
    }
  }, [loading]);

  return (
    <aside className="fixed z-50 flex h-screen w-8 flex-col items-center justify-center gap-16 overflow-hidden bg-secondary text-primary lg:w-12">
      <p className="absolute top-10 -rotate-90 text-nowrap font-semibold text-accent">
        {!loading ? "Dev" : progress}
        <span className="animate-pulse">{" - /*"}</span>
      </p>
      <SidebarItem text="Home" scrollTo="#home" className="delay-300" />
      <SidebarItem text="Projects" scrollTo="#projects" className="delay-200" />
      <SidebarItem text="Credits" scrollTo="#credits" />
      <p className="absolute bottom-10 -rotate-90 text-nowrap font-semibold text-accent">
        {!loading ? "Scroll" : "Loading"}
        <span className="animate-pulse">{" - />"}</span>
      </p>
    </aside>
  );
}
