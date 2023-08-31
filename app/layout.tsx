import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Clover - Fine Artist",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>
          <Link href="/">Chris Clover</Link>
        </h1>
        <div className="p-2">{children}</div>
        <Link href="/biography">Biography</Link>
        <Link href="/contact">Contact</Link>
      </body>
    </html>
  );
}
