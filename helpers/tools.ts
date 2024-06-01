import { WPP_API_FBCLID, WPP_API_PHONE } from "@/helpers/env";

/**
 * Builds a WhatsApp link with the given phone number and message.
 * @param phone - The phone number to send the message to.
 * @param message - The message to be sent.
 * @returns The generated WhatsApp link.
 */
export function buildWhatsappLink(message: string) {
  const textEncoded = encodeURIComponent(message);
  return `https://wa.me/${WPP_API_PHONE}?text=${textEncoded}&app_absent=0&fbclid=${WPP_API_FBCLID}`;
}
