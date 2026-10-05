import { Suspense, lazy, useEffect, useMemo } from "react";
import { resolveSeason } from "./config";

// Each season is code-split, so its CSS only loads while that season is active.
const SEASON_COMPONENTS = {
  halloween: lazy(() => import("./halloween")),
};

function Season() {
  const season = useMemo(() => resolveSeason(), []);

  useEffect(() => {
    if (!season) return undefined;
    const className = `season-${season}`;
    document.documentElement.classList.add(className);
    return () => document.documentElement.classList.remove(className);
  }, [season]);

  const SeasonComponent = season ? SEASON_COMPONENTS[season] : null;
  if (!SeasonComponent) return null;

  return (
    <Suspense fallback={null}>
      <SeasonComponent />
    </Suspense>
  );
}

export default Season;
