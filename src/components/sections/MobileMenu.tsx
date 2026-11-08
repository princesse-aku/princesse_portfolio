"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import styles from "./MobileMenu.module.css";

/** Menu déroulant affiché sous 640px, là où la navigation du header est masquée. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className={styles.menu}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.bars} aria-hidden="true" />
      </button>
      <nav id="menu-mobile" className={styles.panel} aria-label="Navigation principale" hidden={!open}>
        {[...navigation, { label: "Contact", href: "#contact" }].map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
