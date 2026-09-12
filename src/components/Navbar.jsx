import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { SIGNUP_URL } from "../data/links";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Schools", href: "#schools" },
  { label: "Events", href: "#events" },
  { label: "Calendar", href: "#calendar" },
  { label: "Committee", href: "#committee" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand">
          <img src={logo} alt="DCU Science & Health Society logo" />
          <span>Science & Health Society</span>
        </a>

        <nav className="navbar-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={SIGNUP_URL} target="_blank" rel="noreferrer" className="btn btn-primary navbar-cta">
          Join Us
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isOpen && (
        <div className="navbar-mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={SIGNUP_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Join Us
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
