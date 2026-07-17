import "./Services.css";
import {
  FaTooth,
  FaTeeth,
  FaSmile,
  FaRegGrinStars,
  FaXRay,
  FaShieldAlt,
  FaMagic,
  FaStethoscope,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTooth />,
    title: "Dental Implants",
    description:
      "Permanent replacement for missing teeth with natural function and appearance.",
  },
  {
    icon: <FaTeeth />,
    title: "Crowns & Bridges",
    description:
      "Restore damaged or missing teeth with durable and aesthetic restorations.",
  },
  {
    icon: <FaSmile />,
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with veneers, bonding, and aesthetic treatments.",
  },
  {
    icon: <FaRegGrinStars />,
    title: "Professional Whitening",
    description:
      "Safe in-office whitening for a brighter, healthier-looking smile.",
  },
  {
    icon: <FaXRay />,
    title: "Digital X-Rays",
    description:
      "Modern imaging technology for faster diagnosis and better treatment planning.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Preventive Care",
    description:
      "Exams, cleanings, fluoride, and education to maintain lifelong oral health.",
  },
  {
    icon: <FaMagic />,
    title: "Smile Makeovers",
    description:
      "Personalized treatment plans to completely transform your smile.",
  },
  {
    icon: <FaStethoscope />,
    title: "General Dentistry",
    description:
      "Routine dental care for patients of all ages in a comfortable environment.",
  },
];

export default function Services() {
  return (
    <section className="services section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2>Complete Dental Care Under One Roof</h2>
          <p>
            Personalized treatments designed to keep your smile healthy,
            functional, and beautiful.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}