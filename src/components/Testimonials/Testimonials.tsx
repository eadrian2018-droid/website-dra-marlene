import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah M.",
    location: "Yuma, Arizona",
    text:
      "Dr. Marlene and her team were incredible. The entire process was comfortable, professional, and my smile has never looked better.",
  },
  {
    name: "David R.",
    location: "San Luis, Arizona",
    text:
      "Crossing the border for dental care was absolutely worth it. Modern office, honest recommendations, and amazing results.",
  },
  {
    name: "Jessica L.",
    location: "Mexicali, Mexico",
    text:
      "Everyone made me feel welcome from the moment I arrived. Highly recommended for anyone looking for quality dental care.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>

          <h2>What Our Patients Say</h2>

          <p>
            Patient satisfaction is our greatest achievement.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.name}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p>"{review.text}"</p>

              <h3>{review.name}</h3>

              <span>{review.location}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}