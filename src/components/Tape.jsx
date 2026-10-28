export default function Tape({ className = "" }) {
  return <span aria-hidden="true" className={`absolute z-10 h-5 w-20 bg-leaf/60 shadow-sm ${className}`} />;
}
