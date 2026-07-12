import "./App.css";

import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustBar from "./components/TrustBar/TrustBar";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />

      <TrustBar />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />

      <BackToTop />
      <WhatsAppButton />
    </>
  );
}

export default App;