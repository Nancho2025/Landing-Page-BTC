import { useState } from 'react';
import { getWhatsAppLink } from '../constants';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex items-end flex-col gap-2">
      {/* Optional dismissible tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 card-grid-dark text-[#f6f4ef] px-3.5 py-2 rounded-xl text-xs font-medium animate-in fade-in slide-in-from-bottom-2">
          <span>¿Dudas sobre las sesiones? Escribinos por WhatsApp</span>
          <button 
            type="button" 
            onClick={() => setShowTooltip(false)}
            className="text-[#a9b0b8] hover:text-white ml-1 p-0.5"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a CuandoSeCompraBitcoin"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition transform hover:scale-105 active:scale-95 group"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366] group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
