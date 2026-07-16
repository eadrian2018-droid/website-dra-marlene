import PageHero from "../components/PageHero/PageHero";
import Contact from "../components/Contact/Contact";
import Map from "../components/Map/Map";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Schedule your visit, request a free consultation, or send us a message. Our team is ready to help you."
      />

      <Contact />

      <Map />
    </>
  );
}