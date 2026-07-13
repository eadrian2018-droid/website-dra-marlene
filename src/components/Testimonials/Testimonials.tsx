import { ExternalLink, Star } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./Testimonials.css";

const GOOGLE_URL =
  "https://www.google.com/maps/place/Dra+Marlene+Verdugo/@32.4788099,-114.7771726,1017m/data=!3m1!1e3!4m16!1m9!3m8!1s0x80d64f39bc0a7061:0x1ead79917b3811cf!2sDra+Marlene+Verdugo!8m2!3d32.4788099!4d-114.7771726!9m1!1b1!16s%2Fg%2F11n10kz263!3m5!1s0x80d64f39bc0a7061:0x1ead79917b3811cf!8m2!3d32.4788099!4d-114.7771726!16s%2Fg%2F11n10kz263";

const content = {
  en: {
    tag: "Google Reviews",
    title: "Trusted by patients from the United States and Mexico.",
    description:
      "Patient satisfaction is the foundation of everything we do.",

    button: "View Google Reviews",

    reviews: [
      {
        name: "Sarah M.",
        city: "Arizona, USA",
        text:
          "Amazing experience from beginning to end. The staff was welcoming, professional, and made me feel comfortable throughout my visit.",
      },
      {
        name: "Jennifer L.",
        city: "California, USA",
        text:
          "Crossing the border for treatment was easier than expected. Excellent quality, honest recommendations, and outstanding results.",
      },
      {
        name: "Carlos R.",
        city: "Mexicali, Mexico",
        text:
          "Modern facilities, friendly staff, and exceptional dental care. I highly recommend Dra. Marlene Group.",
      },
    ],
  },

  es: {
    tag: "Reseñas de Google",
    title: "La confianza de nuestros pacientes habla por nosotros.",
    description:
      "Cada sonrisa refleja nuestro compromiso con la calidad y la atención personalizada.",

    button: "Ver reseñas en Google",

    reviews: [
      {
        name: "Sarah M.",
        city: "Arizona, EE. UU.",
        text:
          "Una experiencia increíble desde el primer momento. Todo el equipo fue amable, profesional y me hizo sentir muy cómoda.",
      },
      {
        name: "Jennifer L.",
        city: "California, EE. UU.",
        text:
          "Cruzar la frontera fue mucho más sencillo de lo que imaginaba. Excelente calidad y resultados que superaron mis expectativas.",
      },
      {
        name: "Carlos R.",
        city: "Mexicali, México",
        text:
          "Instalaciones modernas, excelente atención y tratamientos de alta calidad. Sin duda regresaré.",
      },
    ],
  },
};

export default function Testimonials() {
  const { language } = useLanguage();

  const t = content[language];

  return (
    <section
      className="testimonials section"
      id="testimonials"
    >
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="google-score">
          <div className="google-left">
            <h3>Google</h3>

            <div className="google-stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            <strong>5.0</strong>
          </div>

          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="google-button"
          >
            {t.button}

            <ExternalLink size={16} />
          </a>
        </div>

        <div className="testimonials-grid">
          {t.reviews.map((review) => (
            <article
              key={review.name}
              className="testimonial-card"
            >
              <div className="stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="testimonial-text">
                "{review.text}"
              </p>

              <div className="testimonial-author">
                <h3>{review.name}</h3>

                <span>{review.city}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}