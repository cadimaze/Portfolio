import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { SectionHeader } from './Terminal'
import { useLang } from '../i18n/LanguageContext'

// Metadados fixos (não traduzidos) — na mesma ordem do dicionário
const experienceMeta = [
  { hash: 'e5d7a0f', head: true, company: 'Itaú Unibanco' },
  { hash: '3f8c112', company: 'DigiSystem — Front-end' },
  { hash: 'b7e42dc', company: 'DigiSystem — Back-end' },
  { hash: 'a1c09f4', company: 'Comando G8' },
]

const Experience = () => {
  const { t } = useLang()
  const experiences = experienceMeta.map((m, i) => ({ ...m, ...t.experience.items[i] }))

  return (
    <div className='max-w-[780px] mx-auto px-6 py-24' id="experience">
      <Reveal>
        <SectionHeader
          path="~/experiência"
          cmd={t.experience.cmd}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />
      </Reveal>

      <div className='relative'>
        <div className='absolute left-[5px] top-3 bottom-2 w-px bg-gradient-to-b from-amber-500/60 via-amber-800/30 to-transparent' />

        {experiences.map((exp, index) => (
          <Reveal key={index} width="100%">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className='relative pl-8 pb-10'
            >
              <div className='absolute left-0 top-2 w-[11px] h-[11px] rounded-full bg-amber-400 border-2 border-[#0b0906] shadow-[0_0_10px_rgba(245,165,36,0.5)]' />

              <div className='border border-stone-800 bg-[#100c07]/60 hover:border-amber-900/50 rounded-lg p-5 sm:p-6 transition-all duration-300'>
                <div className='font-mono text-xs text-stone-500 mb-3 flex flex-wrap items-center gap-x-2 gap-y-1'>
                  <span className="text-amber-500">commit {exp.hash}</span>
                  {exp.head && (
                    <span className="text-amber-400 border border-amber-800/60 bg-amber-950/30 rounded px-1.5 py-0.5">
                      HEAD → main
                    </span>
                  )}
                </div>

                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2'>
                  <h3 className='text-stone-100 text-base font-bold'>{exp.company}</h3>
                  <span className='font-mono text-amber-400/70 text-xs'>{t.experience.dateLabel}: {exp.period}</span>
                </div>

                <p className='text-stone-400 text-sm leading-7'>{exp.description}</p>

                {exp.bullets && (
                  <ul className='mt-4 space-y-2 font-mono'>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className='flex gap-2.5 text-stone-400 text-xs leading-6'>
                        <span className='text-amber-500 flex-shrink-0'>+</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Experience
