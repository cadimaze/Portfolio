import project1 from "../assets/CRUD.jpeg";
import project2 from "../assets/Stackspot.jpg";
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import Reveal from './Reveal';
// import { SiTiktok } from "react-icons/si";

const projects = [
  {
    img: project1,
    title: "CRUD",
    description: "Realizei um CRUD básico para mostrar conhecimento de realização de APIs.",
    links: {
      site: "#",
      github: "https://github.com/cadimaze/Case-Tech-Lab",
    },
  },
  {
    img: project2,
      title: "StackSpotAI",
      description: "Fiquei em segundo lugar em um Hackathon com foco no uso de StackSpotAI, usando Agente, Knowledge Source e QuickCommand na tarefa do evento.",
      links: {
        site: "#",
        linkedin: "https://www.linkedin.com/posts/guilherme-cadima-b140871b5_nesta-quinta-feira-tive-a-incr%C3%ADvel-oportunidade-activity-7289291213399101440-cgfh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIFzYABse8DQ3CVsRi31i9LSAtXn3MUQek",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfólio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
          >
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank" // Abre em uma nova aba
                    rel="noopener noreferrer" // Boa prática de segurança
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                  >
                    <AiOutlineGithub />
                  </a>
                )}
                {project.links.linkedin && (
                  <a
                    href={project.links.linkedin}
                    target="_blank" // Abre em uma nova aba
                    rel="noopener noreferrer" // Boa prática de segurança
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                  >
                    <AiOutlineLinkedin />
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