import "./portfolio.css";
import { pageMetadata } from "@/lib/site-config";
import PageHero from "@/components/ui/PageHero";
import CaseStudies from "@/components/portfolio/CaseStudies";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
export const metadata = pageMetadata("Portfolio", "Explore Magpie Services client case studies and creative concepts for online and offline marketing.", "/portfolio");
export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        label="Our portfolio"
        title="Campaigns that turn passive audiences into"
        emphasis="active connections."
        description="Explore client campaigns and creative concepts across online and offline marketing."
        image="photo-1492684223066-81342ee5ff30"
      />
      <CaseStudies />
      <ProjectGallery />
    </main>
  );
}
