import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [rotation, setRotation] = useState('');

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a');

    function CursorFollow(e: MouseEvent) {
      cursor?.setAttribute(
        'style',
        `transform: translate(${e.clientX - 20}px, ${e.clientY - 20}px) ${rotation};`
      );
    }

    function handleMouseEnter() {
      setRotation('rotate(45deg)');
    }

    function handleMouseLeave() {
      setRotation('');
    }

    window.addEventListener('mousemove', CursorFollow);
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', CursorFollow);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [rotation]);

  return (
    <span
      className={cn(
        'cursor pointer-events-none invisible fixed z-[999] h-10 w-10 mix-blend-difference transition-all duration-300 ease-out before:absolute before:h-1 before:w-10 before:translate-y-[18px] before:bg-secondary before:mix-blend-difference after:absolute after:h-1 after:w-10 after:translate-y-[18px] after:rotate-90 after:bg-secondary after:mix-blend-difference lg:visible'
      )}
    ></span>
  );
}
