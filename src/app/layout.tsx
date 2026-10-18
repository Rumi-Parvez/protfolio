import type { Metadata } from "next";
import "./globals.css";

import {
  Inter,
  Fjalla_One,
  Libre_Caslon_Text,
  Italiana,
} from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla",
  display: "swap",
});

const libreCaslon = Libre_Caslon_Text({
  weight: ['400', '700'], 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-caslon', 
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rumi Parvez",
  description: "Rumi Parvez — Full-Stack Web Developer building modern, responsive web applications with Next.js, React, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fjallaOne.variable} ${libreCaslon.variable} ${italiana.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar></Navbar>

        <main>
          {children}
          </main>
          <Footer></Footer>
          </body>
    </html>
  );
}