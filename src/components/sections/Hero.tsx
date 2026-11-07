import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroArt } from "./HeroArt";
import styles from "./Hero.module.css";

type RingIconProps = { variant: "play" | "arrow" };

/** Pastille orange cerclée qui ponctue le titre (décorative). */
function RingIcon({ variant }: RingIconProps) {
  return (
    <span className={styles.ringIcon} aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
        {variant === "play" ? (
          <path d="M6 4.5v7l5.5-3.5Z" fill="currentColor" strokeLinejoin="round" />
        ) : (
          <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </span>
  );
}

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <svg className={styles.braces} viewBox="0 0 56 40" aria-hidden="true">
            <path d="M18 4c-6 0-6 4-6 8v4c0 3-2 4-5 4 3 0 5 1 5 4v4c0 4 0 8 6 8" />
            <path d="M38 4c6 0 6 4 6 8v4c0 3 2 4 5 4-3 0-5 1-5 4v4c0 4 0 8-6 8" />
          </svg>
          <Eyebrow>Salut, je suis {site.name}</Eyebrow>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.line}>
              Développeuse
              <RingIcon variant="play" />
            </span>
            <span className={`${styles.line} ${styles.light}`}>
              <RingIcon variant="arrow" />
              web &amp; mobile
            </span>
          </h1>
          <div className={styles.details}>
            <a className={styles.vertical} href={`mailto:${site.email}`}>
              Me contacter
            </a>
            <p className={styles.stack}>Flutter, Next.js, FastAPI</p>
            <p className={styles.lead}>
              Je conçois des interfaces soignées, des APIs et des applications Flutter, de
              l&apos;idée jusqu&apos;à la mise en ligne.
            </p>
          </div>
          <div className={styles.actions}>
            <Button href="#projets">Voir mes projets</Button>
            <span className={styles.mobileOnly}>
              <Button variant="ghost" href={`mailto:${site.email}`}>
                Me contacter
              </Button>
            </span>
          </div>
        </div>
        <HeroArt />
      </div>
    </section>
  );
}
