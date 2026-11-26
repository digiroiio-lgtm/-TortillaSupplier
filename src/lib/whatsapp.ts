// Single source of truth for the WhatsApp contact. Every WhatsApp link on the
// site (floating button, footer, CTAs, contact page, blog, form) uses these,
// so a number or message change is a one-line edit.

export const WHATSAPP_NUMBER = '905385719506';
export const WHATSAPP_DISPLAY = '+90 538 571 95 06';
export const WHATSAPP_MESSAGE = "TortillaSupplier.com'dan talep yolluyorum.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE).replace(/'/g, '%27')}`;
