import React, { useState, useEffect, Suspense } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Results from './components/Results';
import About from './components/About';
import Process from './components/Process';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

// Lazy load del ChatWidget para no bloquear el Main Thread inicial
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  // Retrasar la carga del chat 3 segundos para priorizar LCP y TTI
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 3000);
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
        <Hero />
        <Benefits />
        <Services />
        <Results />
        <About />
        <Process />
        <Comparison />
        <Testimonials />
        {/* Pasamos la función para abrir el modal de privacidad desde el checkbox */}
        <CTA openLegalModal={openLegalModal} />
      </main>
      
      {/* Pasamos la función para abrir modales desde el footer */}
      <Footer openLegalModal={openLegalModal} />
      
      {/* Modal Legal Global */}
      <LegalModal isOpen={modalType} onClose={closeLegalModal} />

      {/* Suspense fallback nulo porque el chat es flotante y no queremos layout shift */}
      <Suspense fallback={null}>
        {showChat && <ChatWidget />}
      </Suspense>

      <Analytics />
    </div>
  );
};

export default App;