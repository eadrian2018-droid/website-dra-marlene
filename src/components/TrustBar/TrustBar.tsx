import {
  BadgeCheck,
  CreditCard,
  Shield,
  SmilePlus,
} from "lucide-react";

import "./TrustBar.css";

const items = [
  {
    icon: <BadgeCheck size={30} />,
    title: "Tratamientos Garantizados",
    text: "Materiales de alta calidad y procedimientos respaldados.",
  },
  {
    icon: <Shield size={30} />,
    title: "Tecnología Moderna",
    text: "Equipo digital para diagnósticos más precisos.",
  },
  {
    icon: <SmilePlus size={30} />,
    title: "Atención Personalizada",
    text: "Cada tratamiento es diseñado para cada paciente.",
  },
  {
    icon: <CreditCard size={30} />,
    title: "Aceptamos Pacientes USA",
    text: "Facilitamos tu visita desde Estados Unidos.",
  },
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-grid">
        {items.map((item, index) => (
          <div className="trust-card" key={index}>
            <div className="trust-icon">
              {item.icon}
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}