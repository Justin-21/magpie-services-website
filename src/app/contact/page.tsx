import type { Metadata } from "next";
import { services } from "@/data/site";
import ContactIntro from "@/components/contact/ContactIntro";
import ContactForm from "@/components/contact/ContactForm";
export const metadata: Metadata = { title: "Contact" };
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const initialService = services.some((item) => item.title === service)
    ? service
    : "";
  return (
    <main className="container section contact-layout">
      <ContactIntro />
      <ContactForm initialService={initialService} />
    </main>
  );
}
