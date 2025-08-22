import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div className="bg-black text-white font-mono">
      {/* Header */}
      <Header />

      {/* Sections */}
      <main className="space-y-32">
        <section id="banner">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
