import "./WhyChooseUs.css";
import {
  FaUserMd,
  FaAward,
  FaTeethOpen,
  FaSmile,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd />,
    title: "Personalized Care",
    description:
      "Every treatment plan is customized to your needs and smile goals.",
  },
  {
    icon: <FaAward />,
    title: "ADA Member",
    description:
      "Committed to continuing education and international standards of care.",
  },
  {
    icon: <FaTeethOpen />,
    title: "Modern Dentistry",
    description:
      "Digital technology and minimally invasive techniques for better results.",
  },
  {
    icon: <FaSmile />,
    title: "Comfort First",
    description:
      "A relaxing environment designed to make every visit stress-free.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>

          <h2>Your Smile Is Our Priority</h2>

          <p>
            Combining experience, compassion, and modern dentistry to deliver
            exceptional care for every patient.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item) => (
            <article className="why-card" key={item.title}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}