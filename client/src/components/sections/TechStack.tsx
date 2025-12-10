import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Python", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Vite", "Linux"] },
  { category: "Learning", items: ["Rust", "WebAssembly", "AI/ML Integration"] }
];

export default function TechStack() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-12 text-glow text-center">
            <span className="text-primary">03.</span> TECH ARSENAL
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-white/5 p-6 rounded-xl hover:border-primary/50 transition-colors duration-300 group"
              >
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 group-hover:text-glow-red">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((skill, idx) => (
                    <li key={idx} className="text-muted-foreground font-mono text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}