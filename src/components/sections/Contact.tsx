import { site } from "@/data/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-label="Contact">
      <div className={`container ${styles.inner}`}>
        <Eyebrow>Un projet en tête ? Écris-moi, je réponds avec plaisir.</Eyebrow>

        {site.contactForm ? (
          <iframe
            className={styles.form}
            src={site.contactForm}
            title="Formulaire de contact"
            loading="lazy"
          />
        ) : (
          <p className={styles.pending}>
            Le formulaire arrive bientôt. En attendant, écris-moi à{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </div>
    </section>
  );
}
