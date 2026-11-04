export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];
export const services = [
  {
    title: "Plan",
    subtitle: "Marketing planning & coordination",
    description:
      "A clear direction before the first creative. We connect your business goals with audience insights, campaign planning, and a practical roadmap.",
    tags: ["Brand strategy", "Audience research", "Campaign planning"],
    image: "photo-1522071820081-009f0129c71c",
  },
  {
    title: "Create",
    subtitle: "Creative & production requirements",
    description:
      "Ideas made tangible. From brand identity and campaign design to print and production, we create work that feels unmistakably yours.",
    tags: ["Brand identity", "Design", "Print & production"],
    image: "photo-1542744094-3a31f272c490",
  },
  {
    title: "Activate",
    subtitle: "On-ground marketing activities",
    description:
      "Bring your brand into the real world with thoughtful experiences, consumer engagement, and coordinated on-ground activations.",
    tags: ["Brand activation", "Events", "Consumer engagement"],
    image: "photo-1492684223066-81342ee5ff30",
  },
  {
    title: "Visibilize",
    subtitle: "Retail & outdoor presence",
    description:
      "Show up where it matters. We help brands create a consistent presence across retail, outdoor, transit, and traditional media.",
    tags: ["Outdoor media", "Retail branding", "Transit"],
    image: "photo-1519501025264-65ba15a82390",
  },
  {
    title: "Grow",
    subtitle: "Digital marketing & content production",
    description:
      "Turn attention into a lasting connection through social strategy, content production, paid campaigns, and creator collaborations.",
    tags: ["Social media", "Content", "Paid campaigns"],
    image: "photo-1557838923-2985c318be48",
  },
  {
    title: "Coordinate",
    subtitle: "Multi-city campaign execution",
    description:
      "One connected team from idea to rollout. We coordinate production, field teams, and campaign delivery across locations.",
    tags: ["Project management", "Field teams", "Campaign rollout"],
    image: "photo-1521737711867-e3b97375f902",
  },
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
