import type { Metadata } from "next";
import { Syne, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dvorani Trockenbau",
  description:
    "Trockenbau mit Augenmaß. Wände, Decken, Akustikelemente und Designlösungen – für Privatwohnungen und Gewerbeobjekte.",
  keywords: ["Trockenbau", "Innenausbau", "Akustik", "Gipskarton", "Dvorani"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${syne.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
