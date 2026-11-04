import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import Process from "@/components/services/Process";
export const metadata: Metadata = { title: "Services" };
export default function ServicesPage() {
  return (
    <main>
      <PageHero
        label="Our services"
        title="End-to-end strategies designed to"
        emphasis="scale your impact."
        description="We build integrated marketing solutions through creative strategy and coordinated execution. One connected team. Every touchpoint considered."
        image="photo-1557838923-2985c318be48"
      />
      <ServiceDetails />
      <Process />
    </main>
  );
}
