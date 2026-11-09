import { contactEmail, hasPlaceholderContact } from "@/lib/site-config";

export default function LegalContact() {
  return (
    <div className="legal-contact">
      <p>Magpie Services</p>
      {hasPlaceholderContact ? (
        <p>
          {contactEmail}{" "}
          <span className="muted">(placeholder — not monitored)</span>
        </p>
      ) : (
        <a className="text-link" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      )}
    </div>
  );
}
