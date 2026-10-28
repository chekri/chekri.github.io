import { useId } from "react";

/* Fluid container: 92% of the window, capped on very wide screens */
export const wrap = "mx-auto w-[min(92%,78rem)]";

const tones = {
  plain: "",
  sepia: "bg-sepia/60 border-y border-rule",
  ink: "on-ink relative overflow-hidden bg-ink text-paper",
};

export default function Section({ id, title, note, tone = "plain", children }) {
  const hid = useId();
  return (
    <section id={id} aria-labelledby={hid} className={`py-[clamp(3rem,8vw,6.5rem)] ${tones[tone]}`}>
      <div className={`${wrap} relative`}>
        <header className="mb-[clamp(1.5rem,4vw,3rem)]">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
            <h2 id={hid} className="text-[clamp(2.4rem,7vw,4.5rem)] font-medium leading-none tracking-tight">{title}</h2>
            {note && <span aria-hidden="true" className={`-rotate-2 font-hand text-[clamp(1.3rem,3vw,1.9rem)] ${tone === "ink" ? "text-sage" : "text-sage-deep"}`}>{note}</span>}
          </div>
          {/* x-axis rule */}
          <div aria-hidden="true" className={`relative mt-4 h-px ${tone === "ink" ? "bg-paper/30" : "bg-ink/35"} after:absolute after:-top-[4px] after:right-0 after:border-y-[4px] after:border-l-[9px] after:border-y-transparent ${tone === "ink" ? "after:border-l-paper/50" : "after:border-l-ink/50"}`} />
        </header>
        {children}
      </div>
    </section>
  );
}

export function SubHeading({ children }) {
  return (
    <h3 className="mb-4 mt-[clamp(2rem,5vw,3.5rem)] flex items-center gap-3 text-[clamp(1.3rem,2.6vw,1.8rem)] font-medium first:mt-0">
      <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-sage" />
      {children}
      <span aria-hidden="true" className="h-px flex-1 bg-rule" />
    </h3>
  );
}
