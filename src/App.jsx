import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Research from "./sections/Research.jsx";
import CV from "./sections/CV.jsx";
import Learning from "./sections/Learning.jsx";
import Contact from "./sections/Contact.jsx";
import Beyond from "./pages/Beyond.jsx";
import useScrollSpy from "./hooks/useScrollSpy.js";
import { nav } from "./data/content.js";

const ids = nav.filter((n) => !n.page).map((n) => n.id);
/* "#/beyond" is a page; "#research" is a section of the home page */
const getRoute = () => (location.hash.startsWith("#/") ? location.hash.slice(2) : "");

export default function App() {
  const [route, setRoute] = useState(getRoute);
  useEffect(() => {
    const on = () => setRoute(getRoute());
    addEventListener("hashchange", on);
    return () => removeEventListener("hashchange", on);
  }, []);

  const onPage = route === "beyond";
  const spy = useScrollSpy(ids, !onPage);

  // runs after the page/home switch has rendered; must not return anything but a cleanup function
  useEffect(() => {
    if (onPage) {
      window.scrollTo(0, 0);
    } else {
      const id = location.hash.slice(1);
      if (id) document.getElementById(id)?.scrollIntoView();
    }
  }, [onPage]);

  return (
    <>
      <a href="#main" className="sr-only z-50 bg-sage-deep px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-2 focus:top-2">Skip to content</a>
      <Navbar active={onPage ? "beyond" : spy} />
      <main id="main">
        {onPage ? (
          <Beyond />
        ) : (
          <>
            <Hero />
            <Research />
            <CV />
            <Learning />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
