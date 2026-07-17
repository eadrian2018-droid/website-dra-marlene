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
  },
  {
    icon: <FaTooth />,
    title: "Modern Technology",
  },
  {
    icon: <FaUserMd />,
    title: "Personalized Care",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted by U.S. Patients",
  },
];

export default function TrustBadges() {
  return (
    <section className="trust-badges">
      <div className="container trust-grid">
        {badges.map((badge) => (
          <div className="trust-card" key={badge.title}>
            <div className="trust-icon">
              {badge.icon}
            </div>

            <h3>{badge.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}