import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../config/site";

import "./Footer.css";

export default function Footer() {
  const { language } = useLanguage();

  const year = new Date().getFullYear();

  const t =
    language === "en"
      ? {
          description:
            "Modern dentistry, advanced technology and personalized care for patients from the United States and Mexico.",

          navigation: "Navigation",

          home: "Home",

          services: "Treatments",

          about: "Meet Dr. Marlene",

          testimonials: "Reviews",

          contact: "Contact",

          contactTitle: "Contact",

          maps: "View on Google Maps",

          rights: "All Rights Reserved.",
        }
      : {
          description:
            "Odontología moderna, tecnología avanzada y atención personalizada para pacientes de México y Estados Unidos.",

          navigation: "Navegación",

          home: "Inicio",

          services: "Tratamientos",

          about: "Conoce a la Dra. Marlene",

          testimonials: "Reseñas",

          contact: "Contacto",

          contactTitle: "Contacto",

          maps: "Ver en Google Maps",

          rights: "Todos los derechos reservados.",
        };

  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-brand">

          <h2>{site.clinicName}</h2>

          <p>{t.description}</p>

          <div className="footer-social">

            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h3>{t.navigation}</h3>

          <a href="#home">{t.home}</a>

          <a href="#services">{t.services}</a>

          <a href="#about">{t.about}</a>

          <a href="#testimonials">{t.testimonials}</a>

          <a href="#contact">{t.contact}</a>

        </div>

        <div className="footer-contact">

          <h3>{t.contactTitle}</h3>

          <p>
            <MapPin size={18} />

            {site.address.street}
          </p>

          <p>
            <Phone size={18} />

            <a href={`tel:${site.phoneLink}`}>
              {site.phone}
            </a>

          </p>

          <p>

            <Mail size={18} />

            <a href={`mailto:${site.email}`}>
              {site.email}
            </a>

          </p>

          <a
            className="google-business-btn"
            href={site.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.maps}
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        © {year} {site.clinicName}. {t.rights}
      </div>

    </footer>
  );
}