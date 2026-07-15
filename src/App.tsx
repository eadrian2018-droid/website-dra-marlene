import "./App.css";

import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustBadges from "./components/TrustBadges/TrustBadges";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import TravelSection from "./components/TravelSection/TravelSection";
import About from "./components/About/About";
import Memberships from "./components/Memberships/Memberships";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import BackToTop from "./components/BackToTop/BackToTop";

export default function App() {
  return (
    <>
      <TopBar />

      <Navbar />

      <main>

        <Hero />

        <TrustBadges />

        <WhyChooseUs />

        <Stats />

        <Services />

        <TravelSection />

        <About />

        <Memberships />

        <Testimonials />

        <Contact />

        <Map />

      </main>

      <Footer />

      <WhatsAppButton />

      <BackToTop />
    </>
  );
}