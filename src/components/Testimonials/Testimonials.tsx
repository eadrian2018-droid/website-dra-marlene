import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Arizona, USA",
    text: "Excelente atención desde el primer contacto. Todo el equipo fue muy profesional y el resultado superó mis expectativas.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    location: "Mexicali, México",
    text: "El consultorio es moderno, limpio y el trato es increíble. Definitivamente regresaré para futuros tratamientos.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "California, USA",
    text: "Viajé desde Estados Unidos y todo el proceso fue muy sencillo. Calidad excelente y precios justos.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonios</span>

          <h2>Lo que opinan nuestros pacientes.</h2>

          <p>
            La confianza de nuestros pacientes es nuestra mayor satisfacción.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {"★".repeat(item.rating)}
              </div>

              <p className="testimonial-text">
                "{item.text}"
              </p>

              <div className="testimonial-author">
                <h3>{item.name}</h3>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}