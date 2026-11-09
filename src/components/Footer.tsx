import Link from "next/link";
import { navigation, legalNavigation } from "@/data/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <Link href="/contact" className="footer-cta">
              Let’s make
              <br />
              some noise. <span>↗</span>
            </Link>
          </div>
          <div className="footer-note">
            Good ideas deserve
            <br />
            great execution.<p>Strategy. Creativity. Impact.</p>
          </div>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-wordmark">
          magpie services<span>®</span>
        </div>
        <nav className="footer-legal" aria-label="Legal navigation">
          {legalNavigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Magpie Services</span>
          <span>Built on ideas. Driven by people.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
