import { motion, useScroll, useTransform } from 'motion/react';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ opacity, scale, y }}
        className="text-center z-10 px-4 w-full max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-mono tracking-widest mb-8 uppercase">
            The Future of Climate Control
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6"
        >
          AETHER <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            DYNAMICS
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Next-generation HVAC systems engineered for Los Angeles. 
          Breathe absolute purity with zero-latency temperature adaptation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-wider rounded-full transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]">
            INITIALIZE SYSTEM
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold tracking-wider rounded-full transition-all backdrop-blur-sm">
            VIEW SPECS
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Descend</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
