import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-12 text-glow">
            <span className="text-primary">06.</span> EDUCATION
          </h2>

          <div className="bg-card border border-white/5 rounded-xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <GraduationCap className="w-32 h-32 text-white" />
             </div>
             
             <div className="relative z-10 space-y-8">
               <div>
                 <h3 className="text-2xl font-heading font-bold text-white">Bachelor of Technology, Information Technology</h3>
                 <p className="text-primary font-mono text-lg mt-1">Guru Gobind Singh Indraprastha University, New Delhi</p>
                 <p className="text-muted-foreground mt-2">2022 – 2026</p>
                 <p className="mt-4 text-gray-400">
                   CGPA: 8.47
                 </p>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}