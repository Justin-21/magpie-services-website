import Link from "next/link";
import type { ReactNode } from "react";
export default function ActionLink({
  href,
  children,
  subtle = false,
}: {
  href: string;
  children: ReactNode;
  subtle?: boolean;
}) {
  return (
    <Link href={href} className={subtle ? "text-link" : "action-link"}>
      <span className="action-label">{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
