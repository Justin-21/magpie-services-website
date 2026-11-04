import type { ReactNode } from "react";
export default function SectionHeading({ label, children, description, level = 2 }: { label: string; children: ReactNode; description?: string; level?: 1 | 2 }) {
  const Heading = level === 1 ? "h1" : "h2";
  return <div className="section-heading"><p className="eyebrow"><span aria-hidden="true">✳</span> {label}</p><Heading>{children}</Heading>{description && <p className="muted section-description">{description}</p>}</div>;
}
