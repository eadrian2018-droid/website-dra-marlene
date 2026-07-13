import {
  BadgeCheck,
  CreditCard,
  Shield,
  SmilePlus,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import "./TrustBar.css";

const content = {
  en: [
    {
      icon: BadgeCheck,
      title: "High-Quality Dental Care",
      text: "Professional treatments using trusted materials and modern clinical protocols.",
    },
    {
      icon: Shield,
      title: "Modern Technology",
      text: "Digital equipment for accurate diagnoses and comfortable treatment experiences.",
    },
    {
      icon: SmilePlus,
      title: "Personalized Care",
      text: "Every treatment plan is carefully designed around your individual needs.",
    },
    {
      icon: CreditCard,
      title: "U.S. Patients Welcome",
      text: "Conveniently located just minutes from the Arizona border.",
    },
  ],

  es: [
    {
      icon: BadgeCheck,
      title: "Atención Dental de Calidad",
      text: "Tratamientos profesionales utilizando materiales confiables y protocolos modernos.",
    },
    {
      icon: Shield,
      title: "Tecnología Moderna",
      text: "Equipo digital para diagnósticos precisos y tratamientos más cómodos.",
    },
    {
      icon: SmilePlus,
      title: "Atención Personalizada",
      text: "Cada tratamiento es diseñado específicamente para las necesidades de cada paciente.",
    },
    {
      icon: CreditCard,
      title: "Pacientes de EE. UU.",
      text: "Ubicados a minutos de la frontera con Arizona para tu mayor comodidad.",
    },
  ],
};

export default function TrustBar() {
  const { language } = useLanguage();

  const items = content[language];

  return (
    <section className="trust-bar">
      <div className="container trust-grid">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              className="trust-card"
              key={item.title}
            >
              <div className="trust-icon">
                <Icon size={30} />
              </div>

              <div>
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}