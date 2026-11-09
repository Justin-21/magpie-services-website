import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/data/site";
export default function Hero() {
  return (
    <section className="home-hero container">
      <div className="hero-topline">
        <p className="eyebrow">Independent minds. Connected ideas.</p>
        <span className="availability">
          <i /> Open for collaborations
        </span>
      </div>
      <div className="home-title">
        <h1>
          Your social media
          <br />
          <span>growth engine.</span>
        </h1>
        <Link
          href="/contact"
          className="round-stamp"
          aria-label="Let's create something great"
        >
          LET’S CREATE
          <br />
          <span>↗</span>
          <br />
          SOMETHING GREAT
        </Link>
      </div>
      <div className="hero-cards">
        <Link href="/portfolio" className="hero-card photo-card">
          <Image
            src={imageUrl("photo-1524504388940-b1c1722653e1")}
            alt="Portrait with a creative, expressive spirit"
            fill
            priority
            sizes="(max-width: 700px) 50vw, 25vw"
          />
          <span className="card-index">01 / EXPLORE</span>
          <h2>
            Big ideas.
            <br />
            Bigger impact. ↗
          </h2>
        </Link>
        <Link href="/services" className="hero-card identity-card">
          <span className="card-index">02 / CONNECT</span>
          <span className="tiny-label">
            A little strategy.
            <br />A lot of personality.
          </span>
          <h2>
            Social
            <br />
            <em>identity.</em>
          </h2>
          <span className="identity-orbit" aria-hidden="true">
            ✳
          </span>
          <span className="card-bottom">Stand out. Stay relevant. ↗</span>
        </Link>
        <Link href="/services" className="hero-card gradient-card">
          <span className="card-index">03 / GROW</span>
          <span className="gradient-flower" aria-hidden="true">
            ✳
          </span>
          <h2>
            Make your
            <br />
            next move
            <br />
            <em>matter.</em> ↗
          </h2>
        </Link>
        <Link href="/contact" className="hero-card brief-card">
          <span className="card-index">04 / START SOMETHING</span>
          <span className="brief-symbol" aria-hidden="true">
            ↗
          </span>
          <h2>
            Your brand.
            <br />
            Our next
            <br />
            <em>big idea.</em>
          </h2>
          <span className="card-bottom">Let’s talk possibilities ↗</span>
        </Link>
      </div>
    </section>
  );
}
