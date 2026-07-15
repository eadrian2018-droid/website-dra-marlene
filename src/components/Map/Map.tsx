import {
  Clock,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../config/site";

import "./Map.css";

export default function Map() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          tag: "Location",

          title: "Visit Our Clinic",

          description:
            "Conveniently located just minutes from the Arizona border. Easy access for patients traveling from the United States.",

          directions: "Open in Google Maps",

          hours: "Office Hours",

          nearBorder: "Only minutes from Arizona",
        }
      : {
          tag: "Ubicación",

          title: "Visita Nuestro Consultorio",

          description:
            "Nos encontramos a pocos minutos de la frontera con Arizona, con fácil acceso para pacientes de México y Estados Unidos.",

          directions: "Abrir en Google Maps",

          hours: "Horario",

          nearBorder: "A minutos de Arizona",
        };

  return (
    <section className="map section" id="location">
      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            {t.tag}
          </span>

          <h2>{t.title}</h2>

          <p>{t.description}</p>

        </div>

        <div className="map-container">

          <iframe
            title={site.clinicName}
            src="https://www.google.com/maps?q=San+Luis+Rio+Colorado,+Sonora&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

        <div className="map-info">

          <div className="map-card">

            <MapPin size={22} />

            <div>

              <h3>{site.clinicName}</h3>

              <p>
                {site.address.street}
                <br />
                {site.address.neighborhood}
                <br />
                {site.address.city}, {site.address.state}
              </p>

            </div>

          </div>

          <div className="map-card">

            <Phone size={22} />

            <div>

              <h3>{site.phone}</h3>

              <p>{t.nearBorder}</p>

            </div>

          </div>

          <div className="map-card">

            <Clock size={22} />

            <div>

              <h3>{t.hours}</h3>

              <p>
                {site.officeHours.mondayFriday}
                <br />
                {site.officeHours.saturday}
              </p>

            </div>

          </div>

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <a
            href={site.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            <Navigation
              size={18}
              style={{ marginRight: 8 }}
            />

            {t.directions}

          </a>

        </div>

      </div>
    </section>
  );
}