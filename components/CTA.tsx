import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Send, CheckCircle2, MessageSquare, Loader2, AlertCircle } from 'lucide-react';

interface CTAProps {
  openLegalModal: (type: string) => void;
}

const CTA: React.FC<CTAProps> = ({ openLegalModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    details: ''
  });

  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Regex simple para validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación Completa: Campos llenos + Email Válido + Privacy Check
  const isValid = 
    formData.name.trim() !== '' && 
    emailRegex.test(formData.email) && 
    formData.interest.trim() !== '' && 
    formData.details.trim() !== '' &&
    acceptedPrivacy;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  // Diccionario para mapear los valores técnicos a textos legibles
  const interestMap: Record<string, string> = {
    'saas': 'Sistemas SaaS a Medida',
    'agents': 'Agentes IA Autónomos',
    'audit': 'Auditoría Técnica',
    'other': 'Otro'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus('submitting');

    try {
      // Usamos el mapa para enviar el texto completo del interés
      const fullInterestLabel = interestMap[formData.interest] || formData.interest;

      const payload = {
        nombrecompleto: formData.name,
        email: formData.email,
        empresa: formData.company.trim() === '' ? 'N/A' : formData.company,
        interes: fullInterestLabel,
        detalles: formData.details
      };

      // FIX: Usamos 'text/plain' para evitar CORS Preflight
      const response = await fetch('https://n8n-n8n.juvvro.easypanel.host/webhook/d02ef9d4-0ada-4b1a-a8d2-e436a8275732', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', 
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        console.error('Error en respuesta del servidor:', response.status, response.statusText);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-[#0B0F19]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Agenda Abierta Q4 2025
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight"
          >
            Empieza a escalar tu negocio con <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-blue">IA Real</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg font-light leading-relaxed"
          >
            Agenda una consultoría gratuita para auditar tus procesos o escríbenos para recibir un presupuesto de ingeniería a medida.
          </motion.p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-brand-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Recibida!</h3>
                  <p className="text-gray-400 max-w-md mb-8">
                    Hemos recibido tus datos correctamente. Nuestro equipo de ingeniería analizará tu caso y te contactará en menos de 24 horas.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-brand-blue hover:text-white transition-colors text-sm font-medium"
                  >
                    Enviar otra solicitud
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400">Nombre Completo <span className="text-brand-violet">*</span></label>
                      <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Carlos Ruiz" 
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-violet transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Corporativo <span className="text-brand-violet">*</span></label>
                      <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nombre@empresa.com" 
                        className={`w-full bg-[#0B0F19] border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-violet transition-colors ${
                          formData.email && !emailRegex.test(formData.email) ? 'border-red-500/50' : 'border-white/10'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-400">Empresa / Sitio Web (Opcional)</label>
                    <input 
                      type="text" 
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ej. Acme Corp" 
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-violet transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-gray-400">Estoy interesado en... <span className="text-brand-violet">*</span></label>
                    <div className="relative">
                      <select 
                        id="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-violet appearance-none cursor-pointer transition-colors"
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="saas">Sistemas SaaS a Medida</option>
                        <option value="agents">Agentes IA Autónomos</option>
                        <option value="audit">Auditoría Técnica</option>
                        <option value="other">Otro</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="text-sm font-medium text-gray-400">Detalles del Proyecto <span className="text-brand-violet">*</span></label>
                    <textarea 
                      id="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Cuéntanos qué necesitas automatizar (imprescindible para valorar)..." 
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-violet transition-colors resize-none"
                    />
                  </div>

                  {/* RGPD CHECKBOX */}
                  <div className="flex items-start gap-3 pt-2">
                    <div className="relative flex items-center h-5">
                      <input
                        id="privacy"
                        type="checkbox"
                        checked={acceptedPrivacy}
                        onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                        className="w-4 h-4 rounded border-white/20 bg-[#0B0F19] text-brand-violet focus:ring-brand-violet focus:ring-offset-0 cursor-pointer accent-brand-violet"
                      />
                    </div>
                    <label htmlFor="privacy" className="text-xs text-gray-500 leading-tight">
                      He leído y acepto la 
                      <button 
                        type="button"
                        onClick={() => openLegalModal('privacidad')}
                        className="text-brand-blue hover:underline hover:text-brand-violet transition-colors mx-1"
                      >
                        Política de Privacidad
                      </button> 
                      y consiento el tratamiento de mis datos para recibir la propuesta solicitada.
                    </label>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                      <AlertCircle size={16} />
                      Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo o contacta a hola@autia.ai
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={!isValid || status === 'submitting'}
                    className={`w-full group relative overflow-hidden bg-white text-brand-dark font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all transform 
                      ${isValid && status !== 'submitting' 
                        ? 'hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.01] cursor-pointer opacity-100' 
                        : 'opacity-50 cursor-not-allowed grayscale'}
                    `}
                  >
                    {status === 'submitting' ? (
                       <div className="flex items-center justify-center gap-2">
                          <Loader2 size={18} className="animate-spin text-brand-dark" />
                          <span>Enviando datos...</span>
                       </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center justify-center gap-2">
                          Solicitar Propuesta
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </>
                    )}
                  </button>
                  
                  {!isValid && (
                    <p className="text-center text-xs text-gray-600 transition-opacity duration-300">
                      Rellena todos los campos obligatorios y acepta la política de privacidad.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Direct Booking */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            {/* Calendly Card */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-b from-brand-violet/30 to-brand-blue/30 h-full">
              <div className="absolute inset-0 bg-brand-violet/20 blur-xl opacity-50" />
              <div className="relative bg-[#0B0F19] rounded-xl p-8 h-full flex flex-col border border-white/5">
                
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-violet mb-6 border border-brand-violet/20">
                  <Calendar size={24} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">¿Prefieres hablar ya?</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Ahórrate el email. Agenda una videollamada de 15 minutos directamente con nuestro equipo de ingeniería para validar tu idea.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span className="text-sm">Análisis de viabilidad técnica</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span className="text-sm">Estimación de costes y ROI</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span className="text-sm">Roadmap de implementación</span>
                  </li>
                </ul>

                <a 
                  href="https://cal.com/agencia-autia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto block w-full bg-gradient-to-r from-brand-violet to-brand-blue text-white font-bold py-4 rounded-lg text-center shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 hover:scale-[1.02] transition-all"
                >
                  Agendar en Cal.com
                </a>

                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                  <MessageSquare size={12} />
                  Sin compromisos de venta agresiva.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;