export type ServiceExample = {
  title: string;
  image: string;
  alt: string;
};

export type ServiceFinish = {
  name: string;
  tone: string;
  note: string;
};

export type Service = {
  slug: string;
  title: string;
  cardTitle: string;
  description: string;
  intro: string;
  image: string;
  alt: string;
  number: string;
  examples: ServiceExample[];
  finishes: ServiceFinish[];
};

const glassFinishes: ServiceFinish[] = [
  { name: "Clear", tone: "#dceef3", note: "A light, open appearance" },
  { name: "Low iron look", tone: "#eef7f5", note: "A subtle, low-green appearance" },
  { name: "Grey tint", tone: "#89969e", note: "A softer, shaded tone" },
];

const fittingFinishes: ServiceFinish[] = [
  { name: "Silver", tone: "#b9c3ca", note: "A clean metallic look" },
  { name: "Black", tone: "#202a32", note: "A defined dark accent" },
  { name: "Warm metal", tone: "#a9825a", note: "A warmer hardware tone" },
];

export const services: Service[] = [
  {
    slug: "glass-balustrades",
    title: "Glass balustrades",
    cardTitle: "Glass balustrades",
    description: "Glass balustrade concepts for stairs, balconies, decks and other open spaces.",
    intro: "Explore glass balustrade styles for decks, balconies and interior stairs. Share your plans with JP Glass to discuss a solution for your project.",
    image: "/images/glass-placeholder.svg",
    alt: "Illustrative concept of a glass balustrade along an outdoor deck",
    number: "01",
    examples: [
      { title: "Deck edge concept", image: "/images/glass-placeholder.svg", alt: "Illustrative glass balustrade concept beside a deck" },
      { title: "Architectural glass concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass panels in a modern interior" },
    ],
    finishes: glassFinishes,
  },
  {
    slug: "frameless-shower-screens",
    title: "Frameless shower screens",
    cardTitle: "Frameless shower screens",
    description: "Frameless shower glass concepts for a simple, open feel in the bathroom.",
    intro: "Compare frameless shower screen concepts and hardware tones. Final glass and fitting options depend on the project and should be confirmed with JP Glass.",
    image: "/images/shower-placeholder.svg",
    alt: "Illustrative concept of a frameless glass shower screen",
    number: "02",
    examples: [
      { title: "Fixed panel concept", image: "/images/shower-placeholder.svg", alt: "Illustrative fixed glass shower panel" },
      { title: "Corner shower concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass shower enclosure in a tiled bathroom" },
    ],
    finishes: [...glassFinishes, ...fittingFinishes],
  },
  {
    slug: "sliding-shower-screens",
    title: "Sliding frameless shower screens",
    cardTitle: "Sliding shower screens",
    description: "Sliding shower screen concepts for bathrooms where a hinged door may not suit.",
    intro: "See an illustrative sliding shower layout and a selection of glass and hardware tones to discuss. The right configuration is specific to your bathroom.",
    image: "/images/sliding-shower-placeholder.svg",
    alt: "Illustrative concept of a frameless sliding shower screen",
    number: "03",
    examples: [
      { title: "Sliding door concept", image: "/images/sliding-shower-placeholder.svg", alt: "Illustrative frameless sliding glass shower door" },
      { title: "Minimal enclosure concept", image: "/images/custom-placeholder.svg", alt: "Illustrative minimal glass shower enclosure" },
    ],
    finishes: [...glassFinishes, ...fittingFinishes],
  },
  {
    slug: "custom-made-glass",
    title: "Custom-made glass",
    cardTitle: "Custom-made glass",
    description: "Made-to-measure glass concepts shaped around the needs of your space.",
    intro: "From glass panels to considered architectural details, discuss your measurements and ideas with JP Glass to explore a made-to-measure solution.",
    image: "/images/custom-placeholder.svg",
    alt: "Illustrative concept of custom architectural glass panels",
    number: "04",
    examples: [
      { title: "Interior glass concept", image: "/images/custom-placeholder.svg", alt: "Illustrative custom glass panels in a contemporary interior" },
      { title: "Outdoor glass concept", image: "/images/glass-placeholder.svg", alt: "Illustrative glass panel concept in an outdoor setting" },
    ],
    finishes: glassFinishes,
  },
  {
    slug: "pool-fencing",
    title: "Glass pool fencing",
    cardTitle: "Pool fencing",
    description: "Pool fence concepts using glass to keep sightlines across the outdoor space.",
    intro: "Explore an illustrative glass pool fence concept. Layout, hardware and suitable glass details should be confirmed for your site and project requirements.",
    image: "/images/pool-fence-placeholder.svg",
    alt: "Illustrative concept of glass fencing beside an outdoor pool",
    number: "05",
    examples: [
      { title: "Poolside concept", image: "/images/pool-fence-placeholder.svg", alt: "Illustrative concept of glass panels around an outdoor pool area" },
      { title: "Outdoor boundary concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass boundary panels in a landscaped space" },
    ],
    finishes: [...glassFinishes, ...fittingFinishes.slice(0, 2)],
  },
  {
    slug: "handrails",
    title: "Glass handrails",
    cardTitle: "Handrails",
    description: "Handrail concepts to complement glass balustrades and stair details.",
    intro: "View illustrative handrail and glass combinations, then talk with JP Glass about the style and details that suit your setting.",
    image: "/images/handrail-placeholder.svg",
    alt: "Illustrative concept of glass balustrade panels with a handrail",
    number: "06",
    examples: [
      { title: "Stair handrail concept", image: "/images/handrail-placeholder.svg", alt: "Illustrative glass stair balustrade with a handrail" },
      { title: "Balcony handrail concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass handrail detail on a balcony" },
    ],
    finishes: fittingFinishes,
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
