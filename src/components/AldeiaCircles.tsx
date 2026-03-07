"use client";

export default function AldeiaCircles() {
  const circles = [
    { r: 80,  dur: "8s",  delay: "0s",    dx: 18,  dy: 12  },
    { r: 150, dur: "11s", delay: "-3s",   dx: -22, dy: 18  },
    { r: 230, dur: "13s", delay: "-5s",   dx: 14,  dy: -20 },
    { r: 310, dur: "17s", delay: "-2s",   dx: -18, dy: -14 },
    { r: 390, dur: "9s",  delay: "-7s",   dx: 24,  dy: 10  },
    { r: 470, dur: "15s", delay: "-4s",   dx: -12, dy: 22  },
    { r: 550, dur: "12s", delay: "-1s",   dx: 20,  dy: -16 },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute"
        style={{ right: "-60px", top: "50%", transform: "translateY(-50%)", width: 620, height: 620 }}
        viewBox="0 0 620 620"
        fill="none"
      >
        {circles.map((c, i) => (
          <circle
            key={i}
            cx="310"
            cy="310"
            r={c.r}
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="1"
            style={{
              animation: `aldeiaOrbit${i} ${c.dur} ease-in-out infinite`,
              animationDelay: c.delay,
            }}
          />
        ))}
      </svg>

      <style>{`
        ${circles.map((c, i) => `
          @keyframes aldeiaOrbit${i} {
            0%   { transform: translate(0px, 0px); }
            25%  { transform: translate(${c.dx}px, ${c.dy}px); }
            50%  { transform: translate(${Math.round(c.dx * 0.4)}px, ${Math.round(-c.dy * 0.8)}px); }
            75%  { transform: translate(${Math.round(-c.dx * 0.6)}px, ${Math.round(c.dy * 0.5)}px); }
            100% { transform: translate(0px, 0px); }
          }
        `).join("")}
      `}</style>
    </div>
  );
}
