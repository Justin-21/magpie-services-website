import { pageMetadata } from "@/lib/site-config";
import Hero from "@/components/Home/Hero";
import Introduction from "@/components/Home/Introduction";
import Capabilities from "@/components/Home/Capabilities";
import Consulting from "@/components/Home/Consulting";
import Services from "@/components/Home/Services";
import FounderNote from "@/components/Home/FounderNote";
import InfiniteTape from "@/components/InfiniteTape";
export const metadata = pageMetadata("Magpie Services — Ideas into impact", "Digital and offline marketing, creative production, social media, and on-ground brand experiences from Magpie Services.", "/");

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Capabilities />
      <InfiniteTape />
      <Consulting />
      <Services />
      <FounderNote />
    </main>
  );
}
