import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Lock,
  Mail,
  MapPin,
  Phone,
  Plane,
  Hotel,
  Navigation,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { useContactForm } from "../../hooks/useContactForm";
import { sendContactEmail } from "../../services/email";
import { site } from "../../config/site";
import { content } from "./contact.content";

import "./Contact.css";


export default function Contact() {

  const { language } = useLanguage();

  const t = content[language];


  const {

    form,

    errors,

    loading,

    success,

    setLoading,

    setSuccess,

    setForm,

    handleChange,

    validate,

  } = useContactForm();



  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();


    if (!validate()) return;


    try {

      setLoading(true);


      await sendContactEmail(form);


      setSuccess(true);


      setForm({

        name: "",

        email: "",

        phone: "",

        contactMethod: "",

        facebookProfile: "",

        treatment: "",

        message: "",

      });


      setTimeout(() => {

        setSuccess(false);

      }, 5000);


    } finally {

      setLoading(false);

    }

  }



  return (

    <section
      id="contact"
      className="contact section"
    >

      <div className="container contact-container">



        {/* LEFT SIDE */}


        <div className="contact-info">


          <span className="section-tag">

            {t.tag}

          </span>



          <h2>

            Let's Plan Your

            <br />

            Dental Journey

          </h2>



          <p className="contact-description">

            {t.description}

          </p>




          <div className="contact-benefits">


            {t.benefits.map((benefit) => (


              <div
                key={benefit}
                className="benefit"
              >

                <CheckCircle2 size={18}/>


                <span>

                  {benefit}

                </span>


              </div>


            ))}


          </div>





          {/* TRAVEL SUPPORT */}



          <div className="travel-support">


            <div className="travel-support-card">


              <Plane />


              <div>

                <h4>

                  Planning Your Dental Trip?

                </h4>


                <p>

                  Personalized guidance before traveling
                  to Mexico.

                </p>

              </div>


            </div>




            <div className="travel-support-card">


              <Hotel />


              <div>

                <h4>

                  Travel Assistance

                </h4>


                <p>

                  Hotel recommendations and border
                  crossing guidance.

                </p>


              </div>


            </div>




            <div className="travel-support-card">


              <Navigation />


              <div>

                <h4>

                  Easy Access From Arizona

                </h4>


                <p>

                  Located minutes away from the
                  United States border.

                </p>


              </div>


            </div>



          </div>





          {/* CONTACT DETAILS */}



          <div className="contact-details-wrapper">


            <div className="contact-details">





              <div className="contact-item">


                <div className="contact-top">


                  <MapPin
                    size={20}
                    className="contact-icon"
                  />


                  <h4>

                    {t.address}

                  </h4>


                </div>


                <p>

                  {site.address.street}

                  <br/>

                  {site.address.neighborhood}

                  <br/>

                  {site.address.city},{" "}

                  {site.address.state}

                  <br/>

                  {site.address.country}

                </p>


              </div>







              <div className="contact-item">


                <div className="contact-top">


                  <Phone
                    size={20}
                    className="contact-icon"
                  />


                  <h4>

                    {t.phone}

                  </h4>


                </div>


                <a href={`tel:${site.phoneLink}`}>

                  {site.phone}

                </a>


              </div>






              <div className="contact-item">


                <div className="contact-top">


                  <Mail
                    size={20}
                    className="contact-icon"
                  />


                  <h4>

                    {t.email}

                  </h4>


                </div>


                <a href={`mailto:${site.email}`}>

                  {site.email}

                </a>


              </div>






              <div className="contact-item">


                <div className="contact-top">


                  <Clock
                    size={20}
                    className="contact-icon"
                  />


                  <h4>

                    {t.hours}

                  </h4>


                </div>


                <p>


                  <strong>

                    {t.weekdays}

                  </strong>


                  <br/>

                  {site.officeHours.mondayFriday}


                  <br/><br/>


                  <strong>

                    {t.saturday}

                  </strong>


                  <br/>

                  {site.officeHours.saturday}


                  <br/><br/>


                  <strong>

                    {t.sunday}

                  </strong>


                  <br/>

                  {t.closed}


                </p>


              </div>





            </div>


          </div>



        </div>





        {/* FORM */}



        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >



          <div className="form-header">


            <div className="form-icon">


              <CalendarDays size={24}/>


            </div>



            <div>


              <h3>

                {t.formTitle}

              </h3>


              <p>

                {t.formSubtitle}

              </p>


            </div>


          </div>



          <input
            type="text"
            name="name"
            placeholder={t.name}
            value={form.name}
            onChange={handleChange}
          />


          {errors.name && (
            <small>{errors.name}</small>
          )}




          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
          />


          {errors.email && (
            <small>{errors.email}</small>
          )}




          <input
            type="tel"
            name="phone"
            placeholder={t.phonePlaceholder}
            value={form.phone}
            onChange={handleChange}
          />


          {errors.phone && (
            <small>{errors.phone}</small>
          )}


          {errors.phone && (
            <small>{errors.phone}</small>
          )}





          <select

            name="contactMethod"

            value={form.contactMethod}

            onChange={handleChange}

          >


            <option value="">

              {t.contactMethod}

            </option>



            {t.contactMethods.map((method) => (


              <option

                key={method}

                value={method}

              >

                {method}

              </option>


            ))}


          </select>



          {errors.contactMethod && (

            <small>

              {errors.contactMethod}

            </small>

          )}






          {form.contactMethod ===

            "Facebook Messenger" && (


            <>


              <input

                type="text"

                name="facebookProfile"

                placeholder={t.facebookProfile}

                value={form.facebookProfile}

                onChange={handleChange}

              />



              {errors.facebookProfile && (


                <small>

                  {errors.facebookProfile}

                </small>


              )}



            </>


          )}






          <select

            name="treatment"

            value={form.treatment}

            onChange={handleChange}

          >



            <option value="">


              {t.treatment}


            </option>





            {t.treatments.map((treatment) => (



              <option

                key={treatment}

                value={treatment}

              >

                {treatment}

              </option>


            ))}



          </select>





          {errors.treatment && (


            <small>

              {errors.treatment}

            </small>


          )}






          <textarea

            rows={6}

            name="message"

            placeholder={t.messagePlaceholder}

            value={form.message}

            onChange={handleChange}

          />





          {errors.message && (


            <small>

              {errors.message}

            </small>


          )}






          <button

            className="primary-btn"

            type="submit"

            disabled={loading}

          >



            {loading

              ? t.sending

              : t.button}



          </button>






          <div className="form-privacy">


            <Lock size={16} />



            <span>

              {t.privacy}

            </span>



          </div>







          {success && (


            <p className="contact-success">


              {t.success}


            </p>


          )}




        </form>



      </div>



    </section>



  );


}