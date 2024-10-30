import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Andrew Davies' Portfolio - Find Your Chimps",
  description: "A Personal Web Development Journey with Andrew Davies. Come along for the ride.",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="max-w-screen-lg mx-auto px-4 border-2">
        <Header />
        <main className="container w-full">{children}</main>
        
      </body>
    </html>
  );
}
