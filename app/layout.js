"use client";
import { titleFont, bodyFont } from "@/lib/font";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${titleFont.className} ${bodyFont.className} antialiased `}
      >
        <Navbar activePage={pathname} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
