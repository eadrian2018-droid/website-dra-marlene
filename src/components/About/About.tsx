import "./About.css";
import { Link } from "react-router-dom";
import {
  Award,
  ShieldCheck,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export default function About() {
  return (
    <section className="about section">
      <div className="container about-container">

        <div className="about-image">

          <div className="about-image-bg"></div>

          <img
            src="/images/dr-marlene-about.jpg"
            alt="Dr. Marlene Verdugo"
          />

          <div className="about-floating-card">
            <Award size={22} />

            <div>
              <strong>10+ Years</strong>
              <span>Creating Beautiful Smiles</span>
            </div>
          </div>

        </div>

        <div className="about-content">

          <span className="section-tag">
            Meet Dr. Marlene Verdugo
          </span>

          <h2>
            Dentistry Built on
            <span> Trust, Experience & Compassion.</span>
          </h2>

          <p>
            Every patient deserves honest recommendations,
            exceptional clinical care and a comfortable experience.
            Dr. Marlene combines modern dentistry with a personalized
            approach so every smile receives the attention it deserves.
          </p>

          <div className="about-highlights">

            <div className="about-highlight">
              <ShieldCheck size={22} />

              <div>
                <strong>Premium Quality Care</strong>
                <span>
                  Modern materials and evidence-based dentistry.
                </span>
              </div>
            </div>

            <div className="about-highlight">
              <GraduationCap size={22} />

              <div>
                <strong>Continuous Education</strong>
                <span>
                  Committed to staying current with the latest techniques.
                </span>
              </div>
            </div>

            <div className="about-highlight">
              <Sparkles size={22} />

              <div>
                <strong>Personalized Treatments</strong>
                <span>
                  Every treatment plan is tailored to your needs.
                </span>
              </div>
            </div>

          </div>

          <div className="about-buttons">

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Schedule Appointment
            </Link>

            <Link
              to="/treatments"
              className="btn btn-outline"
            >
              Explore Treatments
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}