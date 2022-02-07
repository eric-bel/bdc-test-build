import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru/translation"
import en from "./locales/en/translation"
import ge from "./locales/ge/translation"


i18n
  // Подключение бэкенда i18next
  // .use(Backend)
  // Автоматическое определение языка
  //   .use(LanguageDetector)
  // модуль инициализации
  .use(initReactI18next)
  .init({
    resources: {
      ru,
      en, 
      ge
    },
    react: {
      useSuspense: false,
    },
    // Стандартный язык
    lng: "ru",
    fallbackLng: "ru",
    debug: true,
    // Распознавание и кэширование языковых кук
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
