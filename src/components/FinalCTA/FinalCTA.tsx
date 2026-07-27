import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "./FinalCTA.css";

export default function FinalCTA() {

  return (

    <section className="final-cta">

      <div className="final-cta-overlay"></div>

      <div className="container final-cta-content">

        <span className="final-cta-tag">

          Personalized Dental Care

        </span>

        <h2>

          Ready to Smile
          <br />
          With Confidence?

        </h2>

        <p>

          Whether you're visiting from the United States,
          Canada, or you're a local patient, we're here to
          help you achieve a healthy, beautiful smile with
          honest recommendations and personalized care.

        </p>

        <Link
          to="/contact"
          className="btn btn-primary"
        >

          Get Your Free Consultation

          <ArrowRight size={18} />

        </Link>

      </div>

    </section>

  );

}