import { motion } from 'motion/react';
import { ThermometerSnowflake, Flame, Fan, Activity } from 'lucide-react';

const services = [
  {
    icon: <ThermometerSnowflake className="w-8 h-8 text-cyan-400" />,
    title: "Cryo-Cooling",
    desc: "Hyper-efficient air conditioning systems that drop ambient temperatures in milliseconds using advanced refrigerant matrices."
  },
  {
    icon: <Flame className="w-8 h-8 text-orange-500" />,
    title: "Thermal Core",
    desc: "Next-gen heating nodes providing consistent, energy-optimized warmth without the dry air of traditional furnaces."
  },
  {
    icon: <Fan className="w-8 h-8 text-zinc-300" />,
    title: "Aero-Circulation",
    desc: "Smart ventilation networks that map your space's topology for perfect, draft-free airflow distribution."
  },
  {
    icon: <Activity className="w-8 h-8 text-green-400" />,
    title: "Purity Sensors",
    desc: "Real-time air quality monitoring filtering 99.99% of pathogens, smog, and pollutants native to the LA basin."
  }
];

export function Services() {
  return (
    <section id="systems" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="mb-24">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Core <span className="text-cyan-400">Systems</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-xl font-light">
          We don't just install ACs. We deploy advanced climate matrices designed specifically for modern Los Angeles architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md overflow-hidden hover:border-cyan-500/50 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="mb-8 p-4 bg-black/50 rounded-2xl inline-block border border-zinc-800 shadow-inner">
                {s.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 font-display">{s.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
