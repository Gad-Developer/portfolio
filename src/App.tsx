import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';

export function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <div className="min-h-screen bg-page text-slate-900 flex flex-col selection:bg-emerald-200 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <SectionDivider top="page" bottom="page" />
          <ProjectsSection />
          <SectionDivider top="page" bottom="band" />
          <SkillsSection />
          <SectionDivider top="band" bottom="page" />
          <AboutSection />
          <SectionDivider top="page" bottom="page" />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
