import treasurerPhoto from "../assets/committee/treasurer.jpg";
import chairpersonPhoto from "../assets/committee/chairperson.JPG";
import coChairpersonPhoto from "../assets/committee/co-chairperson.jpeg";
import secretaryPhoto from "../assets/committee/secretary.jpg";
import proPhoto from "../assets/committee/pro.JPG";
import ordinaryMemberPhoto1 from "../assets/committee/ordinary-member.jpeg";
import ordinaryMemberPhoto2 from "../assets/committee/ordinary-member2.jpg";
import marketingDesignPhoto1 from "../assets/committee/marketing-design.jpeg";
import marketingDesignPhoto2 from "../assets/committee/marketing-design2.JPG";
import marketingDesignPhoto3 from "../assets/committee/marketing-design2.jpeg";
import contentCreationPhoto from "../assets/committee/content-creation-officer.jpeg";
import sponsorshipPhoto1 from "../assets/committee/sponorship1.JPG";
import sponsorshipPhoto2 from "../assets/committee/sponorship-officer2.jpg";
import tripsEventsPhoto from "../assets/committee/trips-events-officer.jpeg";
import eventsResearchDesignPhoto from "../assets/committee/events-research-design-officer.jpg";
import weeklyEventsPhoto from "../assets/committee/weekly-events-officer.png";
import supplyChainPhoto from "../assets/committee/supply-chain-logistics.jpg";
import "./Committee.css";

const DEFAULT_EMAIL = "dcu.sciencehealthsoc@gmail.com";

const MEMBERS = [
  { role: "Chairperson", name: "Rean Rahman", instagram: "https://www.instagram.com/rean______/", email: "rean.rahman2@mail.dcu.ie", photo: chairpersonPhoto },
  { role: "Chairperson", name: "Urvee Sayana", instagram: "https://www.instagram.com/urvee_kumari/", email: "urvee.sayana2@mail.dcu.ie", photo: coChairpersonPhoto },
  { role: "Secretary", name: "Irene Mary Malaykal", instagram: "https://www.instagram.com/irene.eml/", email: "irene.malaykal2@mail.dcu.ie", photo: secretaryPhoto },
  { role: "Public Relations Officer", name: "Asha Namdabadi", instagram: "https://www.instagram.com/tr.asha.can/", email: "asha.namdabadi2@mail.dcu.ie", photo: proPhoto, photoPosition: "center top" },
  { role: "Ordinary Member", name: "Anne Leung", instagram: "https://www.instagram.com/sleepypomelo/", email: "anne.leung2@mail.dcu.ie", photo: ordinaryMemberPhoto1 },
  { role: "Ordinary Member", name: "Conor Farrell", instagram: "https://www.instagram.com/conorfarrellxx/", photo: ordinaryMemberPhoto2 },
  {
    role: "Treasurer",
    name: "Aun",
    instagram: "https://www.instagram.com/aunms1/",
    email: "aun.syed2@mail.dcu.ie",
    photo: treasurerPhoto,
  },
  { role: "Design & Marketing Officer", name: "Iris Riberio", instagram: "https://www.instagram.com/iris.real.live/", email: "iris.ribeiro2@mail.dcu.ie", photo: marketingDesignPhoto1 },
  { role: "Design & Marketing Officer", name: "Sophia Zavalko", photo: marketingDesignPhoto2 },
  { role: "Design & Marketing Officer", name: "Oradi", photo: marketingDesignPhoto3 },
  { role: "Content Creation Officer", name: "Veena Mannchikanti", instagram: "https://www.instagram.com/veena.manchi/", photo: contentCreationPhoto },
  { role: "Head Sponsorship Officer", name: "Sara Bartley", instagram: "https://www.instagram.com/_saraelisaa/", email: "sara.bartley6@mail.dcu.ie", photo: sponsorshipPhoto1 },
  { role: "Sponsorship Officer", name: "Niamh Quinn", instagram: "https://www.instagram.com/niamh.quinn4/", photo: sponsorshipPhoto2 },
  { role: "Sponsorship Officer", name: "Jake O'Connor", instagram: "https://www.instagram.com/ssssnakeo/" },
  { role: "Trips & Events Officer", name: "Sarang Thayyil", instagram: "https://www.instagram.com/sarangatang06/", email: "sarang.thayyil2@mail.dcu.ie", photo: tripsEventsPhoto },
  { role: "Events, Research & Design Officer", name: "Sophie O'Leary", instagram: "https://www.instagram.com/s0phie.ann/", email: "sophie.oleary42@mail.dcu.ie", photo: eventsResearchDesignPhoto },
  { role: "Supply Chain & Logistics Officer", name: "Varsha Krishnakumar", instagram: "https://www.instagram.com/varshaaa_kk/", email: "varsha.krishnakumarparameswarran4@mail.dcu.ie", photo: supplyChainPhoto },
  { role: "Weekly Events Officer", name: "Ryan Dennison", instagram: "https://www.instagram.com/ryan_dennison_/", email: "ryan.dennison2@mail.dcu.ie", photo: weeklyEventsPhoto, photoPosition: "center 45%" },
  { role: "First Year Rep", name: "Tadhg O'Connor", instagram: "https://www.instagram.com/tadhg__oc/", email: "tadhg.oconnor2@mail.dcu.ie" },
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
                <img
                  src={member.photo}
                  alt={member.role}
                  className="committee-avatar"
                  style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
                />
              ) : (
                <div className="committee-avatar" aria-hidden="true" />
              )}
              <span className="committee-role">{member.role}</span>
              <span className="committee-name">{member.name}</span>
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
                  href={`mailto:${member.email || DEFAULT_EMAIL}`}
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
