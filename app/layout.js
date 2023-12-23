"use client";
import { titleFont, bodyFont } from "@/lib/font";
import "./globals.css";
import "animate.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${titleFont.className} ${bodyFont.className} antialiased flex flex-col w-full h-full `}
      >
        <Navbar activePage={pathname} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
