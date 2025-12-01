import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
  openLegalModal: (type: string) => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ openLegalModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si ya se aceptaron las cookies
    const consent = localStorage.getItem('autia_cookie_consent');
    if (!consent) {
      // Pequeño retraso para no abrumar al usuario nada más entrar
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('autia_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring', damping: 20 }}
          className="fixed bottom-6 left-6 z-40 w-full max-w-sm"
        >
          <div className="bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl shadow-black/50 flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="p-2 bg-brand-violet/10 rounded-lg h-fit text-brand-violet shrink-0">
                <Cookie size={20} />
              </div>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Usamos cookies propias para mejorar tu experiencia y gestionar el chat de soporte. 
                <span className="block mt-1 font-medium text-white">Ingeniería, no rastreo.</span>
              </p>
            </div>

            <div className="flex items-center gap-4 justify-end">
              <button
                onClick={() => openLegalModal('privacidad')}
                className="text-xs text-gray-400 hover:text-white underline underline-offset-4 transition-colors"
              >
                Política
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-white text-brand-dark text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-lg"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;