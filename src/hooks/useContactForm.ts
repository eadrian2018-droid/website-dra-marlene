import { useState, type ChangeEvent } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  facebookProfile: string;
  treatment: string;
  message: string;
}

interface ContactErrors {
  name?: string;
  email?: string;
  phone?: string;
  contactMethod?: string;
  facebookProfile?: string;
  treatment?: string;
  message?: string;
}

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  contactMethod: "",
  facebookProfile: "",
  treatment: "",
  message: "",
};

export function useContactForm() {
  const [form, setForm] =
    useState<ContactFormData>(initialForm);

  const [errors, setErrors] =
    useState<ContactErrors>({});

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  function handleChange(
    e: ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (
        name === "contactMethod" &&
        value !== "Facebook Messenger"
      ) {
        updated.facebookProfile = "";
      }

      return updated;
    });

    if (
      errors[name as keyof ContactErrors]
    ) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (
      name === "contactMethod" &&
      value !== "Facebook Messenger"
    ) {
      setErrors((prev) => ({
        ...prev,
        facebookProfile: "",
      }));
    }
  }

  function validate() {
    const newErrors: ContactErrors = {};

    if (!form.name.trim()) {
      newErrors.name =
        "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email =
        "Please enter your email.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        form.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone =
        "Please enter your phone number.";
    }

    if (!form.contactMethod.trim()) {
      newErrors.contactMethod =
        "Please select your preferred contact method.";
    }

    if (
      form.contactMethod ===
        "Facebook Messenger" &&
      !form.facebookProfile.trim()
    ) {
      newErrors.facebookProfile =
        "Please enter your Facebook name or profile.";
    }

    if (!form.treatment.trim()) {
      newErrors.treatment =
        "Please select a treatment.";
    }

    if (!form.message.trim()) {
      newErrors.message =
        "Please tell us how we can help you.";
    } else if (
      form.message.trim().length < 20
    ) {
      newErrors.message =
        "Please provide a little more detail.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  }

  function resetForm() {
    setForm(initialForm);
    setErrors({});
    setSuccess(false);
  }

  return {
    form,
    setForm,
    resetForm,
    errors,
    loading,
    success,
    setLoading,
    setSuccess,
    handleChange,
    validate,
  };
}