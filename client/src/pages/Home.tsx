import Spotlight from '@/components/layout/Spotlight';
import Grain from '@/components/layout/Grain';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-white">
      <Spotlight />
      <Grain />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  );
}