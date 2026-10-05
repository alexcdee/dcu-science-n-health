const FLIES = Array.from({ length: 14 }, (_, index) => ({
  left: `${(index * 37 + 8) % 100}%`,
  size: 3 + (index % 3),
  duration: 16 + (index % 5) * 4,
  delay: -((index * 3) % 20),
  drift: (index % 2 === 0 ? 1 : -1) * (14 + (index % 4) * 8),
}));

function Fireflies() {
  return (
    <div className="fireflies" aria-hidden="true">
      {FLIES.map((fly, index) => (
        <i
          key={index}
          style={{
            left: fly.left,
            width: fly.size,
            height: fly.size,
            animationDuration: `${fly.duration}s`,
            animationDelay: `${fly.delay}s`,
            "--drift": `${fly.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Fireflies;
