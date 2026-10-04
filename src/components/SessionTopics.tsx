import { ShieldCheck, Landmark, HeartHandshake } from 'lucide-react';

export default function SessionTopics() {
  const topics = [
    {
      title: "Cómo Operar en Argentina",
      icon: Landmark,
      desc: "Entendé las mejores vías para pasar de pesos ARS o dólares a Bitcoin: exchanges con respaldo, comercio P2P seguro y costos reales.",
    },
    {
      title: "Planificación y Matemática",
      icon: ShieldCheck,
      desc: "Cómo armar tu estrategia de compras periódicas ajustada a tu economía mensual, con reglas claras para comprar en caídas y proteger tus ahorros.",
    },
    {
      title: "Criterio antes que emoción",
      icon: HeartHandshake,
      desc: "El mayor enemigo de quien compra Bitcoin suele ser su propia impaciencia. Con método, planificación y conocimiento, el proceso se vuelve simple y previsible.",
    },
  ];

  return (
    <section id="temario" className="py-24 border-b border-white/8 bg-[#090b0e]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#caa775] text-xs font-bold uppercase tracking-widest block mb-2">
            Contenido aplicado
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Temas centrales que trabajamos.
          </h2>
          <p className="text-[#a9b0b8] text-base mt-3">
            Cada sesión se adapta a lo que ya sabés y a lo que necesitás resolver en tu caso particular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((t, i) => {
            const Icon = t.icon;
            return (
              <div 
                key={i} 
                className="p-7 rounded-2xl card-grid-dark card-grid-dark-hover transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center text-[#caa775] group-hover:scale-105 transition-transform mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-editorial text-2xl font-normal text-white mb-2 group-hover:text-[#caa775] transition-colors">
                    {t.title}
                  </h3>
                  <div className="w-10 h-px bg-[#caa775]/40 mb-3" />
                  
                  <p className="text-sm text-[#a9b0b8] leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
