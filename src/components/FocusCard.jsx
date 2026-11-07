/* Only a thick accent line on the left; no box, no badge. */
export default function FocusCard({ dark = false, label, text, keywords }) {
  return (
    <article className={`border-l-4 pl-4 ${dark ? "border-ink" : "border-sage"}`}>
      <p className="font-hand text-[clamp(1.3rem,2.4vw,1.6rem)] leading-none text-sage-deep">{label}</p>
      <h3 className="mt-1 text-[clamp(1.1rem,2vw,1.4rem)] font-medium leading-snug">{text}</h3>
      <p className="mt-1 text-[0.92em] text-muted"><strong className="font-semibold text-ink">Keywords:</strong> {keywords}</p>
    </article>
  );
}
