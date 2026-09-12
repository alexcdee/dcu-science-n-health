import logo from "../assets/logo.webp";
import { INSTAGRAM_URL, SIGNUP_URL, TIKTOK_URL } from "../data/links";
import "./Hero.css";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-shape hero-shape-1" />
        <span className="hero-shape hero-shape-2" />
        <span className="hero-shape hero-shape-3" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="section-label">DCU · Faculty of Science &amp; Health</span>
          <h1 className="hero-title">
            Science is <span className="hero-title-accent">better together.</span>
          </h1>
          <p className="hero-sub">
            The official society for every student in the Faculty of Science &amp; Health at DCU —
            events, study sessions, workshops, and a community across all seven schools.
          </p>

          <div className="hero-actions">
            <a href={SIGNUP_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
              Join the Society
            </a>
            <a href="#events" className="btn btn-outline-dark">
              See what's on
            </a>
          </div>

          <div className="hero-socials">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <span aria-hidden="true">·</span>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-logo-card">
            <img src={logo} alt="DCU Science & Health Society atom logo" />
          </div>
          <span className="hero-sticker hero-sticker-1">Make friends</span>
          <span className="hero-sticker hero-sticker-2">Study smarter</span>
          <span className="hero-sticker hero-sticker-3">7 schools, 1 society</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
