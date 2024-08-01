import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function SidebarItem({
  text,
  scrollTo,
  className
}: {
  text: string;
  scrollTo: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Link
      href={scrollTo}
      data-scroll
      data-scroll-to
      className={cn(
        'relative translate-x-8 -rotate-90 font-semibold transition-all duration-500 ease-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100',
        className,
        {
          'translate-x-0': !loading
        }
      )}
    >
      {text}
    </Link>
  );
}

export function SidebarLinkItem({
  text,
  href,
  className
}: {
  text: string;
  href: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        'relative translate-x-8 -rotate-90 font-semibold transition-all duration-500 ease-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100',
        className,
        {
          'translate-x-0': !loading
        }
      )}
    >
      {text}
    </Link>
  );
}
