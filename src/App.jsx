import { useState } from "react";
import Landing from "./components/Landing";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

export default function App() {
  const [entered, setEntered] = useState(false);

  return entered ? (
    <>
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Cursor />
    </>
  ) : (
    <Landing onEnter={() => setEntered(true)} />
  );
}