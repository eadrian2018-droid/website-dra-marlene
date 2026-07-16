import PageHero from "../components/PageHero/PageHero";
import Services from "../components/Services/Services";
import TravelSection from "../components/TravelSection/TravelSection";
import Contact from "../components/Contact/Contact";

export default function Treatments() {
  return (
    <>
      <PageHero
        title="Dental Treatments"
        subtitle="From preventive care to full smile transformations, discover the treatments trusted by patients from the United States and Mexico."
      />

      <Services />

      <TravelSection />

      <Contact />
    </>
  );
}