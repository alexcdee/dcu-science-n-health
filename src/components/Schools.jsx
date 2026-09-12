import { SCHOOLS } from "../data/schools";
import "./Schools.css";

function Schools() {
  return (
    <section id="schools" className="section schools">
      <div className="container">
        <span className="section-label">Faculty of Science &amp; Health</span>
        <h2 className="section-heading">Schools in Science &amp; Health</h2>
        <p className="section-sub">
          For those of you confused about who's included in our faculty — here's every school we
          represent.
        </p>

        <div className="schools-grid">
          {SCHOOLS.map((school) => (
            <div key={school.name} className="school-card">
              <h3>{school.name}</h3>
              {school.courses && <p>{school.courses}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schools;
