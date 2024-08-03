import { Analytics } from '@vercel/analytics/react';
import { Courier_Prime } from 'next/font/google';
import type { Metadata } from 'next';

import LocomotiveScrollProvider from '@/components/providers/LocomotiveScrollProvider';
import { cn } from '@/utils/cn';
import './globals.css';
import ScrambleTextProvider from '@/components/providers/ScrambleTextProvider';

const courierPrime = Courier_Prime({
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Fadhil Kholaf',
  description: 'Frontend Developer | React',
  creator: 'Muhammad Fadhil Kholaf',
  keywords: 'Muhammad, Fadhil, Kholaf, Personal, Website, Portfolio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="select-none overflow-x-hidden bg-primary">
      <body className={cn(courierPrime.className)}>
        <LocomotiveScrollProvider>
          <ScrambleTextProvider>{children}</ScrambleTextProvider>
          <Analytics />
        </LocomotiveScrollProvider>
      </body>
    </html>
  );
}
