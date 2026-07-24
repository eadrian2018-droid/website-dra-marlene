import emailjs from "@emailjs/browser";

import type { ContactFormData } from "../hooks/useContactForm";

export async function sendContactEmail(
  data: ContactFormData
) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,

      from_email: data.email,

      phone: data.phone,

      contact_method: data.contactMethod,

      facebook_profile: data.facebookProfile,

      treatment: data.treatment,

      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}