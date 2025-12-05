import React, { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { TrendingDown, TrendingUp, BrainCircuit } from 'lucide-react';

const benefits = [
  {
    icon: TrendingDown,
    title: "Reducción de Costes",
    description: "Automatiza tareas repetitivas y reduce hasta un 70% los gastos administrativos desde el primer mes.",
    gradient: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
    highlight: "rgba(244, 63, 94, 0.5)", // rose-500
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad Infinita",
    description: "Procesa 10x más volumen de trabajo sin contratar más personal. Tu empresa crece, tus costes fijos no.",
    gradient: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/20",
    highlight: "rgba(59, 130, 246, 0.5)", // blue-500
  },
  {
    icon: BrainCircuit,
    title: "Decisiones con Datos",
    description: "Convierte el caos en claridad con dashboards predictivos que anticipan tendencias antes que tu competencia.",
    gradient: "from-emerald-400 to-cyan-400",
    shadow: "shadow-emerald-500/20",
    highlight: "rgba(52, 211, 153, 0.5)", // emerald-400
  }
];

interface BenefitCardProps {
  data: typeof benefits[0];
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ data, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <article
      className="group relative rounded-3xl bg-brand-surface/40 border border-white/5 overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-labelledby={`benefit-title-${index}`}
    >
      {/* 1. Spotlight Background Reveal (Decorative) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        aria-hidden="true"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.02),
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. Spotlight Border Reveal (Decorative) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        aria-hidden="true"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${data.highlight},
              transparent 40%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
        }}
      >
          {/* Inner masking to create border effect */}
          <div className="absolute inset-[1px] bg-brand-dark rounded-[23px] opacity-100" />
      </motion.div>

      {/* 3. Content Container */}
      <div className="relative p-8 md:p-10 h-full flex flex-col z-20">
         {/* Background Number (Decorative) */}
         <div 
           className="absolute right-6 top-6 text-9xl font-mono font-bold text-white/[0.02] select-none pointer-events-none z-0 transition-colors duration-500 group-hover:text-white/[0.05]"
           aria-hidden="true"
         >
            0{index + 1}
         </div>

         {/* Icon Nebula ("Soul") - Decorative */}
         <div 
           className="relative w-16 h-16 mb-8 z-10 group-hover:scale-105 transition-transform duration-500"
           aria-hidden="true"
         >
            <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />
            <div className={`relative w-full h-full rounded-2xl bg-[#0B0F19] border border-white/10 flex items-center justify-center shadow-2xl`}>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}/>
                <data.icon className="text-white relative z-10" size={28} />
            </div>
         </div>

         {/* Title: H3 for proper hierarchy */}
         <h3 
           id={`benefit-title-${index}`}
           className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300 mb-4 z-10"
         >
            {data.title}
         </h3>
         
         {/* Description */}
         <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-100 transition-colors duration-300 z-10">
            {data.description}
         </p>
      </div>
    </article>
  );
};

const Benefits: React.FC = () => {
  return (
    <section 
      id="beneficios" 
      className="py-24 bg-brand-dark relative z-20 overflow-hidden" 
      aria-label="Beneficios Clave de autiA"
    >
      {/* Engineering Background Pattern (Decorative) */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-2 block">
            Retorno de Inversión
          </span>
          {/* Main Section Title as H2 */}
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white">
            Los 3 Pilares de <span className="text-gradient-primary">autiA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} data={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;