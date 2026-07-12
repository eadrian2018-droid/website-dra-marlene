import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import "./Navbar.css";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleLanguage() {
    setLanguage(language === "en" ? "es" : "en");
    closeMenu();
  }

  return (
    <header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="container navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Dra. Marlene Group"
        >
          <span className="navbar-logo-primary">DRA. MARLENE</span>
          <span className="navbar-logo-secondary">GROUP</span>
        </a>

        <nav
          className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>
            {t.navigation.home}
          </a>

          <a href="#services" onClick={closeMenu}>
            {t.navigation.services}
          </a>

          <a href="#about" onClick={closeMenu}>
            {t.navigation.about}
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            {t.navigation.testimonials}
          </a>

          <a href="#contact" onClick={closeMenu}>
            {t.navigation.contact}
          </a>

          <button
            className="navbar-mobile-language"
            type="button"
            onClick={toggleLanguage}
          >
            <Languages size={18} />
            {language === "en" ? "🇲🇽 Español" : "🇺🇸 English"}
          </button>

          <a
            href="#contact"
            className="navbar-mobile-appointment"
            onClick={closeMenu}
          >
            {t.navigation.appointment}
          </a>
        </nav>

        <div className="navbar-actions">
          <a href="#contact" className="navbar-appointment">
            {t.navigation.appointment}
          </a>

          <button
            className={`navbar-menu-button ${
              menuOpen ? "navbar-menu-button-open" : ""
            }`}
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen
                ? t.navigation.closeMenu
                : t.navigation.openMenu
            }
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}