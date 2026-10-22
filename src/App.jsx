import SmoothScrollProvider from './components/animations/SmoothScrollProvider';
import { useScrollSpy } from './hooks/useScrollSpy';
import FloatingNavBar from './components/layout/FloatingNavBar';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactMeSection from './components/sections/ContactMeSection';
import Footer from './components/layout/Footer';
// import BorderBeamStats from './components/sections/BorderBeamStats';
import TechStack from './components/sections/TechStack';
import AboutMe from './components/sections/AboutMe';
import ScrollTop from './components/animations/ScrollTop';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';

const SECTION_IDS = ['hero', 'projects', 'about', 'skills', 'qualification', , 'contact'];

export default function App() {
  const [activeTab, setActiveTab] = useScrollSpy(SECTION_IDS, 180);

  return (
    <SmoothScrollProvider>
      <div className="bg-white relative overflow-x-hidden">
        {/* Subtle grid pattern background */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

        {/* 0. Navbar (Fixed Floating Top Capsule) */}
        <FloatingNavBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Website Content Sections */}
        <main className="relative z-10 ">
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Project */}
          <ProjectsSection />

          {/* 3. About Me */}

          <AboutMe></AboutMe>

          {/* 4. Tech Stack */}

          <TechStack></TechStack>

          {/* 5. Skills */}
          <SkillsSection />

          {/* 6. Education */}
          <Education></Education>

          {/* 7 Experience */}
          <Experience></Experience>

          {/* Services */}
          <Services></Services>


          {/* <BorderBeamStats></BorderBeamStats> */}

          {/* <BackgroundBoxesDemo></BackgroundBoxesDemo> */}



          {/* <TechStackSection /> */}


          {/* 8. Contact Me */}
          <ContactMeSection />
        </main>

        {/* 9. Footer */}
        <Footer />
      </div>

      <ScrollTop></ScrollTop>

    </SmoothScrollProvider>

  );
}
