
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Clock, Activity, ArrowUpRight, ArrowLeft, Database, Bot, FileText, Touchpad } from 'lucide-react';

const cases = [
  {
    sector: "E-commerce & Retail",
    metric: "200h+",
    label: "Ahorradas / Mes",
    description: "Automatización total de Atención al Cliente (L1) y sincronización de stock en tiempo real entre almacenes.",
    icon: Clock,
    color: "text-blue-400",
    strokeColor: "#60A5FA", // blue-400
    trend: "down",
    chartData: "M0,10 C30,15 40,5 60,40 S80,45 100,50",
    details: {
      title: "Caso: Retail Fashion Tech",
      summary: "Implementación de agentes de IA en el Tier-1 de soporte (Zendesk) y orquestador de pedidos entre Shopify y ERP. La IA resuelve el 85% de tickets recurrentes y gestiona devoluciones sin intervención humana.",
      techIcon: Bot
    }
  },
  {
    sector: "Captación B2B",
    metric: "+40%",
    label: "Leads Cualificados",
    description: "Sistema de agentes IA que nutre prospectos fríos, agenda reuniones y actualiza el CRM sin intervención humana.",
    icon: TrendingUp,
    color: "text-brand-violet",
    strokeColor: "#8B5CF6", // brand-violet
    trend: "up",
    chartData: "M0,50 C20,45 40,30 60,25 S80,10 100,5",
    details: {
      title: "Caso: SaaS B2B Enterprise",
      summary: "Sistema de prospección autónomo. La IA analiza perfiles en LinkedIn, redacta mensajes hiper-personalizados y agenda reuniones en Calendly solo cuando el lead muestra intención de compra clara.",
      techIcon: Database
    }
  },
  {
    sector: "Operaciones Internas",
    metric: "-50%",
    label: "Costes Administrativos",
    description: "Facturación, conciliación bancaria y generación de reportes ejecutivos 100% autónomos.",
    icon: Activity,
    color: "text-emerald-400",
    strokeColor: "#34D399", // emerald-400
    trend: "down",
    chartData: "M0,5 C20,5 40,10 50,30 S80,45 100,50",
    details: {
      title: "Caso: Logística y Distribución",
      summary: "Automatización del ciclo de facturación. La IA extrae datos de albaranes no estructurados, cruza con tarifas vigentes, genera la factura y realiza la conciliación bancaria automática en el ERP.",
      techIcon: FileText
    }
  }
];

interface FlipCardProps {
  item: typeof cases[0];
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Manejador para el tap en móvil (toda la tarjeta)
  const handleContainerClick = () => {
    // Solo activamos si es pantalla pequeña (md es 768px en Tailwind)
    if (window.innerWidth < 768 && !isFlipped) {
      setIsFlipped(true);
    }
  };

  const handleDesktopClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(true);
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      // REMOVED FIXED HEIGHT (h-[500px]). Added h-full to fill grid cell evenly.
      className="group relative h-full w-full perspective-[1000px] cursor-pointer md:cursor-default"
      onClick={handleContainerClick}
    >
      {/* Inner Container keeping 3D State - Added will-change-transform for performance */}
      <div 
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] will-change-transform ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* ================= FRONT FACE ================= */}
        {/* Changed from absolute inset-0 to relative h-full to drive height based on content */}
        <div className="relative h-full w-full [backface-visibility:hidden]">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-violet to-brand-blue opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          
          <div className="relative h-full bg-brand-dark border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 group-hover:border-white/20">
            
            {/* Mobile Touch Indicator */}
            <div className="md:hidden absolute top-4 right-4 flex items-center gap-1 text-[10px] text-brand-blue animate-pulse border border-brand-blue/20 px-2 py-1 rounded-full bg-brand-blue/5">
                <Touchpad size={12} />
                <span>Toca para ver</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="bg-white/5 p-3 rounded-lg text-gray-300 group-hover:text-white transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="px-3 py-1 bg-white/5 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5 md:block hidden">
                {item.sector}
              </h3>
            </div>

            {/* Sparkline & Metric Container */}
            <div className="mb-6 relative">
              <div className="flex items-end justify-between">
                 <span className={`text-5xl md:text-6xl font-bold font-mono tracking-tighter ${item.color} drop-shadow-lg z-10 relative`}>
                    {item.metric}
                 </span>
              </div>
              
              {/* Animated Sparkline */}
              <div className="h-20 w-full -mt-4 overflow-visible relative pb-2">
                <svg
                  viewBox="0 -10 100 70"
                  preserveAspectRatio="none"
                  className="w-full h-full overflow-visible"
                  aria-hidden="true"
                  role="img"
                  aria-label={`Gráfico de tendencia para ${item.label}`}
                >
                    <defs>
                        <linearGradient id={`gradient-${index}`} x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor={item.strokeColor} stopOpacity="0.2" />
                            <stop offset="100%" stopColor={item.strokeColor} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    
                    <motion.path
                        d={`${item.chartData} L100,100 L0,100 Z`}
                        fill={`url(#gradient-${index})`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />

                    <motion.path
                        d={item.chartData}
                        fill="none"
                        stroke={item.strokeColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.2 }}
                        style={{ filter: `drop-shadow(0px 4px 6px ${item.strokeColor}40)` }}
                    />
                </svg>
              </div>
            </div>

            <div className="text-white font-medium text-lg mb-4 border-l-2 border-white/10 pl-3">
              {item.label}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
              {item.description}
            </p>

            {/* Trigger Button (Desktop primarily, but works on mobile too if hit precisely) */}
            <button 
              onClick={handleDesktopClick}
              className="flex items-center text-xs font-bold text-gray-500 group-hover:text-white transition-colors gap-1 mt-auto pt-6 border-t border-white/5 cursor-pointer hover:underline decoration-brand-violet underline-offset-4 w-full md:w-auto"
              aria-label={`Ver detalles técnicos del caso ${item.sector}`}
            >
              VER CASO DE ESTUDIO <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* ================= BACK FACE ================= */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
           <div className="relative h-full w-full bg-[#121623] border border-brand-violet/30 rounded-2xl p-8 flex flex-col shadow-2xl shadow-brand-violet/10">
              
              {/* Back Header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                 <div className="p-2 rounded-lg bg-brand-violet/10 text-brand-violet">
                    <item.details.techIcon size={20} />
                 </div>
                 <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Detalles Técnicos
                 </h4>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                 <h3 className="text-xl font-bold text-white mb-4">
                    {item.details.title}
                 </h3>
                 <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {item.details.summary}
                 </p>

                 {/* Tech Stack Badge (Decorative) */}
                 <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5">Python</span>
                    <span className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5">LangChain</span>
                    <span className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5">AWS</span>
                 </div>
              </div>

              {/* Back Button */}
              <button 
                onClick={handleBackClick}
                className="mt-auto flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-white transition-colors pt-6 border-t border-white/5"
              >
                <ArrowLeft size={14} />
                VOLVER A MÉTRICAS
              </button>
           </div>
        </div>

      </div>
    </motion.article>
  );
};

const Results: React.FC = () => {
  return (
    <section id="resultados" className="py-24 bg-brand-surface border-t border-white/5 relative overflow-hidden" aria-label="Resultados verificables">
      {/* Background Tech Elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-violet font-bold tracking-widest text-sm uppercase mb-2 block">
              Métricas Reales
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white">
              Resultados Verificables
            </h2>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 backdrop-blur-md">
            <ShieldCheck size={18} />
            <span className="text-xs font-bold uppercase tracking-wide">Datos Auditados 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <FlipCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
