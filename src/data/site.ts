export const site = {
  name: "Princesse ALAGNON",
  firstName: "Princesse",
  role: "Développeuse web et mobile",
  url: "https://alaprincesse.com",
  description:
    "Princesse ALAGNON, développeuse web et mobile : interfaces soignées, APIs et applications Flutter, de l'idée jusqu'à la mise en ligne.",
  shortDescription:
    "Interfaces soignées, APIs et applications Flutter, de l'idée jusqu'à la mise en ligne.",
  email: "me@alaprincesse.com",
  linkedin: "https://www.linkedin.com/in/princess-alagnon/",
  github: "https://github.com/princesse-aku",
  linkp: "https://linkp.alaprincesse.com",
  /** Formulaire de contact Tally (lien d'intégration). Vide : un message avec l'email s'affiche. */
  contactForm: "https://tally.so/embed/2jB7kV?hideTitle=1&dynamicHeight=1",
} as const;

export type Photo = {
  src: string;
  alt: string;
  /** Agrandissement depuis le haut du cadre, pour resserrer sur le haut du corps (1 = aucun). */
  zoom?: number;
  /** Position horizontale du visage dans l'image, en % (50 = centre). */
  focus?: number;
  /** Position verticale du point d'ancrage du zoom, en % (0 = haut de l'image). */
  focusY?: number;
};

/**
 * Photos de Princesse. Les fichiers vont dans `public/images/moi/`.
 * Tant que ces valeurs sont vides, les emplacements restent vides.
 *
 * - `hero` : photo détourée (PNG à fond transparent), affichée dans l'arche du hero.
 * - `about` : jusqu'à 3 photos détourées (PNG) pour la section « À propos ».
 */
export const photos: { hero: Photo | null; about: Photo[] } = {
  hero: { src: "/images/moi/hero.png", alt: "Portrait de Princesse ALAGNON" },
  about: [
    {
      src: "/images/moi/about-1.png",
      alt: "Princesse, casquette noire, souriante",
      zoom: 1,
      focus: 52,
    },
    {
      src: "/images/moi/about-2.png",
      alt: "Princesse tenant son ordinateur portable",
      zoom: 1.2,
      focus: 62,
      focusY: 20,
    },
    {
      src: "/images/moi/about-3.png",
      alt: "Princesse tenant un cadre Google for Africa",
      zoom: 1.15,
      focus: 52,
      focusY: 25,
    },
  ],
};

export const navigation = [
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
] as const;

export const stack = [
  { name: "Next.js", highlight: true },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Flutter", highlight: true },
  { name: "Dart" },
  { name: "Python" },
  { name: ".NET" },
  { name: "FastAPI" },
  { name: "Firebase", highlight: true },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
] as const;
