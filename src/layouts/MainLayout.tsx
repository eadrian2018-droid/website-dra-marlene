import { Outlet } from "react-router-dom";

import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import BackToTop from "../components/BackToTop/BackToTop";
import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {

  return (

    <>

      <ScrollToTop />

      <TopBar />

      <Navbar />

      <main>

        <Outlet />

      </main>

      <Footer />

     {/* <WhatsAppButton /> */}

      <BackToTop />

    </>

  );

}