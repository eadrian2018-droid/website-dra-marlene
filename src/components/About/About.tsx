import "./About.css";

import doctorImg from "../../assets/branding/doctora.png";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-container">
        <div className="about-image">
          <img
            src={doctorImg}
            alt="Dra. Marlene Verdugo"
          />
        </div>

        <div className="about-content">
          <span className="section-tag">Sobre Nosotros</span>

          <h2>
            Atención dental de excelencia con un trato humano y personalizado.
          </h2>

          <p>
            En <strong>Dra. Marlene Group</strong> creemos que una sonrisa sana
            transforma vidas. Nuestro compromiso es brindar tratamientos de alta
            calidad utilizando tecnología moderna, materiales de primera y una
            atención cercana para que cada paciente se sienta seguro y cómodo.
          </p>

          <p>
            Atendemos desde procedimientos preventivos hasta rehabilitaciones
            completas, siempre elaborando un plan de tratamiento personalizado
            según las necesidades de cada paciente.
          </p>

          <div className="about-features">
            <div className="feature-card">
              <h3>✓ Atención Personalizada</h3>
              <p>Cada paciente recibe un diagnóstico y tratamiento individual.</p>
            </div>

            <div className="feature-card">
              <h3>✓ Tecnología Moderna</h3>
              <p>Equipos digitales para diagnósticos precisos y cómodos.</p>
            </div>

            <div className="feature-card">
              <h3>✓ Calidad Garantizada</h3>
              <p>Materiales de alta calidad y protocolos clínicos actualizados.</p>
            </div>

            <div className="feature-card">
              <h3>✓ Pacientes Internacionales</h3>
              <p>
                Ayudamos a pacientes de Estados Unidos y México durante todo su
                tratamiento.
              </p>
            </div>
          </div>

          <a href="#contact" className="primary-btn">
            Agenda tu cita
          </a>
        </div>
      </div>
    </section>
  );
}