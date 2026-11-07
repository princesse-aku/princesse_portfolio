# Portfolio de Princesse ALAGNON

Next.js (App Router), TypeScript et CSS Modules.

## Commandes

```bash
npm run dev     # serveur de développement
npm run build   # build de production
npm run lint    # ESLint
```

## Structure

```
src/
  app/                 layout racine (métadonnées, police), page, styles globaux
  components/
    sections/          Header, Hero, About, Services, Projects, Contact, Footer
    ui/                Button, Eyebrow, SectionHeading, Frame
  data/                contenu du site (textes, projets, services, photos)
public/images/
  moi/                 photos de Princesse
  projets/             captures d'écran des projets
legacy/                ancienne version statique (index.html)
```

## Modifier le contenu

Les textes ne sont pas dans les composants : ils sont dans `src/data/`.

- `site.ts` : identité, liens, technologies et **photos** (`photos.hero`, `photos.about`).
- `services.ts` : les services.
- `projects.ts` : les projets, avec leur capture (`image`).

### Ajouter les photos

1. Déposer les fichiers dans `public/images/moi/`.
2. Les déclarer dans `src/data/site.ts` :

```ts
export const photos = {
  hero: { src: "/images/moi/hero.png", alt: "Portrait de Princesse ALAGNON" },
  about: [
    { src: "/images/moi/about-1.png", alt: "…" },
    { src: "/images/moi/about-2.png", alt: "…" },
    { src: "/images/moi/about-3.png", alt: "…" },
  ],
};
```

La photo du hero doit être détourée (PNG à fond transparent) pour dépasser de la forme pêche.

### Ajouter une capture de projet

Déposer l'image dans `public/images/projets/`, puis renseigner `image: "/images/projets/linkp.png"`
sur le projet dans `src/data/projects.ts`.
