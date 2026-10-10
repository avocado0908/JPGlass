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
};

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
    slug: "frameless-shower-screens",
    title: "Frameless Shower Boxes",
    cardTitle: "Frameless Shower Boxes",
    description: "Frameless shower boxes in a choice of hardware finishes.",
    intro: "Choose from the listed frameless shower box finishes. Contact JP Glass to discuss the configuration that suits your bathroom.",
    image: "/images/frameless-shower-screen-stone.jpg",
    alt: "Frameless glass shower enclosure in a warm stone-tiled bathroom",
    imageIsIllustrative: false,
    number: "01",
    examples: [
      { title: "Frameless shower screen with warm stone tile", image: "/images/frameless-shower-screen-stone.jpg", alt: "Frameless glass shower enclosure in a warm stone-tiled bathroom", isIllustrative: false },
      { title: "Corner shower concept", image: "/images/custom-placeholder.svg", alt: "Illustrative glass shower enclosure in a tiled bathroom" },
    ],
    options: showerBoxOptions("Frameless Shower Box", true),
  },
  {
    slug: "sliding-shower-screens",
    title: "Sliding Shower Boxes",
    cardTitle: "Sliding Shower Boxes",
    description: "Sliding shower boxes in a choice of hardware finishes.",
    intro: "Choose from the listed sliding shower box finishes. Contact JP Glass to discuss the configuration that suits your bathroom.",
    image: "/images/sliding-shower-screen.jpg",
    alt: "Frameless sliding glass shower screen with black upper track and handle",
    imageIsIllustrative: false,
    number: "02",
    examples: [
      { title: "Frameless sliding shower screen", image: "/images/sliding-shower-screen.jpg", alt: "Frameless sliding glass shower screen with black upper track and handle", isIllustrative: false },
      { title: "Minimal enclosure concept", image: "/images/custom-placeholder.svg", alt: "Illustrative minimal glass shower enclosure" },
    ],
    options: showerBoxOptions("Sliding Shower Box", true),
  },
  {
    slug: "fence-glass",
    title: "Fence Glass",
    cardTitle: "Fence Glass",
    description: "Silver and black fence glass, plus custom-made stairs glass.",
    intro: "Explore the listed fence glass and custom-made stairs glass options, then contact JP Glass to discuss your project.",
    image: "/images/hero-deck-balustrade.jpg",
    alt: "Clear glass fence panels along a timber deck",
    imageIsIllustrative: false,
    number: "03",
    examples: [
      { title: "Glass fence panels on a deck", image: "/images/hero-deck-balustrade.jpg", alt: "Clear glass fence panels along a timber deck", isIllustrative: false },
      { title: "Stair handrail and glass panels", image: "/images/glass-stair-handrail.jpg", alt: "Glass panels and a metal handrail following an indoor staircase", isIllustrative: false },
    ],
    options: [
      { name: "Silver Fence Glass", tone: "#b9c3ca", note: "Silver finish", image: "/images/glass-pool-fence-upright.jpg", imageAlt: "Glass fence with silver metal spigots" },
      { name: "Black Fence Glass", tone: "#202a32", note: "Black finish", image: "/images/hero-glass-balustrade.jpg", imageAlt: "Dark tinted glass fence panels on a home balcony" },
      { name: "Custom-Made Stairs Glass", tone: "#dceef3", note: "Custom-made glass", image: "/images/glass-stair-handrail.jpg", imageAlt: "Glass panels fitted along an indoor staircase" },
    ],
  },
  {
    slug: "handrails",
    title: "Handrails",
    cardTitle: "Handrails",
    description: "Silver and black handrails, including all fittings.",
    intro: "Choose from silver or black handrails, including all fittings. Contact JP Glass to discuss your project.",
    image: "/images/glass-stair-handrail.jpg",
    alt: "Glass balustrade and metal handrail following an indoor staircase",
    imageIsIllustrative: false,
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
    slug: "pool-fencing",
    title: "Pool Fence Glass",
    cardTitle: "Pool Fence Glass",
    description: "Pool fence glass in silver or black.",
    intro: "Choose from silver or black pool fence glass. Contact JP Glass to discuss your site and project requirements.",
    image: "/images/glass-pool-fence-upright.jpg",
    alt: "Frameless glass pool fence with stainless steel spigots beside a home",
    imageIsIllustrative: false,
    number: "05",
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
    slug: "outside-base-glass",
    title: "Outside Base & Glass",
    cardTitle: "Outside Base & Glass",
    description: "Outside black base and glass.",
    intro: "Ask JP Glass about the outside black base and glass option for your project.",
    image: "/images/hero-glass-balustrade.jpg",
    alt: "Tinted glass balustrade panels on the exterior of a home",
    imageIsIllustrative: false,
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
