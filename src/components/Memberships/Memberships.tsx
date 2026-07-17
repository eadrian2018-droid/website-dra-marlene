import "./Memberships.css";
import { FaAward } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Memberships() {
  return (
    <section className="memberships section">
      <div className="container memberships-container">
        <div className="memberships-content">
          <span className="section-tag">Professional Memberships</span>

          <h2>Committed to Excellence in Dentistry</h2>

          <p>
            Dr. Marlene Verdugo is committed to continuous education and
            evidence-based dentistry to provide every patient with the highest
            standard of care.
          </p>

          <div className="membership-card">
            <FaAward className="membership-icon" />

            <div>
              <h3>American Dental Association (ADA)</h3>

              <p>
                International Member dedicated to maintaining the highest
                ethical and clinical standards while staying current with the
                latest advancements in modern dentistry.
              </p>
            </div>
          </div>

          <div className="membership-card">
            <BsPatchCheckFill className="membership-icon" />

            <div>
              <h3>Continuous Professional Education</h3>

              <p>
                Regular participation in advanced courses and professional
                training to deliver predictable, comfortable, and long-lasting
                dental treatments.
              </p>
            </div>
          </div>
        </div>

        <div className="memberships-image">
          <img
            src="/images/ada-membership.jpg"
            alt="American Dental Association Membership"
          />
        </div>
      </div>
    </section>
  );
}