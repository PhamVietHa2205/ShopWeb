import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import vi from './locales/vi';
import en from './locales/en';

const I18n = i18next.use(initReactI18next).init({
    lng: 'vi',
    resources: {
        vi: vi,
        en: en,
    },
    defaultLocale: 'vi',
    react: { useSuspense: false },
})

export default I18n;
