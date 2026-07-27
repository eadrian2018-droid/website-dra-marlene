import "./About.css";

import {

  Award,

  GraduationCap,

  Globe,

  ShieldCheck,

  CheckCircle2,

} from "lucide-react";

import doctorImage from "../../assets/images/about/dr-marlene-about.jpg";
import doctorPortrait from "../../assets/images/about/dr-marlene-portrait.jpg";

export default function About() {

  return (

    <section className="about section">

      <div className="container">

        <div className="about-hero">

          <div className="about-hero-content">

            <span className="section-tag">

              Meet The Doctor

            </span>

            <h2>

              Meet Dr. Marlene

              <br />

              Verdugo

            </h2>

            <p className="about-intro">

              With more than a decade of experience, Dr. Marlene
              combines advanced clinical training with a genuine
              passion for helping patients smile with confidence.

            </p>

            <p className="about-intro">

              Every treatment is planned with honesty,
              precision, and personalized attention,
              creating a comfortable experience for local
              and international patients alike.

            </p>

            <div className="about-stats">

              <div className="about-stat">

                <Award size={22} />

                <div>

                  <strong>

                    10+ Years

                  </strong>

                  <span>

                    Experience

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

                    Happy Patients

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

                    Education

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

                    & Spanish Care

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

              About Dr. Marlene

            </span>

            <h2>

              Committed to Excellence

              <br />

              in Every Smile

            </h2>

            <p>

              Dr. Marlene believes outstanding dentistry begins
              with listening. Every patient receives a customized
              treatment plan designed around their goals,
              comfort, and long-term oral health.

            </p>

            <p>

              By combining modern technology, continuing education,
              and a conservative approach, she focuses on creating
              healthy, natural-looking smiles that last.

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
              Always Improving.

            </h3>

            <p>

              Continuing education allows Dr. Marlene to
              provide modern, predictable and minimally
              invasive treatments using the latest
              techniques and technology.

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