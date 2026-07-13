import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Stats.css";

const content = {
  en: [
    {
      target: 10,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      target: 5000,
      suffix: "+",
      label: "Patients Treated",
    },
    {
      target: 98,
      suffix: "%",
      label: "Patient Satisfaction",
    },
    {
      target: 24,
      suffix: "h",
      label: "WhatsApp Response",
    },
  ],

  es: [
    {
      target: 10,
      suffix: "+",
      label: "Años de Experiencia",
    },
    {
      target: 5000,
      suffix: "+",
      label: "Pacientes Atendidos",
    },
    {
      target: 98,
      suffix: "%",
      label: "Pacientes Satisfechos",
    },
    {
      target: 24,
      suffix: "h",
      label: "Respuesta por WhatsApp",
    },
  ],
};

export default function Stats() {
  const { language } = useLanguage();

  const stats = content[language];

  const [started, setStarted] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="stats"
      ref={sectionRef}
    >
      <div className="container stats-container">
        {stats.map((item) => (
          <StatCard
            key={item.label}
            target={item.target}
            suffix={item.suffix}
            label={item.label}
            started={started}
          />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  target,
  suffix,
  label,
  started,
}: {
  target: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let current = 0;

    const duration = 1400;
    const steps = 60;

    const increment = target / steps;
    const intervalTime = duration / steps;

    const timer = window.setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => window.clearInterval(timer);
  }, [started, target]);

  return (
    <article className="stat-card">
      <h3>
        {count.toLocaleString()}
        {suffix}
      </h3>

      <p>{label}</p>
    </article>
  );
}