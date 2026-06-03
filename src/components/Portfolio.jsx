import project1 from "../assets/CRUD.jpeg";
import project2 from "../assets/Stackspot.jpg";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineLink } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: project1,
    title: "CRUD",
    description: "API RESTful completa demonstrando criação, leitura, atualização e deleção de dados — base sólida de backend com boas práticas de arquitetura.",
    links: {
      github: "https://github.com/cadimaze/Case-Tech-Lab",
    },
  },
  {
    img: project2,
    title: "StackSpot AI — Hackathon 2º Lugar",
    description: "2º lugar em Hackathon com foco em StackSpot AI, utilizando Agent, Knowledge Source e QuickCommand para resolver o desafio proposto com agilidade e criatividade.",
    links: {
      linkedin: "https://www.linkedin.com/posts/guilherme-cadima-b140871b5_nesta-quinta-feira-tive-a-incr%C3%ADvel-oportunidade-activity-7289291213399101440-cgfh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIFzYABse8DQ3CVsRi31i9LSAtXn3MUQek",
    },
  },
  {
    gradient: "from-amber-600 via-yellow-500 to-amber-400",
    emoji: "🐝",
    title: "Hive — Controle Financeiro",
    description: "PWA de controle financeiro pessoal com sincronização em tempo real via Firebase. Conta com Dashboard, Transações, Histórico, Simulador de juros, Investimentos, Cartões e Assinaturas — com autenticação Google e suporte a modo escuro.",
    tags: ["Firebase", "PWA", "JavaScript", "Tailwind"],
    links: {
      github: "https://github.com/cadimaze/planilha-de-gastos",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-2'>Portfólio</h2>
      <p className='text-gray-400 text-base mb-10'>Projetos desenvolvidos com foco em qualidade, usabilidade e boas práticas.</p>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } mb-16 gap-4`}
          >
            <div className='w-full md:w-1/2 p-2'>
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className='w-full h-full object-cover rounded-xl shadow-lg'
                />
              ) : (
                <div
                  className={`w-full min-h-[220px] bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg flex flex-col items-center justify-center gap-3`}
                >
                  <span className="text-8xl">{project.emoji}</span>
                  <span className="text-white font-bold text-2xl tracking-widest opacity-90">HIVE</span>
                  {project.tags && (
                    <div className="flex gap-2 flex-wrap justify-center mt-1">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-3'>{project.title}</h3>
              <p className='text-gray-300 mb-5 text-base leading-relaxed'>{project.description}</p>
              <div className='flex space-x-3'>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 bg-slate-700 text-gray-200 rounded-lg hover:bg-purple-700 transition duration-300 text-sm font-medium'
                  >
                    <AiOutlineGithub size={18} /> GitHub
                  </a>
                )}
                {project.links.linkedin && (
                  <a
                    href={project.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 bg-slate-700 text-gray-200 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium'
                  >
                    <AiOutlineLinkedin size={18} /> LinkedIn
                  </a>
                )}
                {project.links.site && project.links.site !== '#' && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 bg-slate-700 text-gray-200 rounded-lg hover:bg-green-700 transition duration-300 text-sm font-medium'
                  >
                    <AiOutlineLink size={18} /> Ver Site
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
