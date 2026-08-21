import SmoothScrollProvider from './components/animations/SmoothScrollProvider';
import { useScrollSpy } from './hooks/useScrollSpy';
import FloatingNavBar from './components/layout/FloatingNavBar';
import HeroSection from './components/sections/HeroSection';
import AboutMeSection from './components/sections/AboutMeSection';
import TechStackSection from './components/sections/TechStackSection';
import SkillsSection from './components/sections/SkillsSection';
import QualificationSection from './components/sections/QualificationSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactMeSection from './components/sections/ContactMeSection';
import Footer from './components/layout/Footer';
import BorderBeamStats from './components/sections/BorderBeamStats';
import BackgroundBoxesDemo from './components/sections/BackgroundBoxesDemo';
import TechStack from './components/sections/TechStack';

const SECTION_IDS = ['hero', 'about', 'skills', 'qualification', 'projects', 'contact'];

export default function App() {
  const [activeTab, setActiveTab] = useScrollSpy(SECTION_IDS, 180);

  return (
    <SmoothScrollProvider>
      <div className="max-w-7xl border-2 mx-auto bg-white relative overflow-x-hidden">
        {/* Subtle grid pattern background */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

        {/* 1. Navbar (Fixed Floating Top Capsule) */}
        <FloatingNavBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Website Content Sections */}
        <main className="relative z-10 space-y-2">
          {/* 2. Hero Section */}
          <HeroSection />

          <BorderBeamStats></BorderBeamStats>

          {/* <BackgroundBoxesDemo></BackgroundBoxesDemo> */}

          {/* 3. About Me */}
          <AboutMeSection />

          {/* 4. Tech Stack */}

          <TechStack></TechStack>

          <TechStackSection />

          {/* 5. Skills */}
          <SkillsSection />

          {/* 6. Qualification (Experience + Education) */}
          <QualificationSection />

          {/* 7. Project */}
          <ProjectsSection />

          {/* 8. Contact Me */}
          <ContactMeSection />
        </main>

        {/* 9. Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
