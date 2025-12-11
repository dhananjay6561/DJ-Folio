import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-8 text-glow">
            <span className="text-primary">01.</span> ABOUT ME
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-muted-foreground font-heading text-lg leading-relaxed">
              <p>
                I am a passionate developer with a knack for creating visually stunning and highly functional digital experiences. My journey began with a curiosity for how things work on the web, which quickly turned into a career obsession.
              </p>
              <p>
                I bridge the gap between design and engineering, ensuring that every pixel serves a purpose and every interaction feels natural. Whether it's a complex web application or a creative portfolio, I bring a detail-oriented approach to every project.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, gaming, or experimenting with 3D art.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-card border border-white/10 p-2 rounded-lg">
                <div className="aspect-square bg-muted rounded overflow-hidden">
                  <img 
                    src="/photo.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}