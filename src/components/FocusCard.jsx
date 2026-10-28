/* Highlighted research focus: big type, a badge, and keyword chips. */
export default function FocusCard({ dark = false, badge, label, text, keywords }) {
  return (
    <article className={`flex h-full flex-col rounded-3xl border-2 p-[clamp(1.25rem,4vw,2.25rem)] ${dark ? "border-ink bg-ink text-paper" : "border-sage bg-sage-tint text-ink"}`}>
      <span className={`self-start rounded-full px-3 py-1 text-xs uppercase tracking-[0.12em] ${dark ? "bg-sage text-ink" : "bg-ink text-paper"}`}>{badge}</span>
      <p className={`mt-4 font-hand text-[clamp(1.5rem,3vw,2rem)] leading-none ${dark ? "text-sage" : "text-sage-deep"}`}>{label}</p>
      <h3 className="mt-1 text-[clamp(1.6rem,3.6vw,2.6rem)] font-medium leading-tight">{text}</h3>
      <p className="mt-5 text-sm opacity-70">Keywords</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {keywords.split(", ").map((k) => (
          <li key={k} className={`rounded-full border px-3 py-1 text-[0.92em] ${dark ? "border-paper/40" : "border-ink/40"}`}>{k}</li>
        ))}
      </ul>
    </article>
  );
}
