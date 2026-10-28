import Section, { SubHeading } from "../components/Section.jsx";
import Tile from "../components/Tile.jsx";
import ExtLink from "../components/ExtLink.jsx";
import { links, cv, publications, theses, talks } from "../data/content.js";

const gap = "gap-[clamp(0.75rem,2vw,1.25rem)]";

function Entry({ children }) {
  return (
    <li className="relative">
      <span aria-hidden="true" style={{ left: "calc(var(--gutter) * -1 - 9px)" }} className="absolute top-7 h-4 w-4 rounded-full border-2 border-sage-deep bg-paper" />
      {children}
    </li>
  );
}

export default function CV() {
  const stats = [
    { n: publications.length, label: "Publications", tone: "sage" },
    { n: theses.length, label: "Thesis", tone: "sepia" },
    { n: talks.length, label: "Talks", tone: "paper" },
  ];
  return (
    <Section id="cv" title="Curriculum Vita" note="where the curve led">
      <SubHeading>Personal Information</SubHeading>
      <div className={`grid ${gap} sm:grid-cols-2`}>
        <Tile tone="sage" label="Nationality" title={cv.personal.nationality} />
        <Tile tone="sepia" label="Languages" title={cv.personal.languages} />
      </div>

      <SubHeading>Education</SubHeading>
      <ol className={`relative space-y-[clamp(0.75rem,2vw,1.25rem)] border-l-2 border-sage pl-[var(--gutter)] [--gutter:clamp(1.25rem,4vw,2.25rem)]`}>
        <Entry>
          <Tile tone="ink" label="Now" title="Post-doctoral researcher">
            <ExtLink href={links.trento}>University of Trento</ExtLink>, Italy, in collaboration with{" "}
            <ExtLink href={links.dalCorso}>Prof. Francesco Dal Corso</ExtLink> and <ExtLink href={links.bigoni}>Prof. Davide Bigoni</ExtLink>.
          </Tile>
        </Entry>
        {cv.education.map((e) => (
          <Entry key={e.degree}>
            <Tile tone="paper" label={e.years} title={e.degree}>
              <p>{e.url ? <ExtLink href={e.url}>{e.school}</ExtLink> : e.school}, {e.place}</p>
              {e.focus && <p className="mt-2"><strong className="font-semibold">Focus:</strong> {e.focus}</p>}
              {e.advisors && <p className="mt-1"><strong className="font-semibold">Advisors:</strong> {e.advisors}</p>}
              {e.showThesis && <p className="mt-2 italic">{theses[0].title}</p>}
            </Tile>
          </Entry>
        ))}
      </ol>

      <SubHeading>Output</SubHeading>
      <ul className={`grid grid-cols-3 ${gap}`}>
        {stats.map((s) => (
          <li key={s.label} className="h-full">
            <a href="#research" className="block h-full no-underline">
              <Tile tone={s.tone} className="items-center justify-center text-center transition-transform hover:-translate-y-0.5">
                <span className="text-[clamp(2.4rem,8vw,4.5rem)] font-medium leading-none">{s.n}</span>
                <span className="mt-1 text-[clamp(0.8rem,2vw,1rem)]">{s.label}</span>
              </Tile>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
