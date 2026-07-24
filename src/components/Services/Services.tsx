import "./Services.css";

import {
  FaTooth,
  FaTeeth,
  FaSmile,
  FaRegGrinStars,
  FaXRay,
  FaHeartbeat,
  FaTeethOpen,
  FaUserMd,
  FaArrowRight,
} from "react-icons/fa";

const services = [

  {
    badge: "Most Popular",
    icon: <FaTooth />,
    title: "Dental Implants",
    description:
      "Replace missing teeth with permanent implants that look, feel, and function like natural teeth.",
  },

  {
    badge: "International Favorite",
    icon: <FaTeeth />,
    title: "All-on-4 / All-on-X",
    description:
      "A full-arch solution that restores your smile with fixed implant-supported teeth in fewer visits.",
  },

  {
    badge: "Smile Design",
    icon: <FaSmile />,
    title: "Porcelain Veneers",
    description:
      "Create a brighter, more symmetrical smile with custom-crafted porcelain veneers.",
  },

  {
    badge: "Complete Transformation",
    icon: <FaRegGrinStars />,
    title: "Smile Makeovers",
    description:
      "Personalized treatment plans combining cosmetic and restorative dentistry for dramatic results.",
  },

  {
    icon: <FaTeeth />,
    title: "Crowns & Bridges",
    description:
      "Restore damaged or missing teeth with durable, natural-looking restorations.",
  },

  {
    icon: <FaHeartbeat />,
    title: "Root Canal Therapy",
    description:
      "Save infected teeth comfortably using modern endodontic techniques.",
  },

  {
    icon: <FaRegGrinStars />,
    title: "Professional Teeth Whitening",
    description:
      "Achieve a brighter smile safely with professional in-office whitening.",
  },

  {
    icon: <FaTeethOpen />,
    title: "Invisalign®",
    description:
      "Straighten your teeth discreetly with clear aligner therapy.",
  },

  {
    icon: <FaUserMd />,
    title: "Professional Cleaning",
    description:
      "Maintain healthy gums and teeth with routine preventive cleanings.",
  },

  {
    icon: <FaHeartbeat />,
    title: "Emergency Dentistry",
    description:
      "Fast care for dental pain, broken teeth, infections, and urgent dental needs.",
  },

  {
    icon: <FaTooth />,
    title: "Wisdom Teeth Removal",
    description:
      "Comfortable surgical extractions performed by experienced specialists.",
  },

  {
    icon: <FaXRay />,
    title: "Digital X-Rays",
    description:
      "Advanced digital imaging for precise diagnosis and treatment planning.",
  },

];

export default function Services() {

  return (

    <section className="services section">

      <div className="container">

        <div className="section-header">

          <h2>

            Complete Dental Care Under One Roof

          </h2>

          <p>

            From preventive dentistry to full-mouth rehabilitation,
            we provide comprehensive care for local and international
            patients using modern technology and personalized treatment
            plans.

          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.title}
            >

              {service.badge && (

                <span className="service-badge">

                  {service.badge}

                </span>

              )}

              <div className="service-icon">

                {service.icon}

              </div>

              <h3>

                {service.title}

              </h3>

              <p>

                {service.description}

              </p>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}