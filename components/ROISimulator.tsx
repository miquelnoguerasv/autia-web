
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { 
  Users, Clock, Coins, 
  TrendingUp, Lightbulb, ArrowRight,
  Settings2
} from 'lucide-react';

const ROISimulator: React.FC = () => {
  // --- STATE ---
  const [teamSize, setTeamSize] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(25);
  const [manualHours, setManualHours] = useState(10); 

  // --- CALCULATIONS (Lógica Conservadora Mercado ES) ---
  const WEEKS_PER_YEAR = 48;
  const AUTOMATION_FACTOR = 0.70;

  const totalAnnualCost = teamSize * manualHours * WEEKS_PER_YEAR * hourlyCost;
  const potentialSavings = totalAnnualCost * AUTOMATION_FACTOR;
  const hoursSaved = Math.round((teamSize * manualHours * WEEKS_PER_YEAR) * AUTOMATION_FACTOR);

  // --- VISUAL SCALING LOGIC (UX Psychology) ---
  // Cap visual en 150k para que ahorros "menores" (20k-50k) se vean sustanciales en el gráfico
  const VISUAL_MAX_SAVINGS = 150000;
  const fillRatio = Math.min(potentialSavings / VISUAL_MAX_SAVINGS, 1);
  const CIRCLE_CIRCUMFERENCE = 628; // 2 * PI * 100

  // --- ANIMATED NUMBER LOGIC ---
  const savingsSpring = useSpring(0, { stiffness: 40, damping: 20 });
  const hoursSpring = useSpring(0, { stiffness: 40, damping: 20 });

  useEffect(() => {
    savingsSpring.set(potentialSavings);
    hoursSpring.set(hoursSaved);
  }, [potentialSavings, hoursSaved, savingsSpring, hoursSpring]);

  const displaySavings = useTransform(savingsSpring, (value) => 
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value)
  );
  
  const displayHours = useTransform(hoursSpring, (value) => 
    new Intl.NumberFormat('es-ES').format(Math.round(value))
  );

  // --- DYNAMIC CONTEXT LOGIC ---
  const getContextCard = () => {
    if (potentialSavings < 25000) {
      return {
        text: "Equivale a aumentar tu margen neto un 15% sin vender más.",
        icon: TrendingUp,
        color: "text-emerald-400",
        border: "border-emerald-500/30",
        bg: "bg-emerald-500/5"
      };
    } else if (potentialSavings < 80000) {
      return {
        text: "Podrías contratar a un ingeniero senior extra con este capital desperdiciado.",
        icon: Users,
        color: "text-blue-400",
        border: "border-blue-500/30",
        bg: "bg-blue-500/5"
      };
    } else {
      return {
        text: "Capital suficiente para abrir una nueva línea de negocio o expandir mercado.",
        icon: Lightbulb,
        color: "text-amber-400",
        border: "border-amber-500/30",
        bg: "bg-amber-500/5"
      };
    }
  };

  const context = getContextCard();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Updated */}
        <div className="text-center mb-16">
          <span className="text-brand-violet font-bold tracking-widest text-sm uppercase mb-2 block">
            Ingeniería Financiera
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white">
            Simulador de Impacto Financiero
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg font-light">
            Introduce los datos reales de tu estructura operativa para simular el impacto de una arquitectura de IA a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT PANEL: CONTROLS (Updated Typography & Layout) --- */}
          <div className="relative h-full flex flex-col justify-center pl-6 md:pl-8 pr-4 py-8 bg-gradient-to-r from-white/[0.02] to-transparent border-l-2 border-brand-violet/50 backdrop-blur-sm rounded-r-3xl">
            
            <div className="mb-10 flex items-center gap-4 pb-6 border-b border-white/5">
                <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue ring-1 ring-inset ring-brand-blue/20">
                    <Settings2 size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Parámetros Operativos</h3>
                  <p className="text-xs text-gray-400 font-mono mt-1">CALIBRACIÓN DEL SISTEMA</p>
                </div>
            </div>

            <div className="space-y-12">
              
              <ControlRow 
                label="Equipo Administrativo"
                icon={Users}
                value={teamSize}
                setValue={setTeamSize}
                min={1}
                max={100}
                unit="pers"
                description="Empleados con carga repetitiva."
              />

              <ControlRow 
                label="Coste Empresa / Hora"
                icon={Coins}
                value={hourlyCost}
                setValue={setHourlyCost}
                min={15}
                max={100}
                unit="€/h"
                description="Salario bruto + SS + Estructural."
              />

              <ControlRow 
                label="Horas Manuales / Semana"
                icon={Clock}
                value={manualHours}
                setValue={setManualHours}
                min={2}
                max={40}
                unit="h/sem"
                description="Excel, Emails, Facturación, CRM..."
              />

            </div>
          </div>

          {/* --- RIGHT PANEL: THE REACTOR --- */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Radial Visualization */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-brand-violet/20 rounded-full blur-[60px]" />
              
              {/* SVG Ring */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 250 250">
                {/* Background Circle */}
                <circle
                  cx="125" cy="125" r="100"
                  fill="transparent"
                  stroke="#1f2937"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
                {/* Progress Circle (Updated Logic) */}
                <motion.circle
                  cx="125" cy="125" r="100"
                  fill="transparent"
                  stroke="url(#gradient)"
                  strokeWidth="15"
                  strokeLinecap="round"
                  strokeDasharray={CIRCLE_CIRCUMFERENCE}
                  animate={{ 
                    strokeDashoffset: CIRCLE_CIRCUMFERENCE - (CIRCLE_CIRCUMFERENCE * fillRatio) 
                  }} 
                  transition={{ type: "spring", stiffness: 60, damping: 20 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-gray-400 text-[10px] font-mono uppercase tracking-widest mb-2">
                  Ahorro Anual Estimado
                </span>
                <motion.div className="flex items-start justify-center">
                    <motion.span className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tighter">
                        {displaySavings}
                    </motion.span>
                </motion.div>
                <div className="mt-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center gap-1 uppercase tracking-wide shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <TrendingUp size={10} />
                  +70% Eficiencia
                </div>
              </div>

              {/* Satellite 1: Hours */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 md:-right-4 bg-[#0B0F19] border border-white/10 p-3 rounded-xl shadow-xl backdrop-blur-md"
              >
                <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Horas Liberadas</div>
                <div className="text-lg font-mono font-bold text-brand-blue flex items-center gap-1">
                  <Clock size={14} />
                  <motion.span>{displayHours}</motion.span>h
                </div>
              </motion.div>
            </div>

            {/* Dynamic Context Card */}
            <motion.div
              key={context.text} // Triggers animation on change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 w-full max-w-md p-4 rounded-xl border ${context.border} ${context.bg} backdrop-blur-sm flex items-start gap-4`}
            >
              <div className={`p-2 rounded-lg bg-black/20 ${context.color}`}>
                <context.icon size={24} />
              </div>
              <div>
                <h4 className={`text-xs font-bold ${context.color} uppercase tracking-widest mb-1`}>
                  Equivalencia de Negocio
                </h4>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {context.text}
                </p>
              </div>
            </motion.div>

            {/* Integrated CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="mt-6 w-full max-w-md group relative overflow-hidden bg-white text-brand-dark font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all cursor-pointer"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               <span className="relative flex items-center justify-center gap-2">
                 Quiero auditar estos <motion.span className="font-mono">{displaySavings}</motion.span>
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </span>
            </motion.button>

          </div>

        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: Tech Control Row (Enhanced UI) ---
interface ControlRowProps {
    label: string;
    icon: React.ElementType;
    value: number;
    setValue: (val: number) => void;
    min: number;
    max: number;
    unit: string;
    description: string;
}

const ControlRow: React.FC<ControlRowProps> = ({ label, icon: Icon, value, setValue, min, max, unit, description }) => {
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (val === '') {
            setValue(0); 
        } else {
            setValue(parseInt(val));
        }
    };

    const handleBlur = () => {
        let finalVal = value;
        if (Number.isNaN(finalVal)) finalVal = min;
        if (finalVal < min) finalVal = min;
        if (finalVal > max) finalVal = max;
        setValue(finalVal);
    };

    return (
        <div className="group">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-brand-violet/10 text-brand-violet ring-1 ring-inset ring-brand-violet/20 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                        <Icon size={20} />
                    </div>
                    <div>
                        {/* Aumentado tamaño de texto y contraste */}
                        <label className="block text-sm md:text-base font-bold text-gray-200 uppercase tracking-wide mb-1">
                            {label}
                        </label>
                        <p className="text-xs text-gray-500 font-mono leading-tight max-w-[200px]">
                            {description}
                        </p>
                    </div>
                </div>
                
                {/* Tech Display Input - Bigger & Bolder */}
                <div className="flex items-center bg-black/40 border border-white/10 rounded-lg px-3 py-2 focus-within:border-brand-blue/50 focus-within:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all">
                    <input
                        type="number"
                        min={min}
                        max={max}
                        value={value === 0 ? '' : value}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="w-16 bg-transparent text-right font-mono text-emerald-400 font-bold text-lg outline-none placeholder-gray-700 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder={min.toString()}
                    />
                    <span className="text-xs font-mono text-gray-500 ml-1 select-none pt-1">
                        {unit}
                    </span>
                </div>
            </div>

            {/* Enhanced Slider with Ruler - Thicker & easier to click */}
            <div className="relative pt-2 pb-1">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step="1"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-violet hover:accent-brand-blue transition-colors z-10 relative shadow-inner"
                />
                
                {/* Graduation Marks (Ruler) */}
                <div className="flex justify-between px-1 mt-2 opacity-30 select-none pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <div className="w-px h-1.5 bg-gray-400" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ROISimulator;
