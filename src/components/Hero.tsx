import { getWhatsAppLink } from '../constants';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-24 overflow-hidden border-b border-white/6">
      {/* Background glow effects */}
      <div 
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#caa775]/8 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#caa775]/6 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Editorial Heading */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08]">
              Aprendé a comprar Bitcoin{' '}
              <span className="italic font-display-serif text-[#caa775] underline decoration-[#caa775]/30 underline-offset-8">
                sin perseguir el precio.
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#a9b0b8] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Sesiones individuales o de hasta dos personas para entender el mercado, evitar el FOMO y construir un plan de compra propio con tranquilidad y criterio.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[50px] px-7 rounded-[10px] btn-gold font-extrabold text-sm sm:text-base tracking-tight transform active:scale-95"
              >
                <span>Quiero aprender a Comprar</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 min-h-[50px] px-6 rounded-[10px] border border-[#2a333d] hover:border-[#a9b0b8]/40 hover:bg-white/[0.03] text-[#f6f4ef] font-semibold text-sm sm:text-base transition"
              >
                <span>Conocé el método</span>
                <ChevronDown className="w-4 h-4 text-[#a9b0b8]" />
              </a>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-4 border-t border-white/6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#a9b0b8]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>100% Educativo e independiente</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Para inversionistas principiantes e intermedios</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Bitcoin Chart Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[560px] group">
              {/* Subtle ambient gold glow behind image */}
              <div 
                className="absolute -inset-3 rounded-3xl bg-radial from-[#caa775]/20 via-[#caa775]/5 to-transparent blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              
              <div className="relative rounded-3xl card-grid-dark p-1.5 sm:p-2 overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-[#caa775]/40">
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center">
                  <HeroVisual />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
