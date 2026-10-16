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

export type ShowerBoxShape = "Diamond" | "Rectangular" | "Straight";

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
  optionGroups?: { title: string; options: ServiceOption[]; shapes?: ShowerBoxShape[] }[];
  showerSets?: ServiceOption[];
  glassSupports?: ServiceOption[];
  handrails?: ServiceOption[];
};

const showerSetOptions: ServiceOption[] = [
  { name: "Silver Shower Set", tone: "#b9c3ca", note: "Silver finish" },
  { name: "Black Shower Set", tone: "#202a32", note: "Black finish" },
  { name: "Gold Shower Set", tone: "#b9975b", note: "Gold finish" },
];

const showerBoxOptions = (boxType: string): ServiceOption[] => [
  {
    name: "Silver",
    tone: "#b9c3ca",
    note: "Silver finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/frameless-box-silver.jpg", imageAlt: "Frameless shower box with silver hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/sliding-box-silver.jpg", imageAlt: "Sliding shower box with silver hardware" }
        : {}),
  },
  {
    name: "Black",
    tone: "#202a32",
    note: "Black finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/frameless-box-black.jpg", imageAlt: "Frameless shower box with black hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/sliding-box-black.jpg", imageAlt: "Sliding shower box with black hardware" }
        : {}),
  },
  {
    name: "Gunmetal",
    tone: "#515b65",
    note: "Gunmetal finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/frameless-box-gunmetal.jpg", imageAlt: "Frameless shower box with gunmetal hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/sliding-box-gunmetal.jpg", imageAlt: "Sliding shower box with gunmetal hardware" }
        : {}),
  },
  {
    name: "Brushed Nickel",
    tone: "#a4adb2",
    note: "Brushed nickel finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/frameless-box-brushed-nickel.jpg", imageAlt: "Frameless shower box with brushed nickel hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/sliding-box-brushed-nickel.jpg", imageAlt: "Sliding shower box with brushed nickel hardware" }
        : {}),
  },
  {
    name: "Gold",
    tone: "#b9975b",
    note: "Gold finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/frameless-box-gold.jpg", imageAlt: "Frameless shower box with gold hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/sliding-box-gold.jpg", imageAlt: "Sliding shower box with gold hardware" }
        : {}),
  },
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
      { title: "Frameless Shower Boxes", shapes: ["Diamond", "Rectangular", "Straight"], options: showerBoxOptions("Frameless Shower Box") },
      { title: "Sliding Shower Boxes", shapes: ["Rectangular", "Straight"], options: showerBoxOptions("Sliding Shower Box") },
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
      { title: "Deck glass — Black standoffs", image: "/images/fence-glass/01-black-standoffs-deck.jpg", alt: "Clear glass deck fence secured with black standoffs", isIllustrative: false },
      { title: "Fence glass — Silver standoffs", image: "/images/fence-glass/02-silver-standoffs-fence.jpg", alt: "Clear glass fence with silver standoff fixings", isIllustrative: false },
      { title: "Deck glass — Black frame", image: "/images/fence-glass/03-black-frame-deck.png", alt: "Clear glass deck railing with a black frame", isIllustrative: false },
      { title: "Fence glass — Black spigots and frame", image: "/images/fence-glass/04-black-spigots-frame.png", alt: "Clear glass deck fence supported by black spigots with a dark frame", isIllustrative: false },
      { title: "Deck glass — Black standoffs and frame", image: "/images/fence-glass/05-black-standoffs-black-frame.png", alt: "Clear glass deck balustrade with black standoffs and frame", isIllustrative: false },
      { title: "Fence glass — Black standoffs", image: "/images/fence-glass/06-black-standoffs-railing.png", alt: "Outdoor glass railing with black standoff hardware", isIllustrative: false },
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
      { title: "Pool fence glass — Silver spigots", image: "/images/pool-fence/01-silver-spigots-pool-fence.png", alt: "Frameless pool fence with silver spigots beside a swimming pool", isIllustrative: false },
      { title: "Pool fence glass — Silver spigots and frame", image: "/images/pool-fence/02-silver-spigots-silver-frame-pool-fence.png", alt: "Pool fence glass with silver spigots and a silver frame beside a home", isIllustrative: false },
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
      { title: "Wall-mounted stair handrail — Silver", image: "/images/handrails/01-silver-wall-handrail.jpg", alt: "Silver handrail following a carpeted staircase" },
      { title: "Wall-mounted stair handrail — Black", image: "/images/handrails/02-black-wall-handrail.jpg", alt: "Black wall-mounted handrail following an indoor staircase" },
      { title: "Glass stair balustrade and handrail — Silver", image: "/images/handrails/03-silver-glass-stair-handrail.jpg", alt: "Silver handrail with glass balustrade along indoor stairs" },
      { title: "Glass stair balustrade and handrail — Black", image: "/images/handrails/04-black-glass-stair-handrail.jpg", alt: "Black handrail beside glass panels on an indoor staircase" },
      { title: "Wall-mounted stair handrail — Silver", image: "/images/handrails/05-silver-wall-handrail.jpg", alt: "Silver handrail mounted along a light staircase" },
      { title: "Outdoor glass handrail — Silver", image: "/images/handrails/06-silver-outdoor-glass-handrail.jpg", alt: "Silver handrail on an outdoor timber staircase with glass panels" },
      { title: "Outdoor stair handrail — Silver", image: "/images/handrails/07-silver-outdoor-stair-handrail.jpg", alt: "Silver handrail beside outdoor tiled stairs and glass panels" },
      { title: "Framed glass handrail — Silver", image: "/images/handrails/08-silver-framed-glass-handrail.jpg", alt: "Silver handrail with framed glass balustrade beside stairs" },
      { title: "Wall-mounted stair handrail — Silver", image: "/images/handrails/09-silver-wall-handrail.jpg", alt: "Silver handrail following a carpeted stairwell" },
      { title: "Glass stair balustrade and handrail — Silver", image: "/images/handrails/10-silver-glass-stair-handrail.jpg", alt: "Silver handrail and glass panels beside timber stairs" },
      { title: "Glass stair balustrade and handrail — Black", image: "/images/handrails/11-black-glass-stair-handrail.jpg", alt: "Black handrail fitted beside glass panels and carpeted stairs" },
      { title: "Wall-mounted stair handrail — Silver", image: "/images/handrails/12-silver-wall-handrail.jpg", alt: "Silver wall-mounted handrail above a white staircase" },
      { title: "Framed glass handrail — Silver", image: "/images/handrails/13-silver-framed-glass-handrail.jpg", alt: "Silver handrail and glass railing above an indoor staircase" },
      { title: "Framed glass handrail — Black", image: "/images/handrails/14-black-handrail-black-frame.png", alt: "Black handrail with a black-framed glass balustrade beside carpeted stairs" },
    ],
    options: [
      { name: "Silver Handrail", tone: "#b9c3ca", note: "Including all fittings", image: "/images/handrails/option-silver-handrail.jpg", imageAlt: "Close-up of a silver wall-mounted handrail and bracket" },
      { name: "Black Handrail", tone: "#202a32", note: "Including all fittings", image: "/images/handrails/option-black-handrail.jpg", imageAlt: "Close-up of a black wall-mounted handrail and bracket" },
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
      { title: "Stair glass — Silver frame and handrail", image: "/images/custom-stairs/01-silver-framed-stair-glass.jpg", alt: "Silver-framed glass balustrade with handrail beside a timber staircase" },
      { title: "Outdoor stair glass — Black standoffs", image: "/images/custom-stairs/02-black-standoff-outdoor-stairs.jpg", alt: "Outdoor timber stairs with glass panels secured by black standoffs" },
      { title: "Glass stair balustrade — Silver handrail", image: "/images/custom-stairs/03-silver-standoff-glass-stairs.jpg", alt: "Indoor glass stair balustrade with silver handrail and standoffs" },
      { title: "Glass stair balustrade — Black handrail", image: "/images/custom-stairs/04-black-handrail-glass-stairs.jpg", alt: "Indoor glass stair balustrade with black handrail and standoffs" },
      { title: "Outdoor stair glass — Black standoffs", image: "/images/custom-stairs/05-black-standoff-outdoor-glass-stairs.jpg", alt: "Outdoor timber staircase with glass balustrade and black standoffs" },
      { title: "Landing glass balustrade — Silver frame", image: "/images/custom-stairs/06-silver-framed-indoor-glass-stairs.jpg", alt: "Silver-framed glass balustrade at an indoor stair landing" },
      { title: "Indoor stair glass — Silver handrail", image: "/images/custom-stairs/07-silver-glass-stairs-handrail.jpg", alt: "Silver handrail and glass panels beside carpeted stairs" },
      { title: "Outdoor stair balustrade — Silver handrail", image: "/images/custom-stairs/08-silver-outdoor-glass-stairs.jpg", alt: "Silver handrail with glass balustrade beside outdoor tiled stairs" },
      { title: "Framed stair glass — Black", image: "/images/custom-stairs/09-black-framed-glass-stairs.jpg", alt: "Black-framed glass balustrade beside an indoor timber staircase" },
      { title: "Indoor stair glass — Silver handrail and standoffs", image: "/images/custom-stairs/10-silver-handrail-glass-stairs.jpg", alt: "Silver handrail and standoff-mounted glass panels along an indoor staircase" },
      { title: "Stair glass — Silver frame and handrail", image: "/images/custom-stairs/11-silver-framed-stair-glass.jpg", alt: "Silver handrail beside framed glass panels in a stairwell" },
      { title: "Outdoor stair balustrade — Silver handrail", image: "/images/custom-stairs/12-silver-outdoor-handrail-glass-stairs.jpg", alt: "Outdoor glass stair balustrade with silver handrail" },
    ],
    options: [
      { name: "Glass Balustrade Panel — Clear", tone: "#dceef3", note: "Clear glass panel", image: "/images/custom-stairs/clear-glass-panel.png", imageAlt: "Clear glass balustrade panel" },
      { name: "Glass Balustrade Panel — Silver Frame", tone: "#b9c3ca", note: "Clear glass with silver frame", image: "/images/custom-stairs/clear-glass-silver-frame.png", imageAlt: "Clear glass balustrade panel with a silver frame" },
      { name: "Glass Balustrade Panel — Black Frame", tone: "#202a32", note: "Clear glass with black frame", image: "/images/custom-stairs/clear-glass-black-frame.png", imageAlt: "Clear glass balustrade panel with a black frame" },
    ],
    glassSupports: [
      { name: "Silver Round Glass Standoffs", tone: "#b9c3ca", note: "Silver support hardware", image: "/images/fence-support-silver-round-standoffs.jpg", imageAlt: "Silver round glass standoff fixed through a glass panel" },
      { name: "Black Round Glass Standoffs", tone: "#202a32", note: "Black support hardware", image: "/images/fence-support-black-round-standoffs.jpg", imageAlt: "Black round glass standoff fixed through a glass panel" },
    ],
    handrails: [
      { name: "Silver Handrail", tone: "#b9c3ca", note: "Including all fittings", image: "/images/handrails/option-silver-handrail.jpg", imageAlt: "Close-up of a silver handrail and bracket" },
      { name: "Black Handrail", tone: "#202a32", note: "Including all fittings", image: "/images/handrails/option-black-handrail.jpg", imageAlt: "Close-up of a black handrail and bracket" },
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
      { title: "Balcony glass — Silver standoffs and black base", image: "/images/outside/01-silver-standoffs-black-base.jpg", alt: "Clear glass balcony balustrade with silver standoffs and a dark base", isIllustrative: false },
      { title: "Balcony glass — Black frame", image: "/images/outside/02-black-frame-balcony.jpg", alt: "Glass balcony balustrade with a black frame on a modern home", isIllustrative: false },
      { title: "Balcony glass — Black frame", image: "/images/outside/03-black-frame-balcony.png", alt: "Black-framed glass balcony railing on a white home", isIllustrative: false },
      { title: "Balcony glass — Black glass and frame", image: "/images/outside/04-black-glass-black-frame.png", alt: "Dark glass balcony balustrade with a black base frame", isIllustrative: false },
      { title: "Balcony glass — Silver spigots", image: "/images/outside/05-silver-spigots-balcony.png", alt: "Clear glass balcony balustrade supported by silver spigots", isIllustrative: false },
      { title: "Balcony glass — Black spigots", image: "/images/outside/06-black-spigots-balcony.png", alt: "Clear glass balcony balustrade supported by black spigots", isIllustrative: false },
      { title: "Balcony glass — Black standoffs and frame", image: "/images/outside/07-black-standoffs-balcony.png", alt: "Dark glass balcony balustrade fixed with black standoffs and frame", isIllustrative: false },
      { title: "Balcony glass — Silver standoffs", image: "/images/outside/08-silver-standoffs-balcony.png", alt: "Clear glass balcony balustrade with silver standoffs and a timber base", isIllustrative: false },
    ],
    options: [
      { name: "Outside Black Base and Glass", tone: "#202a32", note: "Black base with glass", image: "/images/hero-deck-balustrade.jpg", imageAlt: "Outdoor glass fence with dark fixing hardware along a timber deck" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
