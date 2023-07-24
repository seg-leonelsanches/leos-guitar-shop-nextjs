import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { enUs, fr, ptBr } from "../translations";

const translations = {
  'en-US': enUs,
  fr: fr,
  'pt-BR': ptBr
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    resources: translations,
    detection: {
      order: ['path', 'subdomain', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;