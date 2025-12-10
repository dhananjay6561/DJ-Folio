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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden selection:bg-red-500/30 selection:text-red-100">
      <Scanline />
      <Grain />
      <Navbar />
      
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
    </div>
  );
}