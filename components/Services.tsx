import React from 'react';
import { motion } from 'framer-motion';
import { AppWindow, Bot, LineChart, ArrowRight, Database, Server, Layout, Hexagon } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="soluciones" 
      className="py-24 bg-brand-dark relative border-t border-white/5" 
      aria-label="Nuestros Servicios y Soluciones"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-sans font-bold mb-6 text-white"
            >
              ¿Qué construimos en <span className="text-brand-violet">autiA</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg font-light leading-relaxed"
            >
              Ingeniería de software aplicada al crecimiento empresarial. Arquitecturas robustas, no parches.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(340px,auto)]">
          
          {/* Card 1: Sistemas Propios (Large) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-brand-surface border border-white/5 hover:border-white/10 transition-colors"
          >
             {/* Hover Radial Gradient (Decorative) */}
             <div className="absolute inset-0 bg-[radial-gradient(600px_at_50%_50%,rgba(139,92,246,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

             <div className="relative h-full p-8 md:p-10 flex flex-col z-10">
                <div className="mb-auto">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-brand-violet border border-white/5 shadow-inner" aria-hidden="true">
                      <AppWindow size={24} />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Sistemas Propios (SaaS)</h3>
                   <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
                      Desarrollamos plataformas completas a medida. Backend robusto, Frontend reactivo y bases de datos optimizadas. Su propiedad intelectual, sin depender de terceros.
                   </p>
                </div>
                
                <a 
                  href="#contacto"
                  onClick={(e) => scrollToSection(e, 'contacto')} 
                  className="mt-8 flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand-violet transition-colors cursor-pointer"
                  aria-label="Solicitar arquitectura para Sistemas SaaS"
                >
                   VER ARQUITECTURA <ArrowRight size={16} aria-hidden="true" />
                </a>
             </div>

             {/* Abstract Visual: Full Stack Layers (Decorative) */}
             <div className="absolute right-[-40px] md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-30 group-hover:opacity-60 transition-opacity duration-500 scale-75 md:scale-100 pointer-events-none" aria-hidden="true">
                <div className="w-48 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center gap-3 px-4 backdrop-blur-md transform translate-x-4">
                   <Layout size={16} className="text-blue-400" />
                   <div className="h-1.5 w-16 bg-blue-400/30 rounded-full" />
                </div>
                <div className="w-48 h-12 rounded-lg bg-gradient-to-r from-violet-500/20 to-violet-600/20 border border-violet-500/30 flex items-center gap-3 px-4 backdrop-blur-md z-10">
                   <Server size={16} className="text-violet-400" />
                   <div className="h-1.5 w-24 bg-violet-400/30 rounded-full" />
                </div>
                <div className="w-48 h-12 rounded-lg bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 flex items-center gap-3 px-4 backdrop-blur-md transform translate-x-4">
                   <Database size={16} className="text-emerald-400" />
                   <div className="h-1.5 w-12 bg-emerald-400/30 rounded-full" />
                </div>
             </div>
          </motion.article>

          {/* Card 2: Agentes IA (Vertical) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-brand-surface border border-white/5 hover:border-white/10 transition-colors flex flex-col"
          >
             {/* Hover Radial Gradient */}
             <div className="absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(59,130,246,0.15),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

             <div className="relative p-8 md:p-10 flex-1 flex flex-col justify-between z-10">
                <div>
                  {/* Pulsing Icon Effect (Decorative) */}
                   <div className="relative w-14 h-14 mb-8" aria-hidden="true">
                      <div className="absolute inset-0 bg-brand-blue rounded-xl animate-ping opacity-20" />
                      <div className="relative w-full h-full bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue border border-brand-blue/20">
                         <Bot size={28} />
                      </div>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Agentes IA</h3>
                   <p className="text-gray-400 leading-relaxed">
                      Enjambres de agentes autónomos que trabajan 24/7 conectando su ecosistema digital.
                   </p>
                </div>
                <div className="mt-6">
                    <div className="text-xs font-mono text-brand-blue bg-brand-blue/10 px-3 py-1 rounded inline-block">
                        STATUS: RUNNING
                    </div>
                </div>
             </div>
          </motion.article>

          {/* Card 3: Consultoría (Horizontal Wide) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-brand-surface border border-white/5 hover:border-white/10 transition-colors"
          >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-surface opacity-90" aria-hidden="true" />
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" aria-hidden="true" />

             <div className="relative p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 z-10 h-full">
                {/* Left Content */}
                <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-500/10 rounded-lg" aria-hidden="true">
                        <LineChart className="text-emerald-400" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Consultoría Estratégica</h3>
                   </div>
                   <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                      No vendemos humo. Analizamos sus flujos de caja y operaciones para implementar IA solo donde el ROI es positivo y medible.
                   </p>
                </div>
                
                {/* Right Visual: Flex Column for Chart + Button */}
                <div className="flex flex-col items-center md:items-end justify-between gap-6">
                   
                   {/* Radar Chart SVG - Scaled to fit (Decorative Visual) */}
                   <div className="relative w-56 h-56 md:w-60 md:h-60 opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-95" role="img" aria-label="Gráfico de radar mostrando altas puntuaciones en ROI, Velocidad y Eficiencia">
                      {/* Labels */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-emerald-400 font-mono tracking-wider font-bold">ROI</div>
                      <div className="absolute top-[30%] right-0 text-[10px] text-blue-400 font-mono tracking-wider">VELOCIDAD</div>
                      <div className="absolute bottom-[20%] right-2 text-[10px] text-gray-500 font-mono tracking-wider">EFICIENCIA</div>
                      <div className="absolute bottom-[20%] left-2 text-[10px] text-gray-500 font-mono tracking-wider">ESTABILIDAD</div>
                      <div className="absolute top-[30%] left-0 text-[10px] text-violet-400 font-mono tracking-wider">ESCALA</div>

                      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                          {/* Grid Polygons (Pentagon approx) */}
                          <path d="M100,20 L176,75 L147,165 L53,165 L24,75 Z" fill="none" stroke="white" strokeOpacity="0.1" />
                          <path d="M100,40 L157,81 L135,149 L65,149 L43,81 Z" fill="none" stroke="white" strokeOpacity="0.1" />
                          <path d="M100,60 L138,87 L123,132 L77,132 L62,87 Z" fill="none" stroke="white" strokeOpacity="0.1" />
                          
                          {/* Axis Lines */}
                          <line x1="100" y1="100" x2="100" y2="20" stroke="white" strokeOpacity="0.1" />
                          <line x1="100" y1="100" x2="176" y2="75" stroke="white" strokeOpacity="0.1" />
                          <line x1="100" y1="100" x2="147" y2="165" stroke="white" strokeOpacity="0.1" />
                          <line x1="100" y1="100" x2="53" y2="165" stroke="white" strokeOpacity="0.1" />
                          <line x1="100" y1="100" x2="24" y2="75" stroke="white" strokeOpacity="0.1" />

                          {/* Animated Data Group */}
                          <motion.g
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ 
                              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                              opacity: { duration: 0.5 } 
                            }}
                            style={{ originX: "100px", originY: "100px" }}
                          >
                             {/* Data Polygon with Fill */}
                             <motion.path 
                               d="M100,28 L165,79 L142,158 L55,162 L35,80 Z" 
                               fill="rgba(52, 211, 153, 0.15)" 
                               stroke="#34D399" 
                               strokeWidth="2"
                               initial={{ pathLength: 0 }}
                               whileInView={{ pathLength: 1 }}
                               viewport={{ once: true }}
                               transition={{ duration: 1.5, ease: "easeOut" }}
                             />
                             
                             {/* Vertex Dots */}
                             {[
                               {cx:100, cy:28}, {cx:165, cy:79}, {cx:142, cy:158}, {cx:55, cy:162}, {cx:35, cy:80}
                             ].map((dot, i) => (
                               <circle 
                                 key={i} 
                                 cx={dot.cx} 
                                 cy={dot.cy} 
                                 r="3" 
                                 fill="#10B981" 
                                 className="animate-pulse"
                               >
                                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                               </circle>
                             ))}
                          </motion.g>
                          
                          {/* Center dot */}
                           <circle cx="100" cy="100" r="2" fill="white" opacity="0.5" />
                      </svg>
                   </div>

                   {/* CTA Button */}
                   <div className="mt-auto">
                      <a 
                        href="#contacto"
                        onClick={(e) => scrollToSection(e, 'contacto')} 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg transition-all border border-white/10 hover:border-emerald-500/30 group/btn cursor-pointer"
                        aria-label="Solicitar auditoría estratégica"
                      >
                          Solicitar Auditoría
                          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                      </a>
                   </div>
                </div>
             </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
};

export default Services;