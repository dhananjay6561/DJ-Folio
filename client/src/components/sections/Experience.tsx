import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
	{
		company: 'Curious Ecosystem',
		role: 'Full Stack Developer Intern',
		period: 'Feb 2025 – Jul 2025',
		description:
			'Developed and debugged full-stack services using React, Node.js, and REST APIs. Implemented JWT auth, fixed major API failures, optimized data flow, and automated routine tasks via scripts, reducing manual overhead by 30%.',
	},
	{
		company: 'DRDO',
		role: 'ML Summer Intern',
		period: 'Jul 2024 – Aug 2024',
		description:
			'Built Python-based anomaly detection pipelines (K-Means, PCA), improving data validation accuracy. Optimized processing scripts, resolved pipeline errors, and documented workflows to improve system stability.',
	},
];

export default function Experience() {
	return (
		<section id="experience" className="py-20 bg-background/50 relative">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="max-w-4xl mx-auto"
				>
					<h2 className="text-4xl font-display font-bold text-white mb-12 text-glow">
						<span className="text-primary">02.</span> EXPERIENCE
					</h2>

					<div className="space-y-12 relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-0">
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="relative md:grid md:grid-cols-5 gap-8"
							>
								{/* Timeline Dot */}
								<div className="absolute -left-[37px] md:left-auto md:right-0 md:col-start-2 top-2 w-4 h-4 rounded-full bg-background border-2 border-primary box-glow z-10 md:transform md:-translate-x-1/2 md:hidden" />

								<div className="md:col-span-2 md:text-right">
									<h3 className="text-xl font-heading font-bold text-white">
										{exp.company}
									</h3>
									<div className="flex items-center md:justify-end gap-2 text-primary mt-1 font-mono text-sm">
										<Calendar className="w-4 h-4" />
										<span>{exp.period}</span>
									</div>
								</div>

								<div className="hidden md:block w-4 h-4 rounded-full bg-background border-2 border-primary box-glow absolute left-[40%] transform -translate-x-1/2 top-2 z-10" />

								<div className="md:col-span-3">
									<h4 className="text-lg font-heading font-bold text-red-400 mb-2 tracking-wide">
										{exp.role}
									</h4>
									<p className="text-muted-foreground">
										{exp.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}