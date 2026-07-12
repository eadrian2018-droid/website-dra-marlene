import "./About.css";

import {
  ArrowRight,
  Award,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import doctorImg from "../../assets/branding/doctora.png";

export default function About() {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          tag: "Meet Dr. Marlene",

          title: "Premium dental care with a personal approach.",

          description1:
            "Every patient deserves honest guidance, exceptional care, and treatment tailored to their unique needs. Our mission is to help you smile with confidence while making every visit comfortable and stress-free.",

          description2:
            "Patients from Arizona, California, and throughout Mexico trust Dra. Marlene Group because we combine modern dentistry, advanced technology, and personalized attention in every treatment.",

          values: [
            {
              icon: HeartHandshake,
              title: "Personalized Care",
              text: "Every treatment plan is customized for your smile.",
            },
            {
              icon: Sparkles,
              title: "Modern Technology",
              text: "Digital dentistry for greater comfort and precision.",
            },
            {
              icon: ShieldCheck,
              title: "Trusted Quality",
              text: "High-quality materials and proven clinical protocols.",
            },
            {
              icon: Award,
              title: "International Patients",
              text: "Professional care for patients visiting from the U.S.",
            },
          ],

          button: "Schedule Your Consultation",
        }
      : {
          tag: "Conoce a la Dra. Marlene",

          title:
            "Odontología premium con un trato cercano y personalizado.",

          description1:
            "Cada paciente merece orientación honesta, atención de excelencia y un tratamiento diseñado específicamente para sus necesidades. Nuestro objetivo es ayudarte a sonreír con confianza mientras disfrutas de una experiencia cómoda y segura.",

          description2:
            "Pacientes de Sonora, Baja California y Estados Unidos confían en Dra. Marlene Group porque combinamos tecnología moderna, materiales de alta calidad y atención personalizada en cada tratamiento.",

          values: [
            {
              icon: HeartHandshake,
              title: "Atención Personalizada",
              text: "Cada tratamiento se adapta a tu sonrisa.",
            },
            {
              icon: Sparkles,
              title: "Tecnología Moderna",
              text: "Odontología digital para mayor precisión.",
            },
            {
              icon: ShieldCheck,
              title: "Calidad Garantizada",
              text: "Materiales premium y protocolos profesionales.",
            },
            {
              icon: Award,
              title: "Pacientes Internacionales",
              text: "Atención para pacientes que viajan desde EE.UU.",
            },
          ],

          button: "Agenda tu Consulta",
        };

  return (
    <section
      className="about section"
      id="about"
    >
      <div className="container about-container">
        <div className="about-photo">

          <div className="about-photo-bg"></div>

          <img
            src={doctorImg}
            alt="Dra. Marlene Verdugo"
          />

        </div>

        <div className="about-content">

          <span className="about-tag">
            {content.tag}
          </span>

          <h2>
            {content.title}
          </h2>

          <p>
            {content.description1}
          </p>

          <p>
            {content.description2}
          </p>

          <div className="about-grid">

            {content.values.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="about-card"
                >

                  <div className="about-icon">
                    <Icon size={22} />
                  </div>

                  <div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </div>

                </div>

              );

            })}

          </div>

          <a
            href="#contact"
            className="about-button"
          >
            {content.button}

            <ArrowRight size={18} />

          </a>

        </div>
      </div>
    </section>
  );
}