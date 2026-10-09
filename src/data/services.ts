export type ServiceExample = {
  title: string;
  image: string;
  alt: string;
  isIllustrative?: boolean;
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
  imageIsIllustrative?: boolean;
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
    description: "Frameless shower screens with clean glass lines and considered hardware.",
    intro: "View a frameless shower screen photo and illustrative options for hardware and glass tones. Confirm available options with JP Glass for your project.",
    image: "/images/frameless-shower-screen-stone.jpg",
    alt: "Frameless glass shower enclosure in a warm stone-tiled bathroom",
    imageIsIllustrative: false,
    number: "02",
    examples: [
      { title: "Frameless shower screen with warm stone tile", image: "/images/frameless-shower-screen-stone.jpg", alt: "Frameless glass shower enclosure in a warm stone-tiled bathroom", isIllustrative: false },
      { title: "Corner shower concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass shower enclosure in a tiled bathroom" },
    ],
    finishes: [...glassFinishes, ...fittingFinishes],
  },
  {
    slug: "sliding-shower-screens",
    title: "Sliding frameless shower screens",
    cardTitle: "Sliding shower screens",
    description: "Frameless sliding shower screens with clean glass lines and streamlined hardware.",
    intro: "View a frameless sliding shower screen photo alongside illustrative glass and hardware options. The right configuration is specific to your bathroom.",
    image: "/images/sliding-shower-screen.jpg",
    alt: "Frameless sliding glass shower screen with black upper track and handle",
    imageIsIllustrative: false,
    number: "03",
    examples: [
      { title: "Frameless sliding shower screen", image: "/images/sliding-shower-screen.jpg", alt: "Frameless sliding glass shower screen with black upper track and handle", isIllustrative: false },
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
    description: "Glass pool fencing that keeps outdoor spaces open and sightlines clear.",
    intro: "View a glass pool fence project photo alongside illustrative options. Layout, hardware and suitable glass details should be confirmed for your site and project requirements.",
    image: "/images/glass-pool-fence-upright.jpg",
    alt: "Frameless glass pool fence with stainless steel spigots along a paved outdoor area beside a home",
    imageIsIllustrative: false,
    number: "05",
    examples: [
      { title: "Frameless glass pool fence", image: "/images/glass-pool-fence-upright.jpg", alt: "Frameless glass pool fence with stainless steel spigots along a paved outdoor area beside a home", isIllustrative: false },
      { title: "Outdoor boundary concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass boundary panels in a landscaped space" },
    ],
    finishes: [...glassFinishes, ...fittingFinishes.slice(0, 2)],
  },
  {
    slug: "handrails",
    title: "Glass handrails",
    cardTitle: "Handrails",
    description: "Glass stair balustrades and handrails, shown in a real residential interior.",
    intro: "Explore a glass stair balustrade and handrail, along with illustrative combinations. Talk with JP Glass about the style and details that suit your setting.",
    image: "/images/glass-stair-handrail.jpg",
    alt: "Glass balustrade and metal handrail following an indoor staircase",
    imageIsIllustrative: false,
    number: "06",
    examples: [
      { title: "Glass stair balustrade with a metal handrail", image: "/images/glass-stair-handrail.jpg", alt: "Glass balustrade and metal handrail following an indoor staircase", isIllustrative: false },
      { title: "Balcony handrail concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass handrail detail on a balcony" },
    ],
    finishes: fittingFinishes,
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
