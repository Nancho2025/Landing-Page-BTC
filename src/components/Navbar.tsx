import { useState } from 'react';
import { getWhatsAppLink } from '../constants';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0b0d10]/85 backdrop-blur-md border-b border-white/8 transition-all">
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 h-[72px] flex items-center justify-between gap-6">
        <a 
          href="#inicio" 
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:opacity-90 transition inline-flex items-baseline font-editorial"
        >
          <span>CuandoSeCompra</span>
          <span className="text-[#caa775] font-bold">Bitcoin</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#a9b0b8]">
          <a href="#problema" className="hover:text-white transition-colors">
            Filosofía
          </a>
          <a href="#metodo" className="hover:text-white transition-colors">
            El método
          </a>
          <a href="#temario" className="hover:text-white transition-colors">
            Qué aprenderás
          </a>
        </div>

        {/* CTA Button with button gold gradient matching reference */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold px-4 sm:px-5 py-2 sm:py-2.5 rounded-[10px] text-xs sm:text-sm font-bold tracking-tight transform active:scale-95"
          >
            <span>Contacto</span>
            <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline-block stroke-[2.5]" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#a9b0b8] hover:text-white hover:bg-white/5 transition"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12161b] border-b border-white/10 px-6 py-5 flex flex-col gap-4 text-base font-medium text-[#a9b0b8] animate-in fade-in duration-150">
          <a
            href="#problema"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white transition py-1"
          >
            Filosofía
          </a>
          <a
            href="#metodo"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white transition py-1"
          >
            El método
          </a>
          <a
            href="#temario"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white transition py-1"
          >
            Qué aprenderás
          </a>
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 btn-gold py-3 rounded-[10px] font-bold text-sm"
            >
              Contacto
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
