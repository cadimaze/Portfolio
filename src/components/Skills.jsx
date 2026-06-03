import {
  DiAngularSimple, DiReact, DiBootstrap, DiJsBadge, DiPython, DiGithubBadge,
} from "react-icons/di"
import {
  SiAmazonapigateway, SiAmazoncloudwatch, SiAmazonsqs, SiTerraform, SiAwslambda,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"
import Reveal from "./Reveal"

const skills = [
  {
    category: 'Frontend',
    label: '01',
    technologies: [
      { name: 'React',       icon: <DiReact         className='text-sky-400' /> },
      { name: 'JavaScript',  icon: <DiJsBadge       className='text-yellow-400' /> },
      { name: 'Angular',     icon: <DiAngularSimple className='text-red-400' /> },
      { name: 'Bootstrap',   icon: <DiBootstrap     className='text-indigo-400' /> },
    ],
  },
  {
    category: 'Cloud & Infra',
    label: '02',
    technologies: [
      { name: 'AWS Glue',    icon: <FaAws              className='text-orange-400' /> },
      { name: 'Lambda',      icon: <SiAwslambda        className='text-orange-300' /> },
      { name: 'Terraform',   icon: <SiTerraform        className='text-indigo-400' /> },
      { name: 'API Gateway', icon: <SiAmazonapigateway className='text-sky-400' /> },
      { name: 'SQS',         icon: <SiAmazonsqs        className='text-yellow-400' /> },
      { name: 'CloudWatch',  icon: <SiAmazoncloudwatch className='text-green-400' /> },
    ],
  },
  {
    category: 'Linguagens & IA',
    label: '03',
    technologies: [
      { name: 'Python (Avançado)', icon: <DiPython      className='text-yellow-400' /> },
      { name: 'PySpark',           icon: <FaAws         className='text-red-400' /> },
      { name: 'GitHub',            icon: <DiGithubBadge className='text-slate-300' /> },
      { name: 'IA para Dev',       icon: <GiBrain       className='text-cyan-400' /> },
    ],
  },
]

const Skills = () => {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-24" id="skills">
      <Reveal>
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-3">Habilidades</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">O que eu sei fazer</h2>
        <p className="text-slate-400 text-sm md:text-base mb-14 max-w-[520px] leading-7">
          Tecnologias e ferramentas que uso no dia a dia para construir soluções robustas e escaláveis.
        </p>

        <div className="flex flex-col md:flex-row gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-1 border border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.04] hover:border-cyan-900/60 rounded-xl p-6 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <h3 className="text-slate-200 font-semibold text-base">{skill.category}</h3>
                <span className="font-mono text-cyan-400/40 text-xs">{skill.label}</span>
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="text-xl flex-shrink-0">{tech.icon}</span>
                    <span className="text-xs text-slate-400 font-medium">{tech.name}</span>
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
