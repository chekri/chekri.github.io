import Figure from "./Figure.jsx";

/* Boxed entry, kept compact: small figure with "FIG. 01" on the left, details on the right. */
export default function PubCard({ n, w }) {
  return (
    <article className="grid grid-cols-[clamp(6.5rem,22%,11rem)_1fr] items-center gap-[clamp(0.75rem,2.5vw,1.5rem)] rounded-xl border border-rule bg-card p-[clamp(0.75rem,2vw,1.1rem)] shadow-sm">
      <figure className="m-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded border border-rule">
          <Figure name={w.fig} label={w.title} />
        </div>
        <figcaption className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted">Fig. {String(n).padStart(2, "0")}</figcaption>
      </figure>

      <div>
        <h4 className="text-[clamp(1rem,1.7vw,1.15rem)] font-semibold leading-snug">{w.title}</h4>
        {w.authors && <p className="mt-1 text-[0.92em]">{w.authors}</p>}
        {w.venue && <p className="text-[0.92em] italic text-muted">{w.venue}</p>}
        <ul className="mt-2 flex flex-wrap items-center text-[0.92em]">
          {w.links.map((l, i) => (
            <li key={l.label} className="flex items-center">
              {i > 0 && <span aria-hidden="true" className="mx-2.5 text-ink/40">|</span>}
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-ink/50 underline-offset-4 transition-colors hover:text-sage-deep hover:decoration-sage-deep">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
