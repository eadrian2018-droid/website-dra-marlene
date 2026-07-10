import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { sendContactEmail } from "../../services/email";
import { useContactForm } from "../../hooks/useContactForm";
import "./Contact.css";

export default function Contact() {
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

      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      alert("No fue posible enviar el mensaje. Inténtalo nuevamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="section-tag">Contáctanos</span>

          <h2>Agenda tu cita hoy mismo.</h2>

          <p>
            Estamos listos para ayudarte a recuperar tu sonrisa.
          </p>

          <div className="contact-item">
            <MapPin className="contact-icon" />
            <div>
              <h3>Dirección</h3>
              <p>San Luis Río Colorado, Sonora</p>
            </div>
          </div>

          <div className="contact-item">
            <Phone className="contact-icon" />
            <div>
              <h3>Teléfono</h3>
              <p>+52 (653) XXX-XXXX</p>
            </div>
          </div>

          <div className="contact-item">
            <Mail className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>dra.marlene.v@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <Clock className="contact-icon" />
            <div>
              <h3>Horario</h3>
              <p>Lunes a Viernes • 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={form.name}
            onChange={handleChange}
          />

          {errors.name && <small>{errors.name}</small>}

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && <small>{errors.email}</small>}

          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={form.phone}
            onChange={handleChange}
          />

          {errors.phone && <small>{errors.phone}</small>}

          <textarea
            rows={6}
            name="message"
            placeholder="¿Cómo podemos ayudarte?"
            value={form.message}
            onChange={handleChange}
          />

          {errors.message && <small>{errors.message}</small>}

          <button
            type="submit"
            className="primary-btn"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {success && (
            <p
              style={{
                color: "#0b8f72",
                marginTop: 20,
                fontWeight: 600,
              }}
            >
              ¡Mensaje enviado correctamente!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}