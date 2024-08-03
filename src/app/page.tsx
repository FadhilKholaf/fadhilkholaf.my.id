'use client';

import Sidebar from '@/components/Sidebar';
import Home from '@/components/parts/Home';
import Flower from '@/components/Flower';
import Projects from '@/components/parts/Projects';
import Header from '@/components/Header';
import Credits from '@/components/parts/Credits';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
import Cursor from '@/components/Cursor';
import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';
import { ShootingStars } from '@/components/ui/ShootingStars';
import { StarsBackground } from '@/components/ui/StarsBackground';

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <main className={cn({ fixed: loading })}>
      <Cursor />
      <Sidebar />
      <Header />
      <Footer />
      <main className="modal overflow-hidden md:pl-4">
        <Intro />
        <Home />
        <section className="fixed top-0 -z-20 h-screen w-screen lg:hidden">
          <ShootingStars />
          <StarsBackground />
        </section>
        <Flower />
        <Projects />
        <Credits />
      </main>
    </main>
  );
}
