type FooterProps = {
  onContactClick: () => void;
};

function Footer({ onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <h2>
              Let's build something <span>great.</span>
            </h2>

            <p>
              Interested in software development, automation or digital
              solutions? Let's connect.
            </p>

            <button
              type="button"
              className="nav-contact-btn footer-contact-btn"
              onClick={onContactClick}
            >
              Contact Me
            </button>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/JereKarsikas"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/jere-karsikas-28491583/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Jere Karsikas</span>
          <span>Built with React & TypeScript</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
