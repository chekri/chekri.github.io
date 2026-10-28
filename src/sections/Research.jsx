import Section, { SubHeading } from "../components/Section.jsx";
import Tile, { cycle } from "../components/Tile.jsx";
import FocusCard from "../components/FocusCard.jsx";
import PubCard from "../components/PubCard.jsx";
import { research, publications, theses, talks } from "../data/content.js";

const gap = "gap-[clamp(0.75rem,2vw,1.25rem)]";

export default function Research() {
  const [current, phd] = research.focus;
  return (
    <Section id="research" title="Research" note="u_t − ∇·(κ∇u) = f">
      <div className={`grid ${gap} md:grid-cols-2`}>
        <FocusCard {...current} />
        <FocusCard {...phd} dark />
      </div>

      <SubHeading>Interests</SubHeading>
      <ul className={`grid auto-rows-fr grid-cols-2 lg:grid-cols-3 ${gap}`}>
        {research.interests.map((i, k) => (
          <Tile key={i.label} as="li" tone={cycle[k % 4]} icon={i.icon} title={i.label} className="min-h-40 justify-center" />
        ))}
      </ul>

      <SubHeading>Publications</SubHeading>
      <div className={`grid ${gap}`}>{publications.map((p, i) => <PubCard key={p.title} n={i + 1} w={p} />)}</div>

      <SubHeading>Reports and Theses</SubHeading>
      <div className={`grid ${gap}`}>{theses.map((t, i) => <PubCard key={t.title} n={publications.length + i + 1} w={t} />)}</div>

      <SubHeading>Talks</SubHeading>
      <ul className={`grid auto-rows-fr ${gap} md:grid-cols-3`}>
        {talks.map((t, k) => (
          <Tile key={t.title} as="li" tone={["sepia", "paper", "sage"][k % 3]} label={t.event} title={t.title}>{t.place}</Tile>
        ))}
      </ul>
    </Section>
  );
}
