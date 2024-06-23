import type { Metadata } from "next";
import { Alice } from "next/font/google";
import "./globals.css";
import LocomotiveScrollProvider from "@/providers/LocomotiveScrollProvider";

const alice = Alice({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fadhil Kholaf",
  description: "Junior Fullstack Developer",
  creator: "Muhammad Fadhil Kholaf",
  keywords: "Muhammad, Fadhil, Kholaf, Personal, Website, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-primary">
      <body className={alice.className}>
        <LocomotiveScrollProvider>{children}</LocomotiveScrollProvider>
      </body>
    </html>
  );
}
