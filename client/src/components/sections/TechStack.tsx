import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiPython, SiDocker, SiAmazon, SiJavascript, SiMongodb, SiMysql, SiGit, SiLinux, SiKubernetes, SiTerraform } from 'react-icons/si';
import { FaJava, FaDatabase, FaNetworkWired, FaCubes, FaServer, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiNodedotjs, color: "#000000" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "DSA", icon: FaCode, color: "#FF5733" },
  { name: "OOP", icon: FaCubes, color: "#FF33A1" },
  { name: "DBMS", icon: FaDatabase, color: "#33FF57" },
  { name: "Networks", icon: FaNetworkWired, color: "#3357FF" },
  { name: "OS", icon: FaServer, color: "#A133FF" },
  { name: "System Design", icon: FaProjectDiagram, color: "#FF3333" }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-black relative border-t border-red-900/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="inline-block border border-red-500/30 px-3 py-1 mb-6">
            <h2 className="text-sm font-mono text-red-500 tracking-[0.3em] uppercase">
              System_Modules
            </h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-glow">
            TECH ARSENAL
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 hover:border-red-500/50 hover:bg-red-900/10 rounded-sm transition-all duration-300 group cursor-pointer"
              >
                <skill.icon className="w-10 h-10 mb-4 text-gray-400 group-hover:text-white transition-colors duration-300" style={{ filter: 'drop-shadow(0 0 0 transparent)' }} />
                <span className="text-sm font-mono text-gray-500 group-hover:text-red-400 tracking-widest uppercase transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}