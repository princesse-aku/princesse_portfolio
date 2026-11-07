import { navigation, site } from "@/data/site";
import styles from "./Footer.module.css";

const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a className={styles.logo} href="#" aria-label={`${site.firstName}, retour en haut de page`}>
            <span className={styles.dot} aria-hidden="true" />
            {site.firstName}
          </a>
          <p>{site.role}. Interfaces soignées, APIs solides, de l&apos;idée à la mise en ligne.</p>
        </div>

        <nav className={styles.column} aria-label="Navigation du pied de page">
          <h2>Navigation</h2>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.column}>
          <h2>Réseaux</h2>
          <a className={styles.social} href={`mailto:${site.email}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            {site.email}
          </a>
          <a className={styles.social} href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.54h.05c.53-1 1.82-2.04 3.75-2.04 4 0 4.75 2.63 4.75 6.05V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75Z" />
            </svg>
            in/princess-alagnon
          </a>
          <a className={styles.social} href={site.github} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
            princesse-aku
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {COPYRIGHT_YEAR} {site.name}</span>
        <a href={site.linkp} target="_blank" rel="noopener noreferrer">
          Découvrir LinkP
        </a>
      </div>
    </footer>
  );
}
