import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import enTranslation from "../public/locales/en.json"
import ptTranslation from "../public/locales/pt.json"

i18n
    .use(initReactI18next)
    .init({
        lng: 'pt',
        fallbackng: 'pt',
        resources: {
            en: {
                translation: enTranslation,
            },
            pt: {
                translation: ptTranslation
            },
        },
        interpolation: {
            escapeValue: false
        },
    });

export default i18n;

