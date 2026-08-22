/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'

const ThemeContext = createContext(null)

const STORAGE_KEY = 'theme'
const THEMES = ['light', 'dark']

const systemTheme = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

const stored = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return THEMES.includes(saved) ? saved : null
  } catch {
    return null // localStorage indisponível (modo privado, cookies bloqueados)
  }
}

/**
 * Tema claro/escuro. Enquanto a pessoa não escolher, o site segue o
 * sistema — e continua seguindo, ao vivo, se o sistema mudar. A partir da
 * primeira escolha manual, a preferência dela é que manda.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => stored() ?? systemTheme())
  const [pinned, setPinned] = useState(() => stored() !== null)

  // useLayoutEffect: a classe precisa estar no <html> antes dos efeitos que
  // leem as variáveis de cor (o canvas do DotGrid), que rodam depois.
  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme

    // a barra do navegador no mobile acompanha a chapa do tema
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#121823' : '#e8ecf3')
  }, [theme])

  useEffect(() => {
    if (pinned) return undefined
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => setThemeState(e.matches ? 'dark' : 'light')
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [pinned])

  const setTheme = useCallback((next) => {
    if (!THEMES.includes(next)) return
    setThemeState(next)
    setPinned(true)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme deve ser usado dentro de <ThemeProvider>')
  return ctx
}
