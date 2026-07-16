import { Outlet } from "react-router-dom";

import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import BackToTop from "../components/BackToTop/BackToTop";

export default function MainLayout() {
  return (
    <>
      <TopBar />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />

      <BackToTop />
    </>
  );
}