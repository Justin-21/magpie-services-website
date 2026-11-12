import Image from "next/image";
import { imageUrl, services } from "@/data/site";
import ActionLink from "../ui/ActionLink";
import SectionHeading from "../ui/SectionHeading";

const featuredServices = {
  "digital-marketing": [
    {
      title: "Advertisement Video Shoots",
      description: "Produce campaign videos that bring your brand and its products to life.",
      image: "photo-1492691527719-9d1e07e534b4",
    },
    {
      title: "Social Media Management",
      description: "Build a consistent social presence with content planning, publishing, and community engagement.",
      image: "photo-1557838923-2985c318be48",
    },
    {
      title: "Meta Ads & Performance Marketing",
      description: "Plan, run, and refine paid campaigns around your audience and goals.",
      image: "photo-1542744094-3a31f272c490",
    },
  ],
  "offline-marketing": [
    {
      title: "RWA Activations",
      description: "Meet residents in their communities through on-ground promotions and experiences.",
      image: "photo-1522071820081-009f0129c71c",
    },
    {
      title: "Retail Branding",
      description: "Help customers find and recognize your brand in stores and at the point of sale.",
      image: "photo-1602143407151-7111542de6e8",
    },
    {
      title: "Mall & IT Park Activations",
      description: "Connect with shoppers and professionals through activations in high-traffic venues.",
      image: "photo-1492684223066-81342ee5ff30",
    },
  ],
};

export default function MarketingServices() {
  return services.map((service, index) => (
    <section
      key={service.id}
      className="container section values-section about-marketing"
    >
      <SectionHeading
        label={`0${index + 1} / ${service.title}`}
        description={service.description}
      >
        {service.subtitle}
      </SectionHeading>
      <div className="values-grid">
        {featuredServices[service.id].map((offering) => (
          <article key={offering.title} className="about-service-card">
            <Image
              src={imageUrl(offering.image)}
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1400px) 33vw, 420px"
            />
            <div className="about-service-card-content">
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
              <ActionLink href={`/contact?service=${encodeURIComponent(offering.title)}`}>
                Let’s make it happen
              </ActionLink>
            </div>
          </article>
        ))}
      </div>
      <ActionLink href={`/services#${service.id}`}>
        View {service.title} services
      </ActionLink>
    </section>
  ));
}
