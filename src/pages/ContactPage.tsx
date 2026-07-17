import PageHero from "../components/PageHero/PageHero";
import Contact from "../components/Contact/Contact";
import Map from "../components/Map/Map";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Book your appointment or send us a message. We'd love to help you smile with confidence."
      />

      <Contact />

      <Map />
    </>
  );
}