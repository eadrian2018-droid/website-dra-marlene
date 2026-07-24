import PageHero from "../components/PageHero/PageHero";
import Contact from "../components/Contact/Contact";
import VisitPlanning from "../components/VisitPlanning/VisitPlanning";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Talk About Your Smile"
        subtitle="Whether you're traveling from the United States, Canada, or you're a local patient, we're happy to answer your questions before you make any decision."
      />

      <Contact />

      <VisitPlanning />
    </>
  );
}