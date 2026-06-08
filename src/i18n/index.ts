import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/actionpanel.json";
import uk from "./locales/uk/actionpanel.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      actionpanel: en,
    },
    uk: {
      actionpanel: uk,
    },
  },
  lng: "uk",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
