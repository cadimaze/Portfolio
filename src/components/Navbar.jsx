import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const links = [
  { to: 'skills', key: 'skills' },
  { to: 'projects', key: 'projects' },
  { to: 'experience', key: 'experience' },
  { to: 'certifications', key: 'certifications' },
  { to: 'about', key: 'about' },
]

const Navbar = () => {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  // trava o scroll do fundo enquanto a gaveta mobile está aberta
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollProps = { smooth: true, spy: true, offset: -110, duration: 500 }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="raised mx-auto flex max-w-[1120px] items-center gap-4 rounded-xl3 px-3 py-3 backdrop-blur-md md:px-4">
        <Link
          to="hero"
          {...scrollProps}
          className="group flex cursor-pointer select-none items-center gap-3 pl-1"
        >
          <span className="btn-accent grid h-10 w-10 place-items-center rounded-2xl text-[13px] font-extrabold text-white">
            GC
          </span>
          <span className="hidden leading-tight sm:block">
            <b className="block text-[14.5px] font-extrabold tracking-tight text-ink">
              Guilherme Cadima
            </b>
            <small className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              data engineer
            </small>
          </span>
        </Link>

        <ul className="sunken-sm mx-auto hidden items-center gap-1 rounded-2xl p-1.5 lg:flex">
          {links.map(({ to, key }) => (
            <li key={to}>
              <Link
                to={to}
                {...scrollProps}
                activeClass="raised-sm !text-accent"
                className="pressable block cursor-pointer rounded-xl px-4 py-2 text-[13px] font-semibold text-muted hover:text-ink"
              >
                {t.nav[key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={open}
            className="raised-sm pressable grid h-11 w-11 place-items-center rounded-2xl text-ink lg:hidden"
          >
            {open ? <AiOutlineClose size={19} /> : <AiOutlineMenu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 0.8, 0.28, 1] }}
            className="raised mx-auto mt-3 max-w-[1120px] rounded-xl3 p-4 lg:hidden"
          >
            <p className="mb-3 px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {t.nav.menu}
            </p>
            <ul className="grid gap-2">
              {links.map(({ to, key }) => (
                <li key={to}>
                  <Link
                    to={to}
                    {...scrollProps}
                    onClick={() => setOpen(false)}
                    activeClass="!text-accent"
                    className="sunken-sm pressable block cursor-pointer rounded-2xl px-4 py-3.5 text-[15px] font-bold text-ink"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
