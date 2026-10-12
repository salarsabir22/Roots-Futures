import type { Metadata } from "next";
import { DM_Sans, Fraunces, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "800"],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Roots & Futures — Plant a tree in Karachi",
  description:
    "Plant a tree in Karachi and educate a child. Gift it, plant in memory of your marhoom, or do a good deed for the city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${notoNaskh.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
