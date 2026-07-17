import "./TrustBadges.css";
import {
  FaAward,
  FaTooth,
  FaUserMd,
  FaShieldAlt,
} from "react-icons/fa";

const badges = [
  {
    icon: <FaAward />,
    title: "ADA Member",
    subtitle:
      "Committed to international standards of care.",
  },
  {
    icon: <FaTooth />,
    title: "Digital Dentistry",
    subtitle:
      "Modern technology for precise, comfortable treatment.",
  },
  {
    icon: <FaUserMd />,
    title: "Personalized Care",
    subtitle:
      "Every treatment plan is tailored to your smile.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted by U.S. Patients",
    subtitle:
      "Convenient, affordable care just minutes from Arizona.",
  },
];

export default function TrustBadges() {
  return (
    <section className="trust-badges">
      <div className="container">
        <div className="trust-panel">
          {badges.map((badge) => (
            <article className="trust-item" key={badge.title}>
              <div className="trust-icon">
                {badge.icon}
              </div>

              <h3>{badge.title}</h3>

              <span>{badge.subtitle}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}