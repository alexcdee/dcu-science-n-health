import logo from "../assets/logo.webp";
import { INSTAGRAM_URL, TIKTOK_URL } from "../data/links";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="DCU Science & Health Society logo" />
          <div>
            <strong>DCU Science &amp; Health Society</strong>
          </div>
        </div>

        <div className="footer-links">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} DCU Science &amp; Health Society</span>
      </div>
    </footer>
  );
}

export default Footer;
