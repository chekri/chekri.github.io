import { socials, person } from "../data/content.js";

/* Brand glyphs (24x24, filled) */
const glyphs = {
  github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  orcid: "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378a.947.947 0 1 1 0 1.894.947.947 0 0 1 0-1.894zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z",
};

function Glyph({ id }) {
  return id === "email" ? (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h18v12H3zM3.5 7l8.5 6.5L20.5 7" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d={glyphs[id]} /></svg>
  );
}

const items = [
  ...socials,
  { id: "email", label: "Email", href: `mailto:${person.emailUser}@${person.emailHost}` },
];
const linkProps = (s) => (s.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" });
const handle = "@" + socials.find((s) => s.id === "github").href.split("/").pop();

/* Rounded-square outline button with the logo inside; the label is for screen readers and the hover tooltip. */
function IconButton({ s, size = "h-11 w-11" }) {
  return (
    <a href={s.href} {...linkProps(s)} aria-label={s.label} title={s.label}
      className={`grid ${size} place-items-center rounded-xl border border-ink/40 bg-card/70 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper`}>
      <Glyph id={s.id} />
    </a>
  );
}

/* Vertical column: icon squares, a thin line, then the handle written vertically */
export function SocialColumn({ size = "h-10 w-10", className = "" }) {
  return (
    <nav aria-label="Social links" className={`flex flex-col items-center gap-3 ${className}`}>
      <ul className="flex flex-col gap-3">
        {items.map((s) => <li key={s.id}><IconButton s={s} size={size} /></li>)}
      </ul>
      <span aria-hidden="true" className="mt-2 h-10 w-px bg-ink/30" />
      <span aria-hidden="true" className="text-xs tracking-wider text-muted [writing-mode:vertical-rl] rotate-180">{handle}</span>
    </nav>
  );
}

/* Same column pinned to the left edge of the window on wide screens */
export function SocialRail() {
  return <SocialColumn className="fixed left-2 top-1/2 z-30 hidden -translate-y-1/2 min-[1320px]:flex" />;
}

/* Inline row of the same icon squares (hero on narrower screens, Contact section) */
export default function Socials({ className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((s) => <li key={s.id}><IconButton s={s} /></li>)}
    </ul>
  );
}
