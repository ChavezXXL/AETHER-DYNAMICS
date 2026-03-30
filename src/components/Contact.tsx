import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[2rem] p-8 md:p-16 shadow-2xl"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-display">
            Initiate <span className="text-cyan-400">Sequence</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light">
            Ready to upgrade your atmosphere? Connect with our engineering team.
          </p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs text-cyan-500 uppercase tracking-[0.2em] font-mono">Designation</label>
              <input 
                type="text" 
                className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs text-cyan-500 uppercase tracking-[0.2em] font-mono">Comms Link</label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-xs text-cyan-500 uppercase tracking-[0.2em] font-mono">Sector / Location</label>
            <input 
              type="text" 
              className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Los Angeles, CA"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs text-cyan-500 uppercase tracking-[0.2em] font-mono">Parameters</label>
            <textarea 
              rows={4}
              className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              placeholder="Describe your climate control requirements..."
            />
          </div>
          <button className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-widest rounded-2xl transition-all flex items-center justify-center gap-3 group mt-8">
            TRANSMIT REQUEST
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
