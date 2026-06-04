import { AiOutlineArrowRight } from 'react-icons/ai'
import Reveal from './Reveal'

const sites = [
  {
    name: 'CRUD Lab',
    tagline: 'Plataforma educacional para aprender CRUD na prática, em tempo real.',
    url: 'https://crud-lab.vercel.app',
    display: 'crud-lab.vercel.app',
    emoji: '🏫',
    gradient: 'from-indigo-600 via-blue-700 to-cyan-700',
  },
  {
    name: 'Hive',
    tagline: 'Controle financeiro pessoal com dashboard, investimentos e sincronização em tempo real.',
    url: 'https://hive-finapp.vercel.app',
    display: 'hive-finapp.vercel.app',
    emoji: '🐝',
    gradient: 'from-amber-600 via-yellow-500 to-amber-400',
  },
]

const SiteLinks = () => {
  return (
    <div className='max-w-[960px] mx-auto px-6 py-24' id='site-links'>
      <Reveal>
        <p className='font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-3'>Meus Sites</p>
        <h2 className='text-3xl md:text-4xl font-bold text-slate-100 mb-4'>Acesse ao vivo</h2>
        <p className='text-slate-400 text-sm md:text-base mb-12 max-w-[520px] leading-7'>
          Projetos publicados e disponíveis — experimente agora mesmo.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {sites.map((site, i) => (
            <a
              key={i}
              href={site.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group border border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.05] hover:border-cyan-900/50 rounded-xl p-5 flex items-center gap-5 transition-all duration-300'
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${site.gradient} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}
              >
                {site.emoji}
              </div>

              <div className='flex-1 min-w-0'>
                <p className='text-slate-100 font-semibold text-sm mb-0.5'>{site.name}</p>
                <p className='font-mono text-cyan-400/60 text-[10px] tracking-wide mb-1.5'>{site.display}</p>
                <p className='text-slate-500 text-xs leading-5 line-clamp-2'>{site.tagline}</p>
              </div>

              <AiOutlineArrowRight
                className='text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 text-lg'
              />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

export default SiteLinks
