
import React from 'react';
import { motion } from 'framer-motion';
import { Statistic } from '../types';
import { Star, Truck, BarChart3, Code2, Building2 } from 'lucide-react';

const stats: Statistic[] = [
  { value: '+40%', label: 'Reducción de Costes' },
  { value: '24/7', label: 'Disponibilidad' },
  { value: '15x', label: 'ROI Año 1' },
];

const testimonials = [
  {
    quote: "Redujimos la entrada manual de datos en un 90%. Lo que antes requería un equipo de 4 personas revisando albaranes, ahora es un proceso 100% autónomo y sin errores.",
    author: "Roberto Vilar",
    role: "CEO",
    company: "TransLogistics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100",
    icon: Truck
  },
  {
    quote: "Los agentes de IA califican leads mejor que nuestros SDRs junior. Nuestra tasa de cierre aumentó un 40% en dos meses porque ventas solo habla con clientes listos para comprar.",
    author: "Elena Rivas",
    role: "Director de Marketing",
    company: "GrowthScale",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
    icon: BarChart3
  },
  {
    quote: "Por fin una agencia que entiende de ingeniería. No son scripts sueltos; nos entregaron una arquitectura escalable, documentada y segura. Código limpio y robusto.",
    author: "David Chen",
    role: "CTO",
    company: "TechFlow Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
    icon: Code2
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 border-y border-white/5 bg-brand-dark relative overflow-hidden" aria-label="Testimonios de clientes">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-violet/5 via-brand-dark to-brand-dark opacity-50 pointer-events-none" aria-hidden="true"></div>
        
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Stats Dashboard Bar - Visual Update */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border-y border-white/10 rounded-xl mb-24 backdrop-blur-sm overflow-hidden"
        >
           {/* Subtle Shine Effect */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />

           <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 py-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center px-4">
                <div className="text-4xl md:text-5xl font-bold font-mono text-white mb-2 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
           </div>
        </motion.div>

        {/* Section Header */}
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros partners</h2>
           <p className="text-gray-400">Resultados reales de empresas que ya han escalado.</p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-[#121623]/80 backdrop-blur-sm border border-white/5 hover:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-violet/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label="Valoración: 5 de 5 estrellas">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" aria-hidden="true" />
                 ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 font-light leading-relaxed mb-8 flex-1">
                "{item.quote}"
              </blockquote>

              {/* Author & Footer */}
              <footer className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={`Foto de ${item.author}`} 
                      loading="lazy"
                      decoding="async"
                      width="40"
                      height="40"
                      className="w-10 h-10 rounded-full border border-white/10 object-cover"
                    />
                    <div>
                       <h3 className="text-sm font-bold text-white">{item.author}</h3>
                       <div className="text-xs text-gray-500">{item.role}</div>
                    </div>
                 </div>
                 
                 {/* Company Logo Placeholder (Monochrome) */}
                 <div className="opacity-30 group-hover:opacity-100 transition-opacity" title={item.company}>
                    <item.icon size={20} className="text-white" aria-label={`Logo de ${item.company}`} />
                 </div>
              </footer>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
