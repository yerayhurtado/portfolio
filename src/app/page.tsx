import Hero from './components/Hero';
import Projects from './components/Projects';
import Header from './components/Header/Header';
import AboutMe from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="relative text-white bg-gradient-to-br from-black via-gray-900 to-black scroll-smooth">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      {/* Próximas secciones: Skills, Contact */}
    </main>
  );
}
