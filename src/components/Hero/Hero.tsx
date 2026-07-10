import {
  CalendarCheck,
  Clock3,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

import "./Hero.css";

import doctorImg from "../../assets/branding/doctora.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="section-tag">
            Más de 10 años transformando sonrisas
          </span>

          <h1>
            Tu sonrisa merece atención dental de la más alta calidad.
          </h1>

          <p>
            En <strong>Dra. Marlene Group</strong> ofrecemos tratamientos
            dentales modernos con tecnología de última generación y atención
            personalizada para pacientes de México y Estados Unidos.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              <CalendarCheck size={20} />
              Agenda tu cita
            </a>

            <a
              href="https://wa.me/526532080587"
              className="secondary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={20} />
              WhatsApp
            </a>
          </div>

          <div className="hero-features">
            <div>
              <ShieldCheck size={18} />
              Tecnología moderna
            </div>

            <div>
              <Clock3 size={18} />
              Atención personalizada
            </div>

            <div>
              <Star size={18} />
              Pacientes de México y EE. UU.
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="floating-card floating-card-top">
            <Star size={22} />

            <div>
              <strong>5★</strong>
              <span>Excelente atención</span>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={doctorImg}
              alt="Dra. Marlene Verdugo"
            />
          </div>

          <div className="floating-card floating-card-bottom">
            <ShieldCheck size={24} />

            <div>
              <strong>Odontología Integral</strong>
              <span>Tratamientos personalizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}