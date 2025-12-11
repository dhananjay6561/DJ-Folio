import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Scanline from '@/components/layout/Scanline';
import Grain from '@/components/layout/Grain';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Certifications from '@/components/sections/Certifications';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import LoadingScreen from '@/components/layout/LoadingScreen';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden selection:bg-red-500/30 selection:text-red-100">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Scanline />
          <Grain />
          <Navbar />
          <ScrollToTop />
          
          <main>
            <Hero />
            <About />
            <Experience />
            <TechStack />
            <Projects />
            <Achievements />
            <Certifications />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}