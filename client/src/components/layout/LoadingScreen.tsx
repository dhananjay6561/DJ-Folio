import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING");

  useEffect(() => {
    const texts = [
      "LOADING_ASSETS",
      "COMPILING_SHADERS",
      "ESTABLISHING_UPLINK",
      "DECRYPTING_DATA",
      "SYSTEM_READY"
    ];
    
    let textIndex = 0;
    const textInterval = setInterval(() => {
      setText(texts[textIndex]);
      textIndex = (textIndex + 1) % texts.length;
    }, 800);

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 5;
        if (next >= 100) {
          clearInterval(timer);
          clearInterval(textInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono"
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <div className="w-80 relative">
        {/* Glitch Effect Text */}
        <div className="flex justify-between items-end mb-2">
          <span className="text-red-500 font-bold text-xl tracking-widest animate-pulse">
            {text}
          </span>
          <span className="text-red-500 font-bold text-xl">
            {Math.floor(progress)}%
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="h-2 bg-red-900/20 w-full border border-red-900/50 p-[2px]">
          {/* Progress Bar */}
          <motion.div
            className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Decorative Elements */}
        <div className="mt-4 flex justify-between text-[10px] text-red-500/50 uppercase tracking-widest">
          <span>Mem: 64TB</span>
          <span>Cpu: OPTIMAL</span>
          <span>Net: SECURE</span>
        </div>

        {/* Random Hex Codes */}
        <div className="absolute top-full left-0 mt-8 text-[10px] text-red-900/50 font-mono w-full overflow-hidden whitespace-nowrap">
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
              0x{Math.random().toString(16).slice(2, 10).toUpperCase()} :: PROCESS_ID_{Math.floor(Math.random() * 9999)}
            </div>
          ))}
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </motion.div>
  );
}
