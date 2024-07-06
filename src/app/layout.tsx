import type { Metadata } from 'next';
import { Courier_Prime } from 'next/font/google';
import './globals.css';
import LocomotiveScrollProvider from '@/components/providers/LocomotiveScrollProvider';
import { cn } from '@/utils/cn';

const courierPrime = Courier_Prime({ weight: '400', subsets: ['latin'] });

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
    <html lang="en" className="overflow-x-hidden bg-primary">
      <body className={cn(courierPrime.className)}>
        <LocomotiveScrollProvider>{children}</LocomotiveScrollProvider>
      </body>
    </html>
  );
}
