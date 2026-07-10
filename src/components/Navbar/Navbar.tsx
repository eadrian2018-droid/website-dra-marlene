import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>Dra.</span> Marlene Group
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Inicio</a>
          <a href="#services" onClick={closeMenu}>Servicios</a>
          <a href="#about" onClick={closeMenu}>Nosotros</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonios</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
        </nav>

        <a href="#contact" className="primary-btn nav-btn">
          Agendar Cita
        </a>

        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}