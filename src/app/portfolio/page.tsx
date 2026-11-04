import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
export const metadata: Metadata = { title: "Portfolio" };
export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        label="Our portfolio"
        title="Campaigns that turn passive audiences into"
        emphasis="active connections."
        description="A look at how strategy and creativity can come together. Explore concept work across brand identities, campaigns, and content."
        image="photo-1492684223066-81342ee5ff30"
      />
      <ProjectGallery />
    </main>
  );
}
