import { getWhatsAppLink, WHATSAPP_PHONE } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#080a0c] text-[#a9b0b8] text-xs border-t border-white/6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand and Copyright */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-editorial text-base text-white font-bold inline-flex items-baseline justify-center md:justify-start">
            <span>CuandoSeCompra</span>
            <span className="text-[#caa775] font-bold">Bitcoin</span>
          </div>
          <p className="text-[#717a84] text-xs">
            © 2026 CuandoSeCompraBitcoin · Educación sobre Bitcoin. La información es puramente educativa y no constituye asesoramiento financiero ni recomendación de inversión.
          </p>
        </div>

        {/* Quick links & contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#a9b0b8]">
          <a href="#inicio" className="hover:text-white transition">
            Inicio
          </a>
          <a href="#problema" className="hover:text-white transition">
            Filosofía
          </a>
          <a href="#metodo" className="hover:text-white transition">
            Método
          </a>
          <a href="#faq" className="hover:text-white transition">
            Preguntas frecuentes
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#caa775] hover:underline font-bold"
          >
            WhatsApp (+{WHATSAPP_PHONE})
          </a>
        </div>

      </div>
    </footer>
  );
}
