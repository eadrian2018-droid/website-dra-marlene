import "./Stats.css";

const stats = [
  {
    number: "10+",
    label: "Years of Experience",
  },
  {
    number: "5000+",
    label: "Happy Patients",
  },
  {
    number: "98%",
    label: "Patient Satisfaction",
  },
  {
    number: "24h",
    label: "Appointment Response",
  },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h2>{stat.number}</h2>

            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}