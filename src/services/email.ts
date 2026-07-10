import emailjs from "@emailjs/browser";
import type { ContactFormData } from "../types/contact";

export async function sendContactEmail(data: ContactFormData) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}