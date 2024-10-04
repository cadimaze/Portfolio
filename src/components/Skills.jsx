import {
  DiAws,
  DiPython,
  DiGithubBadge,
  DiDatabase,
  DiCode,
  DiSublime,
} from "react-icons/di"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Backend',
      technologies: [
        { name: 'AWS', icon: <DiAws className='text-orange-600' /> },
        { name: 'Git', icon: <DiGithubBadge className='text-white' /> },
        { name: 'SQL', icon: <DiDatabase className='text-yellow-600' /> },
        { name: 'Python', icon: <DiPython className='text-orange-600' /> },
        { name: 'ServiceNow', icon: <DiSublime className='text-blue-500' /> },
        { name: 'Web', icon: <DiCode className='text-green-500' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Habilidades</h2>
        <p className="text-center mb-8">
            Adquiri muito conhecimento em diversas linguagens ao longo da minha carreira.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-blue-900 p-6 rounded-lg bg-blue-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
