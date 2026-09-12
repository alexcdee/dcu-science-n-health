import { STEM_WEEK, UPCOMING_EVENTS } from "../data/events";
import "./Events.css";

function Events() {
  return (
    <section id="events" className="section events">
      <div className="container">
        <span className="section-label">What's on</span>
        <h2 className="section-heading">Upcoming events</h2>
        <p className="section-sub">
          Details for our next events are being finalised — check back soon or follow us on
          Instagram for updates.
        </p>

        <div className="events-grid">
          {UPCOMING_EVENTS.map((event, index) => (
            <article key={index} className="event-card">
              <span className="event-tag">{event.tag}</span>
              <h3>{event.title}</h3>
              {(event.date || event.location) && (
                <p className="event-meta">
                  {[event.date, event.location].filter(Boolean).join(" · ")}
                </p>
              )}
              {event.blurb && <p className="event-blurb">{event.blurb}</p>}
            </article>
          ))}
        </div>

        <div className="stem-banner">
          <div>
            <span className="stem-banner-label">Flagship event</span>
            <h3>{STEM_WEEK.title}</h3>
            <p className="stem-banner-dates">{STEM_WEEK.dates}</p>
            <p className="stem-banner-blurb">{STEM_WEEK.blurb}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
