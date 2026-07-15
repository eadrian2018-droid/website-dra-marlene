import {
  Languages,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../config/site";

import "./TopBar.css";

export default function TopBar() {
  const { language, setLanguage, t } = useLanguage();

  function toggleLanguage() {
    setLanguage(language === "en" ? "es" : "en");
  }

  return (
    <div className="topbar">
      <div className="container topbar-container">

        <div className="topbar-information">

          <div className="topbar-item">
            <Star
              size={14}
              fill="currentColor"
            />

            <span>{t.topBar.rating}</span>

          </div>

          <div className="topbar-item">

            <MapPin size={14} />

            <span>{t.topBar.location}</span>

          </div>

          <a
            className="topbar-item"
            href={`tel:${site.phoneLink}`}
          >

            <Phone size={14} />

            <span>{site.phone}</span>

          </a>

        </div>

        <button
          className="topbar-language"
          type="button"
          onClick={toggleLanguage}
          aria-label={
            language === "en"
              ? "Cambiar el idioma a español"
              : "Change language to English"
          }
        >

          <Languages size={15} />

          <span>
            {language === "en"
              ? "🇺🇸 EN"
              : "🇲🇽 ES"}
          </span>

        </button>

      </div>
    </div>
  );
}