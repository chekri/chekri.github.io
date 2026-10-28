import Icon from "./Icons.jsx";

const tones = {
  paper: "bg-card text-ink border-rule",
  ink: "bg-ink text-paper border-ink",
  sage: "bg-sage-tint text-ink border-sage/40",
  sepia: "bg-sepia text-ink border-sepia",
};
export const cycle = ["paper", "sage", "sepia", "ink"];

/* Palette tile: small label, large title, quiet description. Stretches to the tallest in its grid row. */
export default function Tile({ tone = "paper", label, title, icon, eq, as: Tag = "article", className = "", children }) {
  return (
    <Tag className={`flex h-full flex-col rounded-2xl border p-[clamp(1rem,3vw,1.75rem)] ${tones[tone]} ${className}`}>
      {icon && <Icon name={icon} className="mb-3 h-7 w-7 text-sage-deep" tone={tone} />}
      {eq && <p className="mb-3 font-hand text-[clamp(1.6rem,4vw,2.2rem)] leading-none text-sage-deep">{eq}</p>}
      {label && <p className="text-[0.78rem] uppercase tracking-[0.12em] opacity-70">{label}</p>}
      {title && <h3 className="mt-1 text-[clamp(1.2rem,2.4vw,1.7rem)] font-medium leading-snug">{title}</h3>}
      {children && <div className="mt-2 opacity-85">{children}</div>}
    </Tag>
  );
}
