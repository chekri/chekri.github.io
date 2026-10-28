import Figure from "./Figure.jsx";

/* Journal-style entry: figure with a "FIG. 01" caption on the left, details on the right. */
export default function PubCard({ n, w }) {
  return (
    <article className="grid gap-[clamp(1rem,3vw,2rem)] rounded-2xl border border-rule bg-card p-[clamp(1rem,3vw,1.75rem)] shadow-sm sm:grid-cols-[minmax(0,36%)_1fr]">
      <figure className="m-0">
        <div className="relative aspect-[4/3] overflow-hidden border border-rule">
          <Figure name={w.fig} label={w.title} />
        </div>
        <figcaption className="mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted">Fig. {String(n).padStart(2, "0")}</figcaption>
      </figure>

      <div className="flex flex-col justify-center">
        <h4 className="text-[clamp(1.2rem,2.4vw,1.6rem)] font-semibold leading-snug">{w.title}</h4>
        {w.authors && <p className="mt-2">{w.authors}</p>}
        {w.venue && <p className="mt-1 italic">{w.venue}</p>}
        <ul className="mt-4 flex flex-wrap items-center gap-y-1">
          {w.links.map((l, i) => (
            <li key={l.label} className="flex items-center">
              {i > 0 && <span aria-hidden="true" className="mx-3 text-ink/40">|</span>}
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-ink/50 underline-offset-4 transition-colors hover:text-sage-deep hover:decoration-sage-deep">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
