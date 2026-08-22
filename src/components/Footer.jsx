import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { SiCredly } from 'react-icons/si'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { useLang } from '../i18n/LanguageContext'

const socials = [
  { icon: <FaGithub />, url: 'https://github.com/cadimaze', label: 'GitHub' },
  { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/guilherme-cadima-b140871b5/', label: 'LinkedIn' },
  { icon: <SiCredly />, url: 'https://www.credly.com/users/guilherme-cadima.981ed08a', label: 'Credly' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/cadimaz/', label: 'Instagram' },
]

const Footer = () => {
  const { t } = useLang()

  return (
    <footer className="mx-auto w-full max-w-[1120px] px-6 pb-10 md:px-8">
      <div className="raised flex flex-col items-center gap-6 rounded-xl3 px-7 py-8 md:flex-row md:justify-between md:px-10">
        <div className="flex items-center gap-4">
          <span className="btn-accent grid h-11 w-11 place-items-center rounded-2xl text-[13px] font-extrabold text-white">
            GC
          </span>
          <div className="leading-tight">
            <b className="block text-[14.5px] font-extrabold tracking-tight text-ink">
              Guilherme Cadima
            </b>
            <small className="block font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
              {t.footer.role}
            </small>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {socials.map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="raised-sm pressable grid h-11 w-11 place-items-center rounded-2xl text-[15px] text-muted hover:text-accent"
            >
              {icon}
            </a>
          ))}

          <Link to="hero" smooth duration={600} offset={-110}>
            <button
              type="button"
              aria-label={t.footer.top}
              title={t.footer.top}
              className="raised-sm pressable grid h-11 w-11 place-items-center rounded-2xl text-[15px] text-accent"
            >
              <AiOutlineArrowUp />
            </button>
          </Link>
        </div>
      </div>

      <p className="mt-6 text-center font-mono text-[11px] text-muted">
        {t.footer.copyright} · {t.footer.madeWith}
      </p>
    </footer>
  )
}

export default Footer
