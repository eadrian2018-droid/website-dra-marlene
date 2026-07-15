import { useLanguage } from "../../context/LanguageContext";
import { memberships } from "../../data/memberships";

import "./Memberships.css";

const content = {
  en: {
    tag: "Professional Credentials",

    title: "Committed to Excellence in Modern Dentistry",

    description:
      "Professional affiliations and continuing education reflect our commitment to providing modern, ethical and high-quality dental care.",
  },

  es: {
    tag: "Credenciales Profesionales",

    title: "Comprometidos con la Excelencia en Odontología",

    description:
      "Las afiliaciones profesionales y la educación continua reflejan nuestro compromiso con una odontología moderna, ética y de alta calidad.",
  },
};

export default function Memberships() {
  const { language } = useLanguage();

  const t = content[language];

  return (
    <section
      className="memberships section"
      id="memberships"
    >
      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            {t.tag}
          </span>

          <h2>{t.title}</h2>

          <p>{t.description}</p>

        </div>

        <div className="memberships-grid">

          {memberships.map((item) => {

            const Icon = item.icon;

            return (

              <article
                className="membership-card"
                key={item.title.en}
              >

                <div className="membership-icon">

                  <Icon size={42} />

                </div>

                <h3>
                  {item.title[language]}
                </h3>

                <h4>
                  {item.subtitle[language]}
                </h4>

                <p>
                  {item.description[language]}
                </p>

              </article>

            );

          })}

        </div>

      </div>
    </section>
  );
}