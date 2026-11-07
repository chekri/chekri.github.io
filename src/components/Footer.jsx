import { person } from "../data/content.js";
import { wrap } from "./Section.jsx";

export default function Footer() {
  return (
    <footer className="bg-ink pb-[env(safe-area-inset-bottom)] text-paper/80">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-2 py-5 text-sm`}>
        <span>© {new Date().getFullYear()} {person.full}</span>
        <a href="#about" className="text-sage underline underline-offset-4 hover:text-paper">Back to top</a>
      </div>
    </footer>
  );
}
