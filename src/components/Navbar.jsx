import { useState } from "react";
import { nav, person } from "../data/content.js";
import { wrap } from "./Section.jsx";

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const link = (n, mobile) => (
    <a key={n.id} href={n.page ? `#/${n.id}` : `#${n.id}`} onClick={() => setOpen(false)} aria-current={active === n.id ? "true" : undefined}
      className={`block border-b-2 no-underline transition-colors ${mobile ? "py-3 text-lg" : "py-1"} ${active === n.id ? "border-sage-deep font-semibold" : "border-transparent text-muted hover:text-ink"}`}>
      {n.label}
    </a>
  );
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 pt-[env(safe-area-inset-top)] backdrop-blur">
      <div className={`${wrap} flex items-center justify-between py-3`}>
        <a href="#about" className="flex items-center gap-3 text-3xl font-medium leading-none text-ink no-underline">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="" className="h-[clamp(2.25rem,5.5vw,3.25rem)] w-auto" />
          {person.short}
        </a>
        <nav aria-label="Main" className="hidden gap-[clamp(1rem,3vw,2.25rem)] md:flex">{nav.map((n) => link(n, false))}</nav>
        <button type="button" className="rounded-full border border-ink/40 px-4 py-1.5 text-sm md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && <nav id="mobile-nav" aria-label="Main" className={`${wrap} pb-3 md:hidden`}>{nav.map((n) => link(n, true))}</nav>}
    </header>
  );
}
