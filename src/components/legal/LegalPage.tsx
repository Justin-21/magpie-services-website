import type { ReactNode } from "react";
import Link from "next/link";
import { legalUpdated, hasPlaceholderContact } from "@/lib/site-config";

export type LegalSection = { id: string; title: string; content: ReactNode };

export default function LegalPage({
  title,
  introduction,
  sections,
}: {
  title: string;
  introduction: string;
  sections: LegalSection[];
}) {
  return (
    <main className="container section legal-page">
      <header className="legal-header">
        <p className="eyebrow">Magpie Services / Legal</p>
        <h1>{title}</h1>
        <p className="legal-intro muted">{introduction}</p>
        <p className="legal-date">Last updated: {legalUpdated}</p>
        {hasPlaceholderContact && (
          <p className="legal-review-note">
            Review copy: business contact details are placeholders and will be
            updated before launch.
          </p>
        )}
      </header>
      <div className="legal-layout">
        <nav className="legal-toc" aria-label={`${title} contents`}>
          <p className="eyebrow">On this page</p>
          {sections.map((section, index) => (
            <a key={section.id} href={`#${section.id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.title}
            </a>
          ))}
        </nav>
        <div className="legal-content">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
            >
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.content}
            </section>
          ))}
          <Link href="/" className="text-link">
            Back to home <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
