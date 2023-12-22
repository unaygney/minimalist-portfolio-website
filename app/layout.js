import { titleFont, bodyFont } from "@/lib/font";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titleFont.className} ${bodyFont.className}`}>
        {children}
      </body>
    </html>
  );
}
