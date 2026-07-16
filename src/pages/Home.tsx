import Hero from "../components/Hero/Hero";
import TrustBadges from "../components/TrustBadges/TrustBadges";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Stats from "../components/Stats/Stats";
import Services from "../components/Services/Services";
import TravelSection from "../components/TravelSection/TravelSection";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <TrustBadges />

      <WhyChooseUs />

      <Stats />

      <Services />

      <TravelSection />

      <Testimonials />

      <Contact />
    </>
  );
}