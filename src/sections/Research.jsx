import Section, { SubHeading } from "../components/Section.jsx";
import Icon from "../components/Icons.jsx";
import FocusCard from "../components/FocusCard.jsx";
import PubCard from "../components/PubCard.jsx";
import { research, publications, theses, talks } from "../data/content.js";

const gap = "gap-[clamp(0.6rem,1.6vw,1rem)]";
const colGap = "gap-x-[clamp(1.5rem,5vw,4rem)]";

export default function Research() {
  const [current, phd] = research.focus;
  return (
    <Section id="research" title="Research" note="">
      <div className={`grid gap-y-6 ${colGap} md:grid-cols-2`}>
        <FocusCard {...current} />
        <FocusCard {...phd} dark />
      </div>

      <SubHeading>Interests</SubHeading>
      {/* numbered list: index, icon badge, label */}
      <div className="rounded-xl border border-rule bg-card p-[clamp(0.75rem,2vw,1.1rem)] shadow-sm">
      <ol className={`grid ${colGap} md:grid-cols-2 [&>li:last-child]:border-b-0 md:[&>li:nth-last-child(2)]:border-b-0`}>
        {research.interests.map((i, k) => (
          <li key={i.label} className="flex items-center gap-4 border-b border-rule py-3.5 transition-[padding] hover:pl-2">
            <span aria-hidden="true" className="w-7 shrink-0 font-hand text-2xl leading-none text-sage-deep">{String(k + 1).padStart(2, "0")}</span>
            {/* <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sage-tint text-sage-deep">
              <Icon name={i.icon} className="h-5 w-5" />
            </span> */}
            <span className="text-[clamp(1.05rem,1.8vw,1.25rem)] leading-snug">{i.label}</span>
          </li>
        ))}
      </ol>
      </div>

      <SubHeading>Publications</SubHeading>
      <div className={`grid ${gap}`}>{publications.map((p, i) => <PubCard key={p.title} n={i + 1} w={p} />)}</div>

      <SubHeading>Reports and Theses</SubHeading>
      <div className={`grid ${gap}`}>{theses.map((t, i) => <PubCard key={t.title} n={publications.length + i + 1} w={t} />)}</div>

      <SubHeading>Talks</SubHeading>
      <div className="rounded-xl border border-rule bg-card p-[clamp(0.75rem,2vw,1.1rem)] shadow-sm">
      <ul>
        {talks.map((t) => (
          <li key={t.title} className="grid grid-cols-[clamp(3rem,9%,4.5rem)_1fr] items-baseline gap-4 border-b border-rule py-3 first:pt-0 last:border-b-0">
            <span aria-hidden="true" className="font-hand text-2xl leading-none text-sage-deep">{t.year}</span>
            <div>
              <p className="font-medium leading-snug">{t.title}</p>
              <p className="text-[0.92em] text-muted">{t.event} · {t.place}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </Section>
  );
}