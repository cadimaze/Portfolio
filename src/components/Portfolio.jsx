import project1 from "../assets/CRUD.jpeg";
import project2 from "../assets/Stackspot.jpg";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineLink } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: project1,
    title: "CRUD API",
    tags: ["Python", "REST", "Backend"],
    description: "API RESTful completa demonstrando criação, leitura, atualização e deleção de dados — a base que originou o CRUD Lab.",
    links: { github: "https://github.com/cadimaze/Case-Tech-Lab" },
  },
  {
    gradient: "from-indigo-600 via-blue-700 to-cyan-800",
    emoji: "🏫",
    title: "CRUD Lab",
    tags: ["Educacional", "JavaScript", "Interativo", "Didático"],
    description: "Plataforma educacional onde alunos aprendem e praticam operações CRUD de forma visual e didática. Execute cenários reais em tempo real, visualize o que acontece em cada etapa e entenda na prática como Create, Read, Update e Delete funcionam — sem precisar configurar nada.",
    links: {
      site: "https://crud-lab.vercel.app/",
    },
  },
  {
    img: project2,
    title: "StackSpot AI",
    tags: ["IA", "Hackathon", "2º Lugar"],
    description: "2º lugar em Hackathon com foco em StackSpot AI, utilizando Agent, Knowledge Source e QuickCommand para resolver o desafio proposto com agilidade e criatividade.",
    links: { linkedin: "https://www.linkedin.com/posts/guilherme-cadima-b140871b5_nesta-quinta-feira-tive-a-incr%C3%ADvel-oportunidade-activity-7289291213399101440-cgfh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIFzYABse8DQ3CVsRi31i9LSAtXn3MUQek" },
  },
  {
    gradient: "from-amber-700 via-yellow-500 to-amber-400",
    emoji: "🐝",
    title: "Hive",
    tags: ["Firebase", "PWA", "JavaScript", "Tailwind"],
    description: "PWA de controle financeiro pessoal com sincronização em tempo real via Firebase. Dashboard, Transações, Histórico, Simulador, Investimentos, Cartões e Assinaturas — com autenticação via Google.",
    links: {
      site: "https://hive-finapp.vercel.app",
      github: "https://github.com/cadimaze/planilha-de-gastos",
    },
  },
];

const Tag = ({ label }) => (
  <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border border-cyan-900/60 text-cyan-400/70 bg-cyan-950/30">
    {label}
  </span>
);

const Portfolio = () => {
  return (
    <div className='max-w-[960px] mx-auto px-6 py-24' id="portfolio">
      <Reveal>
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-3">Portfólio</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Projetos selecionados</h2>
        <p className='text-slate-400 text-sm md:text-base mb-14 max-w-[520px] leading-7'>
          Projetos desenvolvidos com foco em qualidade, usabilidade e boas práticas.
        </p>
      </Reveal>

      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } mb-20 gap-8 items-center`}
          >
            <div className='w-full md:w-1/2'>
              {project.img ? (
                <div className='relative overflow-hidden rounded-xl border border-white/[0.07] group'>
                  <img
                    src={project.img}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-[#060d1a]/30 group-hover:bg-transparent transition-all duration-300' />
                </div>
              ) : (
                <div
                  className={`w-full min-h-[240px] bg-gradient-to-br ${project.gradient} rounded-xl border border-white/10 flex flex-col items-center justify-center gap-3 shadow-lg`}
                >
                  <span className="text-8xl">{project.emoji}</span>
                  <span className="text-white font-bold text-2xl tracking-[0.2em]">{project.title.toUpperCase()}</span>
                  <div className="flex gap-2 flex-wrap justify-center mt-1">
                    {project.tags.map((t, i) => (
                      <span key={i} className="text-[10px] bg-black/20 text-white/80 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className='w-full md:w-1/2 flex flex-col justify-center'>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags && project.img && project.tags.map((t, i) => <Tag key={i} label={t} />)}
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-slate-100 mb-3'>{project.title}</h3>
              <p className='text-slate-400 text-sm leading-7 mb-6'>{project.description}</p>
              <div className='flex gap-3 flex-wrap'>
                {project.links.site && (
                  <a href={project.links.site} target="_blank" rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 bg-cyan-400 text-[#060d1a] font-semibold rounded-lg hover:bg-cyan-300 transition-colors text-xs'>
                    <AiOutlineLink size={15} /> Ver Site
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 border border-white/10 text-slate-300 font-medium rounded-lg hover:border-cyan-800 hover:text-cyan-400 transition-all text-xs'>
                    <AiOutlineGithub size={15} /> GitHub
                  </a>
                )}
                {project.links.linkedin && (
                  <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 border border-white/10 text-slate-300 font-medium rounded-lg hover:border-sky-800 hover:text-sky-400 transition-all text-xs'>
                    <AiOutlineLinkedin size={15} /> LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
