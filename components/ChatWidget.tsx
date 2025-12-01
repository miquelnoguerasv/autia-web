
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Sparkles, Send, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallout, setShowCallout] = useState(true);
  
  // Chat Logic States
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 'welcome', 
      text: 'Hola. Soy el agente de ingeniería de autiA. ¿En qué puedo ayudarte a escalar hoy?', 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Generar un SessionID único para esta sesión de navegador
  const sessionIdRef = useRef<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generar ID aleatorio si no existe
    if (!sessionIdRef.current) {
      sessionIdRef.current = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  }, []);

  // Auto-scroll al fondo cuando llegan mensajes nuevos
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (showCallout) setShowCallout(false);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessageText = inputValue.trim();
    const currentSessionId = sessionIdRef.current;

    // 1. Añadir mensaje del usuario a la UI
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      sender: 'user'
    };
    
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // 2. Enviar al Webhook de N8N
      const response = await fetch('https://n8n-n8n.juvvro.easypanel.host/webhook/9913cb43-cbe4-4037-b8b0-bbcfa7f88cdc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: userMessageText,
          sessionId: currentSessionId
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la conexión con el agente');
      }

      // 3. Procesar respuesta de forma robusta (Manejo de JSON vs Texto vs Vacío)
      const responseText = await response.text();
      let botResponseText = '';

      if (!responseText) {
          // Si el webhook devuelve vacío (200 OK pero sin body)
          botResponseText = "Mensaje recibido. Estamos procesando tu solicitud.";
      } else {
          try {
              const data = JSON.parse(responseText);
              // N8N a veces devuelve un array o un objeto. Buscamos propiedades comunes.
              const payload = Array.isArray(data) ? data[0] : data;
              
              // Prioridad de campos esperados
              botResponseText = payload.output || payload.text || payload.message || payload.content;

              // Fallback si es un objeto pero no tiene los campos esperados
              if (!botResponseText && typeof payload === 'object') {
                  botResponseText = JSON.stringify(payload);
              } else if (!botResponseText) {
                  botResponseText = String(payload);
              }
          } catch (e) {
              // Si falla el parseo JSON, asumimos que es texto plano
              botResponseText = responseText;
          }
      }

      // Limpieza final del texto (por si acaso viene con comillas extra o es un objeto stringified feo)
      if (typeof botResponseText !== 'string') {
          botResponseText = JSON.stringify(botResponseText);
      }
      
      // Eliminar comillas dobles al principio y final si el JSON era solo un string "Hola"
      if (botResponseText.startsWith('"') && botResponseText.endsWith('"')) {
          botResponseText = botResponseText.slice(1, -1);
      }

      const newBotMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot'
      };

      setMessages((prev) => [...prev, newBotMsg]);

    } catch (error) {
      console.error('Error enviando mensaje:', error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, he tenido un problema técnico comunicándome con el servidor. Por favor intenta de nuevo.',
        sender: 'bot'
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* --- Chat Window --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[350px] h-[500px] bg-[#121623] border border-brand-violet/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="p-4 bg-brand-surface border-b border-white/5 flex items-center gap-3 shrink-0">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-500 absolute bottom-0 right-0 border border-brand-surface" />
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-brand-blue flex items-center justify-center text-white">
                    <Bot size={18} />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">autiA Assistant</h3>
                <p className="text-xs text-brand-blue font-mono">AI Engineer • Online</p>
              </div>
            </div>

            {/* Body (Messages) */}
            <div className="flex-1 p-4 bg-[#0B0F19] flex flex-col gap-4 overflow-y-auto scroll-smooth">
               {messages.map((msg) => (
                 <div 
                    key={msg.id} 
                    className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                 >
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/5 text-gray-400'}`}>
                       {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    
                    <div className={`p-3 rounded-xl text-sm leading-relaxed border max-w-[80%] ${
                      msg.sender === 'user' 
                        ? 'bg-brand-blue/10 border-brand-blue/20 text-white rounded-tr-none' 
                        : 'bg-white/5 border-white/5 text-gray-300 rounded-tl-none'
                    }`}>
                       {msg.text}
                    </div>
                 </div>
               ))}

               {/* Loading Indicator */}
               {isLoading && (
                 <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex-shrink-0 flex items-center justify-center">
                       <Bot size={16} className="text-gray-400" />
                    </div>
                    <div className="bg-white/5 p-3 rounded-r-xl rounded-bl-xl border border-white/5 flex items-center gap-2">
                       <Loader2 size={16} className="animate-spin text-brand-violet" />
                       <span className="text-xs text-gray-500 font-mono">Pensando...</span>
                    </div>
                 </div>
               )}
               <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-brand-surface border-t border-white/5 shrink-0">
                <div className="relative">
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Escribe tu duda..." 
                        className="w-full bg-black/20 border border-white/10 rounded-lg pl-4 pr-10 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-violet transition-colors disabled:opacity-50"
                        disabled={isLoading}
                    />
                    <button 
                      onClick={handleSendMessage}
                      disabled={isLoading || !inputValue.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-violet/20 text-brand-violet rounded hover:bg-brand-violet hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send size={14} />
                    </button>
                </div>
                <div className="text-[10px] text-center text-gray-600 mt-2">
                    Powered by autiA Systems Engine
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Trigger Area --- */}
      <div className="flex items-center gap-4">
        
        {/* Callout Bubble */}
        <AnimatePresence>
          {showCallout && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="hidden md:flex items-center bg-white text-brand-dark px-4 py-2 rounded-lg shadow-xl relative mr-2 cursor-pointer"
              onClick={toggleChat}
            >
              <span className="text-sm font-medium">¿Dudas sobre la implementación?</span>
              {/* Triangle Pointer */}
              <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white transform rotate-45 -translate-y-1/2" />
              {/* Close Callout X */}
              <button 
                onClick={(e) => { e.stopPropagation(); setShowCallout(false); }}
                className="ml-3 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <button
          onClick={toggleChat}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-violet to-brand-blue text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all duration-300 hover:scale-105 z-50"
          aria-label={isOpen ? "Cerrar chat" : "Abrir chat de asistente"}
        >
          {/* Pulse Ring Effect (Online Indicator) */}
          {!isOpen && (
             <span className="absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75 animate-ping duration-[2s]"></span>
          )}
          
          <div className="relative z-10 transition-transform duration-300">
             {isOpen ? (
                <X size={24} />
             ) : (
                <Bot size={28} className="group-hover:rotate-12 transition-transform" />
             )}
          </div>

          {/* Sparkle Decoration */}
          {!isOpen && (
            <motion.div 
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute -top-1 -right-1 text-yellow-300"
            >
                <Sparkles size={12} fill="currentColor" />
            </motion.div>
          )}
        </button>
      </div>

    </div>
  );
};

export default ChatWidget;
