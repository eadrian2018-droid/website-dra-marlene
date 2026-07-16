import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { NavLink } from "react-router-dom";

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function toggleLanguage() {
    setLanguage(language === "en" ? "es" : "en");
    closeMenu();
  }

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container navbar-container">

        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="navbar-logo-primary">
            DRA. MARLENE
          </span>

          <span className="navbar-logo-secondary">
            GROUP
          </span>
        </NavLink>

        <nav
          className={`navbar-links ${
            menuOpen
              ? "navbar-links-open"
              : ""
          }`}
        >

          <NavLink
            to="/"
            onClick={closeMenu}
          >
            {t.navigation.home}
          </NavLink>

          <NavLink
            to="/treatments"
            onClick={closeMenu}
          >
            {t.navigation.services}
          </NavLink>

          <NavLink
            to="/meet-dr-marlene"
            onClick={closeMenu}
          >
            {t.navigation.about}
          </NavLink>

          <NavLink
            to="/reviews"
            onClick={closeMenu}
          >
            {t.navigation.testimonials}
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            {t.navigation.contact}
          </NavLink>

          <button
            className="navbar-mobile-language"
            type="button"
            onClick={toggleLanguage}
          >
            <Languages size={18} />

            {language === "en"
              ? "🇲🇽 Español"
              : "🇺🇸 English"}
          </button>

          <NavLink
            to="/contact"
            className="navbar-mobile-appointment"
            onClick={closeMenu}
          >
            {t.navigation.appointment}
          </NavLink>

        </nav>

        <div className="navbar-actions">

          <NavLink
            to="/contact"
            className="navbar-appointment"
          >
            {t.navigation.appointment}
          </NavLink>

          <button
            className={`navbar-menu-button ${
              menuOpen
                ? "navbar-menu-button-open"
                : ""
            }`}
            type="button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
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