export default function LinkPills({ links }) {
  if (!links?.length) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/40 px-4 py-1.5 text-[0.92em] text-ink no-underline transition-colors hover:border-ink hover:bg-ink hover:text-paper">
            {l.label}<span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
