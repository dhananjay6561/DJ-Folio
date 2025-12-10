import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Neon Dashboard",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "D3.js", "Tailwind"],
    description: "A futuristic data visualization dashboard with real-time updates.",
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce API",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop",
    tech: ["Node.js", "Express", "PostgreSQL"],
    description: "Robust REST API for a high-scale e-commerce platform.",
    link: "#",
    github: "#"
  },
  {
    title: "AI Image Gen",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    tech: ["Next.js", "OpenAI API", "Stripe"],
    description: "SaaS application for generating marketing assets using AI.",
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio v1",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    tech: ["HTML", "SCSS", "JS"],
    description: "My first portfolio website built with vanilla technologies.",
    link: "#",
    github: "#"
  }
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-8 text-glow">
            <span className="text-primary">04.</span> SELECTED WORKS
          </h2>

          {/* Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-heading uppercase tracking-widest border transition-all duration-300 ${
                  filter === cat 
                    ? "border-primary text-primary bg-primary/10 box-glow" 
                    : "border-white/10 text-muted-foreground hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={project.title}
                  className="group relative bg-card border border-white/5 overflow-hidden rounded-xl hover:border-primary/50 transition-all duration-500"
                >
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 z-10" />
                  
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map(t => (
                            <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4 border-t border-white/10">
                      <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.link} className="text-muted-foreground hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}