/* eslint-disable react/prop-types */
import { useLang } from '../i18n/LanguageContext'

/** Controle segmentado entalhado: o idioma ativo é a única "tecla" extrudada. */
const LanguageSwitcher = ({ className = '' }) => {
  const { lang, setLang, langs, t } = useLang()

  return (
    <div
      className={`sunken-sm flex items-center gap-1 rounded-2xl p-1.5 ${className}`}
      role="group"
      aria-label={t.ui.language}
    >
      {langs.map(({ code, label }) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`pressable rounded-xl px-3 py-1.5 font-mono text-[11px] font-bold tracking-wide ${
              active ? 'raised-sm text-accent' : 'text-muted hover:text-ink'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
