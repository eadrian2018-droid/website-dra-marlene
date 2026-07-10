import {
  ArrowRight,
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
            Clínica Dental Premium
          </span>

          <h1>
            Recupera tu sonrisa con especialistas en quienes puedes confiar.
          </h1>

          <p>
            Tecnología moderna, materiales de alta calidad y atención
            personalizada para pacientes de México y Estados Unidos.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              <CalendarCheck size={20} />
              Agendar Cita
            </a>

            <a href="tel:+52653XXXXXXX" className="secondary-btn">
              <Phone size={20} />
              Llamar Ahora
            </a>
          </div>

          <div className="hero-features">
            <div>
              <ShieldCheck size={18} />
              Atención Profesional
            </div>

            <div>
              <Clock3 size={18} />
              Respuesta Rápida
            </div>

            <div>
              <Star size={18} />
              Pacientes Satisfechos
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="floating-card floating-card-top">
            <Star size={22} />

            <div>
              <strong>5.0</strong>
              <span>Calificación promedio</span>
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
              <strong>Tratamientos Seguros</strong>
              <span>Tecnología moderna</span>
            </div>
          </div>

          <div className="floating-badge">
            <ArrowRight size={18} />
            Agenda disponible esta semana
          </div>
        </div>
      </div>
    </section>
  );
}