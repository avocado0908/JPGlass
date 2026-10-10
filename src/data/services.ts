export type ServiceExample = {
  title: string;
  image: string;
  alt: string;
  isIllustrative?: boolean;
};

export type ServiceOption = {
  name: string;
  tone: string;
  note: string;
  image?: string;
  imageAlt?: string;
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
  options: ServiceOption[];
  optionGroups?: { title: string; options: ServiceOption[] }[];
  showerSets?: ServiceOption[];
  glassSupports?: ServiceOption[];
};

const showerSetOptions: ServiceOption[] = [
  { name: "Silver Shower Set", tone: "#b9c3ca", note: "Silver finish" },
  { name: "Black Shower Set", tone: "#202a32", note: "Black finish" },
  { name: "Gold Shower Set", tone: "#b9975b", note: "Gold finish" },
];

const showerBoxOptions = (boxType: string, includeGold = false): ServiceOption[] => [
  {
    name: `Silver ${boxType}`,
    tone: "#b9c3ca",
    note: "Silver finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/frameless-box-silver.jpg", imageAlt: "Frameless shower box with silver hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/sliding-box-silver.jpg", imageAlt: "Sliding shower box with silver hardware" }
        : {}),
  },
  {
    name: `Black ${boxType}`,
    tone: "#202a32",
    note: "Black finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/frameless-box-black.jpg", imageAlt: "Frameless shower box with black hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/sliding-box-black.jpg", imageAlt: "Sliding shower box with black hardware" }
        : {}),
  },
  {
    name: `Gunmetal ${boxType}`,
    tone: "#515b65",
    note: "Gunmetal finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/frameless-box-gunmetal.jpg", imageAlt: "Frameless shower box with gunmetal hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/sliding-box-gunmetal.jpg", imageAlt: "Sliding shower box with gunmetal hardware" }
        : {}),
  },
  {
    name: `Brushed Nickel ${boxType}`,
    tone: "#a4adb2",
    note: "Brushed nickel finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/frameless-box-brushed-nickel.jpg", imageAlt: "Frameless shower box with brushed nickel hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/sliding-box-brushed-nickel.jpg", imageAlt: "Sliding shower box with brushed nickel hardware" }
        : {}),
  },
  ...(includeGold
    ? [{
        name: `Gold ${boxType}`,
        tone: "#b9975b",
        note: "Gold finish",
        ...(boxType === "Frameless Shower Box"
          ? { image: "/images/frameless-box-gold.jpg", imageAlt: "Frameless shower box with gold hardware" }
          : boxType === "Sliding Shower Box"
            ? { image: "/images/sliding-box-gold.jpg", imageAlt: "Sliding shower box with gold hardware" }
            : {}),
      }]
    : []),
];

export const services: Service[] = [
  {
    slug: "shower-boxes",
    title: "Shower Boxes (Frameless & Sliding)",
    cardTitle: "Shower Boxes (Frameless & Sliding)",
    description: "Frameless and sliding shower boxes in a choice of hardware finishes.",
    intro: "Explore frameless and sliding shower box options, plus matching shower set finishes. Contact JP Glass to discuss the configuration that suits your bathroom.",
    image: "/images/service-shower-boxes.jpg",
    alt: "Frameless glass shower enclosure in a modern neutral bathroom",
    imageIsIllustrative: true,
    number: "01",
    examples: [
      { title: "Frameless Shower Box — Silver", image: "/images/shower-marble-bathroom.jpg", alt: "Glass shower enclosure in a marble tiled bathroom" },
      { title: "Frameless Shower Box — Black", image: "/images/shower-black-framed-marble.jpg", alt: "Black-framed glass shower with marble wall tiles" },
      { title: "Sliding Shower Box — Black", image: "/images/shower-black-framed-glass.jpg", alt: "Black-framed glass shower in a modern grey tiled bathroom" },
      { title: "Frameless Shower Box — Gold", image: "/images/shower-brass-framed-glass.jpg", alt: "Glass shower enclosure with brass hardware and stone tile" },
      { title: "Frameless Shower Box — Black", image: "/images/shower-neutral-bathroom.jpg", alt: "Glass shower enclosure in a modern neutral bathroom" },
      { title: "Frameless Shower Box — Silver", image: "/images/shower-grey-glass-corner.jpg", alt: "Glass corner shower in a modern grey tiled bathroom" },
      { title: "Frameless Shower Box — Black", image: "/images/shower-stone-spa.jpg", alt: "Glass shower enclosure in a stone-tiled spa bathroom" },
      { title: "Frameless Shower Box — Silver (custom)", image: "/images/shower-attic-glass.jpg", alt: "Glass shower enclosure fitted beneath a sloped attic ceiling" },
      { title: "Sliding Shower Box — Black", image: "/images/shower-marble-tile-walk-in.jpg", alt: "Walk-in glass shower with dark marble-look tiles" },
      { title: "Frameless Shower Box — Silver", image: "/images/shower-marble-frosted-window.jpg", alt: "Glass shower in a marble bathroom with a frosted window" },
      { title: "Frameless Shower Box — Silver", image: "/images/shower-marble-walk-in.jpg", alt: "Walk-in glass shower with marble feature tiles" },
      { title: "Frameless Shower Box — Silver", image: "/images/shower-grey-walk-in.jpg", alt: "Walk-in glass shower in a modern grey tiled bathroom" },
      { title: "Frameless Shower Box — Black", image: "/images/shower-geometric-tile.jpg", alt: "Glass shower with geometric patterned bathroom tiles" },
      { title: "Frameless Shower Box — Gold", image: "/images/shower-frameless-gold-custom.jpg", alt: "Frameless glass shower box with gold hardware in a stone-tiled bathroom" },
    ],
    options: [],
    optionGroups: [
      { title: "Frameless Shower Boxes", options: showerBoxOptions("Frameless Shower Box", true) },
      { title: "Sliding Shower Boxes", options: showerBoxOptions("Sliding Shower Box", true) },
    ],
    showerSets: showerSetOptions,
  },
  {
    slug: "fence-glass",
    title: "Fence Glass",
    cardTitle: "Fence Glass",
    description: "Fence glass with a choice of silver or black support hardware.",
    intro: "Explore fence glass and support hardware options, then contact JP Glass to discuss your project.",
    image: "/images/service-fence-glass.jpg",
    alt: "Glass fence panels with dark supports along an outdoor deck",
    imageIsIllustrative: true,
    number: "02",
    examples: [
      { title: "Glass fence panels on a deck", image: "/images/hero-deck-balustrade.jpg", alt: "Clear glass fence panels along a timber deck", isIllustrative: false },
      { title: "Glass fence panels beside a home", image: "/images/glass-pool-fence-upright.jpg", alt: "Clear glass fence panels with metal supports", isIllustrative: false },
    ],
    options: [
      { name: "Silver Fence Glass", tone: "#b9c3ca", note: "Silver finish", image: "/images/glass-pool-fence-upright.jpg", imageAlt: "Glass fence with silver metal spigots" },
      { name: "Black Fence Glass", tone: "#202a32", note: "Black finish", image: "/images/hero-glass-balustrade.jpg", imageAlt: "Dark tinted glass fence panels on a home balcony" },
    ],
    glassSupports: [
      { name: "Silver Round Glass Standoffs", tone: "#b9c3ca", note: "Silver support hardware", image: "/images/fence-support-silver-round-standoffs.jpg", imageAlt: "Silver round glass standoff fixed through a glass panel" },
      { name: "Black Round Glass Standoffs", tone: "#202a32", note: "Black support hardware", image: "/images/fence-support-black-round-standoffs.jpg", imageAlt: "Black round glass standoff fixed through a glass panel" },
      { name: "Silver Bottom Glass Spigots", tone: "#b9c3ca", note: "Silver support hardware", image: "/images/fence-support-silver-bottom-spigots.jpg", imageAlt: "Silver bottom glass spigot supporting a glass panel" },
      { name: "Black Bottom Glass Spigots", tone: "#202a32", note: "Black support hardware", image: "/images/fence-support-black-bottom-spigots.jpg", imageAlt: "Black bottom glass spigot supporting a glass panel" },
    ],
  },
  {
    slug: "pool-fencing",
    title: "Pool Fence Glass",
    cardTitle: "Pool Fence Glass",
    description: "Pool fence glass in silver or black.",
    intro: "Choose from silver or black pool fence glass. Contact JP Glass to discuss your site and project requirements.",
    image: "/images/service-pool-fence-glass.jpg",
    alt: "Glass pool fencing around a swimming pool",
    imageIsIllustrative: true,
    number: "03",
    examples: [
      { title: "Frameless glass pool fence", image: "/images/glass-pool-fence-upright.jpg", alt: "Frameless glass pool fence with stainless steel spigots beside a home", isIllustrative: false },
      { title: "Outdoor boundary concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass boundary panels in a landscaped space" },
    ],
    options: [
      { name: "Silver Pool Fence Glass", tone: "#b9c3ca", note: "Silver finish", image: "/images/glass-pool-fence-upright.jpg", imageAlt: "Glass pool fence with silver metal spigots" },
      { name: "Black Pool Fence Glass", tone: "#202a32", note: "Black finish" },
    ],
  },
  {
    slug: "handrails",
    title: "Handrails",
    cardTitle: "Handrails",
    description: "Silver and black handrails, including all fittings.",
    intro: "Choose from silver or black handrails, including all fittings. Contact JP Glass to discuss your project.",
    image: "/images/service-handrails.jpg",
    alt: "Metal handrails and glass balustrade beside an indoor staircase",
    imageIsIllustrative: true,
    number: "04",
    examples: [
      { title: "Glass stair balustrade with a metal handrail", image: "/images/glass-stair-handrail.jpg", alt: "Glass balustrade and metal handrail following an indoor staircase", isIllustrative: false },
      { title: "Balcony handrail concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass handrail detail on a balcony" },
    ],
    options: [
      { name: "Silver Handrail", tone: "#b9c3ca", note: "Including all fittings", image: "/images/glass-stair-handrail.jpg", imageAlt: "Silver metal handrail with glass stair panels" },
      { name: "Black Handrail", tone: "#202a32", note: "Including all fittings" },
    ],
  },
  {
    slug: "custom-stairs-glass",
    title: "Custom Stairs Glass",
    cardTitle: "Custom Stairs Glass",
    description: "Custom-made glass panels for stairways.",
    intro: "Explore a glass stair installation example and contact JP Glass to discuss a custom solution for your staircase.",
    image: "/images/service-custom-stairs-glass.jpg",
    alt: "Custom glass panels fitted along a staircase",
    imageIsIllustrative: true,
    number: "05",
    examples: [
      { title: "Glass panels along an indoor staircase", image: "/images/glass-stair-handrail.jpg", alt: "Glass panels fitted along an indoor staircase", isIllustrative: false },
    ],
    options: [
      { name: "Custom Stairs Glass", tone: "#dceef3", note: "Custom-made glass", image: "/images/glass-stair-handrail.jpg", imageAlt: "Glass panels fitted along an indoor staircase" },
    ],
  },
  {
    slug: "outside-base-glass",
    title: "Outside Base & Glass",
    cardTitle: "Outside Base & Glass",
    description: "Outside black base and glass.",
    intro: "Ask JP Glass about the outside black base and glass option for your project.",
    image: "/images/service-outside-base-glass.jpg",
    alt: "Exterior glass balustrade with a dark base on a modern home",
    imageIsIllustrative: true,
    number: "06",
    examples: [
      { title: "Exterior glass panels", image: "/images/hero-glass-balustrade.jpg", alt: "Tinted glass balustrade panels on the exterior of a home", isIllustrative: false },
      { title: "Outdoor glass concept", image: "/images/glass-placeholder.svg", alt: "Illustrative glass panels in an outdoor setting" },
    ],
    options: [
      { name: "Outside Black Base and Glass", tone: "#202a32", note: "Black base with glass", image: "/images/hero-deck-balustrade.jpg", imageAlt: "Outdoor glass fence with dark fixing hardware along a timber deck" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
