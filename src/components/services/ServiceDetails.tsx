import Image from "next/image";
import { services, imageUrl } from "@/data/site";
import SectionHeading from "../ui/SectionHeading";
import ServiceOfferings from "./ServiceOfferings";
import ActionLink from "../ui/ActionLink";

export default function ServiceDetails() {
  return (
    <section className="container section">
      <SectionHeading label="Our capabilities">
        A connected approach.
        <br />
        <em>Digital to on-ground.</em>
      </SectionHeading>
      <div className="mt-[60px]">
        {services.map((service, index) => {
          const channel = service.id === "digital-marketing" ? "Online" : "Offline";

          return (
            <article
              id={service.id}
              key={service.id}
              data-reveal-on-scroll
              className="grid grid-cols-[.25fr_1fr_.9fr] items-start gap-[50px] border-t border-[var(--line)] py-[50px] max-[1100px]:grid-cols-[.15fr_1fr_.9fr] max-[1100px]:gap-[25px] max-[760px]:grid-cols-[35px_minmax(0,1fr)] max-[760px]:gap-5 max-[760px]:py-[35px]"
            >
              <span className="flex items-center gap-[18px] text-[24px] max-[760px]:flex-col max-[760px]:gap-2.5">
                0{index + 1}
                <span aria-hidden="true" className="text-[32px] text-accent">✳</span>
              </span>
              <div>
                <h2 className="text-[46px] max-[760px]:text-[38px]">{channel}</h2>
                <ServiceOfferings offerings={service.offerings} linked />
                <div className="mt-6 mb-2">
                  <ActionLink
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    subtle
                  >
                    Talk about {channel.toLowerCase()} marketing
                  </ActionLink>
                </div>
              </div>
              <Image
                src={imageUrl(service.image)}
                alt=""
                width={560}
                height={420}
                sizes="(max-width: 760px) 100vw, 35vw"
                className="sticky top-[30px] h-[260px] w-full rounded-lg object-cover max-[760px]:col-start-2 max-[760px]:h-[220px]"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
