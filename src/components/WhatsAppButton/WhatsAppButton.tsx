import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "52653XXXXXXX";

  const message = encodeURIComponent(
    "Hola, me gustaría agendar una cita con Dra. Marlene Group."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <span className="whatsapp-tooltip">
        Agenda tu cita
      </span>

      <MessageCircle size={30} />
    </a>
  );
}