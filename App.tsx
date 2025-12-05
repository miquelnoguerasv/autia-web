import React, { useState, useEffect, Suspense } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import LegalModal from './components/LegalModal';
import CookieBanner from './components/CookieBanner';

// --- LAZY LOADING (Code Splitting) ---
// Cargamos bajo demanda los componentes que no son visibles inicialmente ("Below the Fold")
// Esto reduce drásticamente el Time to Interactive (TTI) y el Total Blocking Time (TBT).

const ROISimulator = React.lazy(() => import('./components/ROISimulator'));
const Services = React.lazy(() => import('./components/Services'));
const Results = React.lazy(() => import('./components/Results'));
const ArchitectureDemo = React.lazy(() => import('./components/ArchitectureDemo'));
const About = React.lazy(() => import('./components/About'));
const Process = React.lazy(() => import('./components/Process'));
const Comparison = React.lazy(() => import('./components/Comparison'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const CTA = React.lazy(() => import('./components/CTA'));
const Footer = React.lazy(() => import('./components/Footer'));

// El chat ya estaba lazy, lo mantenemos
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));

// Componente de carga ultraligero para evitar CLS (Cumulative Layout Shift) masivo
const SectionLoader = () => (
  <div className="w-full py-24 flex items-center justify-center bg-brand-dark">
    <div className="w-8 h-8 border-2 border-brand-violet border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  // Retrasar la carga del chat para priorizar LCP
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 3500); // Aumentado ligeramente para dar aire al navegador
    return () => clearTimeout(timer);
  }, []);

  const openLegalModal = (type: string) => {
    setModalType(type);
  };

  const closeLegalModal = () => {
    setModalType(null);
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-violet selection:text-white">
      <Navbar />
      <main>
        {/* 1. CRITICAL RENDERING PATH (Eager Loading) */}
        {/* Estos componentes se cargan inmediatamente para asegurar un LCP rápido */}
        <Hero />
        <Benefits />
        
        {/* 2. LAZY LOADED SECTIONS */}
        {/* Envolvemos en Suspense. El fallback evita que la app "parpadee" en blanco */}
        <Suspense fallback={<SectionLoader />}>
          
          {/* 3. Agitación del Problema */}
          <ROISimulator />
          
          {/* 4. La Solución */}
          <Services />
          
          {/* 5. La Prueba */}
          <Results />
          
          {/* 6. La Demostración Técnica */}
          <ArchitectureDemo />
          
          {/* 7. Autoridad */}
          <About />
          
          {/* 8. Metodología */}
          <Process />
          
          {/* 9. Diferenciación */}
          <Comparison />
          
          {/* 10. Confianza Social */}
          <Testimonials />
          
          {/* 11. Cierre */}
          <CTA openLegalModal={openLegalModal} />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <Footer openLegalModal={openLegalModal} />
      </Suspense>
      
      {/* Elementos Flotantes e Interactivos */}
      <CookieBanner openLegalModal={openLegalModal} />
      <LegalModal isOpen={modalType} onClose={closeLegalModal} />

      <Suspense fallback={null}>
        {showChat && <ChatWidget />}
      </Suspense>

      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;