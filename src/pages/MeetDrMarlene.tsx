import PageHero from "../components/PageHero/PageHero";
import About from "../components/About/About";
import Memberships from "../components/Memberships/Memberships";

export default function MeetDrMarlene() {
  return (
    <>
      <PageHero
        title="Meet Dr. Marlene"
        subtitle="Experience personalized dentistry, modern technology, and internationally recognized professional care."
      />

      <About />

      <Memberships />
    </>
  );
}