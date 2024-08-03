import React, { useEffect, useState } from 'react';
import { SidebarItem, SidebarLinkItem } from './SidebarItem';

export default function Sidebar() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    if (loading) {
      const loadingInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(loadingInterval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 1);

      return () => clearInterval(loadingInterval);
    }

    return () => clearTimeout(timeoutId);
  }, [loading]);

  return (
    <aside className="fixed z-50 flex h-screen w-8 flex-col items-center justify-center overflow-hidden bg-secondary text-primary md:w-12">
      <p className="fixed top-12 -rotate-90 text-nowrap font-semibold text-accent">
        {progress === 100 || !loading ? 'Dev' : progress}
        <span className="animate-pulse">{' - /*'}</span>
      </p>
      <SidebarLinkItem
        href="https://docs.google.com/document/d/1YiTeiRCyGrtfB01SgHnMxjhpKAOmkCD3ZiD5g91_GDc/edit?usp=sharing"
        text="CV"
        className="mb-5 delay-[0.3s]"
      />
      <SidebarItem text="Home" scrollTo="#home" className="mb-12 delay-300" />
      <SidebarItem
        text="Projects"
        scrollTo="#projects"
        className="mb-16 delay-200"
      />
      <SidebarItem text="Credits" scrollTo="#credits" />
      <p className="fixed bottom-12 -rotate-90 text-nowrap font-semibold text-accent">
        {progress === 100 || !loading ? 'Scroll' : 'Loading'}
        <span className="animate-pulse">{' - />'}</span>
      </p>
    </aside>
  );
}
