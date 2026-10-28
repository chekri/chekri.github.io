import Photo from "../components/Photo.jsx";
import Socials from "../components/Socials.jsx";
import PhasePortrait from "../components/PhasePortrait.jsx";
import ExtLink from "../components/ExtLink.jsx";
import { wrap } from "../components/Section.jsx";
import { person, links } from "../data/content.js";

export default function Hero() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-[clamp(2.5rem,8vw,6rem)]">
      <PhasePortrait className="pointer-events-none absolute -right-[8%] top-[4%] w-[70%] max-w-3xl text-sage opacity-25" />
      <div className={`${wrap} relative grid items-center gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[1.15fr_1fr]`}>
        <div>
          <h1 id="about-title" className="text-[clamp(3.2rem,11vw,7rem)] font-medium leading-[0.9] tracking-tight">{person.short}</h1>
          <p className="mt-2 text-[clamp(1rem,2.2vw,1.35rem)] text-sage-deep">{person.full}</p>

          <div className="mt-6 max-w-[62ch] space-y-4">
            <p>I am {person.full}, a researcher working in the junction of Applied Mathematics, Mechanics, Physics and Engineering.</p>
            <p>
              Currently, I am working as a post-doctoral researcher in the <ExtLink href={links.trento}>University of Trento</ExtLink>, Italy under the
              collaboration of <ExtLink href={links.dalCorso}>Prof. Francesco Dal Corso</ExtLink> and <ExtLink href={links.bigoni}>Prof. Davide Bigoni</ExtLink>.
              I earned my Ph.D in Mathematics from <ExtLink href={links.fu}>Freie Universität Berlin</ExtLink>, Germany in 2023, supervised by{" "}
              <ExtLink href={links.maddocks}>Prof. John H. Maddocks</ExtLink>.
            </p>
            <p>
              I am interested in modelling mechanical systems especially slender structures and investigating their nonlinear behavior. These nonlinearities
              can be harnessed in innovative technologies of metamaterials and soft robots as well as gain some insights into complex phenomena found in nature and biology.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="rounded-full bg-ink px-6 py-2.5 text-paper no-underline transition-colors hover:bg-sage-deep">Explore research</a>
            <a href="#cv" className="rounded-full border border-ink px-6 py-2.5 text-ink no-underline transition-colors hover:bg-ink hover:text-paper">Curriculum Vita</a>
          </div>

          <Socials className="mt-6" />
        </div>

        <div className="relative mx-auto w-full max-w-[min(100%,26rem)]">
          <div aria-hidden="true" className="graph absolute inset-0 translate-x-[4%] translate-y-[3%] rounded-2xl border border-rule" />
          <Photo ratio="aspect-[4/5]" className="relative w-full" />
          {/* <p aria-hidden="true" className="mt-4 -rotate-1 text-center font-hand text-[clamp(1.4rem,3vw,1.9rem)] text-sage-deep">EI θ″ + P sin θ = 0</p> */}
        </div>
      </div>
    </section>
  );
}
