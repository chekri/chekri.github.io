import Section, { SubHeading } from "../components/Section.jsx";
import Tile from "../components/Tile.jsx";
import { learning, beyond } from "../data/content.js";

const gap = "gap-[clamp(0.75rem,2vw,1.25rem)]";

export default function Learning() {
  return (
    <Section id="learning" title="Learning" tone="sepia" note="Model → Analyze → Solve → Apply">
      <p className="max-w-[62ch] text-[clamp(1.1rem,2.2vw,1.4rem)] leading-snug">{learning.intro}</p>

      <SubHeading>Interested Topics</SubHeading>
      <ul className={`grid auto-rows-fr ${gap} sm:grid-cols-3`}>
        {learning.topics.map((t, k) => (
          <Tile key={t.label} as="li" tone={["paper", "sage", "ink"][k % 3]} eq={t.eq} title={t.label} className="min-h-44" />
        ))}
      </ul>

      <SubHeading>Beyond research</SubHeading>
      <Tile tone="paper" className="max-w-2xl">
        <p className="text-[clamp(1.1rem,2.2vw,1.35rem)]">{beyond.intro}</p>
        <a href="#/beyond" className="mt-4 inline-block rounded-full bg-ink px-6 py-2.5 text-paper no-underline transition-colors hover:bg-sage-deep">See my photography →</a>
      </Tile>
    </Section>
  );
}
