/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { Card, Section, SectionHeader } from './ui'
import GsapStagger from './fx/GsapStagger'
import { gsap, reducedMotion } from '../lib/gsap'
import { useLang } from '../i18n/LanguageContext'

// Metadados fixos (não traduzidos) — na mesma ordem do dicionário
const experienceMeta = [
  { id: 'itau-dev', company: 'Itaú Unibanco', role: 'Back-end / Data Engineer', current: true },
  { id: 'itau-est', company: 'Itaú Unibanco', role: 'Estágio — Python & AWS' },
  { id: 'digi-front', company: 'DigiSystem', role: 'Front-end' },
  { id: 'digi-back', company: 'DigiSystem', role: 'Back-end' },
  { id: 'g8', company: 'Comando G8', role: 'Compras' },
]

const VISIBLE_BULLETS = 4

const ExperienceItem = ({ exp, t }) => {
  const [expanded, setExpanded] = useState(false)
  const bullets = exp.bullets || []
  const collapsible = bullets.length > VISIBLE_BULLETS
  const shown = expanded || !collapsible ? bullets : bullets.slice(0, VISIBLE_BULLETS)

  return (
    <div className="relative pb-6 pl-10 sm:pl-14">
      {/* nó da linha do tempo */}
      <span
        className={`absolute left-0 top-6 grid h-7 w-7 place-items-center rounded-full sm:left-1 ${
          exp.current ? 'btn-accent' : 'raised-sm'
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full ${exp.current ? 'bg-white' : 'bg-muted/50'}`}
        />
      </span>

      <Card className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-[17px] font-extrabold tracking-tight text-ink">{exp.company}</h3>
          {exp.current && (
            <span className="rounded-lg bg-accent-wash px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent-deep">
              {t.experience.current}
            </span>
          )}
          <span className="ml-auto font-mono text-[11.5px] font-medium text-muted">
            {exp.period}
          </span>
        </div>

        <p className="mt-1 font-mono text-[11.5px] uppercase tracking-[0.12em] text-muted">
          {exp.role}
        </p>

        <p className="mt-4 text-[13.5px] leading-7 text-ink/70">{exp.description}</p>

        {bullets.length > 0 && (
          <div className="sunken-sm mt-5 rounded-2xl p-5">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
              {t.experience.highlights}
            </p>
            <ul className="grid gap-2.5">
              {shown.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[12.5px] leading-6 text-ink/70">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {collapsible && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="pressable raised-sm mt-4 inline-flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-[11px] font-bold text-accent"
              >
                {expanded ? t.experience.less : `${t.experience.more} (${bullets.length})`}
                <AiOutlineDown
                  size={11}
                  className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                />
              </button>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}

const Experience = () => {
  const { t } = useLang()
  const railRef = useRef(null)
  const trackRef = useRef(null)
  const experiences = experienceMeta.map((meta, i) => ({ ...meta, ...t.experience.items[i] }))

  // o trilho se preenche conforme a linha do tempo é percorrida
  useEffect(() => {
    if (reducedMotion() || !railRef.current) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(
        railRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: trackRef.current,
            start: 'top 65%',
            end: 'bottom 75%',
            scrub: 0.4,
          },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <Section id="experience" className="max-w-[880px]">
      <SectionHeader
        num={t.experience.num}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
        meta={t.experience.meta}
      />

      <div className="relative" ref={trackRef}>
        {/* trilho entalhado + preenchimento que acompanha o scroll */}
        <span
          aria-hidden
          className="sunken absolute bottom-6 left-[13px] top-6 w-[6px] overflow-hidden rounded-full sm:left-[17px]"
        >
          <span
            ref={railRef}
            className="block h-full w-full origin-top rounded-full"
            style={{ background: 'linear-gradient(180deg, #6d9dff, #2f6bff)' }}
          />
        </span>

        <GsapStagger selector=":scope > div" y={26} stagger={0.1}>
          {experiences.map((exp) => (
            <div key={exp.id}>
              <ExperienceItem exp={exp} t={t} />
            </div>
          ))}
        </GsapStagger>
      </div>
    </Section>
  )
}

export default Experience
