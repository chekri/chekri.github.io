export default function ExtLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-current underline decoration-sage decoration-2 underline-offset-4 transition-colors hover:decoration-current">
      {children}
    </a>
  );
}
