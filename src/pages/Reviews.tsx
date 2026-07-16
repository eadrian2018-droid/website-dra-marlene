import PageHero from "../components/PageHero/PageHero";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";

export default function Reviews() {
  return (
    <>
      <PageHero
        title="Patient Reviews"
        subtitle="Read why patients from Arizona, California, and throughout Mexico trust Dra. Marlene Group for their dental care."
      />

      <Testimonials />

      <Contact />
    </>
  );
}