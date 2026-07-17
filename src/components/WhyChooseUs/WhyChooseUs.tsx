import "./WhyChooseUs.css";
import {
  FaMapMarkerAlt,
  FaRegClock,
  FaHandHoldingUsd,
  FaHeartbeat,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Minutes from Arizona",
    description:
      "Conveniently located in San Luis Río Colorado, making quality dental care easily accessible for U.S. patients.",
  },
  {
    icon: <FaRegClock />,
    title: "Flexible Scheduling",
    description:
      "Appointments designed around your schedule, with efficient visits and minimal waiting time.",
  },
  {
    icon: <FaHandHoldingUsd />,
    title: "Transparent Pricing",
    description:
      "High-quality dentistry at affordable prices, with clear treatment plans and no surprises.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Stress-Free Experience",
    description:
      "A calm, welcoming environment focused on comfort, trust, and personalized attention from start to finish.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why section">
      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            WHY PATIENTS CHOOSE US
          </span>

          <h2>
            Making Your Dental Visit
            <br />
            Easier Than Ever.
          </h2>

          <p>
            We believe outstanding dentistry goes beyond great clinical
            results. From convenient access to transparent pricing and
            personalized care, every detail is designed to make your
            experience simple and stress-free.
          </p>

        </div>

        <div className="why-grid">

          {features.map((item) => (
            <article className="why-card" key={item.title}>

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}