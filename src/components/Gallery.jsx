import { useRef, useState } from "react";
import { photos } from "../data/content.js";

const base = import.meta.env.BASE_URL;
const gap = "gap-[clamp(0.75rem,2vw,1.25rem)]";

export default function Gallery() {
  const dialog = useRef(null);
  const [current, setCurrent] = useState(null);
  const open = (p) => { setCurrent(p); dialog.current?.showModal(); };

  if (!photos.length)
    return (
      <ul className={`grid ${gap} sm:grid-cols-2 lg:grid-cols-3`}>
        {[1, 2, 3].map((n) => (
          <li key={n} className="graph grid aspect-[4/3] place-items-center rounded-2xl border border-rule text-sage-deep">
            <span className="flex flex-col items-center gap-1">
              <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h4l2-3h6l2 3h4v11H3z" /><circle cx="12" cy="13" r="3.5" /></svg>
              <span className="font-hand text-2xl">photograph {n}</span>
            </span>
          </li>
        ))}
      </ul>
    );

  return (
    <>
      <ul className={`columns-1 sm:columns-2 lg:columns-3 ${gap} [&>li]:mb-[clamp(0.75rem,2vw,1.25rem)]`}>
        {photos.map((p) => (
          <li key={p.src} className="break-inside-avoid">
            <figure className="m-0 overflow-hidden rounded-2xl border border-rule bg-card">
              <button type="button" onClick={() => open(p)} className="block w-full cursor-zoom-in" aria-label={`Open photo: ${p.alt}`}>
                <img src={base + p.src} alt={p.alt} loading="lazy" className="block h-auto w-full" />
              </button>
              {p.caption && <figcaption className="px-4 py-3 text-sm text-muted">{p.caption}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>

      <dialog ref={dialog} onClick={(e) => e.target === dialog.current && dialog.current.close()} aria-label="Photo viewer"
        className="m-auto max-h-[94vh] max-w-[94vw] rounded-2xl bg-card p-3 backdrop:bg-ink/85">
        {current && (
          <figure className="m-0">
            <img src={base + current.src} alt={current.alt} className="max-h-[78vh] max-w-full object-contain" />
            {current.caption && <figcaption className="pt-2 text-sm text-muted">{current.caption}</figcaption>}
          </figure>
        )}
        <button type="button" onClick={() => dialog.current.close()} className="mt-3 rounded-full border border-ink px-4 py-1.5 text-sm hover:bg-ink hover:text-paper">Close</button>
      </dialog>
    </>
  );
}
