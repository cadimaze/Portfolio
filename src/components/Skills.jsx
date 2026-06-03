import {
  DiAngularSimple,
  DiReact,
  DiBootstrap,
  DiJsBadge,
  DiPython,
  DiGithubBadge,
} from "react-icons/di"
import {
  SiAmazonapigateway,
  SiAmazoncloudwatch,
  SiAmazonsqs,
  SiTerraform,
  SiAwslambda,
} from "react-icons/si"
import { FaAws, FaRobot } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"
import Reveal from "./Reveal"

const skills = [
  {
    category: 'Frontend',
    borderColor: 'border-blue-800',
    bgColor: 'bg-blue-900/20',
    technologies: [
      { name: 'React', icon: <DiReact className='text-blue-400' /> },
      { name: 'JavaScript', icon: <DiJsBadge className='text-yellow-400' /> },
      { name: 'Angular', icon: <DiAngularSimple className='text-red-500' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-400' /> },
    ],
  },
  {
    category: 'Cloud & Infra',
    borderColor: 'border-orange-800',
    bgColor: 'bg-orange-900/20',
    technologies: [
      { name: 'AWS Glue', icon: <FaAws className='text-orange-400' /> },
      { name: 'Lambda', icon: <SiAwslambda className='text-orange-400' /> },
      { name: 'Terraform', icon: <SiTerraform className='text-indigo-400' /> },
      { name: 'API Gateway', icon: <SiAmazonapigateway className='text-blue-400' /> },
      { name: 'SQS', icon: <SiAmazonsqs className='text-yellow-400' /> },
      { name: 'CloudWatch', icon: <SiAmazoncloudwatch className='text-green-400' /> },
    ],
  },
  {
    category: 'Linguagens & IA',
    borderColor: 'border-green-800',
    bgColor: 'bg-green-900/20',
    technologies: [
      { name: 'Python (Avançado)', icon: <DiPython className='text-yellow-400' /> },
      { name: 'PySpark', icon: <FaAws className='text-red-400' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-white' /> },
      { name: 'IA para Dev', icon: <GiBrain className='text-green-400' /> },
    ],
  },
]

const Skills = () => {
  return (
    <div className="max-w-[960px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Habilidades</h2>
        <p className="text-center mb-10 text-gray-400 text-base max-w-[600px] mx-auto">
            Tecnologias e ferramentas que uso no dia a dia para construir soluções robustas e escaláveis.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`border ${skill.borderColor} ${skill.bgColor} p-6 rounded-xl shadow-lg w-full md:w-1/3 hover:scale-[1.02] transition-transform duration-300`}
                >
                    <h3 className="text-lg font-bold mb-5 text-center tracking-wide">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl flex-shrink-0">{tech.icon}</span>
                                <span className="text-sm text-gray-300">{tech.name}</span>
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
