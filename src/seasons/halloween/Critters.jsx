import { useEffect, useRef } from "react";
import "./critters.css";

const BATS = [
  { top: "14vh", size: 34, duration: 26, delay: 0 },
  { top: "42vh", size: 26, duration: 34, delay: 9 },
  { top: "68vh", size: 30, duration: 30, delay: 17 },
];

function Bat() {
  return (
    <svg viewBox="0 0 64 32" fill="currentColor" aria-hidden="true">
      <path className="bat-wing bat-wing-left" d="M32 16C26 6 14 4 2 8c5 3 6 8 5 14 4-4 8-4 11-1 2-3 6-4 9-3z" />
      <path className="bat-wing bat-wing-right" d="M32 16c6-10 18-12 30-8-5 3-6 8-5 14-4-4-8-4-11-1-2-3-6-4-9-3z" />
      <ellipse cx="32" cy="17" rx="4" ry="7" />
      <path d="M29 11l-1-6 4 3 4-3-1 6z" />
    </svg>
  );
}

function Spider() {
  return (
    <svg viewBox="0 0 48 44" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path d="M18 22L6 14L2 22" />
        <path d="M18 26L5 28L3 38" />
        <path d="M18 24L8 20" />
        <path d="M18 28L10 34" />
        <path d="M30 22L42 14L46 22" />
        <path d="M30 26L43 28L45 38" />
        <path d="M30 24L40 20" />
        <path d="M30 28L38 34" />
      </g>
      <ellipse cx="24" cy="32" rx="9" ry="10" fill="currentColor" />
      <circle cx="24" cy="20" r="6" fill="currentColor" />
      <circle cx="21.5" cy="19" r="1.4" fill="#ff7a1a" />
      <circle cx="26.5" cy="19" r="1.4" fill="#ff7a1a" />
    </svg>
  );
}

function Critters() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      root.style.setProperty("--spider-drop", `${progress * 55}vh`);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="critters" aria-hidden="true">
      <div className="spider">
        <span className="spider-thread" />
        <span className="spider-body">
          <Spider />
        </span>
      </div>

      {BATS.map((bat, index) => (
        <span
          key={index}
          className="bat"
          style={{
            top: bat.top,
            width: bat.size,
            animationDuration: `${bat.duration}s`,
            animationDelay: `${bat.delay}s`,
          }}
        >
          <Bat />
        </span>
      ))}
    </div>
  );
}

export default Critters;
