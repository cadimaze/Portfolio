/* eslint-disable react/prop-types */
import { useLang } from '../i18n/LanguageContext'

const LanguageSwitcher = ({ className = '' }) => {
  const { lang, setLang, langs } = useLang()

  return (
    <div className={`inline-flex items-center font-mono text-xs ${className}`} role="group" aria-label="Idioma">
      {langs.map(({ code, label }, i) => (
        <span key={code} className="flex items-center">
          {i > 0 && <span className="text-stone-700 mx-1.5" aria-hidden="true">·</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`transition-colors ${
              lang === code ? 'text-amber-400 font-bold' : 'text-stone-500 hover:text-stone-300'
            }`}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  )
}

export default LanguageSwitcher
