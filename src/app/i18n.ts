import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
    en: {
        translation: {
            name: 'Yu Ling Chen',
            position: 'Frontend Engineer',
        },
    },
    zh: {
        translation: {
            name: '陳祐霖',
            position: '前端工程師',
        },
    },
};

i18n.use(initReactI18next) // Passes i18n instance to react-i18next.
    .init({
        resources,
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already safes from XSS
        },
    });

export default i18n;
