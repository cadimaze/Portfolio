import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { AiOutlineDownload } from 'react-icons/ai'
import { useLang } from '../i18n/LanguageContext'
import { Button } from './ui'
import Magnetic from './fx/Magnetic'

/**
 * Currículo em dois idiomas. O arquivo do idioma da interface aparece
 * primeiro e marcado como recomendado — quem chega no site em inglês
 * não recebe um PDF em português.
 */
const RESUMES = [
  { code: 'pt', file: '/curriculo.pdf', download: 'Guilherme-Cadima-Curriculo-PT.pdf', badge: 'PT' },
  { code: 'en', file: '/resume-en.pdf', download: 'Guilherme-Cadima-Resume-EN.pdf', badge: 'EN' },
]

const ResumeMenu = () => {
  const { lang, t } = useLang()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const firstItemRef = useRef(null)

  // idioma da interface primeiro; espanhol cai no currículo em inglês
  const preferred = lang === 'pt' ? 'pt' : 'en'
  const options = [...RESUMES].sort((a, b) => (a.code === preferred ? -1 : b.code === preferred ? 1 : 0))

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    firstItemRef.current?.focus()

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="relative" ref={rootRef}>
      <Magnetic>
        <Button
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
          icon={<AiOutlineDownload size={17} />}
        >
          {t.hero.ctaPrimary}
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            aria-hidden
            className={`ml-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          >
            <path
              d="M1 1l4.5 4.5L10 1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </Magnetic>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 0.8, 0.28, 1] }}
            style={{ transformOrigin: 'top left' }}
            role="menu"
            aria-label={t.hero.resume.menuLabel}
            className="raised absolute left-0 top-full z-30 mt-3 w-[302px] max-w-[calc(100vw-3rem)] rounded-xl2 p-2"
          >
            <p className="px-3 pb-2 pt-1.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted">
              {t.hero.resume.menuLabel}
            </p>

            {options.map((option, i) => (
              <a
                key={option.code}
                ref={i === 0 ? firstItemRef : null}
                href={option.file}
                download={option.download}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="pressable group flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-accent-wash/60"
              >
                <span className="sunken-sm grid h-9 w-9 shrink-0 place-items-center rounded-xl font-mono text-[10.5px] font-bold text-accent">
                  {option.badge}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-bold tracking-tight text-ink">
                    {t.hero.resume.options[option.code]}
                  </span>
                  <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
                    PDF
                    {option.code === preferred && ` · ${t.hero.resume.recommended}`}
                  </span>
                </span>

                <AiOutlineDownload
                  size={15}
                  className="shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ResumeMenu
