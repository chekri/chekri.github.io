import { useState } from "react";
import Section from "../components/Section.jsx";
import Tile from "../components/Tile.jsx";
import Socials from "../components/Socials.jsx";
import ExtLink from "../components/ExtLink.jsx";
import PhasePortrait from "../components/PhasePortrait.jsx";
import { person, links } from "../data/content.js";

export default function Contact() {
  const [status, setStatus] = useState("");
  const address = `${person.emailUser}@${person.emailHost}`;
  const copy = async () => {
    try { await navigator.clipboard.writeText(address); setStatus("Address copied"); }
    catch { setStatus("Copy failed. Select the address instead."); }
  };

  return (
    <Section id="contact" title="Contact" tone="ink" note="write to me">
      <PhasePortrait className="pointer-events-none absolute -right-[8%] -top-[35%] z-0 w-[70%] text-sage opacity-25" />
      <div className="relative z-10 grid gap-[clamp(0.75rem,2vw,1.25rem)] md:grid-cols-[1.5fr_1fr]">
        <Tile tone="paper" label="Email" title="You can reach me at:">
          <a href={`mailto:${address}`} className="block break-all text-[clamp(1.2rem,3.6vw,2.1rem)] font-medium leading-tight text-ink underline decoration-sage decoration-2 underline-offset-4 hover:decoration-ink">
            {address}
          </a>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href={`mailto:${address}`} className="rounded-full bg-ink px-6 py-2.5 text-paper no-underline transition-colors hover:bg-sage-deep">Send email</a>
            <button type="button" onClick={copy} className="rounded-full border border-ink px-6 py-2.5 transition-colors hover:bg-ink hover:text-paper">Copy address</button>
            <span role="status" className="text-sm">{status}</span>
          </div>
        </Tile>
        <Tile tone="sage" label="Based at" title="University of Trento, Italy">
          <p>Post-doctoral researcher, in collaboration with <ExtLink href={links.dalCorso}>Prof. Francesco Dal Corso</ExtLink> and <ExtLink href={links.bigoni}>Prof. Davide Bigoni</ExtLink>.</p>
        </Tile>
        <Tile tone="sepia" label="Elsewhere" title="Find me online" className="md:col-span-2">
          <Socials className="mt-1" />
        </Tile>
      </div>
    </Section>
  );
}
