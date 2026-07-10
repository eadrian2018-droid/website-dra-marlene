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
          <span className="section-tag">
            Agenda tu cita
          </span>

          <h2>Estamos listos para ayudarte.</h2>

          <p>
            Si tienes alguna pregunta o deseas agendar una cita,
            contáctanos. Será un gusto atenderte.
          </p>

          <div className="contact-item">
            <MapPin className="contact-icon" />

            <div>
              <h3>Dirección</h3>

              <p>
                Callejón Juárez y 6ta #350 B<br />
                Col. Comercial<br />
                San Luis Río Colorado, Sonora, México
              </p>
            </div>
          </div>

          <div className="contact-item">
            <Phone className="contact-icon" />

            <div>
              <h3>Teléfono / WhatsApp</h3>

              <p>
                <a href="tel:+526532080587">
                  +52 653 208 0587
                </a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <Mail className="contact-icon" />

            <div>
              <h3>Correo</h3>

              <p>
                <a href="mailto:dra.marlene.v@gmail.com">
                  dra.marlene.v@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <Clock className="contact-icon" />

            <div>
              <h3>Horario</h3>

              <p>
                Lunes a Viernes
                <br />
                9:00 AM – 1:00 PM
                <br />
                4:00 PM – 8:00 PM
                <br />
                <br />
                Sábado
                <br />
                9:00 AM – 2:00 PM
                <br />
                <br />
                Domingo
                <br />
                Cerrado
              </p>
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
            className="primary-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {success && (
            <p
              style={{
                color: "#0b8f72",
                marginTop: "20px",
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