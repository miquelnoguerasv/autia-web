import React from 'react';
import { motion } from 'framer-motion';

const EngineerNote: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark relative">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-[#0B0F19] border-y border-white/5 md:border md:border-white/5 md:rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            >
                {/* Subtle Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-blue/5 blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed font-serif italic mb-10">
                        "La Inteligencia Artificial no es magia, es ingeniería. <br className="hidden md:block" />
                        En <span className="text-white font-medium not-italic font-sans">autiA</span> no aplicamos promesas, aplicamos sistemas."
                    </p>
                    
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-violet to-transparent mb-4 opacity-50" />
                        
                        <div className="font-handwriting text-4xl text-brand-blue -rotate-2 select-none">
                            Miquel Nogueras
                        </div>
                        
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mt-2">
                            Lead Engineer @ autiA
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default EngineerNote;