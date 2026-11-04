import Link from "next/link";
export default function Brand() {
  return <Link href="/" className="brand" aria-label="Magpie Services home"><span className="brand-mark" aria-hidden="true">m<span>✦</span></span><span>Magpie<span className="brand-light">Services</span></span></Link>;
}
