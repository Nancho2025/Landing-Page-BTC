import { useState } from 'react';
import { getWhatsAppLink } from '../constants';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  whatsappPrompt?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Necesito tener experiencia previa?",
    answer: "No, en absoluto. El servicio está pensado especialmente para principiantes y también para quienes ya compraron alguna vez pero sintieron que lo hicieron a ciegas o sin un plan.",
    whatsappPrompt: "Hola, no tengo experiencia previa en Bitcoin y me gustaría empezar de cero con una sesión.",
  },
  {
    question: "¿Me van a decir exactamente cuándo comprar o vender?",
    answer: "El foco es que aprendas a analizar y decidir por tu cuenta. No se dan señales mágicas ni promesas de rentabilidad a corto plazo. Te enseñamos a entender el ciclo para que tengas criterio propio y no dependas de nadie.",
    whatsappPrompt: "Hola, quiero aprender el método para tomar mis propias decisiones de compra en Bitcoin.",
  },
  {
    question: "¿Cómo es el formato de la sesión y cuánto dura?",
    answer: "Cada sesión es personalizada y presencial. Generalmente duran entre 90 y 120 minutos cada una. Con tiempo para entrenamiento, práctica y todas tus preguntas.",
    whatsappPrompt: "Hola, ¿qué duración y días disponibles tienen las sesiones?",
  },
  {
    question: "¿Cómo solicito información y coordino fecha?",
    answer: "Escribí directamente por WhatsApp. Te contamos los horarios disponibles de la semana, resolvemos dudas previas y reservamos tu espacio.",
    whatsappPrompt: "Hola, quiero solicitar información y coordinar una sesión personalizada con CuandoSeCompraBitcoin.",
  },
  {
    question: "¿Por qué no hay testimonios ni reseñas?",
    answer: "Porque no revelamos ningún dato de nadie. Nuestro servicio es absolutamente reservado.",
    whatsappPrompt: "Hola, me interesa saber más sobre la confidencialidad de las sesiones de CuandoSeCompraBitcoin.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-b border-white/8 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-[#caa775] text-xs font-bold uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Preguntas frecuentes</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Antes de dar el primer paso.
            </h2>
            <p className="text-[#a9b0b8] text-base leading-relaxed">
              La claridad y la transparencia son la base de este espacio. Si tenés alguna pregunta adicional que no figure aquí, escribime directo y te respondo.
            </p>

            <div className="pt-4">
              <a
                href={getWhatsAppLink("Hola, tengo una consulta antes de reservar la sesión con CuandoSeCompraBitcoin.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#caa775] hover:text-[#d6b887] font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>¿Tenés otra duda? Escribinos directo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 divide-y divide-[#2a333d] border-y border-[#2a333d]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left text-base sm:text-lg font-bold text-white hover:text-[#caa775] transition-colors gap-4"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#a9b0b8] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#caa775]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-3 text-sm sm:text-base text-[#a9b0b8] leading-relaxed animate-in fade-in duration-200">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
