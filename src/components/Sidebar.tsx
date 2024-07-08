import React, { useEffect, useState } from 'react';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  // const [open, setOpen] = useState(false);
  // const [scrollY, setScrollY] = useState(0);

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
      }, 10);

      return () => clearInterval(loadingInterval);
    }

    return () => clearTimeout(timeoutId);
  }, []);

  // function OpenModal() {
  //   const modal = document.querySelector('.modal');
  //   setScrollY(window.scrollY);
  //   modal?.setAttribute('style', `position: fixed; top: -${window.scrollY}px;`);
  //   setOpen(true);
  // }

  // function CloseModal() {
  //   const modal = document.querySelector('.modal');
  //   modal?.setAttribute('style', '');
  //   window.scrollTo(0, scrollY);
  //   setOpen(false);
  // }

  return (
    <aside className="fixed z-50 flex h-screen w-8 flex-col items-center justify-center gap-16 overflow-hidden bg-secondary text-primary md:w-12">
      <p className="fixed top-12 -rotate-90 text-nowrap font-semibold text-accent">
        {progress === 100 ? 'Dev' : progress}
        <span className="animate-pulse">{' - /*'}</span>
      </p>
      {/* {!open ? (
        <h1
          onClick={() => {
            OpenModal();
          }}
        >
          OPEN
        </h1>
      ) : (
        <h1
          onClick={() => {
            CloseModal();
          }}
        >
          CLOSE
        </h1>
      )} */}
      <SidebarItem text="Home" scrollTo="#home" className="delay-300" />
      <SidebarItem text="Projects" scrollTo="#projects" className="delay-200" />
      <SidebarItem text="Credits" scrollTo="#credits" />
      <p className="fixed bottom-12 -rotate-90 text-nowrap font-semibold text-accent">
        {progress === 100 ? 'Scroll' : 'Loading'}
        <span className="animate-pulse">{' - />'}</span>
      </p>
    </aside>
  );
}
