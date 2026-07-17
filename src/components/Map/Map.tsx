import "./Map.css";

export default function Map() {
  return (
    <section className="map section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Visit Us</span>

          <h2>Conveniently Located in San Luis Río Colorado</h2>

          <p>
            We proudly serve patients from Mexico, Arizona, California and
            surrounding areas.
          </p>
        </div>

        <div className="map-wrapper">
          <iframe
            title="Dra. Marlene Group"
            src="https://www.google.com/maps?q=San+Luis+Rio+Colorado+Sonora&output=embed"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}