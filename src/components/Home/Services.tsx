"use client";

import { useState } from "react";
import Image from "next/image";
import { services, imageUrl } from "@/data/site";
import SectionHeading from "../ui/SectionHeading";
import ActionLink from "../ui/ActionLink";
import Accordion from "../ui/Accordion";
import ServiceOfferings from "../services/ServiceOfferings";

export default function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];
  return (
    <section className="container section" id="what-we-do">
      <div className="section-top">
        <SectionHeading label="What we do" description="Digital and on-ground marketing, brought together to create impactful brand experiences across every touchpoint.">
          Online presence.<br /><em>Real-world impact.</em>
        </SectionHeading>
        <ActionLink href="/services" subtle>Explore all services</ActionLink>
      </div>
      <div className="services-layout">
        <Accordion
          onActiveChange={setActive}
          items={services.map(item => ({
            id: item.id,
            title: item.title,
            content: <><p>{item.description}</p><ServiceOfferings offerings={item.offerings} /></>,
          }))}
        />
        <div className="service-image" key={service.id}>
          <Image src={imageUrl(service.image)} alt={service.subtitle} fill sizes="(max-width: 700px) 100vw, 45vw" />
          <div>
            <span>0{active + 1} / {service.title}</span>
            <h3>{service.subtitle}</h3>
            <ActionLink href={`/contact?service=${encodeURIComponent(service.title)}`}>Let’s make it happen</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
