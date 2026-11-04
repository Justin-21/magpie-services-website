import Image from "next/image";
import { services, imageUrl } from "@/data/site";
import SectionHeading from "../ui/SectionHeading";
import ActionLink from "../ui/ActionLink";
export default function ServiceDetails() {
  return (
    <section className="container section">
      <SectionHeading label="Our capabilities">
        A connected approach.
        <br />
        <em>From plan to presence.</em>
      </SectionHeading>
      <div className="service-details">
        {services.map((service, index) => (
          <article
            id={service.title.toLowerCase()}
            key={service.title}
            className="service-detail"
          >
            <span className="detail-number">
              0{index + 1}
              <span aria-hidden="true">✳</span>
            </span>
            <div>
              <p className="eyebrow">{service.subtitle}</p>
              <h2>{service.title}</h2>
              <p className="muted">{service.description}</p>
              <div className="tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <ActionLink
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                subtle
              >
                Talk about {service.title.toLowerCase()}
              </ActionLink>
            </div>
            <Image
              src={imageUrl(service.image)}
              alt={service.subtitle}
              width={560}
              height={420}
              sizes="(max-width: 700px) 100vw, 35vw"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
