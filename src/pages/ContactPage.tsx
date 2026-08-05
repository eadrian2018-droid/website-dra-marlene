import SEO from "../components/SEO/SEO";

import PageHero from "../components/PageHero/PageHero";
import Contact from "../components/Contact/Contact";
import VisitPlanning from "../components/VisitPlanning/VisitPlanning";


export default function ContactPage() {

  return (

    <>

      <SEO

        title="Contact Dra. Marlene Group | Dental Care in Mexico Near Arizona"

        description="Contact Dra. Marlene Group for premium dental care in San Luis Río Colorado, Mexico. We help local and international patients with treatments, pricing, travel planning and personalized dental consultations."

        keywords="Contact Dentist Mexico, Dentist Near Arizona, Dental Consultation Mexico, Dental Tourism Mexico, San Luis Rio Colorado Dentist"

      />


      <PageHero

        title="Let's Talk About Your Smile"

        subtitle="Whether you're traveling from the United States, Canada, or you're a local patient, we're happy to answer your questions before you make any decision."

      />


      <Contact />


      <VisitPlanning />


    </>

  );

}