import {
  ShieldCheck,
  Smile,
  Sparkles,
  ScanLine,
  Gem,
  Stethoscope,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    icon: <Smile size={38} />,
    title: "Odontología General",
    description:
      "Prevención, diagnóstico y tratamiento para mantener una sonrisa saludable.",
  },
  {
    icon: <Sparkles size={38} />,
    title: "Estética Dental",
    description:
      "Blanqueamientos, carillas y diseño de sonrisa con resultados naturales.",
  },
  {
    icon: <Gem size={38} />,
    title: "Implantes Dentales",
    description:
      "Recupera la función y estética con implantes de alta calidad.",
  },
  {
    icon: <ScanLine size={38} />,
    title: "Radiografía Digital",
    description:
      "Diagnósticos rápidos y precisos utilizando tecnología moderna.",
  },
  {
    icon: <ShieldCheck size={38} />,
    title: "Odontología Preventiva",
    description:
      "Limpiezas profesionales, revisiones y tratamientos preventivos.",
  },
  {
    icon: <Stethoscope size={38} />,
    title: "Tratamientos Especializados",
    description:
      "Planes personalizados para cada paciente con atención integral.",
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nuestros Servicios</span>

          <h2>Cuidamos tu sonrisa con tecnología y experiencia.</h2>

          <p>
            Ofrecemos tratamientos dentales modernos para toda la familia,
            priorizando la calidad, comodidad y excelentes resultados.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}