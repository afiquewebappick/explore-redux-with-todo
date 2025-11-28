import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslation from "./locales/en/translation.json";
import bnTranslation from "./locales/bn/translation.json";
import hiTranslation from "./locales/hi/translation.json";
import arTranslation from "./locales/ar/translation.json";
import frTranslation from "./locales/fr/translation.json";

// Define resources
const resources = {
  en: {
    translation: enTranslation,
  },
  bn: {
    translation: bnTranslation,
  },
  hi: {
    translation: hiTranslation,
  },
  ar: {
    translation: arTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: "en", // Fallback language if translation is missing
    lng: localStorage.getItem("selectedLang") || "en", // Default language
    debug: false, // Set to true for debugging

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      // Order of language detection
      order: ["localStorage", "navigator"],
      // Cache user language preference
      caches: ["localStorage"],
      lookupLocalStorage: "selectedLang",
    },
  });

export default i18n;