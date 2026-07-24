import {
  Building2,
  CalendarDays,
  Clock3,
  Hotel,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { content } from "./visitPlanning.content";

import "./VisitPlanning.css";

export default function VisitPlanning() {
  const { language } = useLanguage();

  const t = content[language];

  const icons = [
    <Stethoscope size={20} />,
    <ShieldCheck size={20} />,
    <Hotel size={20} />,
    <Building2 size={20} />,
    <CalendarDays size={20} />,
    <MessageCircle size={20} />,
  ];

  return (
    <section className="visit-planning">

      <div className="container">

        <div className="visit-card">

          <div className="visit-decoration visit-decoration-left" />

          <div className="visit-decoration visit-decoration-right" />

          <div className="visit-left">

            <h2>
              {t.title}
            </h2>

            <div className="visit-divider" />

            <p className="visit-description">
              {t.description}
            </p>

            <div className="visit-reply">

              <Clock3 size={18} />

              <span>
                {t.reply}
              </span>

            </div>

          </div>

          <div className="visit-right">

            {t.items.map((item, index) => (

              <div
                key={item}
                className="visit-feature"
              >

                <div
                  className={`visit-icon ${
                    index % 2 === 0
                      ? "green"
                      : "gold"
                  }`}
                >
                  {icons[index]}
                </div>

                <span>
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}