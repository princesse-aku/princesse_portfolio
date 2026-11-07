import { projects } from "@/data/projects";
import { Frame } from "@/components/ui/Frame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.projects} id="projets" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" eyebrow="Projets">
          Réalisations <span className="accent">à la une</span>
        </SectionHeading>

        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.title}>
              <a
                className={`${styles.card} ${styles[project.tone]}`}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.media}>
                  <Frame
                    className={styles.visual}
                    photo={project.image ? { src: project.image, alt: `Capture de ${project.title}` } : undefined}
                    placeholder={project.title}
                    sizes="(min-width: 860px) 50vw, 100vw"
                  />
                  <span className={styles.cta} aria-hidden="true">
                    Voir le projet
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 12 12 4M5.5 4H12v6.5" />
                    </svg>
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className={styles.stack}>{project.stack}</span>
                <span className="srOnly"> (s&apos;ouvre dans un nouvel onglet)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
