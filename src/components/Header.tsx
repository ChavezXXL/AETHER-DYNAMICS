import { motion } from 'motion/react';
import { Wind } from 'lucide-react';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between mix-blend-difference"
    >
      <div className="flex items-center gap-3">
        <Wind className="w-8 h-8 text-cyan-400" />
        <span className="text-2xl font-bold tracking-[0.2em] font-display">AETHER</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-widest font-mono">
        <a href="#systems" className="hover:text-cyan-400 transition-colors">SYSTEMS</a>
        <a href="#metrics" className="hover:text-cyan-400 transition-colors">METRICS</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">CONTACT</a>
      </nav>
      
      <button className="md:hidden flex flex-col items-end gap-1.5">
        <div className="w-8 h-[2px] bg-white" />
        <div className="w-6 h-[2px] bg-white" />
        <div className="w-4 h-[2px] bg-white" />
      </button>
    </motion.header>
  );
}
