import treasurerPhoto from "../assets/committee/treasurer.jpg";
import "./Committee.css";

const MEMBERS = [
  { role: "Chairperson" },
  { role: "Vice Chairperson" },
  { role: "Secretary" },
  { role: "Public Relations Officer" },
  { role: "Ordinary Member" },
  { role: "Ordinary Member" },
  { role: "Ordinary Member" },
  {
    role: "Treasurer",
    instagram: "https://www.instagram.com/aunms1/",
    email: "aun.syed2@mail.dcu.ie",
    photo: treasurerPhoto,
  },
  { role: "Design & Marketing Officer" },
  { role: "Design & Marketing Officer" },
  { role: "Design & Marketing Officer" },
  { role: "Content Creation Officer" },
  { role: "Sponsorship Officer" },
  { role: "Sponsorship Officer" },
  { role: "Sponsorship Officer" },
  { role: "Trips & Events Officer" },
  { role: "Events Officer" },
  { role: "Weekly Events Officer" },
  { role: "First Year Rep" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 6.5 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Committee() {
  return (
    <section id="committee" className="section committee">
      <div className="container">
        <span className="section-label">The people behind it</span>
        <h2 className="section-heading">Meet the committee</h2>
        <p className="section-sub">
          2026–2027 committee photos coming soon. New roles open up every AGM — keep an eye on
          Instagram.
        </p>

        <div className="committee-grid">
          {MEMBERS.map((member, index) => (
            <div key={index} className="committee-card">
              {member.photo ? (
                <img src={member.photo} alt={member.role} className="committee-avatar" />
              ) : (
                <div className="committee-avatar" aria-hidden="true" />
              )}
              <span className="committee-role">{member.role}</span>
              <div className="committee-socials">
                <a
                  href={member.instagram || "#"}
                  target={member.instagram ? "_blank" : undefined}
                  rel={member.instagram ? "noreferrer" : undefined}
                  aria-label={`${member.role} Instagram`}
                  className="committee-social-link"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={member.email ? `mailto:${member.email}` : "#"}
                  aria-label={`Email ${member.role}`}
                  className="committee-social-link"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Committee;
