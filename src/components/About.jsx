import "./About.css";

const STATS = [
  { value: "7", label: "Schools represented" },
  { value: "300+", label: "Members" },
  { value: "20+", label: "Events per year" },
  { value: "1", label: "Community" },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div className="about-copy">
          <span className="section-label">Who we are</span>
          <h2 className="section-heading">
            One society for every student across Science &amp; Health.
          </h2>
          <p className="section-sub">
            We bring together students from Chemical Sciences, Biotechnology, Health &amp; Human
            Performance, Mathematical Sciences, Nursing &amp; Community Health, Physical Sciences,
            and Psychology — through weekly study sessions, hands-on workshops, socials, and our
            flagship STEM++ Week.
          </p>
        </div>

        <div className="about-stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="about-stat-card">
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
