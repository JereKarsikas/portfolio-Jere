import { useState } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />

      <main>
        <About />
        <Experience />
        <Technologies />
        <Projects />
      </main>

      <Footer onContactClick={() => setContactOpen(true)} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}

export default App;
