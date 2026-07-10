import "./Map.css";

export default function Map() {
  return (
    <section className="map section" id="location">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            Nuestra Ubicación
          </span>

          <h2>Visítanos en San Luis Río Colorado.</h2>

          <p>
            Nos encontramos en una ubicación de fácil acceso para pacientes de
            México y Estados Unidos.
          </p>
        </div>

        <div className="map-container">
          <iframe
            title="Dra. Marlene Group"
            src="https://www.google.com/maps?q=San+Luis+Rio+Colorado,+Sonora&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}