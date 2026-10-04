import { Compass, ShieldAlert, Target } from 'lucide-react';

export default function ProblemSection() {
  const cards = [
    {
      title: "Menos FOMO",
      subtitle: "Reconocer el impulso",
      description: "Aprendé a detectar y frenar las compras impulsivas provocadas por el ruido de las noticias o las redes sociales.",
      icon: ShieldAlert,
      benefit: "Evitá pagar precios desorbitados en plena euforia.",
    },
    {
      title: "Más contexto",
      subtitle: "Lectura de mercado",
      description: "Leé la tendencia, la liquidez y las correcciones históricas con un método ordenado, sin gráficos incomprensibles.",
      icon: Compass,
      benefit: "Entendé en qué fase del ciclo estamos parados.",
    },
    {
      title: "Plan propio",
      subtitle: "Estrategia a medida",
      description: "Definí cómo comprar, en qué plataformas seguras operar, cuánto capital destinar y qué esperar de cada escenario.",
      icon: Target,
      benefit: "Dormí tranquilo sabiendo qué vas a hacer si sube o si baja.",
    },
  ];

  return (
    <section id="problema" className="py-24 border-b border-white/8 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading and Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[#caa775] text-xs font-bold uppercase tracking-widest block">
              Comprar con criterio
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              No necesitás adivinar el futuro.
            </h2>
            <p className="text-[#a9b0b8] text-base leading-relaxed pt-2">
              Muchas personas compran Bitcoin cuando el precio ya subió, venden por miedo en la primera caída o entran sin saber cuánto riesgo pueden asumir.
            </p>
            <p className="text-[#a9b0b8] text-base leading-relaxed">
              El objetivo de las sesiones es que entiendas el proceso en profundidad y tomes decisiones autónomas y fundamentadas.
            </p>
          </div>

          {/* Right Column: 3 Pillar Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl card-grid-dark card-grid-dark-hover flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center text-[#caa775] group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-[#a9b0b8]/60">0{idx + 1}</span>
                      </div>
                      
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#caa775] mb-1">
                        {card.subtitle}
                      </div>
                      <h3 className="font-editorial text-2xl font-normal text-white mb-2 group-hover:text-[#caa775] transition-colors">
                        {card.title}
                      </h3>
                      <div className="w-8 h-px bg-white/10 mb-3" />
                      <p className="text-xs text-[#a9b0b8] leading-relaxed mb-4">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/8 text-[11px] text-white font-medium flex items-center gap-1.5">
                      <span className="text-xs text-white">✓</span>
                      <span>{card.benefit}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
