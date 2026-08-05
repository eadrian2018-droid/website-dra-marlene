import SEO from "../components/SEO/SEO";

import Hero from "../components/Hero/Hero";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import TravelSection from "../components/TravelSection/TravelSection";


export default function Home() {

  return (

    <>

      <SEO

        title="Dra. Marlene Group | Dentist in Mexico Near Arizona"

        description="Premium dental care in San Luis Río Colorado, Mexico, near Arizona. Dental implants, veneers, cosmetic dentistry and personalized treatments for patients from the United States and Mexico."

        keywords="Dentist Mexico, Dentist Near Arizona, Dental Implants Mexico, Veneers Mexico, Cosmetic Dentistry Mexico, Dental Tourism Mexico"

      />


      <Hero />

      <WhyChooseUs />

      <TravelSection />

    </>

  );

}