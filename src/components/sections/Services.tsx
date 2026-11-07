import Image from "next/image";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section className={styles.services} id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" eyebrow="Mes services">
          Ce que je peux <span className="accent">faire</span> pour vous
        </SectionHeading>

        <ol className={styles.list}>
          {services.map((service, index) => (
            <li key={service.title} className={styles.item}>
              <div className={styles.visual}>
                <Image
                  className={styles.image}
                  src={service.image}
                  alt={service.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 860px) 560px, 100vw"
                />
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className={styles.link} href="#contact">
                  En discuter
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
