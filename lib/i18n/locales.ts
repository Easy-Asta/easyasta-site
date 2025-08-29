export const locales = ['en','es','fr','ar','ur'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

export const dir: Record<Locale,'ltr'|'rtl'> = {
  en: 'ltr', es: 'ltr', fr: 'ltr', ar: 'rtl', ur: 'rtl'
}
