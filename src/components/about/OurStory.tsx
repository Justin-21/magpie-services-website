import SectionHeading from "../ui/SectionHeading";
import ActionLink from "../ui/ActionLink";
export default function OurStory() {
  return <section className="container section story-grid"><SectionHeading label="Who we are">Marketing minds.<br /><em>Practical makers.</em></SectionHeading><div className="body-copy"><p>Welcome to Magpie Services. We’re a collective of digital strategists, designers, and storytellers dedicated to helping ambitious brands find their voice — and put it into action.</p><p>We bridge the gap between scroll-stopping creative and real-world experiences. From social media and content to brand activation and production, we bring the right people around the right idea.</p><p>Our approach is simple: listen closely, think clearly, create thoughtfully, and see it through.</p><ActionLink href="/portfolio" subtle>Explore our creative direction</ActionLink></div></section>;
}
