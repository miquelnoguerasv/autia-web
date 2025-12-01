import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar el estilo de la barra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * ESTA FUNCIÓN ES LA CLAVE PARA ARREGLAR EL ERROR.
   * Intercepta el evento de navegación, previene que el navegador intente cambiar la URL
   * (lo que causa el error de conexión en el sandbox) y realiza el scroll manualmente.
   */
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // 1. Detenemos la navegación por defecto
    const element = document.getElementById(id); // 2. Buscamos la sección
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // 3. Hacemos scroll suave
      setIsMobileMenuOpen(false); // 4. Cerramos menú móvil si está abierto
    }
  };

  const navLinks = [
    { name: 'Soluciones', id: 'soluciones' },
    { name: 'Resultados', id: 'resultados' },
    { name: 'Método', id: 'metodo' },
    { name: 'Nosotros', id: 'nosotros' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center" aria-label="Navegación principal">
        
        {/* LOGO -> Scroll al Inicio */}
        <a 
          href="#inicio" 
          onClick={(e) => scrollToSection(e, 'inicio')}
          className="flex items-center space-x-2 group z-50 cursor-pointer"
          aria-label="Volver al inicio - autiA Systems"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-brand-blue flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <Terminal size={18} strokeWidth={3} />
          </div>
          <span className="text-xl font-sans font-bold tracking-tight text-white group-hover:text-gray-100 transition-colors">
            autiA<span className="text-brand-blue">.</span>
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
                >
                  {link.name}
                  {/* Línea animada en hover */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          
          {/* CTA BUTTON -> Scroll a Contacto */}
          <a
            href="#contacto"
            onClick={(e) => scrollToSection(e, 'contacto')}
            className="relative px-6 py-2.5 text-sm font-bold text-white rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] cursor-pointer"
            role="button"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet to-brand-blue opacity-100" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              Agendar Auditoría
            </span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden pt-24 pb-8 px-6 flex flex-col space-y-4 h-screen sm:h-auto"
            >
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={`#${link.id}`}
                      className="block text-lg font-medium text-gray-300 hover:text-white border-b border-white/5 pb-2 cursor-pointer"
                      onClick={(e) => scrollToSection(e, link.id)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-4 w-full py-4 text-center font-bold text-white bg-gradient-to-r from-brand-violet to-brand-blue rounded-lg shadow-lg cursor-pointer"
                onClick={(e) => scrollToSection(e, 'contacto')}
              >
                Agendar Auditoría
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;