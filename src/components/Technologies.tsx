type TechnologyGroup = {
  title: string;
  technologies: string[];
};

const technologyGroups: TechnologyGroup[] = [
  {
    title: "Software Development",
    technologies: [
      "HTML",
      "CSS",
      "Sass",
      "Bootstrap",
      "Bulma",
      "Tachyons",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Java",
      "MariaDB",
    ],
  },
  {
    title: "Microsoft Power Platform",
    technologies: [
      "Power Apps",
      "Power Automate",
      "Power BI",
      "SharePoint",
      "Microsoft Lists",
      "Microsoft Forms",
      "Planner",
      "Microsoft Office",
    ],
  },
  {
    title: "Development Tools",
    technologies: [
      "Git",
      "GitHub",
      "Bitbucket",
      "VS Code",
      "IntelliJ IDEA",
      "Jira",
      "Trello",
    ],
  },
  {
    title: "Process & Business Development",
    technologies: [
      "Process Improvement",
      "Workflow Automation",
      "Material Management",
      "CALS",
      "SAP",
      "AI-Assisted Development",
      "AI for Problem Solving",
    ],
  },
];

function Technologies() {
  return (
    <section id="id_technologies" className="technologies-wrapper">
      <div className="container">
        <h2 className="text-center tech-tex-color mb-5">Technologies</h2>

        <div className="row g-4">
          {technologyGroups.map((group) => (
            <div className="col-12 col-md-6 col-lg-3" key={group.title}>
              <div className="tech-box p-4">
                <h3 className="color-blue mb-4">{group.title}</h3>

                <ul className="list-unstyled tech-tex-color">
                  {group.technologies.map((technology) => (
                    <li className="mb-2" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
