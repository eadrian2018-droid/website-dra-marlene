import "./Testimonials.css";

import { FaStar } from "react-icons/fa";

import { useLanguage } from "../../context/LanguageContext";


export default function Testimonials() {

  const { t } = useLanguage();


  const reviews = [

    {
      name: t.testimonials.firstName,

      location: t.testimonials.firstLocation,

      text: t.testimonials.firstText,
    },


    {
      name: t.testimonials.secondName,

      location: t.testimonials.secondLocation,

      text: t.testimonials.secondText,
    },


    {
      name: t.testimonials.thirdName,

      location: t.testimonials.thirdLocation,

      text: t.testimonials.thirdText,
    },

  ];


  return (

    <section className="testimonials section">

      <div className="container">


        <div className="section-header">


          <span className="section-tag">

            {t.testimonials.tag}

          </span>



          <h2>

            {t.testimonials.title}

          </h2>



          <p>

            {t.testimonials.description}

          </p>


        </div>



        <div className="testimonials-grid">


          {reviews.map((review) => (


            <article

              className="testimonial-card"

              key={review.name}

            >


              <div className="stars">

                {[...Array(5)].map((_, i) => (

                  <FaStar key={i} />

                ))}


              </div>



              <p>

                "{review.text}"

              </p>



              <h3>

                {review.name}

              </h3>



              <span>

                {review.location}

              </span>


            </article>


          ))}


        </div>


      </div>


    </section>


  );

}