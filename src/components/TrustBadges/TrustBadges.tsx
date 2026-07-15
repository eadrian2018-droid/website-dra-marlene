import {
  Award,
  MapPinned,
  MessageCircleMore,
  Star,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import "./TrustBadges.css";

const content = {
  en: {
    items: [
      {
        icon: Award,
        title: "ADA International Member",
      },
      {
        icon: Star,
        title: "5-Star Patient Reviews",
      },
      {
        icon: MessageCircleMore,
        title: "English Speaking Team",
      },
      {
        icon: MapPinned,
        title: "Minutes from Arizona",
      },
    ],
  },

  es: {
    items: [
      {
        icon: Award,
        title: "Miembro Internacional ADA",
      },
      {
        icon: Star,
        title: "Pacientes 5 Estrellas",
      },
      {
        icon: MessageCircleMore,
        title: "Atención en Inglés",
      },
      {
        icon: MapPinned,
        title: "A Minutos de Arizona",
      },
    ],
  },
};

export default function TrustBadges() {
  const { language } = useLanguage();

  const t = content[language];

  return (
    <section className="trust-badges">

      <div className="container trust-badges-container">

        {t.items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              className="trust-badge"
              key={item.title}
            >

              <Icon size={22} />

              <span>{item.title}</span>

            </div>

          );

        })}

      </div>

    </section>
  );
}