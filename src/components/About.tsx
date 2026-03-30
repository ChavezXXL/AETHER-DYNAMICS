import { motion } from 'motion/react';

export function About() {
  return (
    <section id="metrics" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Engineered for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-100">
              Perfection
            </span>
          </h2>
          <p className="text-zinc-400 text-xl mb-12 leading-relaxed font-light">
            Aether Dynamics was founded on a single principle: the air you breathe should be as advanced as the technology you use. We've stripped away the archaic mechanics of traditional HVAC and replaced them with smart, responsive climate nodes.
          </p>
          
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="text-6xl font-bold text-cyan-400 mb-2 font-display">0.01<span className="text-3xl text-cyan-400/50">ms</span></div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-mono">Response Time</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-cyan-400 mb-2 font-display">99.9<span className="text-3xl text-cyan-400/50">%</span></div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-mono">Air Purity</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-cyan-400 mb-2 font-display">40<span className="text-3xl text-cyan-400/50">%</span></div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-mono">Energy Saved</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-cyan-400 mb-2 font-display">24<span className="text-3xl text-cyan-400/50">/7</span></div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-mono">Active Monitoring</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-full border border-zinc-800 flex items-center justify-center max-w-md mx-auto w-full"
        >
          {/* Abstract representation of a fan/vortex */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-8 rounded-full border border-cyan-500/40 animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-16 rounded-full border border-cyan-500/60 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-24 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 backdrop-blur-xl border border-cyan-400/50 flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.4)]">
            <div className="text-center">
              <div className="text-sm text-cyan-400 font-mono mb-2 tracking-widest">SYSTEM STATUS</div>
              <div className="text-3xl font-bold tracking-[0.2em] font-display">OPTIMAL</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
