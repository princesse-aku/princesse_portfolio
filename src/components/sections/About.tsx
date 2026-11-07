import Image from "next/image";
import { photos } from "@/data/site";
import styles from "./About.module.css";

const TAGS = ["Flutter", "Next.js", "FastAPI", ".NET", "Firebase", "Python", "React", "TypeScript"];

export function About() {
  const photo = photos.about[0];

  return (
    <section className={styles.about} id="a-propos" aria-labelledby="about-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.photoBox}>
          {photo && (
            <Image
              className={styles.photo}
              src={photo.src}
              alt={photo.alt}
              fill
              quality={90}
              sizes="(min-width: 860px) 460px, 90vw"
            />
          )}
          <ul className={styles.tags} aria-label="Technologies">
            {TAGS.map((tag, index) => (
              <li key={tag} className={styles.tag} data-tone={index % 2 === 0 ? "dark" : "orange"}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.text}>
          <p className={styles.eyebrow}>À propos</p>
          <h2 id="about-title" className={styles.title}>
            Moi, c&apos;est <span className={styles.name}>Princesse</span>
          </h2>
          <p className={styles.paragraph}>
            J&apos;aime les produits bien finis : une interface claire, une API solide, et un
            déploiement qui ne laisse rien au hasard. Je travaille sur le web comme sur mobile, avec
            le même souci du détail.
          </p>
          <div className={styles.actions}>
            <a className={styles.cta} href="#contact">
              Me contacter
              <span className={styles.ctaIcon} aria-hidden="true">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
