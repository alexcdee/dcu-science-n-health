export const SIGNUP_URL = "https://dcustudentlife.hellorubric.com/?s=14372";
export const INSTAGRAM_URL = "https://www.instagram.com/scienceandhealth.dcu/";
export const TIKTOK_URL = "https://www.tiktok.com/@sciencehealthdcu?_t=zn-8usbregj2qw&_r=1";

const CALENDAR_ID =
  "226cf20b9cc81dedf3629096dd387526afe294fc675f28a7f910db5578627d7d@group.calendar.google.com";

export const CALENDAR_EMBED_URL = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
  CALENDAR_ID,
)}&ctz=Europe%2FDublin`;

export const CALENDAR_ICS_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(
  CALENDAR_ID,
)}/public/basic.ics`;

export const CALENDAR_WEBCAL_URL = CALENDAR_ICS_URL.replace(/^https:\/\//, "webcal://");

export const CALENDAR_GOOGLE_SUBSCRIBE_URL = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(
  CALENDAR_ID,
)}`;
