import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>Dra. Marlene Group</h2>

          <p>
            Atención dental moderna, tecnología de vanguardia y un trato
            personalizado para ayudarte a recuperar la confianza en tu sonrisa.
          </p>

          <div className="footer-social">
            <a
              href="https://www.facebook.com/dentistamarlene"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
             <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.instagram.com/dra.marleneverdugo_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
             <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>

          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#about">Nosotros</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>

          <p>
            <MapPin size={18} />
            Callejón Juárez y 6ta #350 B
          </p>

          <p>
            <Phone size={18} />
            <a href="tel:+526532080587">
              +52 653 208 0587
            </a>
          </p>

          <p>
            <Mail size={18} />
            <a href="mailto:dra.marlene.v@gmail.com">
              dra.marlene.v@gmail.com
            </a>
          </p>

          <a
            className="google-business-btn"
            href="https://www.google.com/maps/place/Dra+Marlene+Verdugo/@32.4788099,-114.7771726,1017m/data=!3m1!1e3!4m16!1m9!3m8!1s0x80d64f39bc0a7061:0x1ead79917b3811cf!2sDra+Marlene+Verdugo!8m2!3d32.4788099!4d-114.7771726!9m1!1b1!16s%2Fg%2F11n10kz263!3m5!1s0x80d64f39bc0a7061:0x1ead79917b3811cf!8m2!3d32.4788099!4d-114.7771726!16s%2Fg%2F11n10kz263?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Dra. Marlene Group. Todos los derechos reservados.
      </div>
    </footer>
  );
}