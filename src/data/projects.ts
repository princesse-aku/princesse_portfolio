export type ProjectTone = "accent" | "dark" | "peach" | "beige";

export type Project = {
  title: string;
  description: string;
  stack: string;
  href: string;
  tone: ProjectTone;
  /** Capture d'écran, dans `public/images/projets/`. Vide : un visuel de couleur est affiché. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "LinkP",
    description:
      "Un assistant pour rédiger ses posts LinkedIn dans sa voix : idées, brouillons par IA, planning et rappels dans l'agenda.",
    stack: "Next.js, FastAPI, Firebase",
    href: "https://linkp.alaprincesse.com",
    tone: "accent",
    image: "/images/projets/linkp.png",
  },
  {
    title: "Princess Buster",
    description:
      "Un jeu de tir 2.5D où l'on fait tomber des piles de cubes de langages et de frameworks avec un nombre limité de balles.",
    stack: "JavaScript, Matter.js, SQLite",
    href: "https://princess-buster.vercel.app/",
    tone: "dark",
    image: "/images/projets/princess-buster-promo.png",
  },
  {
    title: "Portfolio",
    description:
      "Ce site : mon portfolio, conçu et développé de A à Z, avec un design soigné, des animations légères et une mise en page adaptée à tous les écrans.",
    stack: "Next.js, React, TypeScript",
    href: "https://alaprincesse.com",
    tone: "accent",
    image: "/images/projets/portfolio.png",
  },
  {
    title: "NewsFlow",
    description:
      "Une application mobile pour consulter, rechercher et sauvegarder des actualités, avec un mode hors ligne.",
    stack: "Flutter, Firebase, Hive",
    href: "https://github.com/princesse-aku/newsflow",
    tone: "peach",
  },
];
