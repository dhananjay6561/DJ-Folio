import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';
import { Float, Stars, Text, Trail } from '@react-three/drei';

function MovingParticles() {
  const count = 2000;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 400; //to decrease the spread of the particles, increase the multiplier
      const speed = 0.01 + Math.random() / 50; //to decrease the speed, decrease the divisor
      const xFactor = -50 + Math.random() * 400; //to decrease the spread of the particles, increase the multiplier
      const yFactor = -50 + Math.random() * 100; //to decrease the spread of the particles, increase the multiplier
      const zFactor = -50 + Math.random() * 400; //to decrease the spread of the particles, increase the multiplier
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = new THREE.Object3D();

  useFrame((state) => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshPhongMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} wireframe />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={['#000000', 5, 50]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#ff0000" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#ff0033" intensity={2} />
      <MovingParticles />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
    </>
  );
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "circOut"
    }
  })
};

const word = "DHANANJAY";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 20], fov: 60 }}> {/* fov adjusted for better view */}
          <Scene />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl">
        <div className="flex justify-between items-start absolute top-[-20vh] w-full px-10 opacity-50 font-mono text-xs text-red-500">
          <div>SYS.STATUS: ONLINE</div>
          <div>LOC: UNKNOWN</div>
          <div>SECURE_CONN: TRUE</div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <div className="border border-red-500/30 bg-red-900/10 px-4 py-1 text-red-500 font-mono text-sm tracking-widest uppercase backdrop-blur-sm">
            System Initialization Complete
          </div>
        </motion.div>
        
        <h1 className="text-6xl md:text-9xl font-display font-bold text-white mb-2 tracking-tighter mix-blend-difference relative">
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-block hover:text-red-600 transition-colors duration-300"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl font-heading text-red-500 tracking-[0.5em] uppercase mb-12 text-glow">
            Full Stack / Core SDE / Gen AI
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6">
          <motion.a 
            href="#projects"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="group relative px-8 py-4 bg-transparent border border-red-600 overflow-hidden"
          >
            <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
            <span className="relative text-red-500 group-hover:text-white font-mono tracking-widest text-sm flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              INITIATE_PROJECTS
            </span>
          </motion.a>

          <motion.a 
            href="#contact"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="group relative px-8 py-4 bg-red-600 border border-red-600 overflow-hidden"
          >
             <div className="absolute inset-0 w-full bg-black transition-all duration-[250ms] ease-out group-hover:w-0 opacity-50"></div>
            <span className="relative text-white font-mono tracking-widest text-sm uppercase">
              Establish_Comms
            </span>
          </motion.a>
        </div>
      </div>

      {/* Social HUD */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute left-10 bottom-10 hidden md:flex flex-col gap-4 font-mono text-xs text-red-500 font-bold z-20"
      >
        <a href="https://github.com/dhananjay6561" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-2 transition-all text-glow">GH :: GITHUB.COM/DHANANJAY6561</a>
        <a href="https://www.linkedin.com/in/dhananjay6561/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-2 transition-all text-glow">LI :: LINKEDIN.COM/IN/DHANANJAY6561</a>
        <a href="https://medium.com/@dhananjayaggarwal6561" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-2 transition-all text-glow">MD :: MEDIUM.COM/@DHANANJAY6561</a>
        <a href="https://leetcode.com/u/dhananjay6561/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-2 transition-all text-glow">LC :: LEETCODE.COM/U/DHANANJAY6561</a>
        <a href="https://linktr.ee/Dj6561" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-2 transition-all text-glow">LT :: LINKTR.EE/DJ6561</a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-red-500/50 flex flex-col items-center gap-2"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}