import { motion } from 'framer-motion';
import { Award, Star, Trophy, Target } from 'lucide-react';

const achievements = [
  {
    title: "AWS Certified Architect",
    level: "Professional",
    xp: "+5000 XP",
    icon: Trophy
  },
  {
    title: "Hackathon Winner",
    level: "First Place",
    xp: "+2500 XP",
    icon: Star
  },
  {
    title: "Open Source Contributor",
    level: "Core Maintainer",
    xp: "+1000 XP",
    icon: Target
  },
  {
    title: "Best UI Design",
    level: "Awwwards Nominee",
    xp: "+1500 XP",
    icon: Award
  }
];

export default function Achievements() {
  return (
    <section className="py-24 bg-black relative border-t border-red-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
             <div className="h-px bg-red-500/50 flex-1" />
             <h2 className="text-2xl font-display font-bold text-white text-glow whitespace-nowrap">
                MISSION BADGES
              </h2>
             <div className="h-px bg-red-500/50 flex-1" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-1 relative overflow-hidden group cursor-default"
              >
                {/* Metallic Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 z-10" />

                <div className="bg-black/80 h-full p-6 flex flex-col items-center text-center relative z-0">
                  <div className="w-16 h-16 rounded-full border-2 border-red-500/50 flex items-center justify-center mb-4 bg-red-900/20 group-hover:bg-red-600/20 group-hover:border-red-500 transition-all duration-300">
                    <item.icon className="text-red-500 w-8 h-8 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-white font-bold font-heading uppercase tracking-wide mb-1">{item.title}</h3>
                  <p className="text-xs font-mono text-gray-500 uppercase">{item.level}</p>
                  
                  <div className="mt-4 px-3 py-1 bg-white/5 rounded-full border border-white/5 text-xs font-mono text-yellow-500">
                    {item.xp}
                  </div>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500 opacity-50" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500 opacity-50" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500 opacity-50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500 opacity-50" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}