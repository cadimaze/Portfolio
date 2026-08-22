/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'motion/react'
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai'
import { useLang } from '../i18n/LanguageContext'
import { useTheme } from '../theme/ThemeContext'

/**
 * Tecla única de tema: mostra o ícone do modo para onde ela leva, e o
 * ícone gira ao trocar — mesmo movimento das outras teclas do site.
 */
const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggle } = useTheme()
  const { t } = useLang()
  const label = isDark ? t.ui.themeLight : t.ui.themeDark

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`raised-sm pressable grid h-11 w-11 place-items-center overflow-hidden rounded-2xl text-ink ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
          transition={{ duration: 0.24, ease: [0.22, 0.8, 0.28, 1] }}
          className="grid place-items-center"
        >
          {isDark ? <AiOutlineSun size={19} /> : <AiOutlineMoon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
