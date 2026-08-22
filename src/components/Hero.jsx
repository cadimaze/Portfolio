import { motion } from 'motion/react'
import { Link } from 'react-scroll'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTikTok,
  AiOutlineWhatsApp,
  AiOutlineArrowRight,
} from 'react-icons/ai'
import { DiDatabase, DiJava, DiPython, DiReact, DiGit } from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import { SiAwslambda, SiCredly, SiDocker, SiTerraform, SiKubernetes, SiNodedotjs, SiAmazons3 } from 'react-icons/si'
import { useLang } from '../i18n/LanguageContext'
import { Button, Dot } from './ui'
import SplitText from './fx/SplitText'
import RotatingText from './fx/RotatingText'
import Magnetic from './fx/Magnetic'
import ResumeMenu from './ResumeMenu'
import Marquee from './fx/Marquee'
import CountUp from './fx/CountUp'

const socials = [
  { icon: <AiOutlineGithub />, url: 'https://github.com/cadimaze', label: 'GitHub' },
  { icon: <AiOutlineLinkedin />, url: 'https://www.linkedin.com/in/guilherme-cadima-b140871b5/', label: 'LinkedIn' },
  { icon: <SiCredly />, url: 'https://www.credly.com/users/guilherme-cadima.981ed08a', label: 'Credly' },
  { icon: <AiOutlineWhatsApp />, url: 'https://wa.me/5511947436291?text=Ol%C3%A1%20Guilherme', label: 'WhatsApp' },
  { icon: <AiOutlineInstagram />, url: 'https://www.instagram.com/cadimaz/', label: 'Instagram' },
  { icon: <AiOutlineTikTok />, url: 'https://www.tiktok.com/@cadimaze', label: 'TikTok' },
]

const stack = [
  { icon: <DiPython />, label: 'Python' },
  { icon: <DiJava />, label: 'Java' },
  { icon: <FaAws />, label: 'AWS' },
  { icon: <SiAwslambda />, label: 'Lambda' },
  { icon: <SiTerraform />, label: 'Terraform' },
  { icon: <SiDocker />, label: 'Docker' },
  { icon: <SiKubernetes />, label: 'Kubernetes' },
  { icon: <SiAmazons3 />, label: 'S3' },
  { icon: <DiDatabase />, label: 'SQL' },
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <DiReact />, label: 'React' },
  { icon: <DiGit />, label: 'Git' },
]

const ease = [0.22, 0.8, 0.28, 1]

const Hero = () => {
  const { lang, t } = useLang()

  return (
    <section id="hero" className="relative mx-auto w-full max-w-[1180px] scroll-mt-28 px-5 pb-8 pt-10 sm:px-6 md:px-8 md:pt-16">
      <div className="grid gap-6 lg:grid-cols-[1.42fr_0.58fr]">
        {/* ------------------------------------------------ bloco principal */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="raised relative rounded-xl3 px-6 py-10 sm:px-10 sm:py-12 md:px-12"
        >
          {/* marca d'água gravada: número da edição, recortada pelo painel */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 select-none overflow-hidden rounded-xl3"
          >
            <span className="absolute -right-2 -top-6 font-mono text-[132px] font-bold leading-none text-ink/[0.035]">
              01
            </span>
          </span>

          <p className="flex items-center gap-3 font-mono text-[10.5px] font-bold uppercase tracking-[0.24em] text-muted">
            <span className="h-px w-8 bg-muted/40" />
            {t.hero.eyebrow}
          </p>

          <h1 className="mt-7 text-[clamp(2.9rem,9vw,5.6rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-ink">
            <SplitText text="Guilherme" />
            <br />
            <SplitText text="Cadima" className="text-accent" delay={0.28} />
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13.5px] text-muted">
            <span className="text-accent">/</span>
            <RotatingText key={lang} items={t.hero.roles} className="font-medium text-ink/80" />
          </div>

          <p className="mt-6 max-w-[540px] text-[15px] leading-8 text-ink/70">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ResumeMenu />
            <Magnetic strength={0.24}>
              <Link to="about" smooth offset={-110} duration={500}>
                <Button variant="ghost" icon={<AiOutlineArrowRight size={15} />}>
                  {t.hero.ctaSecondary}
                </Button>
              </Link>
            </Magnetic>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {socials.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
                className="raised-sm pressable grid h-11 w-11 place-items-center rounded-2xl text-lg text-muted hover:text-accent"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* --------------------------------------------- ficha técnica lateral */}
        <motion.aside
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="flex flex-col gap-4"
        >
          <div className="raised rounded-xl3 p-6">
            <div className="flex items-center gap-2.5">
              <Dot />
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                {t.hero.status.split('·')[0].trim()}
              </span>
            </div>

            <dl className="mt-6 divide-y divide-line/70">
              {t.hero.spec.map(({ k, v }) => (
                <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                    {k}
                  </dt>
                  <dd className="text-right font-mono text-[12px] font-medium text-ink/80">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {t.hero.stats.map((s) => {
              const numeric = parseInt(s.value, 10)
              const suffix = s.value.replace(/[0-9]/g, '')
              return (
                <div
                  key={s.label}
                  className="raised-sm flex flex-1 items-center justify-between gap-3 rounded-2xl px-5 py-4"
                >
                  <b className="text-[26px] font-extrabold leading-none tracking-tighter text-ink">
                    <CountUp value={numeric} suffix={suffix} />
                  </b>
                  <small className="max-w-[130px] text-right text-[10.5px] font-semibold uppercase leading-tight tracking-wide text-muted">
                    {s.label}
                  </small>
                </div>
              )
            })}
          </div>
        </motion.aside>
      </div>

      {/* ------------------------------------------------ esteira de ferramentas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="sunken mt-6 flex items-center gap-6 overflow-hidden rounded-xl2 py-4 pl-6"
      >
        <span className="hidden shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted sm:block">
          {t.hero.toolkit}
        </span>
        <Marquee
          className="flex-1"
          items={stack}
          renderItem={({ icon, label }, i) => (
            <span
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-2 text-lg text-muted transition-colors hover:text-accent"
            >
              {icon}
              <span className="font-mono text-[11px] font-medium tracking-tight">{label}</span>
            </span>
          )}
        />
      </motion.div>
    </section>
  )
}

export default Hero
