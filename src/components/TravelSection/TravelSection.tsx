import {
  Clock3,
  MapPin,
  Phone,
  Navigation,
  Car,
} from "lucide-react";

import { site } from "../../config/site";
import { useLanguage } from "../../context/LanguageContext";

import "./TravelSection.css";

const content = {
  en: {
    badge: "VISIT OUR CLINIC",

    title: "Easy to Find.\nEasy to Love.",

    description:
      "Conveniently located just minutes from the Arizona border, our modern dental office welcomes patients from both the United States and Mexico.",

    address: "Address",
    hours: "Hours",
    parking: "Parking",
    border: "Border Crossing",

    parkingText: "Free parking available.",
    borderText: "Only minutes from Arizona.",

    directions: "Get Directions",
    consultation: "Free Consultation",
  },

  es: {
    badge: "VISITA NUESTRO CONSULTORIO",

    title: "Fácil de Encontrar.\nFácil de Elegir.",

    description:
      "Ubicados a solo minutos de la frontera con Arizona, recibimos pacientes de México y Estados Unidos todos los días.",

    address: "Dirección",
    hours: "Horario",
    parking: "Estacionamiento",
    border: "Frontera",

    parkingText: "Estacionamiento gratuito.",
    borderText: "A minutos de Arizona.",

    directions: "Cómo Llegar",
    consultation: "Consulta Gratuita",
  },
};

export default function TravelSection() {
  const { language } = useLanguage();

  const t = content[language];

  return (
    <section className="travel">
      <div className="container">
        <div className="travel-wrapper">

          {/* LEFT */}

          <div className="travel-content">

            <span className="travel-badge">
              {t.badge}
            </span>

            <h2>
              {t.title.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>

            <p className="travel-description">
              {t.description}
            </p>

            <div className="travel-info">

              <div className="travel-item">
                <MapPin size={20} />

                <div>
                  <strong>{t.address}</strong>

                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state}
                  </span>
                </div>
              </div>

              <div className="travel-item">
                <Clock3 size={20} />

                <div>
                  <strong>{t.hours}</strong>

                  <span>
                    {site.officeHours.mondayFriday}
                  </span>
                </div>
              </div>

              <div className="travel-item">
                <Phone size={20} />

                <div>
                  <strong>Phone</strong>

                  <span>
                    {site.phone}
                  </span>
                </div>
              </div>

              <div className="travel-item">
                <Car size={20} />

                <div>
                  <strong>{t.parking}</strong>

                  <span>
                    {t.parkingText}
                  </span>
                </div>
              </div>

              <div className="travel-item">
                <Navigation size={20} />

                <div>
                  <strong>{t.border}</strong>

                  <span>
                    {t.borderText}
                  </span>
                </div>
              </div>

            </div>

            <div className="travel-buttons">

              <a
                href={site.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="travel-btn"
              >
                {t.directions}
              </a>

              <a
                href="/contact"
                className="travel-btn-outline"
              >
                {t.consultation}
              </a>

            </div>

          </div>

          {/* MAP */}

          <div className="travel-map">

            <iframe
              src={site.googleMapsEmbed}
              title="Dra. Marlene Group"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>
      </div>
    </section>
  );
}