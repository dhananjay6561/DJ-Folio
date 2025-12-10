import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const achievements = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: Award
  },
  {
    title: "Best UI Design Award",
    issuer: "Awwwards",
    date: "2022",
    icon: Award
  },
  {
    title: "Hackathon Winner",
    issuer: "Global Tech Summit",
    date: "2021",
    icon: Award
  }
];

export default function Achievements() {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-12 text-glow">
            <span className="text-primary">05.</span> RECOGNITION
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-white/5 p-6 rounded-xl hover:border-secondary/50 hover:bg-white/5 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-secondary w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.issuer}</p>
                <p className="text-xs text-primary mt-2 font-mono">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}