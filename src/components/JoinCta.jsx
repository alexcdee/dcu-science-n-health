import { INSTAGRAM_URL, SIGNUP_URL, TIKTOK_URL } from "../data/links";
import "./JoinCta.css";

const PERKS = ["Pub Quiz", "Movie Nights", "Mini Games", "Weekly Study Sessions", "Workshops"];

function JoinCta() {
  return (
    <section className="section join">
      <div className="container join-card">
        <div className="join-copy">
          <span className="section-label join-label">Made up your mind?</span>
          <h2 className="join-heading">Sign up and get stuck in.</h2>
          <ul className="join-perks">
            {PERKS.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>

        <div className="join-actions">
          <a href={SIGNUP_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Sign Up Now
          </a>
          <div className="join-socials">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
              Instagram
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinCta;
