import { useEffect, useRef } from "react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description?: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Carinafour",
    role: "Work Planner / Development Engineer",
    period: "2023 – Present",
    description:
      "Working as a consultant in production planning, material management and process development. My responsibilities include work packaging and developing digital solutions using Microsoft Power Apps, Power Automate and SharePoint to improve workflows, material visibility and operational efficiency.",
  },
  {
    company: "Rento Innovations Oy",
    role: "Junior Full-stack Developer",
    period: "2022 – 2023",
    description:
      "Worked on the development of BoxHunt, a software solution for food traceability and improving production efficiency. My responsibilities included implementing new features and writing unit and integration tests.",
  },
  {
    company: "Saranen Consulting",
    role: "DigiTalentPro – Programming Training",
    period: "2021 – 2022",
    description:
      "Participated in a recruitment training program combining practical software development experience with programming studies. Learned technologies including HTML, CSS, JavaScript, React, Node.js and Java.",
  },
  {
    company: "Wärtsilä Oyj",
    role: "Parts Coordinator",
    period: "2018 – 2020",
    description:
      "Coordinated orders for international customers and resolved order-related challenges. Worked with SAP and Microsoft Office, particularly Excel.",
  },
  {
    company: "Meyer Turku Oy",
    role: "Designer",
    period: "2016 – 2018",
    description:
      "Designed stairs for cruise ships and developed a user interface as part of my thesis to improve the efficiency of stair design. Used SolidWorks 3D, Cadmatic, AutoCAD and Revit.",
  },
];

function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = timelineRef.current?.querySelectorAll(".timeline-item");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="id_work" className="work-experience-wrapper">
      <div className="container">
        <h2 className="text-center mb-5">Work Experience</h2>

        <div className="experience-intro">
          <p>
            My interest in programming began after graduating as an industrial
            management engineer in 2018. In 2020, I started learning HTML, CSS
            and JavaScript independently and discovered how much I enjoyed
            building software.
          </p>

          <p>
            In 2021, I joined the DigiTalentPro training program and started
            working at Rento Innovations, where I later became a Junior
            Full-stack Developer.
          </p>

          <p>
            In 2023, I moved into work planning and process development at
            Carinafour. This introduced me to Microsoft Power Platform and gave
            me the opportunity to combine my production engineering background
            with software development.
          </p>
        </div>

        <div className="experience-timeline" ref={timelineRef}>
          {experiences.map((experience, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={`${experience.company}-${index}`}
            >
              <div className="timeline-content">
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.period}</p>
                {experience.description && <p>{experience.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
