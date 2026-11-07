import Section, { SubHeading } from "../components/Section.jsx";
import Tile, { cycle } from "../components/Tile.jsx";
import Gallery from "../components/Gallery.jsx";
import { beyond } from "../data/content.js";

const gap = "gap-[clamp(0.75rem,2vw,1.25rem)]";
const numerals = ["i", "ii", "iii", "iv"];

export default function Beyond() {
  return (
    <Section id="beyond" title="Beyond Research" note="away from the desk">
      <p className="max-w-[62ch] text-[clamp(1.15rem,2.4vw,1.5rem)] leading-snug">{beyond.intro}</p>

      <ul className={`mt-[clamp(1.5rem,4vw,2.5rem)] grid auto-rows-fr grid-cols-2 lg:grid-cols-4 ${gap}`}>
        {beyond.items.map((t, k) => (
          <Tile key={t} as="li" tone={cycle[k % 4]} eq={numerals[k]} title={t} className="min-h-40" />
        ))}
      </ul>

      <SubHeading>Photography</SubHeading>
      <Gallery />

      <a href="#about" className="mt-[clamp(2rem,5vw,3.5rem)] inline-block rounded-full border border-ink px-6 py-2.5 text-ink no-underline transition-colors hover:bg-ink hover:text-paper">← Back to the portfolio</a>
    </Section>
  );
}
