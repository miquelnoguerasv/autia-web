import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertCircle, ShieldAlert } from 'lucide-react';

const comparisonData = [
  {
    feature: "Solución Técnica",
    others: "Parches temporales (Zaps sueltos)",
    autia: "Sistemas Integrales Escalables",
    description: "La diferencia entre 'funciona por ahora' y 'funciona para siempre'."
  },
  {
    feature: "Propiedad Intelectual",
    others: "Alquiler de software (Licencias)",
    autia: "Software a medida (Tu propiedad)",
    description: "No te atamos con rentas mensuales de herramientas de terceros."
  },
  {
    feature: "Visibilidad y Control",
    others: "Cajas negras (No sabes qué pasa)",
    autia: "Dashboards en Tiempo Real",
    description: "Métricas claras. Si no se puede medir, no se puede mejorar."
  },
  {
    feature: "Enfoque de Negocio",
    others: "Vender la herramienta de moda",
    autia: "Resolver el problema de raíz",
    description: "Primero la estrategia de rentabilidad, luego el código."
  }
];

const Comparison: React.FC = () => {
  return (
    <section id="diferencia" className="py-24 bg-brand-dark relative overflow-hidden" aria-label="Comparativa de agencias">
      {/* Background Ambience - Updated for Violet Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-brand-violet/10 blur-[100px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* New Enhanced Header */}
        <div className="text-center mb-20 relative">
          {/* Central Glow Effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-brand-blue/10 blur-[80px] pointer-events-none -z-10" aria-hidden="true" />

          {/* Technical Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 backdrop-blur-md mb-8"
          >
             <ShieldAlert size={14} className="text-brand-blue" />
             <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-brand-blue uppercase">
                Auditoría Técnica vs Agencias de Marketing
             </span>
          </motion.div>

          {/* Main Title with Metallic Gradient */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-sans font-bold mb-6 tracking-tight leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-slate-500">
              ¿Sigues usando parches o <br className="hidden md:block" /> construyes 
            </span>{' '}
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Activos
            </span>?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            La mayoría de agencias implementan herramientas alquiladas. Nosotros diseñamos activos de software que aumentan la valoración de tu empresa.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header Row (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 items-end mb-2">
            <div className="col-span-4 px-6 pb-4 text-sm font-bold tracking-widest uppercase text-gray-500">
              Criterio
            </div>
            <div className="col-span-4 px-6 pb-4 text-center text-sm font-bold tracking-widest uppercase text-gray-400 opacity-90">
              Agencias Genéricas
            </div>
            <div className="col-span-4 relative">
              {/* Highlighted Header */}
              <div className="relative py-4 text-center text-sm font-bold tracking-widest uppercase text-white bg-brand-blue/5 rounded-t-xl border-t-2 border-brand-violet shadow-[0_-10px_25px_rgba(139,92,246,0.15)]">
                <span className="relative z-10 text-brand-violet drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">autiA Systems</span>
                {/* Subtle sheen */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-violet/10 to-transparent opacity-50 rounded-t-xl"></div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-0">
            {comparisonData.map((row, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 md:items-center group"
              >
                {/* Feature Description (Desktop) */}
                <div className="col-span-4 hidden md:block px-6 py-6 border-b border-white/5 group-last:border-none">
                  <h3 className="text-lg font-bold text-white">{row.feature}</h3>
                  <p className="text-xs text-gray-500 mt-1 font-light tracking-wide">{row.description}</p>
                </div>

                {/* Mobile Label */}
                <div className="md:hidden text-gray-400 text-sm font-bold uppercase tracking-wider mb-1 mt-4 px-4">
                  {row.feature}
                </div>

                {/* Generic Agency Card - INCREASED OPACITY & CONTRAST */}
                <div className="col-span-12 md:col-span-4 bg-white/[0.02] md:bg-transparent border border-white/5 md:border-none rounded-xl p-6 md:p-6 flex flex-col md:flex-row items-center md:justify-center text-center gap-3 opacity-85 transition-all duration-300 md:border-b md:border-white/5 md:group-last:border-none md:rounded-none">
                  <div className="p-1.5 rounded-full bg-white/5 text-red-400/80">
                    <X size={16} strokeWidth={3} />
                  </div>
                  <span className="text-gray-400 font-medium line-through decoration-gray-600 decoration-1">{row.others}</span>
                </div>

                {/* autiA Card - The Winner */}
                <div className="col-span-12 md:col-span-4 relative h-full">
                  {/* Column Background (Desktop) */}
                  <div className="hidden md:block absolute inset-0 bg-brand-blue/5 border-x border-white/[0.02] group-last:rounded-b-xl transition-colors duration-300"></div>

                  <div className="relative bg-brand-surface md:bg-transparent border border-brand-violet/20 md:border-none rounded-xl p-6 md:p-6 flex flex-col md:flex-row items-center md:justify-center text-center gap-4 h-full">
                    {/* Glowing Check */}
                    <div className="relative">
                       <div className="absolute inset-0 bg-emerald-500 blur-[8px] opacity-40"></div>
                       <div className="relative p-1 rounded-full bg-emerald-500 text-brand-dark shadow-sm">
                         <Check size={16} strokeWidth={4} />
                       </div>
                    </div>
                    <span className="text-white font-bold text-lg md:text-base tracking-tight">{row.autia}</span>
                  </div>
                </div>

                {/* Mobile Description */}
                <div className="md:hidden text-xs text-gray-600 italic text-center px-4 pb-4 border-b border-white/5">
                  "{row.description}"
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm opacity-60">
            <AlertCircle size={14} />
            <span>Comparativa basada en auditorías de rescate realizadas en 2024.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;