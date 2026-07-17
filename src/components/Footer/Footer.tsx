import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Dra. Marlene Group</h3>

          <p>
            Modern dentistry with personalized care for patients from Mexico,
            Arizona, and California.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/meet-dr-marlene">Meet Dr. Marlene</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>

          <p>San Luis Río Colorado, Sonora</p>
          <p>Mexico</p>
          <p>dra.marlene.v.citas@gmail.com</p>
        </div>

        <div>
          <h4>Follow Us</h4>

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
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Dra. Marlene Group. All rights reserved.
      </div>
    </footer>
  );
}