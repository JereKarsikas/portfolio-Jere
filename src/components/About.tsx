function About() {
  return (
    <section id="id_about" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-12 col-lg-8">
            <div className="hero-content">
              <span className="hero-eyebrow">
                PROCESS DEVELOPMENT • POWER PLATFORM • AUTOMATION • SOFTWARE
                DEVELOPMENT
              </span>

              <h1 className="hero-heading">
                Hi, I'm <span>Jere.</span>
              </h1>

              <h2 className="hero-subheading">
                Turning ideas into practical digital solutions.
              </h2>

              <p className="hero-description">
                I'm an operational consultant with a background in production
                engineering, process development and hands-on Power Platform
                development. I enjoy combining business understanding with
                technology to create practical solutions that make everyday work
                more efficient.
              </p>

              <p className="hero-description">
                In my current role at Carinafour, I work closely with a client's
                production, material management and logistics teams. Alongside
                my consulting responsibilities, I independently design, develop
                and deploy Power Apps and Power Automate solutions that
                digitalize manual workflows, improve material visibility and
                streamline operational processes.
              </p>

              <p className="hero-description">
                My experience covers the full development process, from
                identifying business needs and designing solutions to
                implementation, testing and deployment. I'm particularly
                interested in low-code development, workflow automation and
                data-driven solutions, and I'm continuously developing my
                technical expertise. Looking ahead, I aim to build my career
                further in Power Platform development and consulting, combining
                technical implementation with business process improvement.
              </p>

              <p className="hero-description">
                I'm also pursuing a Master's degree in Information Management
                and Smart Services, with a focus on developing my knowledge of
                digital transformation, data analytics and artificial
                intelligence.
              </p>

              <div className="hero-buttons">
                <a href="#id_projects" className="hero-primary-btn">
                  View My Projects ↗
                </a>

                <a
                  href="https://github.com/JereKarsikas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-secondary-btn"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/jere-karsikas-28491583/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-secondary-btn"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="hero-visual">
              <div className="hero-visual-inner">
                <span className="hero-visual-code">{"<developer />"}</span>

                <div className="hero-visual-line" />

                <span className="hero-visual-text">
                  DESIGN
                  <br />
                  DEVELOP
                  <br />
                  IMPROVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
