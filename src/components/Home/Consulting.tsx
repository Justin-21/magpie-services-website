import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
const cards = [
  {
    title: "Know where you stand",
    subtitle: "Social media audit",
    symbol: "◎",
    className: "audit",
  },
  {
    title: "Connect with your people",
    subtitle: "Audience strategy",
    symbol: "↗",
    className: "audience",
  },
  {
    title: "Make every idea count",
    subtitle: "Content direction",
    symbol: "✳",
    className: "content",
  },
  {
    title: "Find your next move",
    subtitle: "Campaign planning",
    symbol: "⌘",
    className: "strategy",
  },
];
export default function Consulting() {
  return (
    <section className="container section consulting">
      <SectionHeading
        label="Core consulting"
        description="A fresh perspective, a clear direction, and a plan to move your brand forward."
      >
        A little insight.
        <br />A lot of possibility.
      </SectionHeading>
      <div className="consulting-grid">
        {cards.map((card) => (
          <Link
            key={card.title}
            href="/contact"
            className={`consulting-card ${card.className}`}
          >
            <span className="consulting-symbol" aria-hidden="true">
              {card.symbol}
            </span>
            <h3>{card.title}</h3>
            <span>
              {card.subtitle}
              <b>↗</b>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
