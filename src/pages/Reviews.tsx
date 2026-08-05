import SEO from "../components/SEO/SEO";

import "./Reviews.css";

import {
  FaStar,
  FaQuoteLeft,
  FaGoogle,
  FaCheckCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import PageHero from "../components/PageHero/PageHero";


const reviews = [

  {
    name: "Manuel M.",

    review:
      "After my first treatment, I was so happy with the results that I came back a year later for additional dental work. The quality of care made the drive from Phoenix completely worth it.",
  },


  {
    name: "Yubel L.",

    review:
      "One of the best dental experiences I've had. I left extremely happy with my smile and would confidently recommend Dr. Marlene to anyone looking for quality dental care.",
  },


  {
    name: "Joanna M.",

    review:
      "Every visit has been a great experience. Dr. Marlene always explains everything clearly, listens carefully to my concerns, and makes me feel comfortable throughout every treatment.",
  },


  {
    name: "María P.",

    review:
      "Excellent service from the entire team. The clinic is spotless, very hygienic, and everyone is patient and caring throughout the appointment.",
  },


  {
    name: "Erika V.",

    review:
      "The procedure was explained in detail before we started, the clinic was exceptionally clean, the prices were fair, and I even received follow-up messages during my recovery.",
  },


  {
    name: "El Arrizon",

    review:
      "My wisdom tooth had been hurting for a long time, but the extraction was painless and I experienced almost no swelling afterward. Highly recommended.",
  },


  {
    name: "Cristina D.",

    review:
      "Dr. Marlene explained every step of my treatment clearly, making me feel confident and comfortable from the very beginning.",
  },

];



export default function Reviews() {

  return (

    <>

      <SEO

        title="Patient Reviews | Dra. Marlene Group Dental Clinic Mexico"

        description="Read patient reviews from local and international patients who trusted Dra. Marlene Group for dental implants, cosmetic dentistry and personalized dental care in Mexico."

        keywords="Dental Reviews Mexico, Dentist Reviews Mexico, Dra Marlene Reviews, Dental Clinic Mexico, Dentist Near Arizona"

      />



      <PageHero

        title="Patient Reviews"

        subtitle="Verified Google Reviews from Real Patients Who Trusted Their Smiles to Dra. Marlene."

      />



      <section className="reviews-page">


        <div className="container">



          <div className="reviews-rating">


            <div className="rating-stars">

              {[...Array(5)].map((_, i) => (

                <FaStar key={i} />

              ))}

            </div>



            <h2>

              Trusted by Patients Across the U.S. & Mexico

            </h2>



            <p>

              <FaGoogle />

              {" "}

              <strong>5.0 Google Rating</strong>

              {" • "}

              <strong>25 Verified Reviews</strong>

            </p>


          </div>





          <div className="reviews-grid">


            {reviews.map((review, index) => (

              <article

                key={index}

                className="review-card"

              >


                <FaQuoteLeft className="quote-icon" />



                <div className="review-stars">

                  {[...Array(5)].map((_, i) => (

                    <FaStar key={i} />

                  ))}

                </div>



                <h3>

                  {review.name}

                </h3>



                <p>

                  {review.review}

                </p>



              </article>

            ))}





            <article className="review-card recommendation-card">


              <div className="recommendation-icon">

                <FaStar />

              </div>



              <h3>

                Why Patients

                <br />

                Recommend Us

              </h3>



              <ul className="recommendation-list">


                <li>

                  <FaCheckCircle />

                  <span>

                    Explains Everything Clearly

                  </span>

                </li>



                <li>

                  <FaCheckCircle />

                  <span>

                    Professional & Caring Team

                  </span>

                </li>



                <li>

                  <FaCheckCircle />

                  <span>

                    Clean & Modern Clinic

                  </span>

                </li>



                <li>

                  <FaCheckCircle />

                  <span>

                    Painless Treatments

                  </span>

                </li>



                <li>

                  <FaCheckCircle />

                  <span>

                    Outstanding Results

                  </span>

                </li>



                <li>

                  <FaCheckCircle />

                  <span>

                    Highly Recommended

                  </span>

                </li>


              </ul>


            </article>


          </div>





          <section className="gallery-section">


            <h2>

              Smile Gallery

            </h2>



            <div className="gallery-grid">


              <div className="gallery-card">

                Before & After

              </div>


              <div className="gallery-card">

                Smile Makeovers

              </div>


              <div className="gallery-card">

                Veneers

              </div>


              <div className="gallery-card">

                Dental Implants

              </div>


            </div>


          </section>





          <section className="reviews-cta">


            <h2>

              Ready to Become Our Next Happy Patient?

            </h2>



            <p>

              Join hundreds of patients who have trusted
              Dra. Marlene with their smiles. We'd love to
              answer your questions and help you plan your
              treatment with confidence.

            </p>



            <div className="reviews-cta-buttons">



              <a

                href="https://www.google.com/maps/place/Dra+Marlene+Verdugo/data=!4m2!3m1!1s0x0:0x1ead79917b3811cf?sa=X&ved=1t:2428&ictx=111"

                target="_blank"

                rel="noopener noreferrer"

                className="cta-button secondary"

              >

                <FaGoogle />

                Read All Google Reviews

              </a>





              <Link

                to="/contact"

                className="cta-button"

              >

                Get Your Free Consultation

              </Link>



            </div>


          </section>



        </div>


      </section>


    </>

  );

}