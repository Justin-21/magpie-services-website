"use client";
import { useState } from "react";
import Image from "next/image";
import { services, imageUrl } from "@/data/site";
import SectionHeading from "../ui/SectionHeading";
import ActionLink from "../ui/ActionLink";
export default function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];
  return (
    <section className="container section">
      <div className="section-top">
        <SectionHeading label="What we do">
          From the first idea
          <br />
          to the final impact.
        </SectionHeading>
        <ActionLink href="/services" subtle>
          Explore all services
        </ActionLink>
      </div>
      <div className="services-layout">
        <div className="service-list">
          {services.map((item, index) => (
            <div
              className={`service-item ${active === index ? "selected" : ""}`}
              key={item.title}
            >
              <h3>
                <button
                  aria-expanded={active === index}
                  aria-controls={`service-description-${index}`}
                  onClick={() => setActive(index)}
                >
                  <span className="service-number">0{index + 1}</span>
                  {item.title}
                  <span className="service-plus">
                    {active === index ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={`service-description-${index}`}
                hidden={active !== index}
              >
                <p>{item.description}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="service-image">
          <Image
            key={service.image}
            src={imageUrl(service.image)}
            alt={service.subtitle}
            fill
            sizes="(max-width: 700px) 100vw, 45vw"
          />
          <div>
            <span>
              0{active + 1} / {service.title}
            </span>
            <h3>{service.subtitle}</h3>
            <ActionLink href="/contact">Let’s make it happen</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
