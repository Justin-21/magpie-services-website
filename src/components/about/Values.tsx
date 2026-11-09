import SectionHeading from "../ui/SectionHeading";
const values = [
  {
    title: "Curiosity first",
    description:
      "We ask better questions to find the ideas hiding in plain sight.",
  },
  {
    title: "Creativity with purpose",
    description:
      "Every choice connects back to your audience, your story, and your goals.",
  },
  {
    title: "One connected team",
    description:
      "We bring strategy, creative, and execution together from the very beginning.",
  },
];
export default function Values() {
  return (
    <section className="container section values-section">
      <SectionHeading label="What matters to us">
        A shared mindset.
        <br />
        <em>A different perspective.</em>
      </SectionHeading>
      <div className="values-grid">
        {values.map((value, index) => (
          <article key={value.title}>
            <span className="value-symbol" aria-hidden="true">
              {["✳", "↗", "◎"][index]}
            </span>
            <p className="eyebrow">0{index + 1}</p>
            <h3>{value.title}</h3>
            <p className="muted">{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
