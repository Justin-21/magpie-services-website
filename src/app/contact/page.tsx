import { pageMetadata } from "@/lib/site-config";
import { serviceOptions } from "@/data/site";
import ContactIntro from "@/components/contact/ContactIntro";
import ContactForm from "@/components/contact/ContactForm";
export const metadata = pageMetadata("Contact", "Prepare a project brief for digital or offline marketing with Magpie Services.", "/contact");
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const initialService = serviceOptions.includes(service ?? "")
    ? service
    : "";
  return (
    <main className="container section contact-layout">
      <ContactIntro />
      <ContactForm initialService={initialService} />
    </main>
  );
}
