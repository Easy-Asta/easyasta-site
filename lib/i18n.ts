export type Locale = 'en' | 'es' | 'fr' | 'ar' | 'ur';

// Lazy load translation dictionaries. Each locale file is in JSON format
// and exported as the default export from its module. When adding new
// languages, ensure they are included here.
const dictionaries: Record<Locale, () => Promise<{ [key: string]: string }>> = {
  en: () => import('../messages/en.json').then((module) => module.default),
  es: () => import('../messages/es.json').then((module) => module.default),
  fr: () => import('../messages/fr.json').then((module) => module.default),
  ar: () => import('../messages/ar.json').then((module) => module.default),
  ur: () => import('../messages/ur.json').then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}