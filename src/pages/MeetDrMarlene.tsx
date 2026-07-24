import PageHero from "../components/PageHero/PageHero";
import About from "../components/About/About";
import Memberships from "../components/Memberships/Memberships";


export default function MeetDrMarlene() {
  return (
    <>
      <PageHero
        title="Meet Dr. Marlene Verdugo"
        subtitle="Providing high-quality, personalized dental care with modern technology, continuing education, and a commitment to creating healthy, confident smiles."
      />

      <About />

      <Memberships />

      
    </>
  );
}