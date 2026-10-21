import { useEffect } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="contact-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          className="contact-modal-x"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          ×
        </button>

        <h2 id="contact-modal-title">Contact me</h2>

        <p>
          The best way to contact me is by sending me a message on{" "}
          <a
            href="https://www.linkedin.com/in/jere-karsikas-28491583/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>

        <div className="contact-modal-actions">
          <button type="button" className="contact-close-btn" onClick={onClose}>
            Close
          </button>

          <a
            href="https://www.linkedin.com/in/jere-karsikas-28491583/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-linkedin-btn"
            onClick={onClose}
          >
            OKEY! ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
