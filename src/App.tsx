import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const rootRef = useScrollReveal();
  return (
    <div ref={rootRef}>
      <a className="fixed -top-[100px] z-20 bg-action p-3 text-white focus:top-[5px]" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
