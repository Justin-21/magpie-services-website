import SectionHeading from "../ui/SectionHeading";
export default function Process() {
  return (
    <section className="container section border-t border-[var(--line)]">
      <SectionHeading label="How we work">
        Less back and forth.
        <br />
        <em>More moving forward.</em>
      </SectionHeading>
      <div className="grid grid-cols-4 gap-[30px] max-[760px]:grid-cols-2 max-[760px]:gap-x-[25px] max-[760px]:gap-y-[35px]">
        {[
          {
            title: "Discover",
            text: "We listen, ask questions, and understand your brand’s world.",
          },
          {
            title: "Define",
            text: "Together, we shape the direction, scope, and a clear plan.",
          },
          {
            title: "Deliver",
            text: "Our team brings the idea to life and coordinates the details.",
          },
          {
            title: "Develop",
            text: "We review what we learn and keep building on what works.",
          },
        ].map((step, index) => (
          <article
            key={step.title}
            data-reveal-on-scroll
            className="border-t border-[var(--line)] pt-5 transition-transform duration-[260ms] motion-safe:hover:-translate-y-[3px]"
          >
            <span className="text-xs text-accent">0{index + 1} ↗</span>
            <h3 className="mt-[25px]! mb-[15px]! text-[25px]">{step.title}</h3>
            <p className="muted text-xs">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
