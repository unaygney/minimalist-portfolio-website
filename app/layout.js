"use client";
import { titleFont, bodyFont } from "@/lib/font";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${titleFont.className} ${bodyFont.className} antialiased`}
      >
        <div>Active Path Name : {pathname}</div>
        {children}
      </body>
    </html>
  );
}
