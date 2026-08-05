import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

import Preloader from '@/components/ui/Preloader';
import Navbar from '@/components/ui/Navbar';
import CursorGlow from '@/components/ui/CursorGlow';
import ProgressBar from '@/components/ui/ProgressBar';

import NeuralCanvas from '@/components/background/NeuralCanvas';
import CyberGrid from '@/components/background/CyberGrid';
import LaserScanner from '@/components/background/LaserScanner';

const Scene3D = lazy(() => import('@/components/background/Scene3D'));

import Hero from '@/components/sections/Hero';
import CurrentStatus from '@/components/sections/CurrentStatus';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import SoftSkills from '@/components/sections/SoftSkills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import TechStack from '@/components/sections/TechStack';
import Achievements from '@/components/sections/Achievements';
import LearningJourney from '@/components/sections/LearningJourney';
import ResumeCTA from '@/components/sections/ResumeCTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

import { useLenis } from '@/hooks/useLenis';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useLenis();
  useScrollAnimations();

  return (
    <>
      <AnimatePresence>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <NeuralCanvas />
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
          <CyberGrid />
          <LaserScanner />
          <CursorGlow />
          <ProgressBar />
          <Navbar />

          <main className="relative z-10">
            <Hero />
            <CurrentStatus />
            <About />
            <Skills />
            <SoftSkills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <TechStack />
            <Achievements />
            <LearningJourney />
            <ResumeCTA />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
