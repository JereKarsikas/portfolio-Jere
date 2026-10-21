import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const professionalProjects = projects.filter(
    (project) => project.category === "professional"
  );

  const personalProjects = projects.filter(
    (project) => project.category === "personal"
  );

  return (
    <section id="id_projects" className="project-wrapper">
      <div className="container">
        {/* MAIN HEADING */}
        <div className="projects-heading">
          <h2>My Projects</h2>
          <p>
            A selection of professional solutions and personal projects focused
            on software development, automation and process improvement.
          </p>
        </div>

        {/* PROFESSIONAL PROJECTS */}
        <div className="project-category">
          <div className="project-category-heading">
            <span className="project-category-number">01 /</span>

            <div>
              <h3>Professional Projects</h3>
              <p>
                Real-world solutions developed to improve business processes,
                automate workflows and support operational efficiency.
              </p>
            </div>
          </div>

          <div className="modern-project-list">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* PERSONAL PROJECTS */}
        <div className="project-category personal-projects">
          <div className="project-category-heading">
            <span className="project-category-number">02 /</span>

            <div>
              <h3>Personal & Learning Projects</h3>
              <p>
                Smaller projects built to explore new technologies, practice
                programming and develop my software development skills.
              </p>
            </div>
          </div>

          <div className="modern-project-list">
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
