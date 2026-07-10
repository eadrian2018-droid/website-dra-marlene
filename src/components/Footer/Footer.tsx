import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>Dra. Marlene Group</h2>

          <p>
            Sonrisas saludables, atención personalizada y tecnología moderna
            para cuidar de ti y tu familia.
          </p>
        </div>

        <div className="footer-links">
          <h3>Enlaces</h3>

          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#about">Nosotros</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="footer-contact">
          <h3>Contacto</h3>

          <p>📍 San Luis Río Colorado, Sonora</p>
          <p>📞 +52 (653) XXX-XXXX</p>
          <p>dra.marlene.v@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Dra. Marlene Group. Todos los derechos reservados.
      </div>
    </footer>
  );
}