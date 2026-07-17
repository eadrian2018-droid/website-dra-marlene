import "./PageHero.css";

interface Props {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}