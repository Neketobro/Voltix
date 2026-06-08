import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import actionpanelEN from "./locales/en/actionpanel.json";
import actionpanelUK from "./locales/uk/actionpanel.json";
import inputEN from "./locales/en/input.json";
import inputUK from "./locales/uk/input.json";
import benefiteEN from "./locales/en/benefite.json";
import benefiteUK from "./locales/uk/benefite.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      actionpanel: actionpanelEN,
      input: inputEN,
      benefite: benefiteEN
    },
    uk: {
      actionpanel: actionpanelUK,
      input: inputUK,
      benefite: benefiteUK
    },
  },
  lng: "uk",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
