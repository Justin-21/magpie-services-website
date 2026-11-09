export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];
// Source: “What We Do”, page 4 of the Magpie Services Canva deck.
export const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Creative production, social presence & performance",
    description:
      "Build a strong digital presence with social media, performance marketing, and creative production. We connect strategy and creativity to help your brand earn attention, engage its audience, and grow.",
    tags: ["Content production", "Social media", "Performance marketing"],
    image: "photo-1557838923-2985c318be48",
    offerings: [
      "Advertisement Video Shoots",
      "Product Video Shoots",
      "UGC Video Shoots",
      "Product Photography",
      "Social Media Management",
      "Graphic Designing",
      "Post-Production & Video Editing",
      "Website Designing & Management",
      "Meta Ads & Performance Marketing",
      "Influencer Marketing",
      "Celebrity Collaboration Videos",
      "Amazon, Flipkart & Meesho Marketing",
    ],
  },
  {
    id: "offline-marketing",
    title: "Offline Marketing",
    subtitle: "On-ground experiences, branding & activations",
    description:
      "Bring your brand closer to people through on-ground campaigns, retail branding, print, and promotional activities. We coordinate every touchpoint to strengthen your brand’s visibility and create impactful experiences.",
    tags: ["Brand activations", "Retail & transit", "Print production"],
    image: "photo-1492684223066-81342ee5ff30",
    offerings: [
      "RWA Activations",
      "D2D Campaigns",
      "Retail Branding",
      "Cab Branding",
      "Mall & IT Park Activations",
      "Print & Offset Branding",
    ],
  },
];
export const serviceOptions = services.flatMap(service => [service.title, ...service.offerings]);
export const legalNavigation = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];
export const projects = [
  {
    slug: "everyday-identity",
    title: "An identity for the everyday",
    category: "Branding",
    discipline: "Brand identity / Art direction",
    image: "photo-1602143407151-7111542de6e8",
    color: "#d7d8c8",
    description:
      "A concept exploring simple forms, everyday rituals, and a fresh visual language for a lifestyle brand.",
  },
  {
    slug: "culture-in-motion",
    title: "Culture in motion",
    category: "Campaigns",
    discipline: "Campaign concept / Experience",
    image: "photo-1492684223066-81342ee5ff30",
    color: "#dabbd9",
    description:
      "An experiential campaign concept built around music, movement, and shared moments.",
  },
  {
    slug: "a-fresh-perspective",
    title: "A fresh perspective",
    category: "Content",
    discipline: "Content direction / Photography",
    image: "photo-1542744094-3a31f272c490",
    color: "#ead1aa",
    description:
      "A content direction concept that brings a more human perspective to a brand’s everyday stories.",
  },
  {
    slug: "the-city-is-yours",
    title: "The city is yours",
    category: "Campaigns",
    discipline: "Outdoor / Brand activation",
    image: "photo-1519501025264-65ba15a82390",
    color: "#bac5d5",
    description:
      "An outdoor campaign concept exploring how brands can become part of the city’s daily rhythm.",
  },
  {
    slug: "made-to-connect",
    title: "Made to connect",
    category: "Branding",
    discipline: "Strategy / Visual identity",
    image: "photo-1522071820081-009f0129c71c",
    color: "#c9d0b5",
    description:
      "A people-first brand concept with a warm identity and a clear, approachable tone of voice.",
  },
  {
    slug: "behind-the-story",
    title: "Behind the story",
    category: "Content",
    discipline: "Social strategy / Storytelling",
    image: "photo-1521737711867-e3b97375f902",
    color: "#e1c5b6",
    description:
      "A social content concept that puts the creative process and the people behind it in the spotlight.",
  },
];
export const imageUrl = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;
