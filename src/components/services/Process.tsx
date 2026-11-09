import SectionHeading from "../ui/SectionHeading";
export default function Process() {
  return (
    <section className="container section process-section">
      <SectionHeading label="How we work">
        Less back and forth.
        <br />
        <em>More moving forward.</em>
      </SectionHeading>
      <div className="process-grid">
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
          <article key={step.title}>
            <span>0{index + 1} ↗</span>
            <h3>{step.title}</h3>
            <p className="muted">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
