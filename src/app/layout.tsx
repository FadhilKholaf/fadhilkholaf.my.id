import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import LocomotiveScrollProvider from "@/providers/LocomotiveScrollProvider";

const playfairDisplay = Playfair_Display({ weight: "400", subsets: ["latin"] });

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
      <body className={playfairDisplay.className}>
        <LocomotiveScrollProvider>{children}</LocomotiveScrollProvider>
      </body>
    </html>
  );
}
