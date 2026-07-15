import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./BackToTop.css";

export default function BackToTop() {
  const { language } = useLanguage();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label={
        language === "en"
          ? "Back to top"
          : "Volver arriba"
      }
    >
      ↑
    </button>
  );
}