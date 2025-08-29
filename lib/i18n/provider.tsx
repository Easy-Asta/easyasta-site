'use client'
import { createContext, useContext, useMemo } from 'react'
import en from './messages/en.json'
import es from './messages/es.json'
import fr from './messages/fr.json'
import ar from './messages/ar.json'
import ur from './messages/ur.json'

const dict = { en, es, fr, ar, ur }
type Locale = keyof typeof dict

type Ctx = { t: (k: string) => string, locale: Locale }
const I18nCtx = createContext<Ctx>({ t: (k)=>k, locale: 'en' })

export function I18nProvider({ locale, children }: { locale: Locale, children: React.ReactNode }){
  const d = dict[locale] ?? dict.en
  const t = useMemo(()=> (k: string)=> d[k] ?? k, [d])
  return <I18nCtx.Provider value={{ t, locale }}>{children}</I18nCtx.Provider>
}
export function useI18n(){ return useContext(I18nCtx) }
