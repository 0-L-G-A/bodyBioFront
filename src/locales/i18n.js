import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from 'locales/en/translation.json';
import uaTranslation from 'locales/ua/translation.json';
import esTranslation from 'locales/es/translation.json';

const loadLangFromStorage = () => {
  try {
    const userData = localStorage.getItem('userData');
    const lang = userData ? JSON.parse(userData).language : null;
    console.log(lang);
    return lang;
  } catch (error) {
    console.error(
      'Помилка при завантаженні мови користувача з localStorage',
      error,
    );
    return null;
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ua: {
        translation: uaTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    fallbackLng: () => loadLangFromStorage() || 'ua',
    debug: true,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
