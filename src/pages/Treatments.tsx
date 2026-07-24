import PageHero from "../components/PageHero/PageHero";
import Services from "../components/Services/Services";

export default function Treatments() {
  return (
    <>
      <PageHero
        title="Our Treatments"
        subtitle="Comprehensive dental care using modern technology and personalized treatment plans for every patient."
      />

      <Services />

    </>
  );
}