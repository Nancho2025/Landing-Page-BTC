import { getWhatsAppLink } from '../constants';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import cleanBitcoinImg from '../assets/images/bitcoin_hero_clean_1790774251987.jpg';

export default function ClosingSection() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-[#0b0d10] via-[#12161b] to-[#0b0d10] border-b border-white/8">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#caa775]/10 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[#caa775] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#caa775]" />
              <span>Tu próximo paso</span>
            </div>

            {/* Heading */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
              Dejá de comprar por impulso.
            </h2>

            {/* Subtitle */}
            <p className="text-[#a9b0b8] text-base sm:text-lg leading-relaxed max-w-xl">
              Empezá a entender qué estás haciendo antes de poner tu dinero en el mercado. Diseñá un método con reglas claras y calma.
            </p>

            {/* Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[54px] px-8 rounded-[10px] btn-gold font-bold text-base tracking-tight transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-[#121417]" />
                <span>Quiero aprender a Comprar</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            <p className="text-xs text-[#717a84] pt-1">
              Coordinación rápida y directa por WhatsApp · Sin intermediarios
            </p>
          </div>

          {/* Right Column: Clean Bitcoin Coin Image with diffuse feathering into section background */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Ambient warm gold glow behind the coin */}
            <div 
              className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#caa775]/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[480px] aspect-[16/10] flex items-center justify-center">
              <img
                src={cleanBitcoinImg}
                alt="Moneda de Bitcoin dorada con enfoque nítido"
                className="w-full h-full object-cover object-center pointer-events-none select-none contrast-[1.05] brightness-[1.02] drop-shadow-2xl"
                style={{
                  maskImage: 'radial-gradient(ellipse 49% 47% at 50% 50%, rgba(0,0,0,1) 64%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.2) 89%, transparent 98%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 49% 47% at 50% 50%, rgba(0,0,0,1) 64%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.2) 89%, transparent 98%)',
                }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
