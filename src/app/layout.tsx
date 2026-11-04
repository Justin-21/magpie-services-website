import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import {
  Instrument_Serif,
  Manrope,
  Syne,
  Special_Gothic_Expanded_One,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const specialGothic = Special_Gothic_Expanded_One({
  variable: "--font-special-gothic",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magpie Services",
  description: "Mapgie Service | Creative Studio Agency",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} ${syne.variable} ${specialGothic.variable} h-full antialiased selection:bg-orange-500 selection:text-white font-manrope`}
    >
      <body className="flex flex-col relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
