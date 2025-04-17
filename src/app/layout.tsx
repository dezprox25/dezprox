import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./home/components/Navbar";
import Fotter from './home/components/Fotter'
import Footertop from "./home/components/Footertop";
import SmoothScrolling from "@/globls/smooth-scrolling";
import Head from 'next/head';




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dezprox",
  description: "Dezprox - School ERP and Management Solutions",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="Rn9IexP0u-qIyYNdioiPVKGBTYcJGWjKQYNsqye7mXo" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <SmoothScrolling>
          <main className="">
            {children}
          </main>
        </SmoothScrolling>
        <Footertop />
        <Fotter />
      </body>
    </html>
  );
}