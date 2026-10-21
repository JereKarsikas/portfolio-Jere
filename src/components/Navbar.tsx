import { useState } from "react";

type NavbarProps = {
  onContactClick: () => void;
};

const navigationLinks = [
  { label: "About", href: "#id_about" },
  { label: "Experience", href: "#id_work" },
  { label: "Technologies", href: "#id_technologies" },
  { label: "Projects", href: "#id_projects" },
];

function Navbar({ onContactClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark modern-navbar">
        <div className="container">
          <a
            className="navbar-brand modern-navbar-brand"
            href="#id_about"
            onClick={closeMenu}
          >
            Jere<span>.</span>
          </a>

          <button
            className="navbar-toggler modern-navbar-toggler"
            type="button"
            aria-controls="portfolio-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            id="portfolio-navigation"
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          >
            <div className="navbar-nav ms-auto align-items-lg-center">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  className="nav-link modern-nav-link"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}

              <button
                type="button"
                className="nav-contact-btn"
                onClick={() => {
                  closeMenu();
                  onContactClick();
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
