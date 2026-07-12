import {
  ArrowRight,
  Crown,
  Gem,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import "./Services.css";

const content = {
  en: {
    tag: "Featured Treatments",

    title: "Premium dentistry designed around your smile.",

    description:
      "Discover the treatments most requested by our patients from the United States and Mexico.",

    treatments: [
      {
        icon: Stethoscope,
        badge: "Most Popular",
        title: "Dental Implants",
        description:
          "Replace missing teeth with natural-looking, long-lasting dental implants.",
      },

      {
        icon: Sparkles,
        badge: "Smile Design",
        title: "Porcelain Veneers",
        description:
          "Transform your smile with beautiful, natural-looking porcelain veneers.",
      },

      {
        icon: Crown,
        badge: "",
        title: "Zirconia Crowns",
        description:
          "Restore damaged teeth using premium zirconia restorations.",
      },

      {
        icon: Gem,
        badge: "",
        title: "Smile Makeovers",
        description:
          "Complete smile transformations tailored to your facial features.",
      },

      {
        icon: Syringe,
        badge: "",
        title: "Root Canal Therapy",
        description:
          "Save infected teeth with modern, comfortable endodontic treatment.",
      },

      {
        icon: ShieldPlus,
        badge: "",
        title: "Emergency Dentistry",
        description:
          "Same-day emergency dental care when you need it most.",
      },
    ],

    button: "Learn More",
  },

  es: {
    tag: "Tratamientos Destacados",

    title: "Odontología premium diseñada para tu sonrisa.",

    description:
      "Conoce los tratamientos más solicitados por nuestros pacientes de México y Estados Unidos.",

    treatments: [
      {
        icon: Stethoscope,
        badge: "Más solicitado",
        title: "Implantes Dentales",
        description:
          "Recupera dientes perdidos mediante implantes duraderos y de apariencia natural.",
      },

      {
        icon: Sparkles,
        badge: "Diseño de Sonrisa",
        title: "Carillas de Porcelana",
        description:
          "Transforma tu sonrisa con carillas estéticas de aspecto completamente natural.",
      },

      {
        icon: Crown,
        badge: "",
        title: "Coronas de Zirconia",
        description:
          "Restaura dientes dañados con coronas resistentes y altamente estéticas.",
      },

      {
        icon: Gem,
        badge: "",
        title: "Diseño de Sonrisa",
        description:
          "Transformaciones completas para lograr una sonrisa armónica y natural.",
      },

      {
        icon: Syringe,
        badge: "",
        title: "Endodoncia",
        description:
          "Salvamos dientes infectados mediante tratamientos modernos y cómodos.",
      },

      {
        icon: ShieldPlus,
        badge: "",
        title: "Urgencias Dentales",
        description:
          "Atención inmediata para dolor, fracturas y emergencias dentales.",
      },
    ],

    button: "Más información",
  },
};

export default function Services() {
  const { language } = useLanguage();

  const t = content[language];

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="services-tag">{t.tag}</span>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="services-grid">
          {t.treatments.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="service-card"
                key={item.title}
              >
                {item.badge && (
                  <span className="service-badge">
                    {item.badge}
                  </span>
                )}

                <div className="service-image">
                  <div className="service-overlay">
                    <Icon size={46} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="service-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button
                    type="button"
                    className="service-button"
                  >
                    {t.button}

                    <ArrowRight size={17} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}