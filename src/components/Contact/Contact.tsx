import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { useContactForm } from "../../hooks/useContactForm";
import { sendContactEmail } from "../../services/email";
import { site } from "../../config/site";

import "./Contact.css";

const content = {
  en: {
    tag: "Free Consultation",

    title: "Ready to Transform Your Smile?",

    description:
      "Schedule your consultation today. Our bilingual team is ready to help patients from the United States and Mexico.",

    benefits: [
      "English Speaking Team",
      "Minutes from Arizona",
      "Same-Day Appointments",
      "Personalized Treatment Plans",
    ],

    address: "Address",

    phone: "Phone & WhatsApp",

    email: "Email",

    hours: "Office Hours",

    weekdays: "Monday - Friday",

    saturday: "Saturday",

    sunday: "Sunday",

    closed: "Closed",

    name: "Full Name",

    emailPlaceholder: "Email Address",

    phonePlaceholder: "Phone Number",

    messagePlaceholder: "How can we help you?",

    sending: "Sending...",

    button: "Book My Appointment",

    success:
      "Your request has been received. We'll contact you shortly.",
  },

  es: {
    tag: "Consulta Gratuita",

    title: "Estamos listos para ayudarte.",

    description:
      "Agenda tu consulta hoy mismo. Nuestro equipo está listo para atender pacientes de México y Estados Unidos.",

    benefits: [
      "Atención en Inglés y Español",
      "A minutos de Arizona",
      "Citas el mismo día",
      "Plan de tratamiento personalizado",
    ],

    address: "Dirección",

    phone: "Teléfono / WhatsApp",

    email: "Correo",

    hours: "Horario",

    weekdays: "Lunes a Viernes",

    saturday: "Sábado",

    sunday: "Domingo",

    closed: "Cerrado",

    name: "Nombre completo",

    emailPlaceholder: "Correo electrónico",

    phonePlaceholder: "Teléfono",

    messagePlaceholder: "¿Cómo podemos ayudarte?",

    sending: "Enviando...",

    button: "Agendar mi cita",

    success:
      "Hemos recibido tu solicitud. Nos pondremos en contacto contigo muy pronto.",
  },
};

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

  async function handleSubmit(e: React.FormEvent) {
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
        message: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact-container">

        <div className="contact-info">

          <span className="section-tag">
            {t.tag}
          </span>

          <h2>{t.title}</h2>

          <p className="contact-description">
            {t.description}
          </p>

          <div className="contact-benefits">
            {t.benefits.map((item) => (
              <div className="benefit" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="contact-item">
            <MapPin className="contact-icon" />

            <div>

              <h3>{t.address}</h3>

              <p>
                {site.address.street}
                <br />
                {site.address.neighborhood}
                <br />
                {site.address.city}, {site.address.state},{" "}
                {site.address.country}
              </p>

            </div>

          </div>

          <div className="contact-item">

            <Phone className="contact-icon" />

            <div>

              <h3>{t.phone}</h3>

              <p>

                <a href={`tel:${site.phoneLink}`}>
                  {site.phone}
                </a>

              </p>

            </div>

          </div>

          <div className="contact-item">

            <Mail className="contact-icon" />

            <div>

              <h3>{t.email}</h3>

              <p>

                <a href={`mailto:${site.email}`}>
                  {site.email}
                </a>

              </p>

            </div>

          </div>

          <div className="contact-item">

            <Clock className="contact-icon" />

            <div>

              <h3>{t.hours}</h3>

              <p>

                {t.weekdays}

                <br />

                {site.officeHours.mondayFriday}

                <br />
                <br />

                {t.saturday}

                <br />

                {site.officeHours.saturday}

                <br />
                <br />

                {t.sunday}

                <br />

                {language === "en"
                  ? site.officeHours.sunday
                  : "Cerrado"}

              </p>

            </div>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-header">

            <CalendarDays size={26} />

            <h3>{t.button}</h3>

          </div>

          <input
            type="text"
            name="name"
            placeholder={t.name}
            value={form.name}
            onChange={handleChange}
          />

          {errors.name && <small>{errors.name}</small>}

          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && <small>{errors.email}</small>}

          <input
            type="tel"
            name="phone"
            placeholder={t.phonePlaceholder}
            value={form.phone}
            onChange={handleChange}
          />

          {errors.phone && <small>{errors.phone}</small>}

          <textarea
            rows={6}
            name="message"
            placeholder={t.messagePlaceholder}
            value={form.message}
            onChange={handleChange}
          />

          {errors.message && <small>{errors.message}</small>}

          <button
            className="primary-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? t.sending : t.button}
          </button>

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