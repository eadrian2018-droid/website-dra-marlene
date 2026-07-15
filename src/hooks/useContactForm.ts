import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
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
  const { language } = useLanguage();

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

    if (!form.name.trim()) {
      newErrors.name =
        language === "en"
          ? "Name is required."
          : "Nombre requerido.";
    }

    if (!form.email.trim()) {
      newErrors.email =
        language === "en"
          ? "Email is required."
          : "Correo requerido.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email =
        language === "en"
          ? "Invalid email."
          : "Correo inválido.";
    }

    if (!form.phone.trim()) {
      newErrors.phone =
        language === "en"
          ? "Phone number is required."
          : "Teléfono requerido.";
    }

    if (!form.message.trim()) {
      newErrors.message =
        language === "en"
          ? "Please enter a message."
          : "Escribe un mensaje.";
    }

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