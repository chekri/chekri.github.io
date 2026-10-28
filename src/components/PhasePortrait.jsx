/* Phase portrait of a double-well oscillator  x'' = x − x³ − 0.25 x',  integrated once at load. */
const d = (() => {
  let out = "";
  for (let a = -1.8; a <= 1.8; a += 0.6)
    for (let b = -1.6; b <= 1.6; b += 0.8) {
      let x = a, y = b;
      for (let k = 0; k < 260; k++) {
        out += `${k ? "L" : "M"}${(200 + x * 95).toFixed(0)},${(150 - y * 70).toFixed(0)}`;
        const ay = x - x ** 3 - 0.25 * y;
        x += y * 0.03; y += ay * 0.03;
        if (Math.abs(x) > 2.1 || Math.abs(y) > 2.1) break;
      }
    }
  return out;
})();

export default function PhasePortrait({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true" className={className}>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
