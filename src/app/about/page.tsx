import { pageMetadata } from "@/lib/site-config";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/about/OurStory";
import Values from "@/components/about/Values";
import Services from "@/components/Home/Services";
import InfiniteTape from "@/components/InfiniteTape";
export const metadata = pageMetadata("About", "Meet the strategists, designers, and makers behind Magpie Services.", "/about");
export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About us"
        title="Connecting marketing ideas with"
        emphasis="practical execution."
        description="A collective of digital strategists, designers, and storytellers dedicated to helping ambitious brands find their voice — and put it into action."
        image="photo-1521737711867-e3b97375f902"
      />
      <OurStory />
      <InfiniteTape items={["Creative", "Agency", "Connected", "Ideas"]} />
      <Services />
      <Values />
    </main>
  );
}
