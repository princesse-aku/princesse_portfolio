import { site } from "@/data/site";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.bar}>
          <a className={styles.brand} href="#" aria-label={`${site.firstName}, retour en haut de page`}>
            <span className={styles.logo} aria-hidden="true" />
            {site.firstName}
          </a>
          <NavLinks />
          <div className={styles.actions}>
            <a className={styles.cta} href="#contact">
              Contact
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
