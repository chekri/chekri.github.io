import Icon from "./Icons.jsx";

/* Equal-size tile: every tile in a grid stretches to the tallest one. */
export default function IconTile({ icon, label }) {
  return (
    <li className="flex h-full min-h-36 flex-col items-center justify-center gap-3 border border-rule border-t-4 border-t-sage bg-card p-4 text-center shadow-sm">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-mint text-sage-dark"><Icon name={icon} /></span>
      <span className="font-medium leading-snug">{label}</span>
    </li>
  );
}
