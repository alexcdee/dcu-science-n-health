// Seasons switch on automatically inside their date window (month is 1-12).
// Preview any season year-round with ?season=halloween, or force none with ?season=none.
export const SEASONS = [
  { name: "halloween", start: { month: 10, day: 5 }, end: { month: 11, day: 1 } },
];

const toOrdinal = ({ month, day }) => month * 100 + day;

export function resolveSeason(search = window.location.search, today = new Date()) {
  const forced = new URLSearchParams(search).get("season");
  if (forced) {
    return SEASONS.some((season) => season.name === forced) ? forced : null;
  }

  const now = toOrdinal({ month: today.getMonth() + 1, day: today.getDate() });
  const active = SEASONS.find(
    (season) => now >= toOrdinal(season.start) && now <= toOrdinal(season.end),
  );
  return active ? active.name : null;
}
