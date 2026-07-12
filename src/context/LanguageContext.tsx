import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import type { ReactNode } from "react";

import en from "../locales/en";
import es from "../locales/es";

type Language = "en" | "es";

const translations: Record<Language, any> = {
  en,
  es,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: any;
}

const LanguageContext =
  createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] =
    useState<Language>("en");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}