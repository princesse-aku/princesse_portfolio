export type Service = {
  title: string;
  description: string;
  /** Illustration, dans `public/images/services/`. */
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    title: "Sites et applications web",
    description:
      "Des interfaces claires, rapides et responsives avec Next.js, React et Tailwind CSS.",
    image: "/images/services/service-1.png",
    alt: "Illustration d'un écran de navigateur avec une page web",
  },
  {
    title: "Applications mobiles",
    description:
      "Des apps Android et iOS avec Flutter, une gestion d'état propre et un mode hors ligne quand il le faut.",
    image: "/images/services/service-2.png",
    alt: "Illustration de deux smartphones avec une application mobile",
  },
  {
    title: "APIs et back-end",
    description:
      "Des APIs solides avec Python et FastAPI, connectées à Firebase ou à votre base de données.",
    image: "/images/services/service-3.png",
    alt: "Illustration de serveurs, d'une base de données et d'un nuage",
  },
  {
    title: "Mise en ligne",
    description:
      "Un déploiement soigné : nom de domaine, hébergement et suivi, pour que rien ne soit laissé au hasard.",
    image: "/images/services/service-4.png",
    alt: "Illustration d'une fusée qui décolle d'un écran de navigateur",
  },
];
