export const WHATSAPP_PHONE = "5493424465925";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const getWhatsAppLink = (customText?: string) => {
  const text = customText || "Hola, quiero aprender a comprar Bitcoin con CuandoSeCompraBitcoin y conocer las sesiones.";
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
};
