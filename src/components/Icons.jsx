const paths = {
  variations: "M14 3c-3 0-3 3-3 6v6c0 3 0 6-3 6M15 10l5 5M20 10l-5 5",
  beam: "M3 9h18v6H3zM8 9v6M13 9v6M18 9v6",
  wave: "M2 12c3-8 5-8 8 0s5 8 8 0 3-6 4-4",
  optimize: "M4 4v16h16M7 15l4-5 3 3 5-7",
  hill: "M3 19c5 0 4-12 9-12s4 12 9 12",
  fork: "M3 12h8M11 12l9-7M11 12l9 7",
};

export default function Icon({ name, className = "h-6 w-6", tone }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      className={`${className} ${tone === "ink" ? "!text-sage" : ""}`} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
