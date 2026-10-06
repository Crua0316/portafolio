import { createContext, useContext, useState, type ReactNode } from 'react'
import es, { type Translations } from './es'
import en from './en'

type Lang = 'es' | 'en'

const translations: Record<Lang, Translations> = { es, en }

interface LangCtx {
  lang: Lang
  t: Translations
  toggle: () => void
}

const LanguageContext = createContext<LangCtx>({ lang: 'es', t: es, toggle: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem('crg-lang') as Lang) || 'es' } catch { return 'es' }
  })

  function toggle() {
    const next: Lang = lang === 'es' ? 'en' : 'es'
    setLang(next)
    document.documentElement.setAttribute('lang', next)
    try { localStorage.setItem('crg-lang', next) } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
