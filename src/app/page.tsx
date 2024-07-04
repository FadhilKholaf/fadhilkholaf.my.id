"use client";

import LeftSidebar from "@/components/LeftSidebar";
import Home from "@/parts/Home";
import { useState } from "react";
import { cn } from "@/utils/cn";
import Flower from "@/parts/Flower";
import Projects from "@/parts/Projects";
import Navbar from "@/components/Navbar";
import Credits from "@/parts/Credits";
import Footer from "@/components/Footer";
import Intro from "@/parts/Intro";
import Cursor from "@/components/Cursor";

export default function Page() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <main className={cn({ fixed: loading })}>
      <Cursor />
      <LeftSidebar />
      <Navbar />
      <Footer />
      <main className="overflow-hidden md:pl-4">
        {loading && <Intro />}
        <Home />
        <Flower />
        <Projects />
        <Credits />
      </main>
    </main>
  );
}
