import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";

type ProjectDetailsModalProps = {
  project: Project | null;
  onClose: () => void;
};

function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
      >
        <div className="project-modal-header">
          <div className="project-modal-heading">
            <span className="project-modal-eyebrow">
              {project.category === "professional"
                ? "PROFESSIONAL PROJECT"
                : "PERSONAL PROJECT"}
            </span>

            <h2 id="project-modal-title">{project.title}</h2>

            <div className="project-modal-meta">
              {project.role && <span>{project.role}</span>}

              {project.status && (
                <span className="project-status">
                  <span className="project-status-dot" />
                  {project.status}
                </span>
              )}
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            ×
          </button>
        </div>

        <div className="project-modal-body">
          {project.challenge && (
            <section className="project-detail-section">
              <h3>The Challenge</h3>
              <p>{project.challenge}</p>
            </section>
          )}

          {project.solution && (
            <section className="project-detail-section">
              <h3>The Solution</h3>
              <p>{project.solution}</p>
            </section>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="project-detail-section">
              <h3>Key Features</h3>

              <div className="project-features-grid">
                {project.keyFeatures.map((feature, index) => (
                  <div className="project-feature-card" key={feature.title}>
                    <span className="project-feature-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.implementation && project.implementation.length > 0 && (
            <section className="project-detail-section">
              <h3>Technical Implementation</h3>

              <ul className="project-detail-list">
                {project.implementation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {project.outcome && (
            <section className="project-detail-section">
              <h3>Outcome</h3>
              <p>{project.outcome}</p>
            </section>
          )}

          <section className="project-detail-section">
            <h3>Technologies</h3>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span className="project-tech" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-external-link"
            >
              Visit Project <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsModal;
