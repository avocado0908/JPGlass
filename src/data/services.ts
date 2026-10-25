export type ServiceExample = {
  title: string;
  image: string;
  alt: string;
  isIllustrative?: boolean;
  category?: string;
};

export type ServiceOption = {
  name: string;
  tone: string;
  note: string;
  image?: string;
  imageAlt?: string;
};

export type ShowerBoxShape = "Diamond" | "Rectangular" | "Straight" | "No Door";

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
  glassPanels?: ServiceOption[];
  showerSets?: ServiceOption[];
  glassSupports?: ServiceOption[];
  handrails?: ServiceOption[];
};

const showerSetOptions: ServiceOption[] = [
  { name: "Silver", tone: "#b9c3ca", note: "Silver finish" },
  { name: "Black", tone: "#202a32", note: "Black finish" },
];

const poolFenceGlassPanels: ServiceOption[] = [
  { name: "Clear", tone: "#dceef3", note: "Clear glass panel", image: "/images/custom-stairs/clear-glass-panel.png", imageAlt: "Clear glass balustrade panel" },
  { name: "Euro Black", tone: "#252a2e", note: "Euro Black glass panel", image: "/images/fence-glass/euro-black-glass-panel.png", imageAlt: "Euro Black glass balustrade panel" },
  { name: "Silver Frame", tone: "#b9c3ca", note: "Clear glass panel with silver frame", image: "/images/fence-glass/clear-glass-sliver-frame.png", imageAlt: "Clear glass balustrade panel with silver frame" },
  { name: "Black Frame", tone: "#202a32", note: "Clear glass panel with black frame", image: "/images/custom-stairs/clear-glass-black-frame.png", imageAlt: "Clear glass balustrade panel with black frame" },
];

const balustradeGlassSupports: ServiceOption[] = [
  { name: "Silver Round Glass Standoffs", tone: "#b9c3ca", note: "Silver support hardware", image: "/images/fence-support-silver-round-standoffs.jpg", imageAlt: "Silver round glass standoff fixed through a glass panel" },
  { name: "Black Round Glass Standoffs", tone: "#202a32", note: "Black support hardware", image: "/images/fence-support-black-round-standoffs.jpg", imageAlt: "Black round glass standoff fixed through a glass panel" },
  { name: "Silver Bottom Glass Spigots", tone: "#b9c3ca", note: "Silver support hardware", image: "/images/fence-support-silver-bottom-spigots.jpg", imageAlt: "Silver bottom glass spigot supporting a glass panel" },
  { name: "Black Bottom Glass Spigots", tone: "#202a32", note: "Black support hardware", image: "/images/fence-support-black-bottom-spigots.jpg", imageAlt: "Black bottom glass spigot supporting a glass panel" },
];

const showerBoxOptions = (boxType: string): ServiceOption[] => [
  {
    name: "Silver",
    tone: "#b9c3ca",
    note: "Silver finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/shower-boxes/frameless-shower-box-straight-silver.png", imageAlt: "Frameless shower box with silver hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/shower-boxes/sliding-shower-straight-silver.png", imageAlt: "Sliding shower box with silver hardware" }
        : {}),
  },
  {
    name: "Black",
    tone: "#202a32",
    note: "Black finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/shower-boxes/frameless-shower-box-straight-black.png", imageAlt: "Frameless shower box with black hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/shower-boxes/sliding-shower-straight-black.png", imageAlt: "Sliding shower box with black hardware" }
        : {}),
  },
  {
    name: "Gunmetal",
    tone: "#515b65",
    note: "Gunmetal finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/shower-boxes/frameless-shower-box-straight-gunmetal.png", imageAlt: "Frameless shower box with gunmetal hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/shower-boxes/sliding-shower-straight-gunmetal.png", imageAlt: "Sliding shower box with gunmetal hardware" }
        : {}),
  },
  {
    name: "Brushed Nickel",
    tone: "#a4adb2",
    note: "Brushed nickel finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/shower-boxes/frameless-shower-box-straight-brushed-nickel.png", imageAlt: "Frameless shower box with brushed nickel hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/shower-boxes/sliding-shower-straight-brushed-nickel.png", imageAlt: "Sliding shower box with brushed nickel hardware" }
        : {}),
  },
  ...(boxType === "Frameless Shower Box"
    ? [{ name: "Bronze", tone: "#8b5a2b", note: "Bronze finish" }]
    : []),
  {
    name: "Gold",
    tone: "#b9975b",
    note: "Gold finish",
    ...(boxType === "Frameless Shower Box"
      ? { image: "/images/shower-boxes/frameless-shower-box-straight-gold.png", imageAlt: "Frameless shower box with gold hardware" }
      : boxType === "Sliding Shower Box"
        ? { image: "/images/shower-boxes/sliding-shower-straight-gold.png", imageAlt: "Sliding shower box with gold hardware" }
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
    number: "03",
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
      { title: "Walk In Shower Box — Silver", image: "/images/shower-boxes/walkin-shower-box-sliver-01.png", alt: "Silver walk-in shower box in a grey tiled bathroom" },
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
    slug: "pool-fencing",
    title: "Pool Fence Glass",
    cardTitle: "Pool Fence Glass",
    description: "Pool fence glass in silver or black.",
    intro: "Choose from silver or black pool fence glass. Contact JP Glass to discuss your site and project requirements.",
    image: "/images/service-pool-fence-glass.jpg",
    alt: "Glass pool fencing around a swimming pool",
    imageIsIllustrative: true,
    number: "02",
    examples: [
      { title: "Pool fence glass — Silver spigots", image: "/images/pool-fence/01-silver-spigots-pool-fence.png", alt: "Frameless pool fence with silver spigots beside a swimming pool", isIllustrative: false },
      { title: "Pool fence glass — Silver spigots and frame", image: "/images/pool-fence/02-silver-spigots-silver-frame-pool-fence.png", alt: "Pool fence glass with silver spigots and a silver frame beside a home", isIllustrative: false },
      { title: "Pool fence glass — Silver spigots", image: "/images/pool-fence/03-silver-spigots-pool-fence.png", alt: "Glass pool fence with silver spigots around a landscaped pool", isIllustrative: false },
      { title: "Pool fence glass — Black spigots", image: "/images/pool-fence/04-black-spigots-pool-fence.png", alt: "Glass pool fence with black spigots along a timber deck", isIllustrative: false },
      { title: "Pool fence glass — Silver spigots", image: "/images/pool-fence/05-silver-spigots-pool-fence.png", alt: "Glass pool fence with silver spigots beside a swimming pool", isIllustrative: false },
      { title: "Pool fence glass — Silver spigots with gate", image: "/images/pool-fence/06-silver-spigots-pool-fence-door.png", alt: "Glass pool fence and gate with silver spigots", isIllustrative: false },
      { title: "Pool fence glass — Silver spigots", image: "/images/pool-fence/07-silver-spigots-pool-fence.png", alt: "Glass pool fence with silver spigots around a curved swimming pool", isIllustrative: false },
      { title: "Pool fence glass — Silver spigots and silver frame", image: "/images/pool-fence/pool-fence-sliver-spigots-sliver-frame.png", alt: "Glass pool fence with silver spigots and silver frame around a pool", isIllustrative: false },
      { title: "Pool fence glass — Silver spigots", image: "/images/pool-fence/pool-fence-sliver-spigots-04.png", alt: "Frameless glass pool fence with silver spigots beside a swimming pool", isIllustrative: false },
    ],
    options: [],
    glassPanels: poolFenceGlassPanels,
    glassSupports: balustradeGlassSupports,
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
    number: "05",
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
    number: "04",
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
      { name: "Glass Balustrade Panel — Silver Frame", tone: "#b9c3ca", note: "Clear glass with silver frame", image: "/images/fence-glass/clear-glass-sliver-frame.png", imageAlt: "Clear glass balustrade panel with a silver frame" },
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
    slug: "glass-balustrades",
    title: "Glass Balustrades",
    cardTitle: "Glass Balustrades",
    description: "Glass balustrades for decks, balconies, and outdoor spaces, with a choice of panel and support options.",
    intro: "Explore glass balustrade examples and choose from clear or Euro Black panels with silver or black support hardware. Contact JP Glass to discuss your project.",
    image: "/images/service-outside-base-glass.jpg",
    alt: "Exterior glass balustrade with a dark base on a modern home",
    imageIsIllustrative: true,
    number: "01",
    examples: [
      { title: "Black standoffs on timber deck", category: "Deck Glass", image: "/images/outside/01-black-standoffs-deck.jpg", alt: "Black standoffs on timber deck", isIllustrative: false },
      { title: "Silver standoffs on timber deck", category: "Deck Glass", image: "/images/outside/deck-glass-sliver-standoffs.png", alt: "Glass deck balustrade with silver standoffs", isIllustrative: false },
      { title: "Silver standoffs with silver frame", category: "Deck Glass", image: "/images/outside/deck-glass-sliver-standoffs-sliver-frame.png", alt: "Deck glass balustrade with silver standoffs and a silver frame", isIllustrative: false },
      { title: "Silver spigots with silver frame", category: "Deck Glass", image: "/images/outside/deck-glass-sliver-spigots-sliver-frame.png", alt: "Deck glass balustrade with silver spigots and a silver frame", isIllustrative: false },
      { title: "Black standoffs with top rail", category: "Deck Glass", image: "/images/outside/05-black-standoffs-black-frame.png", alt: "Black standoffs with top rail", isIllustrative: false },
      { title: "Black standoffs along deck", category: "Deck Glass", image: "/images/outside/06-black-standoffs-railing.png", alt: "Black standoffs along deck", isIllustrative: false },
      { title: "Black framed deck glass", category: "Deck Glass", image: "/images/fence-glass/03-black-frame-deck.png", alt: "Black framed deck glass", isIllustrative: false },
      { title: "Side-fixed glass on a raised deck", category: "Deck Glass", image: "/images/fence-glass/01-silver-standoffs-black-base.jpg", alt: "Side-fixed glass on a raised deck", isIllustrative: false },
      { title: "Black standoffs along balcony", category: "Balcony Glass", image: "/images/outside/07-black-standoffs-balcony.png", alt: "Black standoffs along balcony", isIllustrative: false },
      { title: "Silver standoffs on balcony", category: "Balcony Glass", image: "/images/outside/08-silver-standoffs-balcony.png", alt: "Silver standoffs on balcony", isIllustrative: false },
      { title: "Black base-mounted balcony glass", category: "Balcony Glass", image: "/images/fence-glass/02-black-frame-balcony.jpg", alt: "Black base-mounted balcony glass", isIllustrative: false },
      { title: "Black framed balcony glass", category: "Balcony Glass", image: "/images/fence-glass/03-black-frame-balcony.png", alt: "Black framed balcony glass", isIllustrative: false },
      { title: "Tinted glass with black frame", category: "Balcony Glass", image: "/images/fence-glass/04-black-glass-black-frame.png", alt: "Tinted glass with black frame", isIllustrative: false },
      { title: "Silver spigots on balcony", category: "Balcony Glass", image: "/images/fence-glass/05-silver-spigots-balcony.png", alt: "Silver spigots on balcony", isIllustrative: false },
      { title: "Black spigots on balcony", category: "Balcony Glass", image: "/images/fence-glass/06-black-spigots-balcony.png", alt: "Black spigots on balcony", isIllustrative: false },
      { title: "Euro Black balcony glass with silver standoffs", category: "Balcony Glass", image: "/images/fence-glass/balcony-euroblack-glass-sliver-standoffs.png", alt: "Euro Black glass balustrade with silver standoffs on a balcony", isIllustrative: false },
      { title: "Balcony glass with black spigots and frame", category: "Balcony Glass", image: "/images/fence-glass/balcony-glass-black-spigots-black-frame.png", alt: "Balcony glass with black spigots and a black frame", isIllustrative: false },
      { title: "Silver standoffs on fence", category: "Fence Glass", image: "/images/outside/02-silver-standoffs-fence.jpg", alt: "Silver standoffs on concrete fence", isIllustrative: false },
      { title: "Silver spigots with silver frame", category: "Fence Glass", image: "/images/pool-fence/02-silver-spigots-silver-frame-pool-fence.png", alt: "Glass pool fence with silver spigots and a silver frame", isIllustrative: false },
      { title: "Black spigots on pool fence", category: "Fence Glass", image: "/images/pool-fence/04-black-spigots-pool-fence.png", alt: "Glass pool fence with black spigots", isIllustrative: false },
      { title: "Black spigots with top rail", category: "Deck Glass", image: "/images/fence-glass/04-black-spigots-frame.png", alt: "Black spigots with top rail", isIllustrative: false },
      { title: "Outdoor stair glass with black standoffs", category: "Outdoor Stair Glass", image: "/images/custom-stairs/02-black-standoff-outdoor-stairs.jpg", alt: "Glass panels with black standoffs along outdoor stairs", isIllustrative: false },
      { title: "Outdoor stair glass with black standoffs", category: "Outdoor Stair Glass", image: "/images/custom-stairs/05-black-standoff-outdoor-glass-stairs.jpg", alt: "Outdoor staircase with glass panels secured by black standoffs", isIllustrative: false },
      { title: "Outdoor stair glass with silver handrail", category: "Outdoor Stair Glass", image: "/images/custom-stairs/08-silver-outdoor-glass-stairs.jpg", alt: "Outdoor staircase with glass panels and a silver handrail", isIllustrative: false },
      { title: "Outdoor stair glass with silver handrail and standoffs", category: "Outdoor Stair Glass", image: "/images/custom-stairs/12-silver-outdoor-handrail-glass-stairs.jpg", alt: "Outdoor glass stair balustrade with silver handrail and standoffs", isIllustrative: false },
      { title: "Outdoor stair glass with silver standoffs and frame", category: "Outdoor Stair Glass", image: "/images/custom-stairs/stairs-outdoor-sliver-spidots-sliver-frame.png", alt: "Outdoor stair glass with silver standoffs and a silver frame", isIllustrative: false },
      { title: "Outdoor stair glass with silver standoffs and frame", category: "Outdoor Stair Glass", image: "/images/custom-stairs/stairs-outdoor-sliver-spidots-sliver-frame-02.png", alt: "Outdoor stairs with glass panels, silver standoffs, and a silver frame", isIllustrative: false },
      { title: "Outdoor stair glass with silver standoffs and frame", category: "Outdoor Stair Glass", image: "/images/custom-stairs/stairs-outdoor-sliver-spidots-sliver-frame-03.png", alt: "Outdoor deck stairs with glass panels and a silver frame", isIllustrative: false },
      { title: "Outdoor stair glass with black standoffs and frame", category: "Outdoor Stair Glass", image: "/images/custom-stairs/stairs-outdoor-black-spidots-black-frame.png", alt: "Outdoor stairs with glass panels, black standoffs, and a black frame", isIllustrative: false },
      { title: "Outdoor stair glass with silver handrails and standoffs", category: "Outdoor Stair Glass", image: "/images/custom-stairs/stairs-outdoor-sliver-spidots-sliver-handrails.png", alt: "Outdoor timber stairs with glass panels, silver standoffs, and silver handrails", isIllustrative: false },
    ],
    options: [
      { name: "Deck Glass", tone: "#dceef3", note: "Glass balustrades for decks", image: "/images/outside/01-black-standoffs-deck.jpg", imageAlt: "Glass balustrade along a timber deck" },
      { name: "Balcony Glass", tone: "#dceef3", note: "Glass balustrades for balconies", image: "/images/outside/07-black-standoffs-balcony.png", imageAlt: "Glass balustrade with black standoffs along a balcony" },
      { name: "Fence Glass", tone: "#dceef3", note: "Glass balustrades for fences", image: "/images/outside/02-silver-standoffs-fence.jpg", imageAlt: "Glass fence balustrade with silver standoffs" },
      { name: "Outdoor Stair Glass", tone: "#dceef3", note: "Glass balustrades for outdoor stairs", image: "/images/custom-stairs/02-black-standoff-outdoor-stairs.jpg", imageAlt: "Glass balustrade along outdoor stairs" },
    ],
    glassPanels: poolFenceGlassPanels,
    glassSupports: balustradeGlassSupports,
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
