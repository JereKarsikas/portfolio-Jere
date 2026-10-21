import { useState } from "react";
import type { Project } from "../data/projects";
import ImageGallery from "./ImageGallery";
import ProjectDetailsModal from "./ProjectDetailsModal";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const isProfessional = project.category === "professional";

  const hasDetails = Boolean(
    project.challenge ||
      project.solution ||
      project.implementation?.length ||
      project.outcome
  );

  return (
    <>
      <article
        className={`modern-project-card ${
          index % 2 !== 0 ? "project-reverse" : ""
        }`}
      >
        <div className="project-image-side">
          {project.images.length > 0 ? (
            <ImageGallery images={project.images} title={project.title} />
          ) : (
            <div className="project-image-placeholder">
              <span className="placeholder-symbol">{"</>"}</span>
              <span className="placeholder-title">{project.title}</span>
              <span className="placeholder-subtitle">
                Power Platform Solution
              </span>
            </div>
          )}
        </div>

        <div className="project-content-side">
          <span className="project-label">
            {isProfessional ? "PROFESSIONAL PROJECT" : "PERSONAL PROJECT"}
          </span>

          <h3 className="project-title">{project.title}</h3>

          <p className="project-description">{project.description}</p>

          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span className="project-tech" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="project-actions">
            {hasDetails && (
              <button
                type="button"
                className="project-details-button"
                onClick={() => setDetailsOpen(true)}
              >
                View Details
                <span aria-hidden="true"> ↗</span>
              </button>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-project-link"
              >
                View Project
                <span aria-hidden="true"> ↗</span>
              </a>
            )}
          </div>
        </div>
      </article>

      <ProjectDetailsModal
        project={detailsOpen ? project : null}
        onClose={() => setDetailsOpen(false)}
      />
    </>
  );
}

export default ProjectCard;
