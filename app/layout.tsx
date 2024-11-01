import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const roboto = localFont({
  src: "./fonts/Roboto-Black.ttf", // Adjust the path if needed
  variable: "--font-roboto",
  weight: "100 900", // Adjust weights as appropriate for your font
});

export const metadata: Metadata = {
  title: "Andrew Davies' Portfolio - Find Your Chimps",
  description:
    "A Personal Web Development Journey with Andrew Davies. Come along for the ride.",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased max-w-screen-lg mx-auto px-4`}>
        <Header />
        <main className="container w-full">{children}</main>
      </body>
    </html>
  );
}
