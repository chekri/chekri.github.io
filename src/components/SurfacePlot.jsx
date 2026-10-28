import { useMemo } from "react";

/* Hand-drawn style isometric mesh of a smooth two-peaked surface z = f(x, y). */
const N = 14, W = 460, H = 360;
const f = (x, y) =>
  Math.exp(-((x + 0.45) ** 2 + (y + 0.1) ** 2) * 5) * 1.1 +
  Math.exp(-((x - 0.5) ** 2 + (y - 0.2) ** 2) * 6) * 0.85 -
  0.18 * Math.cos(3 * x) * Math.sin(2 * y);
const P = (i, j) => {
  const x = (i / N) * 2 - 1, y = (j / N) * 2 - 1;
  return [W / 2 + (x - y) * 150, 245 + (x + y) * 52 - f(x, y) * 105].map((n) => n.toFixed(1)).join(",");
};

export default function SurfacePlot({ className = "" }) {
  const d = useMemo(() => {
    let s = "";
    for (let i = 0; i <= N; i++) { s += `M${P(i, 0)}`; for (let j = 1; j <= N; j++) s += `L${P(i, j)}`; }
    for (let j = 0; j <= N; j++) { s += `M${P(0, j)}`; for (let i = 1; i <= N; i++) s += `L${P(i, j)}`; }
    return s;
  }, []);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Hand-drawn sketch of a smooth two-peaked surface with x, y and z axes" className={`text-ink ${className}`}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="1.2" d="M60 300V40M54 52l6-12 6 12M40 318l90 16M30 300l-8 8" />
        <path className="plot-mesh" strokeWidth="0.9" d={d} />
      </g>
      <g className="fill-muted font-hand" fontSize="17">
        <text x="70" y="38">z</text><text x="124" y="352">y</text><text x="14" y="326">x</text>
        <text x="270" y="30" transform="rotate(-4 270 30)">u(x,y) satisfies</text>
        <text x="300" y="52" transform="rotate(-4 300 52)">∇²u = 0</text>
      </g>
    </svg>
  );
}
