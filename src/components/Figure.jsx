/* Hand-drawn figure: a formula across the top and a sketch below, filling its parent box. */
const sketches = {
  fold: (<><path d="M26 118C70 116 96 100 101 76C106 52 132 36 176 30" /><path d="M101 76C98 62 118 58 124 70" strokeDasharray="4 4" /><path d="M26 20v100h152M20 30l6-10 6 10M168 112l10 6-10 6" /><text x="110" y="136">λ</text><text x="6" y="58">θ</text></>),
  cantilever: (<><path d="M26 30v90M18 40l8-8M18 60l8-8M18 80l8-8M18 100l8-8" /><path d="M26 82H170" strokeDasharray="4 4" /><path d="M26 82C84 82 134 76 168 42" /><path d="M168 56v30M162 78l6 10 6-10" /><text x="120" y="130">F</text></>),
  tubes: (<><path d="M24 112C56 30 118 132 176 48" /><path d="M24 122C56 40 118 142 176 58" strokeDasharray="2 4" /><circle cx="24" cy="117" r="5" /><circle cx="176" cy="53" r="5" /><text x="70" y="24">u(t)</text></>),
  rod: (<><path d="M24 100C48 36 84 36 102 78S152 124 176 56" /><path d="M102 78l16-8M102 78l4-16M102 78l-14 10" /><text x="20" y="130">κ₀</text></>),
};
const equations = {
  fold: "EI θ″ + P sin θ = 0",
  cantilever: "δ²Π > 0",
  tubes: "min ∫ ‖u‖² dt",
  rod: "m′ + r′ × n = 0",
};

export default function Figure({ name, label }) {
  return (
    <div className="graph absolute inset-0 flex flex-col">
      <p aria-hidden="true" className="px-3 pt-2 font-hand text-[clamp(1.1rem,2.4vw,1.5rem)] leading-none text-ink/80">{equations[name]}</p>
      <svg viewBox="0 0 200 150" role="img" aria-label={`Hand-drawn sketch: ${label}`} className="min-h-0 w-full flex-1 text-ink" preserveAspectRatio="xMidYMid meet">
        <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{sketches[name]}</g>
        <style>{`text{font-family:Caveat,cursive;font-size:17px;fill:#5b6f53}`}</style>
      </svg>
    </div>
  );
}
