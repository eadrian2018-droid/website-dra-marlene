import "./WhyChooseUs.css";

import { Link } from "react-router-dom";

import {
  ShieldCheck,
  ScanLine,
  HeartHandshake,
  MapPin,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "ADA Member",
    text: "Committed to internationally recognized standards, continuing education, and evidence-based dentistry.",
  },
  {
    icon: ScanLine,
    title: "Modern Digital Dentistry",
    text: "Advanced digital technology provides more accurate diagnoses, greater comfort, and predictable results.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    text: "Every treatment plan is tailored specifically to your goals, your health, and your smile.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why">

      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="why-header">

          <span className="why-label">
            WHY CHOOSE US
          </span>

          <h2>
            Experience Dentistry
            <br />

            <span>Designed Around You.</span>

          </h2>

          <p className="why-description">
            At Dra. Marlene Group, we combine advanced technology,
            personalized care, and clinical excellence to create an
            experience that feels comfortable, honest, and completely
            focused on your smile.
          </p>

        </div>

        {/* ================= CARDS ================= */}

        <div className="why-cards">

          {reasons.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="why-card"
              >

                <div className="why-card-icon">

                  <Icon size={26} />

                </div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.text}

                </p>

              </article>

            );

          })}

        </div>

        {/* ================= LOCATION BAR ================= */}

        <div className="why-location">

          <div className="why-location-left">

            <div className="why-location-icon">

              <MapPin size={24} />

            </div>

            <div>

              <h3>
                Minutes from Arizona
              </h3>

              <p>
                Conveniently located in San Luis Río Colorado,
                providing premium dental care for patients from
                Arizona, California and throughout the United States.
              </p>

            </div>

          </div>

          <div className="why-location-right">

            <div className="location-dot"></div>

            <div className="location-line"></div>

            <div className="location-dot active"></div>

          </div>

        </div>

        {/* ================= CTA ================= */}

        <div className="why-cta">

          <span className="why-cta-badge">
            DRA. MARLENE GROUP
          </span>

          <h3>

            Let's Create Your
            <br />
            Best Smile.

          </h3>

          <p>

            We'll answer your questions, discuss your goals,
            and create a personalized treatment plan designed
            specifically for you.

          </p>

          <Link
            to="/contact"
            className="why-button"
          >

            Get Your Free Consultation

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}