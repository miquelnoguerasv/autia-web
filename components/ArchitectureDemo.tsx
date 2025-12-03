import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Bot, Database, Mail, FileText, 
  CreditCard, BarChart3, Globe, Server, 
  ArrowRight, Cpu, MessageSquare, Zap 
} from 'lucide-react';

// Definición de Escenarios y Arquitecturas
const scenarios = [
  {
    id: 'leads',
    label: 'Gestión de Leads',
    description: 'Automatiza la cualificación y entrada de datos.',
    icon: Users,
    nodes: [
      { id: 1, icon: Globe, label: 'Web / LinkedIn', sub: 'Entrada de Tráfico' },
      { id: 2, icon: Bot, label: 'Agente IA', sub: 'Cualificación & Chat' },
      { id: 3, icon: Database, label: 'CRM Sync', sub: 'HubSpot / Pipedrive' }
    ],
    time: "2-3 Semanas",
    color: "from-blue-500 to-cyan-500",
    accent: "text-cyan-400"
  },
  {
    id: 'support',
    label: 'Atención 24/7',
    description: 'Reduce tickets de soporte nivel 1.',
    icon: MessageSquare,
    nodes: [
      { id: 1, icon: Mail, label: 'Ticket Entrante', sub: 'Email / Widget' },
      { id: 2, icon: Cpu, label: 'NLP Engine', sub: 'Análisis de Intención' },
      { id: 3, icon: CheckCircleNode, label: 'Resolución', sub: 'Respuesta o Escalado' }
    ],
    time: "3-4 Semanas",
    color: "from-violet-500 to-purple-500",
    accent: "text-violet-400"
  },
  {
    id: 'billing',
    label: 'Facturación Auto',
    description: 'De albarán a contabilidad sin manos.',
    icon: CreditCard,
    nodes: [
      { id: 1, icon: FileText, label: 'PDF / Albarán', sub: 'Docs no estructurados' },
      { id: 2, icon: ScanEyeNode, label: 'Vision Model', sub: 'Extracción OCR' },
      { id: 3, icon: Server, label: 'ERP System', sub: 'Asiento Contable' }
    ],
    time: "4 Semanas",
    color: "from-emerald-500 to-green-500",
    accent: "text-emerald-400"
  },
  {
    id: 'data',
    label: 'Business Intel',
    description: 'Dashboards que predicen, no solo reportan.',
    icon: BarChart3,
    nodes: [
      { id: 1, icon: Server, label: 'Data Lake', sub: 'Múltiples Fuentes' },
      { id: 2, icon: BrainCircuitNode, label: 'Predictive AI', sub: 'Detección Patrones' },
      { id: 3, icon: BarChart3, label: 'Live Dashboard', sub: 'Toma de Decisiones' }
    ],
    time: "5 Semanas",
    color: "from-orange-500 to-red-500",
    accent: "text-orange-400"
  }
];

// Iconos Auxiliares para no saturar imports
function CheckCircleNode(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> }
function ScanEyeNode(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="M12 16v-1"/><path d="M12 9V8"/><path d="M16 12h-1"/><path d="M9 12H8"/></svg> }
function BrainCircuitNode(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 1 19.5 5.625"/><path d="M12 18a4 4 0 0 0 4-3.464 4 4 0 0 0 .556-6.911 4 4 0 0 0-3.033-1.628"/><path d="M15 13a4.5 4.5 0 0 1-3-4"/></svg> }


const ArchitectureDemo: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-brand-dark relative border-t border-white/5" aria-label="Visualizador de Arquitecturas">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-2 block">
            Ingeniería Visualizada
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">
            Arquitecturas de Solución
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selecciona un escenario para ver cómo estructuramos el flujo de datos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: Controls */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(scenario)}
                className={`group relative p-4 rounded-xl text-left border transition-all duration-300 ${
                  activeScenario.id === scenario.id 
                    ? 'bg-white/5 border-brand-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                    : 'bg-transparent border-white/5 hover:bg-white/[0.02] hover:border-white/10'
                }`}
              >
                {/* Active Indicator Line */}
                {activeScenario.id === scenario.id && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-violet to-brand-blue rounded-l-xl" 
                  />
                )}
                
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${
                    activeScenario.id === scenario.id ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/5 text-gray-500 group-hover:text-gray-300'
                  }`}>
                    <scenario.icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-bold transition-colors ${
                       activeScenario.id === scenario.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                    }`}>
                      {scenario.label}
                    </h3>
                    <p className="text-xs text-gray-500 font-light mt-1 line-clamp-1">
                      {scenario.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Blueprint Visualization */}
          <div className="lg:col-span-8">
             <div className="relative rounded-2xl bg-[#080a11] border border-white/10 p-8 min-h-[400px] flex flex-col justify-between overflow-hidden group">
                
                {/* Blueprint Background Elements */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600 flex flex-col items-end">
                   <span>SYS.ID: {activeScenario.id.toUpperCase()}</span>
                   <span>LATENCY: &lt;200ms</span>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite] pointer-events-none" />

                {/* --- ANIMATION CANVAS --- */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative my-12">
                   
                   <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeScenario.id}
                        className="contents" // Use contents to let children participate in flex container
                      >
                         {/* Nodes */}
                         {activeScenario.nodes.map((node, index) => (
                           <React.Fragment key={node.id}>
                              {/* Connector Line (Except for first item) */}
                              {index > 0 && (
                                 <div className="relative w-1 h-12 md:w-16 md:h-1 flex items-center justify-center">
                                    {/* Static Line */}
                                    <div className="absolute w-0.5 h-full md:w-full md:h-0.5 bg-gray-800" />
                                    {/* Animated Data Flow */}
                                    <motion.div 
                                      className={`absolute w-0.5 h-4 md:w-8 md:h-0.5 bg-gradient-to-r ${activeScenario.color} rounded-full z-10`}
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: [0, 40], opacity: [0, 1, 0] }}
                                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.5, ease: "linear" }}
                                      // Rotate for vertical (mobile) vs horizontal (desktop) handled by w/h classes
                                    />
                                    {/* Arrow Head */}
                                    <div className="absolute bottom-0 md:right-0 md:bottom-auto md:translate-x-1/2 translate-y-1/2 text-gray-700">
                                       <ArrowRight size={12} className="rotate-90 md:rotate-0" />
                                    </div>
                                 </div>
                              )}

                              {/* The Node Chip */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                                className="relative z-20 flex flex-col items-center text-center"
                              >
                                 <div className={`w-16 h-16 rounded-xl bg-brand-surface border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden group-node`}>
                                     {/* Inner Glow */}
                                     <div className={`absolute inset-0 bg-gradient-to-br ${activeScenario.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                                     <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${activeScenario.color}`} />
                                     
                                     <node.icon size={28} className="text-gray-200 relative z-10" />
                                 </div>
                                 
                                 <div className="mt-4">
                                    <div className="text-sm font-bold text-white">{node.label}</div>
                                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wide mt-1 px-2 py-0.5 bg-white/5 rounded border border-white/5 inline-block">
                                        {node.sub}
                                    </div>
                                 </div>
                              </motion.div>
                           </React.Fragment>
                         ))}
                      </motion.div>
                   </AnimatePresence>

                </div>

                {/* Footer / Dynamic CTA */}
                <motion.div 
                   key={`cta-${activeScenario.id}`}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5 }}
                   className="mt-auto border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg">
                         <Zap size={16} className={activeScenario.accent} />
                      </div>
                      <div className="text-sm">
                         <span className="text-gray-500 block text-xs">Tiempo Estimado</span>
                         <span className="font-mono font-bold text-white">{activeScenario.time}</span>
                      </div>
                   </div>

                   <a 
                     href="#contacto"
                     onClick={(e) => scrollToSection(e, 'contacto')}
                     className="px-6 py-2 bg-white text-brand-dark font-bold text-sm rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                   >
                     Auditar mi proceso
                     <ArrowRight size={14} />
                   </a>
                </motion.div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitectureDemo;
