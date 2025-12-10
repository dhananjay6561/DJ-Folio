import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* CSS 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40 flex items-center justify-center">
        <div className="cyber-grid" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-primary font-heading font-bold tracking-widest uppercase mb-4 text-glow">
            Full Stack Developer & UI Designer
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter mix-blend-overlay">
            BUILDING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary text-glow">
              UNSEEN
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xl mx-auto text-muted-foreground font-heading text-lg"
        >
          <p>
            Crafting immersive digital experiences with code and creativity.
            Specializing in interactive interfaces and high-performance applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <a 
            href="#projects"
            className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-display uppercase tracking-widest text-sm relative group overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}