import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Spotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring animation for the cursor
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX - 16); // Center the cursor (32px / 2)
      y.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [data-interactive]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [x, y]);

  return (
    <>
      {/* The flashlight effect overlay */}
      <div 
        className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
        }}
      />
      
      {/* The actual custom cursor element */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary z-50 pointer-events-none mix-blend-difference"
        style={{ x, y }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'hsl(var(--secondary))' : 'hsl(var(--primary))'
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Center dot */}
      <motion.div 
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full z-50 pointer-events-none"
        style={{ 
          x: useSpring(mousePosition.x, { stiffness: 1000, damping: 50 }), // Faster follow
          y: useSpring(mousePosition.y, { stiffness: 1000, damping: 50 }),
          translateX: -2,
          translateY: -2
        }}
      />
    </>
  );
}