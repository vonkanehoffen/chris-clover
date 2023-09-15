import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Parisienne } from "next/font/google";
import Link from "next/link";

const cormorantGaramond = Cormorant_Garamond({
  weight: "500",
  subsets: ["latin"],
});
const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});

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
      <body className={cormorantGaramond.className}>
        <div className="px-2 max-w-5xl mx-auto">
          <header className="py-8">
            <h4 className={`text-center text-xl ${parisienne.className}`}>
              Fine Artist
            </h4>
            <h1 className="text-center text-3xl sm:text-4xl uppercase tracking-widest">
              <Link href="/">Chris Clover</Link>
            </h1>
          </header>
          <main>{children}</main>
          <footer className="py-8">
            <Link href="/biography">Biography</Link>
            <Link href="/contact">Contact</Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
