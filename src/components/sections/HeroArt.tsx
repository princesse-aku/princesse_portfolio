import Image from "next/image";
import { photos } from "@/data/site";
import styles from "./HeroArt.module.css";

/** Visuel du hero : cercle en pointillés, forme pêche, photo détourée et badges. */
export function HeroArt() {
  const { hero } = photos;

  return (
    <div className={styles.art}>
      <div className={styles.stage}>
        <span className={styles.dashed} aria-hidden="true" />
        <span className={styles.blob} aria-hidden="true" />

        <svg className={`${styles.doodle} ${styles.code}`} viewBox="0 0 64 40" aria-hidden="true">
          <path d="m20 8-14 12 14 12" />
          <path d="m44 8 14 12-14 12" />
          <path d="m36 4-8 32" />
        </svg>

        <svg className={`${styles.doodle} ${styles.cursor}`} viewBox="0 0 32 40" aria-hidden="true">
          <path d="M6 4v26l7-6 5 12 5-2-5-12h9Z" />
        </svg>

        {hero && (
          <div className={styles.photo}>
            <Image
              className={styles.photoImage}
              src={hero.src}
              alt={hero.alt}
              fill
              priority
              quality={90}
              sizes="(min-width: 860px) 600px, 120vw"
            />
          </div>
        )}
      </div>

      <span className={`${styles.badge} ${styles.accent}`}>Flutter</span>
      <span className={`${styles.badge} ${styles.dark}`}>Next.js</span>
      <span className={`${styles.badge} ${styles.status}`}>Disponible pour projets</span>
    </div>
  );
}
