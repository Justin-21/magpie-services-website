import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import {
  Instrument_Serif,
  Manrope,
  Special_Gothic_Expanded_One,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/theme/ThemeProvider";

const themeInitScript = `(()=>{try{const t=localStorage.getItem('magpie-theme');const d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch{}})()`;

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
});

const specialGothic = Special_Gothic_Expanded_One({
  variable: "--font-special-gothic",
  adjustFontFallback: false,
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Magpie Services — Ideas into impact",
    template: "%s | Magpie Services",
  },
  description:
    "Magpie Services connects marketing strategy, creative content, brand activation, and coordinated execution to help ambitious brands grow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${manrope.variable} ${instrumentSerif.variable} ${specialGothic.variable} h-full antialiased selection:bg-orange-500 selection:text-white font-manrope`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ThemeProvider>
          <Navbar />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
