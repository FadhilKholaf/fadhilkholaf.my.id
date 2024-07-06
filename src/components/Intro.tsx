import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

export default function Intro() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main
      className={cn(
        'absolute z-40 flex h-screen w-screen items-center justify-center overflow-hidden text-nowrap bg-secondary text-lg transition-all duration-1000 ease-out',
        {
          'w-0': !loading
        }
      )}
    >
      Muhammad Fadhil Kholaf
    </main>
  );
}
