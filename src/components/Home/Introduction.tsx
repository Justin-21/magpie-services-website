import Image from "next/image";
import ActionLink from "../ui/ActionLink";
import { imageUrl } from "@/data/site";
export default function Introduction() {
  return (
    <section className="container section introduction">
      <div>
        <p className="eyebrow">✳ Introduction</p>
        <h2 className="intro-statement">
          We’re a social media agency driven by{" "}
          <span>creativity, curiosity, and a little bit of bold.</span> We help
          brands stand out with strategic content, thoughtful design, and
          impactful experiences.
        </h2>
        <ActionLink href="/about" subtle>
          Meet the minds behind Magpie
        </ActionLink>
      </div>
      <div className="intro-image">
        <Image
          src={imageUrl("photo-1522071820081-009f0129c71c")}
          alt="A team sharing ideas around a table"
          fill
          sizes="(max-width: 700px) 100vw, 35vw"
        />
        <span>
          Great work starts
          <br />
          with great people. ✳
        </span>
      </div>
    </section>
  );
}
