import { Expand } from "lucide-react";
import "./Gallery.css";

import img1 from "../../assets/gallery/gallery-1.jpg";
import img2 from "../../assets/gallery/gallery-2.jpg";
import img3 from "../../assets/gallery/gallery-3.jpg";
import img4 from "../../assets/gallery/gallery-4.jpg";
import img5 from "../../assets/gallery/gallery-5.jpg";
import img6 from "../../assets/gallery/gallery-6.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nuestra Clínica</span>

          <h2>
            Instalaciones modernas diseñadas para tu comodidad.
          </h2>

          <p>
            Conoce nuestras áreas de atención y el ambiente donde cuidaremos tu
            sonrisa.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={image}
                alt={`Galería ${index + 1}`}
              />

              <div className="gallery-overlay">
                <Expand size={34} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}