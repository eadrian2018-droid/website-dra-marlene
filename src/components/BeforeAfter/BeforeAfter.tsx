import { useState } from "react";
import "./BeforeAfter.css";

import beforeImage from "../../assets/gallery/before-1.jpg";
import afterImage from "../../assets/gallery/after-1.jpg";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  function handleMove(event: React.ChangeEvent<HTMLInputElement>) {
    setPosition(Number(event.target.value));
  }

  return (
    <section className="before-after section" id="before-after">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Antes y Después</span>

          <h2>Resultados reales de nuestros pacientes.</h2>

          <p>
            Desliza la barra para comparar el antes y el después del tratamiento.
          </p>
        </div>

        <div className="compare-wrapper">
          <img
            src={beforeImage}
            alt="Antes"
            className="compare-image"
          />

          <div
            className="compare-after"
            style={{
              width: `${position}%`,
            }}
          >
            <img
              src={afterImage}
              alt="Después"
              className="compare-image"
            />
          </div>

          <div
            className="compare-line"
            style={{
              left: `${position}%`,
            }}
          >
            <div className="compare-handle"></div>
          </div>

          <input
            className="compare-slider"
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={handleMove}
          />
        </div>
      </div>
    </section>
  );
}