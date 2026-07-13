import {
  BadgeDollarSign,
  CalendarCheck,
  Car,
  Globe,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import "./TravelSection.css";

const content = {
  en: {
    tag: "International Patients",

    title: "Why Patients Travel to Dra. Marlene Group",

    description:
      "Receive premium dental care just minutes from the Arizona border while saving significantly compared to typical U.S. treatment costs.",

    benefits: [
      {
        icon: BadgeDollarSign,
        title: "Save up to 70%",
        text: "Excellent value without compromising quality.",
      },
      {
        icon: Globe,
        title: "English Speaking Team",
        text: "Clear communication throughout your visit.",
      },
      {
        icon: Car,
        title: "Easy Border Crossing",
        text: "Convenient location just minutes from Arizona.",
      },
      {
        icon: ShieldCheck,
        title: "Premium Materials",
        text: "Modern dentistry using trusted brands and technology.",
      },
      {
        icon: CalendarCheck,
        title: "Flexible Scheduling",
        text: "Appointments designed around your travel plans.",
      },
      {
        icon: MapPinned,
        title: "Personalized Care",
        text: "Every treatment plan is tailored to your needs.",
      },
    ],
  },

  es: {
    tag: "Pacientes Internacionales",

    title: "¿Por qué los pacientes viajan a Dra. Marlene Group?",

    description:
      "Recibe atención dental de alta calidad a minutos de la frontera con Arizona y ahorra significativamente en comparación con los tratamientos en Estados Unidos.",

    benefits: [
      {
        icon: BadgeDollarSign,
        title: "Ahorra hasta un 70%",
        text: "Excelente valor sin comprometer la calidad.",
      },
      {
        icon: Globe,
        title: "Atención en Inglés",
        text: "Comunicación clara durante toda tu visita.",
      },
      {
        icon: Car,
        title: "Cruce Fronterizo Fácil",
        text: "Ubicación conveniente a minutos de Arizona.",
      },
      {
        icon: ShieldCheck,
        title: "Materiales Premium",
        text: "Odontología moderna con tecnología de confianza.",
      },
      {
        icon: CalendarCheck,
        title: "Horarios Flexibles",
        text: "Citas adaptadas a tus planes de viaje.",
      },
      {
        icon: MapPinned,
        title: "Atención Personalizada",
        text: "Cada tratamiento es diseñado para tus necesidades.",
      },
    ],
  },
};

export default function TravelSection() {
  const { language } = useLanguage();

  const t = content[language];

  return (
    <section className="travel section">
      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            {t.tag}
          </span>

          <h2>{t.title}</h2>

          <p>{t.description}</p>

        </div>

        <div className="travel-grid">

          {t.benefits.map((item) => {

            const Icon = item.icon;

            return (

              <article
                className="travel-card"
                key={item.title}
              >

                <Icon size={42} />

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </article>

            );

          })}

        </div>

      </div>
    </section>
  );
}