import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Trophy, Target, X } from 'lucide-react';

const achievements = [
	{
		title: 'LeetCode Top 4.9%',
		level: '480+ Problems Solved',
		xp: '+5000 XP',
		icon: Trophy,
		description: "Consistently solving algorithmic challenges. Ranked in the top 4.9% globally with over 480 problems solved across various difficulty levels, demonstrating strong problem-solving skills and proficiency in data structures and algorithms."
	},
	{
		title: 'Global Rank 256',
		level: 'Contest 456 (Top 0.8%)',
		xp: '+2500 XP',
		icon: Star,
		description: "Achieved Global Rank 256 in LeetCode Weekly Contest 456, placing in the top 0.8% of participants worldwide. Also secured Rank 426 (Top 1.5%) in Contest 455, reflecting consistent high-performance coding under pressure."
	},
	{
		title: 'SIH 2024 Finalist',
		level: 'Top 0.2%',
		xp: '+1000 XP',
		icon: Target,
		description: "Selected as a finalist in the Smart India Hackathon 2024, competing among the top 0.2% of teams. Designed scalable and reliable engineering solutions to address complex real-world problems proposed by government ministries."
	},
	{
		title: 'BuildWithIndia 2nd',
		level: 'Hackathon 2025',
		xp: '+1500 XP',
		icon: Award,
		description: "Secured 2nd position in the BuildWithIndia Hackathon 2025. Delivered an efficient, production-ready software system within a tight deadline, showcasing rapid prototyping and full-stack development capabilities."
	},
];

export default function Achievements() {
	const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);

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
							ACHIEVEMENTS
						</h2>
						<div className="h-px bg-red-500/50 flex-1" />
					</div>

					{/* Hint Animation */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 1, duration: 1 }}
						className="flex justify-center mb-8"
					>
						<div className="text-red-500/70 font-mono text-xs tracking-widest animate-pulse flex items-center gap-2 border border-red-500/30 px-3 py-1 rounded-full bg-red-900/10">
							<span>[ CLICK_TO_INSPECT_DATA ]</span>
						</div>
					</motion.div>

					<div className="grid md:grid-cols-4 gap-6">
						{achievements.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								onClick={() => setSelectedAchievement(item)}
								className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-1 relative overflow-hidden group cursor-pointer"
							>
								{/* Metallic Shine */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 z-10" />

								<div className="bg-black/80 h-full p-6 flex flex-col items-center text-center relative z-0">
									<div className="w-16 h-16 rounded-full border-2 border-red-500/50 flex items-center justify-center mb-4 bg-red-900/20 group-hover:bg-red-600/20 group-hover:border-red-500 transition-all duration-300">
										<item.icon className="text-red-500 w-8 h-8 group-hover:scale-110 transition-transform" />
									</div>

									<h3 className="text-white font-bold font-heading uppercase tracking-wide mb-1">
										{item.title}
									</h3>
									<p className="text-xs font-mono text-gray-500 uppercase">
										{item.level}
									</p>

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

			{/* Modal */}
			<AnimatePresence>
				{selectedAchievement && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedAchievement(null)}
							className="absolute inset-0 bg-black/90 backdrop-blur-sm"
						/>

						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							className="relative w-full max-w-lg bg-black border border-red-500/30 overflow-hidden shadow-2xl shadow-red-900/20 p-1"
						>
							<div className="bg-black/90 p-6 relative">
								<button
									onClick={() => setSelectedAchievement(null)}
									className="absolute top-4 right-4 text-red-500 hover:text-white transition-colors"
								>
									<X className="w-6 h-6" />
								</button>

								<div className="flex flex-col items-center text-center mb-6">
									<div className="w-20 h-20 rounded-full border-2 border-red-500/50 flex items-center justify-center mb-4 bg-red-900/20">
										<selectedAchievement.icon className="text-red-500 w-10 h-10" />
									</div>
									<h3 className="text-2xl font-display font-bold text-white mb-2 text-glow">
										{selectedAchievement.title}
									</h3>
									<p className="text-red-500 font-mono text-sm uppercase tracking-widest">
										{selectedAchievement.level}
									</p>
								</div>

								<div className="border-t border-red-500/20 pt-6">
									<p className="text-gray-300 leading-relaxed text-center">
										{selectedAchievement.description}
									</p>
								</div>

								<div className="mt-8 flex justify-center">
									<div className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-yellow-500 font-mono text-sm">
										REWARD: {selectedAchievement.xp}
									</div>
								</div>
							</div>
							
							{/* Corner Accents for Modal */}
							<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
							<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
							<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
							<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section>
	);
}