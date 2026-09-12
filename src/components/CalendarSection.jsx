import {
  CALENDAR_EMBED_URL,
  CALENDAR_GOOGLE_SUBSCRIBE_URL,
  CALENDAR_ICS_URL,
  CALENDAR_WEBCAL_URL,
} from "../data/links";
import "./CalendarSection.css";

function CalendarSection() {
  return (
    <section id="calendar" className="section calendar">
      <div className="container calendar-inner">
        <div className="calendar-copy">
          <span className="section-label">Never miss an event</span>
          <h2 className="section-heading">Subscribe to our calendar</h2>
          <p className="section-sub">
            Add the society calendar to your phone or laptop and every event lands in your own
            calendar automatically — no more screenshotting posters.
          </p>

          <div className="calendar-actions">
            <a
              href={CALENDAR_GOOGLE_SUBSCRIBE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Add to Google Calendar
            </a>
            <a href={CALENDAR_WEBCAL_URL} className="btn btn-outline-dark">
              Add to Apple / Outlook
            </a>
          </div>

          <p className="calendar-note">
            Or grab the{" "}
            <a href={CALENDAR_ICS_URL} target="_blank" rel="noreferrer">
              raw .ics link
            </a>
            .
          </p>
        </div>

        <div className="calendar-embed">
          <iframe
            src={CALENDAR_EMBED_URL}
            title="DCU Science & Health Society calendar"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default CalendarSection;
