import { useState } from "react";
import type {
  ContactFormData,
  ContactFormErrors,
} from "../types/contact";

const initialValues: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function useContactForm() {
  const [form, setForm] =
    useState<ContactFormData>(initialValues);

  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const newErrors: ContactFormErrors = {};

    if (!form.name.trim())
      newErrors.name = "Nombre requerido.";

    if (!form.email.trim())
      newErrors.email = "Correo requerido.";

    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Correo inválido.";

    if (!form.phone.trim())
      newErrors.phone = "Teléfono requerido.";

    if (!form.message.trim())
      newErrors.message = "Escribe un mensaje.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  return {
    form,
    errors,
    loading,
    success,
    setLoading,
    setSuccess,
    setForm,
    handleChange,
    validate,
  };
}