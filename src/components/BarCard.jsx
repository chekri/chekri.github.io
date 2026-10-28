/* Rectangular bar card: media on the left, content on the right; stacks on small screens. */
export default function BarCard({ media, caption, children }) {
  return (
    <article className="flex flex-col overflow-hidden border border-rule border-l-4 border-l-sage bg-card shadow-sm transition-shadow hover:shadow-md sm:flex-row">
      <div className="shrink-0 border-b border-rule bg-mint/50 p-3 sm:w-56 sm:border-b-0 sm:border-r md:w-64">
        {media}
        {caption && <p className="mt-1.5 font-hand text-lg leading-none text-muted">{caption}</p>}
      </div>
      <div className="flex flex-1 flex-col justify-center p-5 md:p-6">{children}</div>
    </article>
  );
}
