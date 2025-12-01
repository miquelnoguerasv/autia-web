import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText, Lock } from 'lucide-react';

interface LegalModalProps {
  isOpen: string | null;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const renderContent = () => {
    switch (isOpen) {
      case 'legal':
        return (
          <div className="space-y-6 text-gray-300 font-light leading-relaxed">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <FileText className="text-brand-violet" size={24} />
              <h2 className="text-2xl font-bold text-white">AVISO LEGAL Y CONDICIONES DE USO</h2>
            </div>
            
            <section>
              <h3 className="text-lg font-bold text-white mb-2">1. Datos Identificativos</h3>
              <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se reflejan los siguientes datos:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong className="text-white">Titular:</strong> Miquel Nogueras (en adelante, "autiA").</li>
                <li><strong className="text-white">Domicilio:</strong> Carrer Marià Fortuny, 4. Dosrius.</li>
                <li><strong className="text-white">N.I.F.:</strong> 54810346N.</li>
                <li><strong className="text-white">Email de contacto:</strong> contacto@agenciautia.es</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">2. Propiedad Intelectual e Industrial</h3>
              <p>Todos los contenidos del sitio web (incluyendo, sin carácter limitativo, bases de datos, imágenes, dibujos, gráficos, archivos de texto, audio, vídeo y software) son propiedad de autiA o de sus proveedores de contenidos, habiendo sido, en este último caso, objeto de licencia o cesión por parte de los mismos, y están protegidos por las normas nacionales e internacionales de propiedad intelectual e industrial.</p>
              <p className="mt-2">Queda prohibida la reproducción, distribución, comunicación pública y transformación, total o parcial, de los contenidos sin la autorización expresa de autiA.</p>
            </section>
          </div>
        );

      case 'privacidad':
        return (
          <div className="space-y-6 text-gray-300 font-light leading-relaxed">
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <Lock className="text-emerald-400" size={24} />
              <h2 className="text-2xl font-bold text-white">POLÍTICA DE PRIVACIDAD</h2>
            </div>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">1. Responsable del Tratamiento</h3>
              <p>Los datos de carácter personal que nos proporcione serán tratados por Miquel Nogueras (autiA).</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">2. Finalidad del Tratamiento</h3>
              <p>En autiA tratamos la información que nos facilitan las personas interesadas con el fin de:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Gestionar el envío de la información o propuestas comerciales que nos soliciten a través del formulario de contacto.</li>
                <li>Gestionar la reserva de citas y auditorías técnicas mediante la plataforma integrada.</li>
                <li>Enviar boletines (newsletters) o comunicaciones comerciales, en caso de haber otorgado consentimiento explícito.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">3. Legitimación</h3>
              <p>La base legal para el tratamiento de sus datos es el consentimiento. Al rellenar los formularios y marcar la casilla de aceptación, usted acepta legítimamente el tratamiento de sus datos conforme a esta política.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">4. Destinatarios de Datos (Herramientas)</h3>
              <p>Para prestar servicios estrictamente necesarios para el desarrollo de la actividad, autiA comparte datos con los siguientes prestadores bajo sus correspondientes condiciones de privacidad:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong className="text-white">Automatización:</strong> n8n (Workflow automation).</li>
                <li><strong className="text-white">Agendamiento:</strong> Cal.com, Inc. (Gestión de calendario).</li>
                <li><strong className="text-white">Hosting y Correo:</strong> Google / Vercel.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">5. Derechos del Usuario</h3>
              <p>Cualquier persona tiene derecho a obtener confirmación sobre si en autiA estamos tratando datos personales que les conciernan o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o solicitar su supresión. Para ello, puede dirigir un email a: contacto@agenciautia.es.</p>
            </section>
          </div>
        );

      case 'terminos':
        return (
          <div className="space-y-6 text-gray-300 font-light leading-relaxed">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <Shield className="text-brand-blue" size={24} />
              <h2 className="text-2xl font-bold text-white">TÉRMINOS Y CONDICIONES DE SERVICIO</h2>
            </div>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">1. Objeto</h3>
              <p>Las presentes condiciones regulan el uso del sitio web autiA, mediante el cual se ofrece información sobre servicios de ingeniería de Inteligencia Artificial y consultoría de software.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">2. Uso del Sitio Web</h3>
              <p>El usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con la Ley, el presente Aviso Legal, las buenas costumbres y el orden público. Del mismo modo, el usuario se obliga a no utilizar el sitio web con fines o efectos ilícitos o lesivos.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">3. Exclusión de Garantías y Responsabilidad</h3>
              <p>autiA no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-white mb-2">4. Modificaciones</h3>
              <p>autiA se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados.</p>
            </section>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[85vh] bg-[#0B0F19] border border-gray-800 rounded-2xl shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Actions */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Cerrar ventana"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar">
            {renderContent()}
          </div>

          {/* Footer of Modal */}
          <div className="p-6 border-t border-white/5 bg-[#0B0F19] rounded-b-2xl flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LegalModal;