
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, ShoppingBag, Scale, Landmark, Zap, Terminal, Activity, Server, Calendar, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-brand-dark" aria-label="Inicio">
      {/* --- Engineering Background Grid --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" aria-hidden="true" />
      
      {/* Ambient Glows (Updated for Depth) */}
      <div className="absolute -top-[20%] -left-[10%] w-[900px] h-[900px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Column: Copywriting --- */}
          <div className="text-left">
            {/* Tech Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded bg-[#0B0F19]/80 border border-emerald-500/20 backdrop-blur-md text-xs font-mono text-emerald-400 mb-8 shadow-lg shadow-emerald-500/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>SYSTEM_STATUS: ONLINE</span>
              <span className="w-px h-3 bg-emerald-500/30 mx-1" />
              <span className="text-gray-500">v2.4.0</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight mb-8 tracking-tight"
            >
              Transformamos tu empresa con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-blue">
                Sistemas de IA
              </span>{' '}
              que funcionan mientras duermes.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed font-light border-l-2 border-brand-violet/20 pl-6"
            >
              No somos otra agencia de automatización. Diseñamos arquitecturas de IA a medida, dashboards propios y sistemas autónomos que reducen costes y escalan tu facturación.
            </motion.p>

            {/* CTAs - Optimized for CRO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 mb-16"
            >
              {/* Primary: Hard Convert (Contact) */}
              <a
                href="#contacto"
                onClick={(e) => scrollToSection(e, 'contacto')}
                className="group relative px-8 py-4 bg-white text-brand-dark font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] cursor-pointer"
                aria-label="Solicitar auditoría técnica de inteligencia artificial"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Solicitar Auditoría Técnica
                  <Calendar className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
              
              {/* Secondary: Soft Convert (Social Proof/Info) */}
              <a
                href="#resultados"
                onClick={(e) => scrollToSection(e, 'resultados')}
                className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 hover:border-brand-violet/50 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                aria-label="Ver casos de éxito y resultados verificables"
              >
                <TrendingUp className="w-4 h-4 text-gray-400 group-hover:text-brand-violet transition-colors" />
                <span>Ver Casos de Éxito</span>
              </a>
            </motion.div>

            {/* Social Proof Dock */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
               <p className="text-[10px] text-gray-500 mb-3 font-mono uppercase tracking-widest pl-1">
                Desplegando en infraestructuras de:
              </p>
              
              {/* Glassmorphic Dock Container */}
              <div className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm shadow-xl" role="list">
                 <div className="group relative" title="Real Estate" role="listitem">
                    <Building2 size={24} className="text-gray-600 group-hover:text-brand-violet transition-colors duration-300" aria-label="Sector Real Estate" />
                 </div>
                 <div className="w-px h-6 bg-white/5" aria-hidden="true"></div>
                 <div className="group relative" title="E-commerce" role="listitem">
                    <ShoppingBag size={24} className="text-gray-600 group-hover:text-brand-blue transition-colors duration-300" aria-label="Sector E-commerce" />
                 </div>
                 <div className="w-px h-6 bg-white/5" aria-hidden="true"></div>
                 <div className="group relative" title="Legal" role="listitem">
                    <Scale size={24} className="text-gray-600 group-hover:text-indigo-400 transition-colors duration-300" aria-label="Sector Legal" />
                 </div>
                 <div className="w-px h-6 bg-white/5" aria-hidden="true"></div>
                 <div className="group relative" title="Finance" role="listitem">
                    <Landmark size={24} className="text-gray-600 group-hover:text-emerald-400 transition-colors duration-300" aria-label="Sector Finanzas" />
                 </div>
                 <div className="w-px h-6 bg-white/5" aria-hidden="true"></div>
                 <div className="group relative" title="Energy" role="listitem">
                    <Zap size={24} className="text-gray-600 group-hover:text-yellow-400 transition-colors duration-300" aria-label="Sector Energía" />
                 </div>
              </div>
            </motion.div>
          </div>

          {/* --- Right Column: 3D Abstract Interface --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative perspective-container will-change-transform"
            style={{ perspective: '1000px' }}
            role="img"
            aria-label="Panel de control de IA mostrando métricas en tiempo real y arquitectura de sistemas"
          >
            <motion.div
              animate={{ 
                rotateY: [-12, -8, -12], 
                rotateX: [5, 2, 5],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full aspect-square max-w-[600px] mx-auto will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Glass Card (Dashboard) */}
              <div className="absolute inset-0 bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-brand-violet/20 overflow-hidden flex flex-col">
                {/* Header Bar */}
                <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   <div className="ml-4 h-4 w-32 bg-white/5 rounded-full" />
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col gap-6 relative">
                  {/* Abstract Graph */}
                  <div className="h-32 rounded-lg bg-white/[0.02] border border-white/5 p-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-between px-4 pb-4 gap-1 opacity-50">
                      {[40, 70, 45, 90, 60, 80, 50, 95, 85, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                          className="w-full bg-gradient-to-t from-brand-violet/50 to-brand-blue/50 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Stat Card 1 */}
                    <div className="h-24 rounded-lg bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
                       <Activity className="text-emerald-400 mb-2" size={20} />
                       <div className="h-2 w-16 bg-white/10 rounded-full" />
                       <div className="h-2 w-24 bg-white/20 rounded-full" />
                    </div>
                     {/* Stat Card 2 */}
                     <div className="h-24 rounded-lg bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
                       <Server className="text-brand-violet mb-2" size={20} />
                       <div className="h-2 w-16 bg-white/10 rounded-full" />
                       <div className="h-2 w-24 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Code Block Lines */}
                  <div className="mt-auto space-y-2 opacity-60">
                     <div className="h-2 w-3/4 bg-brand-blue/20 rounded-full animate-pulse" />
                     <div className="h-2 w-1/2 bg-brand-violet/20 rounded-full animate-pulse delay-75" />
                     <div className="h-2 w-2/3 bg-white/10 rounded-full animate-pulse delay-150" />
                  </div>
                </div>
              </div>

              {/* Floating Elements (Parallax) - Added will-change-transform */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-20 w-48 p-4 bg-[#121623] border border-brand-violet/30 rounded-lg shadow-xl backdrop-blur-md will-change-transform"
                style={{ transform: 'translateZ(50px)' }}
              >
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-brand-violet/20 flex items-center justify-center">
                      <Terminal size={16} className="text-brand-violet" />
                    </div>
                    <div>
                      <div className="h-2 w-16 bg-white/20 rounded mb-1" />
                      <div className="h-2 w-8 bg-white/10 rounded" />
                    </div>
                 </div>
                 <div className="h-1 w-full bg-brand-violet/20 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-brand-violet" 
                    />
                 </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-32 w-40 p-3 bg-[#121623] border border-brand-blue/30 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-3 will-change-transform"
                style={{ transform: 'translateZ(30px)' }}
              >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">Optimization: 98%</span>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
