import { AiOutlineArrowRight } from 'react-icons/ai'
import Reveal from './Reveal'
import { SectionHeader } from './Terminal'
import { useLang } from '../i18n/LanguageContext'

// Metadados fixos (não traduzidos) — na mesma ordem do dicionário
const siteMeta = [
  { name: 'CRUD Lab', url: 'https://crud-lab.vercel.app', display: 'crud-lab.vercel.app', emoji: '🏫' },
  { name: 'Hive', url: 'https://hive-finapp.vercel.app', display: 'hive-finapp.vercel.app', emoji: '🐝' },
]

const SiteLinks = () => {
  const { t } = useLang()
  const sites = siteMeta.map((m, i) => ({ ...m, ...t.sites.items[i] }))

  return (
    <div className='max-w-[960px] mx-auto px-6 py-24' id='site-links'>
      <Reveal>
        <SectionHeader
          path="~/sites-no-ar"
          cmd={t.sites.cmd}
          title={t.sites.title}
          subtitle={t.sites.subtitle}
        />
      </Reveal>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {sites.map((site, i) => (
          <Reveal key={i} width="100%">
            <a
              href={site.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group h-full border border-stone-800 bg-[#100c07]/70 hover:bg-[#150f08] hover:border-amber-900/60 rounded-lg p-5 flex items-center gap-4 transition-all duration-300'
            >
              <div className='w-12 h-12 rounded-lg border border-stone-800 bg-[#0c0906] flex items-center justify-center text-2xl flex-shrink-0'>
                {site.emoji}
              </div>

              <div className='flex-1 min-w-0'>
                <p className='text-stone-100 font-mono font-medium text-sm mb-0.5'>{site.name}</p>
                <p className='font-mono text-amber-400/70 text-[10px] tracking-tight mb-1.5'>↗ {site.display}</p>
                <p className='text-stone-500 text-xs leading-5 line-clamp-2'>{site.tagline}</p>
              </div>

              <AiOutlineArrowRight
                className='text-stone-700 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 text-lg'
              />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default SiteLinks
