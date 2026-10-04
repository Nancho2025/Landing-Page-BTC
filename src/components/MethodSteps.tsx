import { MessageSquare, Video, FileCheck2 } from 'lucide-react';

export default function MethodSteps() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico inicial",
      icon: MessageSquare,
      summary: "Revisamos qué sabés, qué hiciste hasta ahora y qué querés aprender.",
      details: [
        "Evaluación de tu perfil y tolerancia al riesgo.",
        "Revisión de dudas concretas y errores previos.",
        "Definición de objetivos a corto, mediano y largo plazo.",
      ],
    },
    {
      num: "02",
      title: "Sesión personalizada 1 a 1",
      icon: Video,
      summary: "Trabajamos conceptos, gráficos y escenarios de compra con lenguaje claro y directo.",
      details: [
        "Cómo comprar con criterio y sin FOMO.",
        "Cómo comprar en los mejores momentos del mercado. (Estrategia Exclusiva)",
        "Cómo y cuándo vender en los mejores momentos del mercado. (Estrategia Exclusiva)",
      ],
    },
    {
      num: "03",
      title: "Plan y reglas de seguimiento",
      icon: FileCheck2,
      summary: "Te llevás reglas simples para actuar con menos improvisación y revisar tu proceso.",
      details: [
        "Plan claro para tus compras periódicas.",
        "Estrategia de qué hacer ante caídas abruptas o subas eufóricas.",
        "Canal abierto para resolver dudas post-sesión.",
      ],
    },
  ];

  return (
    <section id="metodo" className="py-24 border-b border-white/8 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-5 space-y-5 sticky lg:top-28">
            <span className="text-[#caa775] text-xs font-bold uppercase tracking-widest block">
              Cómo funciona
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Un acompañamiento hecho para tu situación.
            </h2>
            <p className="text-[#a9b0b8] text-base leading-relaxed">
              No es una señal de compra ni una promesa de rentabilidad. Es educación aplicada a tus preguntas, tu experiencia y tu tolerancia al riesgo.
            </p>
          </div>

          {/* Right Column: Steps Cards matching reference style */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.num} 
                  className="p-6 sm:p-7 rounded-2xl card-grid-dark card-grid-dark-hover relative overflow-hidden group"
                >
                  <div className="text-[11px] font-mono mb-2">
                    <span className="text-[#a9b0b8]/70 tracking-widest uppercase text-[10px]">PASO {step.num}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white group-hover:text-[#caa775] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <div className="w-12 h-px bg-[#caa775]/50 mb-3" />

                  <p className="text-sm text-[#a9b0b8] leading-relaxed mb-5 font-normal">
                    {step.summary}
                  </p>

                  <div className="space-y-2.5 pt-3 border-t border-white/8">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-baseline gap-3 text-xs sm:text-sm text-[#cbd5e1]">
                        <span className="font-mono text-[#caa775] text-xs shrink-0">0{idx + 1}</span>
                        <span className="text-[#717a84] select-none font-mono">——</span>
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
