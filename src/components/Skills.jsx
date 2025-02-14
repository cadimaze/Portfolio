import {
  DiSublime,
  DiAngularSimple,
  DiReact,
  DiBootstrap,
  DiJsBadge,
  DiPhotoshop,
} from "react-icons/di"
import Reveal from "./Reveal"
import { SiAmazonapigateway, SiAmazoncloudwatch, SiAmazonsqs, SiTerraform } from "react-icons/si"

const skills = [
    {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: <DiReact className='text-blue-600' /> },
      { name: 'JavaScript', icon: <DiJsBadge className='text-yellow-600' /> },
      { name: 'Angular', icon: <DiAngularSimple className='text-red-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-green-500' /> },
    ],
    },
    {
      category: 'Back-end e Outros',
      technologies: [
        { name: 'Terraform', icon: <SiTerraform className='text-blue-500' /> },
        { name: 'ApiGtw', icon: <SiAmazonapigateway className='text-blue-500' /> },
        { name: 'SQS', icon: <SiAmazonsqs className='text-yellow-500' /> },
        { name: 'Cloudwatch', icon: <SiAmazoncloudwatch className='text-green-500' /> },
        { name: 'ServiceNow', icon: <DiSublime className='text-white' /> },
        { name: 'Photoshop', icon: <DiPhotoshop className='text-blue-500' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Habilidades</h2>
        <p className="text-center mb-8">
            Além do meu conjunto de soluções, possuo habilidades moderadas em outros tipos de linguagens e serviços.
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
