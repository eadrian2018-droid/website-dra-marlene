import "./Memberships.css";

import {
  Award,
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export default function Memberships() {

  return (

    <section className="memberships section">

      <div className="container">

        <div className="memberships-header">

          <span className="section-tag">

            Professional Memberships

          </span>


          <h2>

            Committed to Excellence
            <br />
            Through Continuing Education

          </h2>


          <p>

            Professional memberships and continuing education
            reflect Dr. Marlene's commitment to providing
            modern, ethical, and evidence-based dental care
            for every patient.

          </p>

        </div>


        <div className="memberships-grid">


          <div className="membership-item">

            <Award className="membership-icon" />


            <h3>

              American Dental
              Association

            </h3>


            <span>

              International Member

            </span>


            <small className="membership-id">

              ADA Member ID: 454707887

            </small>


          </div>



          <div className="membership-item">

            <ShieldCheck className="membership-icon" />


            <h3>

              Evidence-Based
              Dentistry

            </h3>


            <span>

              Modern Clinical Standards

            </span>

          </div>



          <div className="membership-item">

            <GraduationCap className="membership-icon" />


            <h3>

              Continuing
              Education

            </h3>


            <span>

              Advanced Training Every Year

            </span>

          </div>



          <div className="membership-item">

            <HeartHandshake className="membership-icon" />


            <h3>

              Personalized
              Patient Care

            </h3>


            <span>

              Honest & Conservative Dentistry

            </span>

          </div>


        </div>

      </div>

    </section>

  );

}