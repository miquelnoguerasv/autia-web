
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Cpu, Rocket, ChevronRight, GitCommit } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Auditoría',
    description: 'Análisis profundo de cuellos de botella e ineficiencias.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Arquitectura',
    description: 'Diseño de la lógica del sistema y flujos de datos.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Implementación del código y entrenamiento de modelos.',
    icon: Cpu,
  },
  {
    number: '04',
    title: 'Despliegue',
    description: 'Puesta en marcha, CI/CD y escalado automático.',
    icon: Rocket,
  },
];

const Process: React.FC = () => {
  return (
    <section id="metodo" className="py-32 bg-brand-dark relative overflow-hidden" aria-label="Metodología de trabajo">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full bg-brand-violet/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-2 block">
            Workflow de Ingeniería
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white">
            Pipeline de Implementación
          </h2>
        </div>

        {/* Horizontal Pipeline Container */}
        <div className="relative">
            
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Horizontal Connector Line (Desktop Only) - Increased Visibility */}
                {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-[2.5rem] left-[50%] w-full h-[2px] bg-white/20 -z-10" aria-hidden="true">
                        {/* Animated Line on Hover */}
                        <div className="h-full bg-gradient-to-r from-brand-violet to-brand-blue w-0 group-hover:w-full transition-all duration-700 ease-out origin-left" />
                    </div>
                )}
                
                {/* Vertical Connector Line (Mobile Only) */}
                {index < steps.length - 1 && (
                     <div className="md:hidden absolute top-[5rem] left-1/2 -translate-x-1/2 w-[2px] h-[3rem] bg-white/10 -z-10" aria-hidden="true" />
                )}

                {/* Node / Icon */}
                <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-110">
                    {/* Hover Glow Behind */}
                    <div className="absolute inset-0 bg-brand-blue/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 bg-brand-surface rounded-2xl border border-white/5 shadow-2xl group-hover:border-brand-blue/50 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 z-10 flex items-center justify-center">
                        <step.icon size={32} className="text-gray-500 group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    {/* Badge Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-brand-blue z-20">
                        {step.number}
                    </div>
                </div>

                {/* Content */}
                <div className="px-2">
                    <div className="flex items-center justify-center gap-2 mb-3">
                         <h3 className="text-xl font-bold text-white group-hover:text-brand-violet transition-colors">
                            {step.title}
                        </h3>
                        {/* Small arrow indicator that appears on hover */}
                         <ChevronRight size={16} className="text-brand-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" aria-hidden="true" />
                    </div>
                   
                    <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[250px] mx-auto group-hover:text-gray-400 transition-colors">
                        {step.description}
                    </p>
                </div>
                
                {/* Git Commit Dot style for bottom decoration */}
                <div className="mt-6 opacity-20 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                     <GitCommit size={16} className="text-brand-blue rotate-90" />
                </div>

              </motion.article>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA for Process */}
        <div className="text-center mt-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                System Ready for Deployment
             </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
