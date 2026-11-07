"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import styles from "./Header.module.css";

const LINKS = [{ label: "Accueil", href: "#" }, ...navigation];

/** Liens du header : le lien de la section affichée à l'écran est souligné en orange. */
export function NavLinks() {
  const [active, setActive] = useState("#");

  useEffect(() => {
    const ids = navigation.map((item) => item.href.slice(1)).concat("contact");

    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = "#";
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) current = `#${id}`;
      }
      setActive(current === "#contact" ? "" : current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav className={styles.nav} aria-label="Navigation principale">
      {LINKS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={active === item.href ? styles.active : undefined}
          aria-current={active === item.href ? "location" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
