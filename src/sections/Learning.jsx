import Section, { SubHeading } from "../components/Section.jsx";
import Tile from "../components/Tile.jsx";
import { learning, beyond } from "../data/content.js";

export default function Learning() {
  return (
    <Section id="learning" title="Learning" tone="sepia" note="Model → Analyze → Solve → Apply">
      <p className="max-w-[62ch] text-[clamp(1.1rem,2.2vw,1.4rem)] leading-snug">{learning.intro}</p>

      <SubHeading>Interested Topics</SubHeading>
      {/* box-free columns: formula over title, under a sage rule */}
      <ol className="grid gap-x-[clamp(1.5rem,5vw,4rem)] gap-y-8 sm:grid-cols-3">
        {learning.topics.map((t, k) => (
          <li key={t.label} className="border-t-2 border-sage pt-3">
            {/* <h4 className="text-xs tracking-[0.14em] text-muted">0{k + 1}</h4> */}
            {/* <p aria-hidden="true" className="mt-2 font-hand text-[clamp(1.7rem,3.6vw,2.4rem)] leading-none text-sage-deep">{t.eq}</p> */}
            <h4 className="mt-3 text-[clamp(1.1rem,2vw,1.4rem)] font-medium leading-snug">{t.label}</h4>
          </li>
        ))}
      </ol>

      {/* <SubHeading>Beyond research</SubHeading>
      <Tile tone="paper" className="max-w-2xl">
        <p className="text-[clamp(1.1rem,2.2vw,1.35rem)]">{beyond.intro}</p>
        <a href="#/beyond" className="mt-4 inline-block rounded-full bg-ink px-6 py-2.5 text-paper no-underline transition-colors hover:bg-sage-deep">See my photography →</a>
      </Tile> */}
    </Section>
  );
}
