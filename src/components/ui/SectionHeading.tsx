import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  children: ReactNode;
};

export function SectionHeading({ id, eyebrow, children }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id}>{children}</h2>
    </div>
  );
}
