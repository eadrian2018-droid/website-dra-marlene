import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";


export default function Footer() {

  const { t } = useLanguage();


  return (

    <footer className="footer">

      <div className="container footer-grid">


        <div>

          <h3>
            Dr. Marlene Group
          </h3>


          <p>
            {t.footer.description}
          </p>


        </div>




        <div>

          <h4>
            {t.footer.navigationTitle}
          </h4>


          <Link to="/">
            {t.navigation.home}
          </Link>


          <Link to="/meet-dr-marlene">
            {t.navigation.about}
          </Link>


          <Link to="/treatments">
            {t.navigation.services}
          </Link>


          <Link to="/reviews">
            {t.navigation.testimonials}
          </Link>


          <Link to="/contact">
            {t.navigation.contact}
          </Link>


        </div>





        <div>

          <h4>
            {t.footer.contactTitle}
          </h4>


          <p>
            San Luis Río Colorado, Sonora
          </p>


          <p>
            Mexico
          </p>


          <p>
            {t.contact.email}
          </p>


        </div>





        <div>

          <h4>
            Follow Us
          </h4>


          <div className="footer-social">


            <a
              href="https://facebook.com/dentistamarlene"
              target="_blank"
              rel="noreferrer"
            >

              <FaFacebookF />

            </a>



            <a
              href="https://instagram.com/dra.marleneverdugo_"
              target="_blank"
              rel="noreferrer"
            >

              <FaInstagram />

            </a>



            <a
              href="https://wa.me/526532080587"
              target="_blank"
              rel="noreferrer"
            >

              <FaWhatsapp />

            </a>


          </div>


        </div>


      </div>





      <div className="footer-bottom">

        © {new Date().getFullYear()} Dr. Marlene Group.{" "}
        {t.footer.rights}

      </div>


    </footer>

  );

}