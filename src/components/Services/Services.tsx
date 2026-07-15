import { ArrowRight } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { services } from "../../data/services";

import "./Services.css";

const content = {
  en: {
    tag: "Featured Treatments",

    title: "Premium dentistry designed around your smile.",

    description:
      "Discover the treatments most requested by our patients from the United States and Mexico.",

    button: "Learn More",
  },

  es: {
    tag: "Tratamientos Destacados",

    title: "Odontología premium diseñada para tu sonrisa.",

    description:
      "Conoce los tratamientos más solicitados por nuestros pacientes de México y Estados Unidos.",

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

          <span className="services-tag">
            {t.tag}
          </span>

          <h2>{t.title}</h2>

          <p>{t.description}</p>

        </div>

        <div className="services-grid">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <article
                className="service-card"
                key={service.title.en}
              >

                <div className="service-image">

                  <div className="service-overlay">

                    <Icon
                      size={46}
                      strokeWidth={1.8}
                    />

                  </div>

                </div>

                <div className="service-content">

                  <h3>
                    {service.title[language]}
                  </h3>

                  <p>
                    {service.description[language]}
                  </p>

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