import {
  ArrowRight,
  CalendarCheck,
  Check,
  MessageCircle,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../config/site";

import doctorImage from "../../assets/branding/doctora.png";

import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    t.whatsapp.message
  );

  return (
    <section className="hero">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            {t.hero.eyebrow}
          </div>

          <h1 className="hero-title">
            <span>{t.hero.titleFirst}</span>
            <span>{t.hero.titleSecond}</span>
            <strong>{t.hero.titleThird}</strong>
          </h1>

          <p className="hero-description">
            {t.hero.description}
          </p>

          <div className="hero-actions">

            <Link
              to="/contact"
              className="hero-primary-button"
            >
              <CalendarCheck size={19} />
              {t.hero.primaryButton}
            </Link>

            <Link
              to="/treatments"
              className="hero-secondary-button"
            >
              {t.hero.secondaryButton}
              <ArrowRight size={18} />
            </Link>

          </div>

          <a
            className="hero-whatsapp-link"
            href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            {t.hero.whatsappButton}
          </a>

          <div className="hero-features">

            <div className="hero-feature">
              <Check size={16} />
              <span>{t.hero.featureOne}</span>
            </div>

            <div className="hero-feature">
              <Check size={16} />
              <span>{t.hero.featureTwo}</span>
            </div>

            <div className="hero-feature">
              <Check size={16} />
              <span>{t.hero.featureThree}</span>
            </div>

          </div>
        </div>

        <div className="hero-visual">

          <div className="hero-image-background" />

          <div className="hero-image-frame">
            <img
              src={doctorImage}
              alt="Dr. Marlene Verdugo at Dra. Marlene Group"
            />
          </div>

          <div className="hero-rating-card">

            <div className="hero-rating-stars">
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
            </div>

            <div className="hero-card-content">
              <strong>{t.hero.ratingValue}</strong>

              <div>
                <span>{t.hero.ratingTitle}</span>
                <small>{t.hero.ratingText}</small>
              </div>
            </div>

          </div>

          <div className="hero-experience-card">
            <strong>{t.hero.experienceValue}</strong>
            <span>{t.hero.experienceTitle}</span>
          </div>

          <div className="hero-patients-card">
            <strong>{t.hero.patientsValue}</strong>
            <span>{t.hero.patientsTitle}</span>
          </div>

          <div className="hero-availability-card">
            <span className="hero-availability-dot" />

            <div>
              <strong>{t.hero.availabilityTitle}</strong>
              <small>{t.hero.availabilityText}</small>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}