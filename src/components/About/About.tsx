import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about section">
      <div className="container about-container">
        <div className="about-image">
          <img
            src="/images/dr-marlene-about.jpg"
            alt="Dr. Marlene Verdugo"
          />
        </div>

        <div className="about-content">
          <span className="section-tag">About Dr. Marlene</span>

          <h2>Creating Healthy, Beautiful Smiles with Compassion</h2>

          <p>
            Dr. Marlene Verdugo is dedicated to providing personalized dental
            care in a comfortable and welcoming environment. Her approach
            combines modern technology, continuous education, and genuine care
            to help every patient achieve long-term oral health.
          </p>

          <p>
            Whether you need preventive care, cosmetic dentistry, restorative
            treatments, or dental implants, every treatment plan is carefully
            designed around your individual needs and goals.
          </p>

          <div className="about-buttons">
            <Link to="/contact" className="btn btn-primary">
              Schedule Appointment
            </Link>

            <Link to="/treatments" className="btn btn-outline">
              View Treatments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}