import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import   translationsEn from './messages/en.json'
import   translationsFr from './messages/tr.json'

const i18=i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      fr: { translation: translationsFr },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });


  export default i18