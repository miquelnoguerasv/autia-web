import React from 'react';
import { Terminal, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  openLegalModal: (type: string) => void;
}

const Footer: React.FC<FooterProps> = ({ openLegalModal }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-16 border-t border-white/5 text-sm relative z-10" aria-label="Pie de página">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-brand-blue flex items-center justify-center text-white shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                <Terminal size={18} strokeWidth={3} aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">autiA<span className="text-brand-blue">.</span></span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Ingeniería de sistemas autónomos para empresas que lideran el futuro.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/miquel-nogueras-0bb960379/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visitar nuestro perfil de LinkedIn" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-violet hover:text-white transition-all"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
              <a 
                href="https://x.com/agencia_autiA" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visitar nuestro perfil de Twitter" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all"
              >
                <Twitter size={16} aria-hidden="true" />
              </a>
              <a 
                href="https://www.instagram.com/autia.es/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visitar nuestro perfil de Instagram" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <nav aria-label="Enlaces rápidos">
            <h4 className="text-white font-bold mb-6">Explorar</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#soluciones" onClick={(e) => scrollToSection(e, 'soluciones')} className="hover:text-brand-violet transition-colors cursor-pointer">Sistemas SaaS</a></li>
              <li><a href="#metodo" onClick={(e) => scrollToSection(e, 'metodo')} className="hover:text-brand-violet transition-colors cursor-pointer">Agentes IA</a></li>
              <li><a href="#resultados" onClick={(e) => scrollToSection(e, 'resultados')} className="hover:text-brand-violet transition-colors cursor-pointer">Casos de Éxito</a></li>
              <li><a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="hover:text-brand-violet transition-colors cursor-pointer">Consultoría</a></li>
            </ul>
          </nav>

          {/* Column 3: Legal */}
          <nav aria-label="Enlaces legales">
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <button 
                  onClick={() => openLegalModal('privacidad')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLegalModal('terminos')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Términos de Servicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLegalModal('legal')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Aviso Legal
                </button>
              </li>
            </ul>
          </nav>

           {/* Column 4: Contact */}
           <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-blue" aria-hidden="true" />
                <a href="mailto:contacto@agenciautia.es" aria-label="Enviar un correo electrónico a contacto@agenciautia.es" className="hover:text-white transition-colors">contacto@agenciautia.es</a>
              </li>
              <li>
                <span className="block text-xs text-gray-600 uppercase tracking-widest mt-4 mb-2">Sede Central</span>
                <span>Vía Europa<br/>Mataró, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-center md:text-left">
            Desarrollado con arquitectura propia de autiA &copy; 2025. Ingeniería Española <span className="inline-block ml-1 text-lg" aria-hidden="true">🇪🇸</span>
          </p>
          <p className="text-gray-700 text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            Sistemas Operativos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;