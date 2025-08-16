import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {} from "next/font/google";
import SplashCursor from "@/components/ui/splash-cursor";
import { Analytics } from "@vercel/analytics/next";
import MobileWarning from "@/components/MobileWarning";

export const metadata: Metadata = {
  title:
    "Portfolio | Ramkumar (fuzziecoder)| Web developer & Data analist",
  description:
    "Crafting compelling narratives through design, merging creativity with functionality seamlessly.",
  icons: {
    icon: [
      { url: '/favicon-simple.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon-simple.svg',
    apple: '/favicon-simple.svg',
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="c56bd831-c7c4-4e47-ad03-0dbad2be1900"
        />
      </head>
      <body className={montserrat.className}>
        <SplashCursor />
        <MobileWarning />
        {children}
        <Analytics />
      </body>
    </html>
  );
}