import { motion } from 'framer-motion';
import { FileCode, Database, Shield } from 'lucide-react';

const certs = [
  // {
  //   name: "Certified Kubernetes Administrator",
  //   org: "The Linux Foundation",
  //   id: "CKA-19230-23",
  //   icon: Database
  // },
  // {
  //   name: "AWS Certified Security - Specialty",
  //   org: "Amazon Web Services",
  //   id: "AWS-SEC-9921",
  //   icon: Shield
  // },
  // {
  //   name: "Meta Frontend Developer Professional",
  //   org: "Meta",
  //   id: "META-FE-8821",
  //   icon: FileCode
  // }
];

export default function Certifications() {
  return (
    <section className="py-24 bg-black relative">
       <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* <div className="inline-block border border-red-500/30 px-3 py-1 mb-8">
            <h2 className="text-sm font-mono text-red-500 tracking-[0.3em] uppercase">
              Credentials_Log
            </h2>
          </div> */}

          <div className="space-y-4">
            {certs.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 p-4 border-l-2 border-white/10 hover:border-red-500 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-3 bg-black rounded border border-white/10 group-hover:border-red-500/50 transition-colors">
                  <cert.icon className="w-6 h-6 text-gray-400 group-hover:text-red-500" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-red-100 transition-colors">{cert.name}</h3>
                  <p className="text-sm text-gray-500 font-mono">{cert.org}</p>
                </div>

                <div className="hidden md:block text-right">
                  <span className="text-xs font-mono text-red-500/50 block">ID_REF</span>
                  <span className="text-xs font-mono text-white/50">{cert.id}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}