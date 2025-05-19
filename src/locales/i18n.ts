import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import pt from './pt-br.json';

const resources = {
  pt: {translation: pt},
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lang: string) => void) => {
    const locales = RNLocalize.getLocales();
    if (Array.isArray(locales) && locales.length > 0) {
      callback(locales[0].languageTag);
      return;
    }
    callback('en');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector as any)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    compatibilityJSON: 'v4', // <--- aqui
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
