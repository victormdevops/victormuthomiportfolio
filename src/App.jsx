import { useRef, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  const [step, setStep] = useState(0);

  // refs only for auto-scroll sections
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToTopOfSection = (element) => {
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Flow handlers
  const handleBannerComplete = () => {
    setStep(1);
    setTimeout(() => scrollToTopOfSection(aboutRef.current), 300);
  };

  const handleAboutComplete = () => {
    setTimeout(() => {
      setStep(2);
      setTimeout(() => scrollToTopOfSection(skillsRef.current), 300);
    }, 2000);
  };

  return (
    <div className="bg-black text-white font-mono min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow space-y-16">
        {/* Banner Section */}
        <section id="banner">
          <Banner onComplete={handleBannerComplete} />
        </section>

        {/* About Me Section */}
        {step >= 1 && (
          <section id="about" ref={aboutRef}>
            <AboutMe onComplete={handleAboutComplete} />
          </section>
        )}

        {/* Skills Section (with embedded hint) */}
        {step >= 2 && (
          <section id="skills" ref={skillsRef}>
            <Skills />
          </section>
        )}

        {/* User scrolls manually after skills */}
        {step >= 2 && (
          <>
            <section id="projects">
              <Projects />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
