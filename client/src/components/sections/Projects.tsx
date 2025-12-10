import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Terminal } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Project_Neon",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "D3.js", "Tailwind"],
    description: "A futuristic data visualization dashboard with real-time updates and holographic UI elements.",
    details: "Built a highly performant dashboard capable of rendering 10k+ data points in real-time. Used WebGL for hardware acceleration and D3.js for complex data mapping. The UI is fully responsive and supports dark mode natively.",
    link: "#",
    github: "#"
  },
  {
    title: "Cyber_Commerce",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    tech: ["Node.js", "Express", "PostgreSQL"],
    description: "Robust REST API for a high-scale e-commerce platform handling millions of transactions.",
    details: "Architected a microservices-based backend using Node.js and Express. Implemented advanced caching strategies with Redis to reduce database load by 60%. Secured with OAuth2 and JWT authentication.",
    link: "#",
    github: "#"
  },
  {
    title: "AI_Genesis",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    tech: ["Next.js", "OpenAI API", "Stripe"],
    description: "SaaS application for generating marketing assets using generative AI models.",
    details: "Integrated OpenAI's GPT-4 and DALL-E 3 APIs to generate high-quality text and image content. Built a custom credit system using Stripe for payments. Deployed on Vercel Edge Functions for low latency.",
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio_V1",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    tech: ["HTML", "SCSS", "JS"],
    description: "My first portfolio website built with vanilla technologies and raw creativity.",
    details: "A throwback to the basics. No frameworks, just pure HTML, SCSS, and JavaScript. Focused on semantic markup and accessible design patterns. Features a custom-built smooth scroll engine.",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-red-900/30 pb-8">
            <div>
               <div className="inline-block border border-red-500/30 px-3 py-1 mb-4">
                <h2 className="text-sm font-mono text-red-500 tracking-[0.3em] uppercase">
                  Archive_04
                </h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-glow">
                SELECTED WORKS
              </h2>
            </div>
            <div className="hidden md:block text-right font-mono text-red-500/50 text-xs">
              <p>TOTAL_RECORDS: {projects.length}</p>
              <p>STATUS: DECLASSIFIED</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden border border-white/10 bg-card hover:border-red-500/50 transition-all duration-500">
                  {/* Glitch Overlay on Hover */}
                  <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
                  
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 group-hover:grayscale transition-all duration-700"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{project.title}</h3>
                        <p className="text-gray-400 text-sm font-mono mb-4 border-l-2 border-red-500 pl-3">{project.category}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                         <Terminal className="text-red-500 w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-black border border-red-500/30 overflow-hidden shadow-2xl shadow-red-900/20"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between p-4 border-b border-red-500/20 bg-red-950/10">
                <div className="flex items-center gap-2 font-mono text-red-500 text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>PROJECT_FILE: {selectedProject.title}</span>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-red-500 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto h-full overflow-hidden border-b md:border-b-0 md:border-r border-red-500/20">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-red-500 font-mono text-sm uppercase tracking-widest">{selectedProject.category}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed border-l-2 border-red-500/50 pl-4">
                    {selectedProject.details}
                  </p>

                  <div className="space-y-2">
                    <p className="font-mono text-xs text-red-500/70 uppercase tracking-wider">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="text-xs font-mono text-white bg-white/5 border border-white/10 px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex gap-4">
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-mono uppercase tracking-wider rounded-none">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Button>
                    <Button variant="outline" className="flex-1 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-mono uppercase tracking-wider rounded-none">
                      <Github className="w-4 h-4 mr-2" /> Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}