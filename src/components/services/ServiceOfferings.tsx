import Link from "next/link";

export default function ServiceOfferings({
  offerings,
  linked = false,
}: {
  offerings: string[];
  linked?: boolean;
}) {
  return (
    <ul className="service-offerings">
      {offerings.map((offering) => (
        <li key={offering}>
          <span aria-hidden="true">↗</span>
          {linked ? (
            <Link href={`/contact?service=${encodeURIComponent(offering)}`}>
              {offering}
            </Link>
          ) : (
            offering
          )}
        </li>
      ))}
    </ul>
  );
}
