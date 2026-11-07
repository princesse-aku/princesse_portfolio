import type { CSSProperties } from "react";
import Image from "next/image";
import type { Photo } from "@/data/site";
import styles from "./Frame.module.css";

type FrameProps = {
  photo?: Photo;
  /** Valeur de l'attribut `sizes` de l'image. */
  sizes: string;
  /** Texte affiché sur le visuel de remplacement (décoratif). */
  placeholder?: string;
  className?: string;
  /** Fond en miroir : la photo est reflétée dans la glace derrière la personne. */
  mirror?: boolean;
};

/** Cadre arrondi : affiche la photo si elle existe, sinon un emplacement coloré. */
export function Frame({ photo, sizes, placeholder, className, mirror }: FrameProps) {
  const focus = photo?.focus ?? 50;
  const zoom = photo?.zoom ?? 1;
  const transformOrigin = `${focus}% ${photo?.focusY ?? 0}%`;
  const imageStyle: CSSProperties = {
    objectPosition: `${focus}% 0`,
    transform: `scale(${zoom})`,
    transformOrigin,
  };
  const reflectionStyle: CSSProperties = {
    objectPosition: `${focus}% 0`,
    transform: `translateX(18%) scale(${zoom * 0.94}) scaleX(-1)`,
    transformOrigin,
  };

  return (
    <div className={[styles.frame, mirror && styles.mirror, className].filter(Boolean).join(" ")}>
      {photo && mirror && (
        <Image
          className={`${styles.image} ${styles.reflection}`}
          style={reflectionStyle}
          src={photo.src}
          alt=""
          fill
          quality={75}
          sizes={sizes}
          aria-hidden="true"
        />
      )}
      {photo ? (
        <Image
          className={styles.image}
          style={imageStyle}
          src={photo.src}
          alt={photo.alt}
          fill
          quality={90}
          sizes={sizes}
        />
      ) : (
        placeholder && (
          <span className={styles.placeholder} aria-hidden="true">
            {placeholder}
          </span>
        )
      )}
    </div>
  );
}
