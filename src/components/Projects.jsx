import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineArrowRight } from 'react-icons/ai'
import stackspot from '../assets/Stackspot.jpg'
import ProjectCover from './ProjectCover'
import GsapStagger from './fx/GsapStagger'
import { Card, Section, SectionHeader, Tag } from './ui'
import { useLang } from '../i18n/LanguageContext'

// Metadados fixos (não traduzidos) — na mesma ordem do dicionário
const projectMeta = [
  {
    slug: 'crud-lab',
    title: 'CRUD Lab',
    year: '2025',
    links: {
      site: 'https://crud-lab.vercel.app/',
      github: 'https://github.com/cadimaze/Case-Tech-Lab',
    },
  },
  {
    slug: 'stackspot-ai',
    title: 'StackSpot AI',
    year: '2025',
    img: stackspot,
    links: {
      linkedin:
        'https://www.linkedin.com/posts/guilherme-cadima-b140871b5_nesta-quinta-feira-tive-a-incr%C3%ADvel-oportunidade-activity-7289291213399101440-cgfh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIFzYABse8DQ3CVsRi31i9LSAtXn3MUQek',
    },
  },
  {
    slug: 'hive',
    title: 'Hive',
    year: '2026',
    links: {
      site: 'https://hive-finapp.vercel.app',
      github: 'https://github.com/cadimaze/planilha-de-gastos',
    },
  },
]

const smallLink =
  'pressable raised-sm inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 font-mono text-[11.5px] font-bold text-muted hover:text-accent'

const Projects = () => {
  const { t } = useLang()
  const projects = projectMeta.map((meta, i) => ({ ...meta, ...t.projects.items[i] }))

  return (
    <Section id="projects">
      <SectionHeader
        num={t.projects.num}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
        meta={t.projects.meta}
      />

      {/* faixa escura: quebra a página clara e dá respiro editorial */}
      <div className="mb-6 overflow-hidden rounded-xl2 bg-[#121a2b] px-7 py-6 shadow-[inset_0_2px_10px_rgba(0,0,0,.55),12px_12px_26px_rgba(157,171,196,.5)]">
        <p className="flex flex-wrap items-center gap-3 font-mono text-[12px] leading-6 text-white/70">
          <span className="h-px w-8 bg-accent-soft/70" />
          {t.projects.band}
        </p>
      </div>

      <GsapStagger className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" selector=":scope > div">
        {projects.map((project) => (
          <div key={project.slug}>
            <Card tilt max={8} className="flex h-full flex-col p-5">
              <ProjectCover slug={project.slug} img={project.img} title={project.title} />

              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="text-[17px] font-extrabold tracking-tight text-ink">
                  {project.title}
                </h3>
                <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-muted/70">
                  {project.year}
                </span>
              </div>

              {project.links.site && (
                <p className="mt-1.5 flex items-center gap-2 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-emerald-600">
                  <span className="led inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {t.projects.live}
                </p>
              )}

              <p className="mt-3 line-clamp-5 text-[13.5px] leading-7 text-ink/65">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                {project.links.site && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent pressable group inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-[11.5px] font-bold text-white"
                  >
                    {t.projects.viewSite}
                    <AiOutlineArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={smallLink}>
                    <AiOutlineGithub size={14} /> {t.projects.code}
                  </a>
                )}
                {project.links.linkedin && (
                  <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" className={smallLink}>
                    <AiOutlineLinkedin size={14} /> {t.projects.post}
                  </a>
                )}
              </div>
            </Card>
          </div>
        ))}
      </GsapStagger>
    </Section>
  )
}

export default Projects
