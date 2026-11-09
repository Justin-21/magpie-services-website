import Image from "next/image";
import { imageUrl } from "@/data/site";
export default function PageHero({
  label,
  title,
  emphasis,
  description,
  image,
}: {
  label: string;
  title: string;
  emphasis: string;
  description: string;
  image: string;
}) {
  return (
    <section className="page-hero container">
      <div className="page-hero-copy">
        <p className="eyebrow">{label} / Magpie Services</p>
        <h1>
          {title} <strong>{emphasis}</strong>
        </h1>
        <div className="hero-description">
          <span aria-hidden="true">↗</span>
          <p>{description}</p>
        </div>
      </div>
      <div className="hero-image-stack">
        <div className="stack-back" />
        <Image
          src={imageUrl(image)}
          alt="Creative team working together on a marketing project"
          width={600}
          height={750}
          priority
        />
        <span className="image-stamp">Ideas into impact. ✳</span>
      </div>
    </section>
  );
}
