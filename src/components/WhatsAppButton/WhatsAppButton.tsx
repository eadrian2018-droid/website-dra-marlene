import { MessageCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const { language } = useLanguage();

  const phoneNumber = "526532080587";

  const message =
    language === "en"
      ? encodeURIComponent(
          "Hello! I would like to schedule an appointment with Dra. Marlene Group."
        )
      : encodeURIComponent(
          "Hola, me gustaría agendar una cita con Dra. Marlene Group."
        );

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <span className="whatsapp-tooltip">
        {language === "en"
          ? "Chat on WhatsApp"
          : "Agenda tu cita"}
      </span>

      <MessageCircle size={30} strokeWidth={2.3} />
    </a>
  );
}