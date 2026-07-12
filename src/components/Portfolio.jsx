import project2 from "../assets/Stackspot.jpg";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineLink } from 'react-icons/ai';
import Reveal from './Reveal';
import { SectionHeader, Window } from './Terminal';

const projects = [
  {
    slug: "crud-lab",
    emoji: "🏫",
    title: "CRUD Lab",
    tags: ["educacional", "javascript", "interativo", "didático"],
    description: "Plataforma educacional onde alunos aprendem e praticam operações CRUD de forma visual e didática. Execute cenários reais em tempo real, visualize o que acontece em cada etapa e entenda na prática como Create, Read, Update e Delete funcionam — sem precisar configurar nada.",
    links: {
      site: "https://crud-lab.vercel.app/",
      github: "https://github.com/cadimaze/Case-Tech-Lab",
    },
  },
  {
    slug: "stackspot-ai",
    img: project2,
    title: "StackSpot AI",
    tags: ["ia", "hackathon", "2º-lugar"],
    description: "2º lugar em Hackathon com foco em StackSpot AI, utilizando Agent, Knowledge Source e QuickCommand para resolver o desafio proposto com agilidade e criatividade.",
    links: { linkedin: "https://www.linkedin.com/posts/guilherme-cadima-b140871b5_nesta-quinta-feira-tive-a-incr%C3%ADvel-oportunidade-activity-7289291213399101440-cgfh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIFzYABse8DQ3CVsRi31i9LSAtXn3MUQek" },
  },
  {
    slug: "hive",
    emoji: "🐝",
    title: "Hive",
    tags: ["firebase", "pwa", "javascript", "tailwind"],
    description: "PWA de controle financeiro pessoal com sincronização em tempo real via Firebase. Dashboard, Transações, Histórico, Simulador, Investimentos, Cartões e Assinaturas — com autenticação via Google.",
    links: {
      site: "https://hive-finapp.vercel.app",
      github: "https://github.com/cadimaze/planilha-de-gastos",
    },
  },
];

// eslint-disable-next-line react/prop-types
const Tag = ({ label }) => (
  <span className="text-[10px] font-mono text-amber-400/70">#{label}</span>
);

const Portfolio = () => {
  return (
    <div className='max-w-[960px] mx-auto px-6 py-24' id="portfolio">
      <Reveal>
        <SectionHeader
          path="~/projetos"
          cmd="git show --projects"
          title="projetos selecionados"
          subtitle="Projetos desenvolvidos com foco em qualidade, usabilidade e boas práticas."
        />
      </Reveal>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Reveal key={index} width="100%">
            <Window title={`~/projetos/${project.slug}`} bodyClass="p-0">
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* visual */}
                <div className="w-full md:w-2/5 relative">
                  {project.img ? (
                    <div className='relative overflow-hidden h-full min-h-[200px] group border-b md:border-b-0 md:border-x border-stone-800'>
                      <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-gradient-to-tr from-[#0b0906]/70 via-[#0b0906]/10 to-transparent group-hover:opacity-40 transition-opacity duration-300' />
                    </div>
                  ) : (
                    <div
                      className='w-full h-full min-h-[200px] flex flex-col items-center justify-center gap-3 border-b md:border-b-0 md:border-x border-stone-800'
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 50% 40%, rgba(245,165,36,0.10), transparent 60%), linear-gradient(rgba(245,165,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,165,36,0.05) 1px, transparent 1px)',
                        backgroundSize: '100% 100%, 22px 22px, 22px 22px',
                      }}
                    >
                      <span className="text-7xl">{project.emoji}</span>
                      <span className="font-mono text-amber-400/80 text-sm tracking-[0.2em]">{project.title.toLowerCase()}</span>
                    </div>
                  )}
                </div>

                {/* info */}
                <div className='w-full md:w-3/5 p-6 sm:p-7 flex flex-col justify-center'>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                    {project.tags.map((t, i) => <Tag key={i} label={t} />)}
                  </div>
                  <h3 className='text-lg md:text-xl font-bold text-stone-100 mb-3'>
                    <span className="text-amber-500/60">$ </span>{project.title}
                  </h3>
                  <p className='text-stone-400 text-sm leading-7 mb-6'>{project.description}</p>
                  <div className='flex gap-3 flex-wrap font-mono'>
                    {project.links.site && (
                      <a href={project.links.site} target="_blank" rel="noopener noreferrer"
                        className='flex items-center gap-2 px-4 py-2 bg-amber-400 text-[#0b0906] font-bold rounded hover:bg-amber-300 transition-colors text-xs'>
                        <AiOutlineLink size={15} /> ver-site
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                        className='flex items-center gap-2 px-4 py-2 border border-stone-700 text-stone-300 rounded hover:border-amber-700 hover:text-amber-400 transition-all text-xs'>
                        <AiOutlineGithub size={15} /> github
                      </a>
                    )}
                    {project.links.linkedin && (
                      <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer"
                        className='flex items-center gap-2 px-4 py-2 border border-stone-700 text-stone-300 rounded hover:border-amber-700 hover:text-amber-400 transition-all text-xs'>
                        <AiOutlineLinkedin size={15} /> linkedin
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Window>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
