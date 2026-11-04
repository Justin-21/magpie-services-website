import SectionHeading from "../ui/SectionHeading";
import ActionLink from "../ui/ActionLink";
export default function FounderNote() {
  return (
    <section className="container section founder-note">
      <SectionHeading label="The Magpie mindset">
        Good people.
        <br />
        <em>Better possibilities.</em>
      </SectionHeading>
      <div>
        <span className="quote-mark" aria-hidden="true">
          “
        </span>
        <p>
          We believe the best work happens when strategy meets curiosity. When a
          team cares about your brand as much as you do. And when every idea has
          the space to become something extraordinary.
        </p>
        <ActionLink href="/about" subtle>
          Get to know us
        </ActionLink>
      </div>
      <div className="mindset-card">
        <span aria-hidden="true">✳</span>
        <p>
          Small enough to care.
          <br />
          Connected enough
          <br />
          to make it happen.
        </p>
      </div>
    </section>
  );
}
