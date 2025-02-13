/* eslint-disable react/jsx-key */
import project1 from "../assets/CRUD.jpeg"
// import project2 from "../assets/TikTok.jpg"
import { AiOutlineGithub } from 'react-icons/ai'
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
    // {
    //   img: project2,
    //   title: "TikTok",
    //   description: "Um pouco fora do mundo tech, tento fazer conteúdo sobre o dia a dia de um desenvolvedor na plataforma TikTok",
    //   links: {
    //     site: "#",
    //     tiktok: "https://www.tiktok.com/@cadimaze/video/7390775879015714053?is_from_webapp=1&sender_device=pc&web_id=7359676320974865926",
    //   },
    // },
  ]
  const Portfolio = () => {
    return (
      <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfólio</h2>
        {projects.map((project, index) => (
          <Reveal key={index}> {/* A key foi movida para o componente Reveal */}
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
                  {/* <a href={project.links.site}
                      className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                  transition duration-300'>
                      View Site
                  </a> */}
                  <a
                    href={project.links.github}
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    );
  };

export default Portfolio