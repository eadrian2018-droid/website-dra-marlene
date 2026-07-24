import {
  ArrowRight,
  Calendar,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../config/site";

import heroImage from "../../assets/images/hero/hero.jpg";

import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    t.whatsapp.message
  );

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            <ShieldCheck
              size={17}
              strokeWidth={2.3}
            />

            <span>
              Premium Dental Care in Mexico
            </span>
          </div>

          <h1 className="hero-title">
            <span>Modern Dentistry.</span>
            <span>Affordable Care.</span>

            <span className="green">
              Beautiful Smiles.
            </span>
          </h1>

          <div className="hero-line" />

          <p className="hero-text">
            Experience high-quality dentistry with
            advanced technology, personalized treatment,
            and compassionate professionals dedicated to
            creating healthy, confident smiles that last
            a lifetime.
          </p>

          <div className="hero-buttons">

            <Link
              to="/contact"
              className="btn-primary"
            >
              <Calendar size={18} />
              Get Your Free Consultation
            </Link>

            <Link
              to="/treatments"
              className="btn-secondary"
            >
              Our Services
              <ArrowRight size={18} />
            </Link>

          </div>

          <a
            href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="hero-contact"
          >
            <div className="hero-contact-icon">
              <MessageCircle size={18} />
            </div>

            <div>
              <small>
                Need immediate assistance?
              </small>

              <strong>
                Let's Talk About Your Smile
              </strong>
            </div>
          </a>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">

            <svg
              className="hero-wave"
              viewBox="0 0 260 900"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="
                  M260 0
                  C60 120,
                  40 770,
                  260 900
                  L0 900
                  L0 0
                  Z
                "
                fill="white"
              />
            </svg>

            <div className="hero-image-overlay" />

            <img
              src={heroImage}
              alt="Dra. Marlene Group dental care"
              className="hero-image"
            />

            <div className="hero-floating-card">

              <div className="hero-floating-top">

                <div
                  className="hero-stars"
                  aria-label="Five-star rating"
                >
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>

                <span>4.9/5 Rating</span>

              </div>

              <h3>
                Trusted by Thousands of Patients
              </h3>

              <p>
                Modern technology,
                affordable prices,
                and personalized dental care.
              </p>

            </div>

          </div>
        </div>
      </div>

      <div className="hero-stats">

        <div className="stat-card">

          <h2>10+</h2>

          <h4>Years Experience</h4>

          <p>
            Providing quality dental care with modern
            techniques.
          </p>

        </div>

        <div className="stat-card">

          <h2>5000+</h2>

          <h4>Happy Patients</h4>

          <p>
            Beautiful smiles created for families from
            Mexico and the USA.
          </p>

        </div>

        <div className="stat-card">

          <h2>4.9★</h2>

          <h4>Patient Rating</h4>

          <p>
            Consistently rated excellent for quality,
            comfort, and service.
          </p>

        </div>

        <div className="stat-card">

          <h2>100%</h2>

          <h4>Modern Technology</h4>

          <p>
            Digital dentistry,
            premium materials,
            and advanced equipment.
          </p>

        </div>

      </div>
    </section>
  );
}