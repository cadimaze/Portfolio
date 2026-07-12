/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'
import { translations, LANGS } from './translations'

const LanguageContext = createContext(null)

const getInitial = () => {
  try {
    const saved = localStorage.getItem('lang')
    if (saved && translations[saved]) return saved
  } catch {
    /* localStorage indisponível */
  }
  return 'pt'
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitial)

  const setLang = (l) => {
    if (!translations[l]) return
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], langs: LANGS }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang deve ser usado dentro de <LanguageProvider>')
  return ctx
}

// Renderiza **texto** como destaque âmbar; o restante fica inalterado.
export const renderRich = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="text-amber-400">{part.slice(2, -2)}</strong>
      : part
  )
