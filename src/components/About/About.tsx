import "./About.css";

import {
  Award,
  GraduationCap,
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import doctorImage from "../../assets/images/about/dr-marlene-about.jpg";
import doctorPortrait from "../../assets/images/about/dr-marlene-portrait.jpg";

export default function About() {

  const { t } = useLanguage();

  return (

    <section className="about section">

      <div className="container">

        <div className="about-hero">

          <div className="about-hero-content">

            <span className="section-tag">

              {t.about.tag}

            </span>


            <h2>

              Meet Dr. Marlene

              <br />

              Verdugo

            </h2>


            <p className="about-intro">

              {t.about.paragraphOne}

            </p>


            <p className="about-intro">

              {t.about.paragraphTwo}

            </p>



            <div className="about-stats">


              <div className="about-stat">

                <Award size={22} />

                <div>

                  <strong>

                    10+

                  </strong>

                  <span>

                    {t.about.stats.experience}

                  </span>

                </div>

              </div>



              <div className="about-stat">

                <ShieldCheck size={22} />

                <div>

                  <strong>

                    5,000+

                  </strong>

                  <span>

                    {t.about.stats.patients}

                  </span>

                </div>

              </div>



              <div className="about-stat">

                <GraduationCap size={22} />

                <div>

                  <strong>

                    Continuing

                  </strong>

                  <span>

                    {t.about.stats.education}

                  </span>

                </div>

              </div>



              <div className="about-stat">

                <Globe size={22} />

                <div>

                  <strong>

                    English

                  </strong>

                  <span>

                    {t.about.stats.language}

                  </span>

                </div>

              </div>


            </div>


          </div>



          <div className="about-hero-image">

            <div className="image-decoration"></div>

            <img

              src={doctorImage}

              alt="Dr. Marlene Verdugo"

            />

          </div>


        </div>



        <div className="about-story">


          <div className="about-story-image">

            <img

              src={doctorPortrait}

              alt="Dr. Marlene"

            />

          </div>



          <div className="about-story-content">


            <span className="section-tag">

              {t.about.tag}

            </span>



            <h2>

              {t.about.title}

            </h2>



            <p>

              {t.about.personalizedText}

            </p>



            <p>

              {t.about.technologyText}

            </p>



            <div className="about-signature">


              <strong>

                Dr. Marlene Verdugo

              </strong>


              <span>

                General & Cosmetic Dentist

              </span>


            </div>



          </div>




          <div className="about-education-card">


            <span className="education-tag">

              Education & Training

            </span>



            <h3>

              Always Learning.

              <br />

              Always Improving.

            </h3>



            <p>

              {t.about.technologyText}

            </p>



            <ul>


              <li>

                <CheckCircle2 size={18} />

                <span>

                  Doctor of Dental Surgery (DDS)

                </span>

              </li>



              <li>

                <CheckCircle2 size={18} />

                <span>

                  Advanced Aesthetic Dentistry

                </span>

              </li>



              <li>

                <CheckCircle2 size={18} />

                <span>

                  Implant & Restorative Dentistry

                </span>

              </li>



              <li>

                <CheckCircle2 size={18} />

                <span>

                  Continuing Education Every Year

                </span>

              </li>


            </ul>


          </div>


        </div>


      </div>


    </section>


  );

}