import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Scan, Crosshair, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5" aria-label="Sobre nosotros">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Manifesto */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                    <Fingerprint className="text-brand-violet" size={20} />
                </div>
                <span className="text-sm font-mono font-bold text-gray-400 tracking-widest uppercase">
                    ADN de Ingeniería
                </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8 leading-tight">
              No somos marketers usando GPT. <br />
              Somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-blue">Ingenieros.</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                autiA nace con una obsesión: aplicar el rigor de la ingeniería automotriz y mecánica al desarrollo de software de IA.
              </p>
              <p>
                En un mercado saturado de promesas vacías, nosotros no buscamos el 'hype'. Buscamos la 
                <strong className="text-white font-medium"> eficiencia termodinámica </strong> 
                de tu negocio: eliminar fricción, maximizar output y reducir el desperdicio de energía (tiempo y dinero).
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="font-serif italic text-2xl text-gray-300 mb-6">
                "Ingeniería de precisión aplicada a negocios."
              </p>
              
              <div className="flex flex-col gap-1">
                 {/* Handwritten Signature */}
                 <span className="font-handwriting text-4xl text-brand-blue -rotate-2 select-none transform origin-bottom-left">
                    Miquel Nogueras
                 </span>
                 <div className="flex items-center gap-3 mt-2">
                     <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        Lead Engineer @ autiA
                     </span>
                     <div className="h-px w-8 bg-white/10" />
                 </div>
              </div>
            </div>
          </motion.article>

          {/* Right Column: CAD / Blueprint Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative perspective-[2000px]"
            role="img"
            aria-label="Plano técnico y visualización CAD de arquitectura de sistemas"
          >
            {/* The Blueprint Frame */}
            <div className="relative aspect-[4/5] md:aspect-square rounded-sm overflow-hidden border border-brand-blue/20 bg-[#080a11] shadow-2xl group">
                
                {/* 1. Grid Pattern (Millimeter Paper) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />

                {/* 2. CAD UI Overlays (Corners & Telemetry) */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-brand-blue/60 flex flex-col gap-1">
                    <span>LAT: 41.38N</span>
                    <span>LON: 2.17E</span>
                </div>
                <div className="absolute top-4 right-4 font-mono text-[10px] text-brand-blue/60 text-right">
                    <span>SCALE: 1:1</span>
                    <span>MODE: ARCHITECT</span>
                </div>
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-brand-blue/60">
                    <div className="flex items-center gap-2">
                        <MapPin size={10} />
                        <span>BARCELONA, ES</span>
                    </div>
                </div>

                {/* Corner Markers */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-brand-blue/40" />
                <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-brand-blue/40" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-brand-blue/40" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-brand-blue/40" />

                {/* 3. Central Abstract Graphic (System Topology) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80">
                    <svg width="60%" height="60%" viewBox="0 0 100 100" className="overflow-visible">
                        {/* Connecting Lines */}
                        <motion.path 
                            d="M50,50 L20,20 M50,50 L80,20 M50,50 L20,80 M50,50 L80,80 M50,50 L50,10" 
                            stroke="rgba(59, 130, 246, 0.3)" 
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                        />
                        {/* Central Core */}
                        <circle cx="50" cy="50" r="15" fill="none" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="2 2" className="animate-spin-slow" />
                        <circle cx="50" cy="50" r="5" fill="#3B82F6" className="animate-pulse" />
                        
                        {/* Satellite Nodes */}
                        {[
                            {cx:20, cy:20}, {cx:80, cy:20}, {cx:20, cy:80}, {cx:80, cy:80}, {cx:50, cy:10}
                        ].map((pos, i) => (
                            <g key={i}>
                                <circle cx={pos.cx} cy={pos.cy} r="2" fill="#1e293b" stroke="#3B82F6" strokeWidth="1" />
                                <circle cx={pos.cx} cy={pos.cy} r="6" fill="none" stroke="rgba(59, 130, 246, 0.2)" />
                            </g>
                        ))}
                    </svg>
                </div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent h-[10%] w-full animate-scan pointer-events-none" />
                
                {/* Central Crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Crosshair className="text-brand-blue/20" size={300} strokeWidth={0.5} />
                </div>
            </div>

            {/* Floating Status Badge (Corrected Semantics) */}
            <div className="absolute -bottom-6 -right-6 bg-brand-surface border border-brand-blue/20 p-4 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-md z-20">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981]" />
                        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-gray-400 leading-none mb-1">STATUS</div>
                        <div className="text-xs font-bold text-white tracking-wide leading-none">SISTEMAS: OPERATIVOS</div>
                    </div>
                </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;