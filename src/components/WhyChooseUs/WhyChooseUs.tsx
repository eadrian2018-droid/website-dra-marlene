import {
  CalendarCheck,
  Gem,
  HeartHandshake,
  MapPinned,
  ScanLine,
  Star,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import "./WhyChooseUs.css";

const content = {
  en: {
    eyebrow: "Why Patients Choose Us",
    title: "Exceptional dental care designed around your smile.",
    description:
      "From modern technology to personalized treatment plans, every detail of your experience is designed to provide comfort, confidence, and lasting results.",
    items: [
      {
        icon: ScanLine,
        title: "Modern Dentistry",
        description:
          "Advanced digital equipment helps us provide accurate diagnoses, efficient treatments, and a more comfortable experience.",
      },
      {
        icon: Gem,
        title: "Premium Materials",
        description:
          "We use trusted, high-quality materials selected for durability, function, and natural-looking results.",
      },
      {
        icon: MapPinned,
        title: "U.S. Patients Welcome",
        description:
          "Our clinic is conveniently located just minutes from the Arizona border, with personalized assistance for international patients.",
      },
      {
        icon: HeartHandshake,
        title: "Personalized Care",
        description:
          "Every patient receives honest guidance and a customized treatment plan based on their individual needs.",
      },
      {
        icon: Star,
        title: "Trusted Experience",
        description:
          "More than a decade of professional dental care focused on quality, attention, and patient satisfaction.",
      },
      {
        icon: CalendarCheck,
        title: "Flexible Scheduling",
        description:
          "We coordinate appointments around your schedule and travel plans to make your dental visit easier.",
      },
    ],
  },

  es: {
    eyebrow: "Por Qué Nos Eligen",
    title: "Atención dental excepcional diseñada alrededor de tu sonrisa.",
    description:
      "Desde la tecnología moderna hasta los planes personalizados, cada detalle está pensado para ofrecer comodidad, confianza y resultados duraderos.",
    items: [
      {
        icon: ScanLine,
        title: "Odontología Moderna",
        description:
          "El equipo digital avanzado nos permite ofrecer diagnósticos precisos, tratamientos eficientes y una experiencia más cómoda.",
      },
      {
        icon: Gem,
        title: "Materiales Premium",
        description:
          "Utilizamos materiales confiables y de alta calidad, seleccionados por su durabilidad, función y apariencia natural.",
      },
      {
        icon: MapPinned,
        title: "Pacientes de EE. UU.",
        description:
          "Nuestra clínica está ubicada a minutos de la frontera con Arizona y ofrecemos atención personalizada a pacientes internacionales.",
      },
      {
        icon: HeartHandshake,
        title: "Atención Personalizada",
        description:
          "Cada paciente recibe orientación honesta y un plan de tratamiento adaptado a sus necesidades.",
      },
      {
        icon: Star,
        title: "Experiencia de Confianza",
        description:
          "Más de una década brindando atención dental profesional con enfoque en calidad y satisfacción.",
      },
      {
        icon: CalendarCheck,
        title: "Horarios Flexibles",
        description:
          "Coordinamos tus citas de acuerdo con tu disponibilidad y planes de viaje.",
      },
    ],
  },
};

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const sectionContent = content[language];

  return (
    <section className="why-choose-us section" id="why-choose-us">
      <div className="container">
        <div className="why-choose-header">
          <span className="why-choose-eyebrow">
            {sectionContent.eyebrow}
          </span>

          <h2>{sectionContent.title}</h2>

          <p>{sectionContent.description}</p>
        </div>

        <div className="why-choose-grid">
          {sectionContent.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="why-choose-card"
                key={item.title}
                style={{
                  animationDelay: `${index * 90}ms`,
                }}
              >
                <div className="why-choose-icon">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="why-choose-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}