import {
  DiReact, DiBootstrap, DiJsBadge, DiPython, DiGithubBadge, DiGit, DiHtml5, DiAngularSimple,
} from "react-icons/di"
import {
  SiAmazonapigateway, SiAmazoncloudwatch, SiAmazonsqs, SiTerraform, SiAwslambda,
  SiTailwindcss, SiFirebase, SiDocker, SiJira, SiGithubactions,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"
import { BsDatabase, BsSearch } from "react-icons/bs"
import { MdCloud } from "react-icons/md"
import Reveal from "./Reveal"

const skills = [
  {
    category: 'Linguagens',
    label: '01',
    technologies: [
      { name: 'Python (PySpark)',        icon: <DiPython        className='text-yellow-400' /> },
      { name: 'JavaScript / TypeScript', icon: <DiJsBadge       className='text-yellow-400' /> },
      { name: 'SQL',                     icon: <BsDatabase      className='text-blue-400' /> },
      { name: 'React / React Native',    icon: <DiReact         className='text-sky-400' /> },
      { name: 'HTML / CSS',              icon: <DiHtml5         className='text-orange-400' /> },
    ],
  },
  {
    category: 'Cloud & Infra (AWS)',
    label: '02',
    technologies: [
      { name: 'AWS Glue',    icon: <FaAws              className='text-orange-400' /> },
      { name: 'Lambda',      icon: <SiAwslambda        className='text-orange-300' /> },
      { name: 'API Gateway', icon: <SiAmazonapigateway className='text-sky-400' /> },
      { name: 'CloudWatch',  icon: <SiAmazoncloudwatch className='text-green-400' /> },
      { name: 'SQS',         icon: <SiAmazonsqs        className='text-yellow-400' /> },
      { name: 'Terraform',   icon: <SiTerraform        className='text-indigo-400' /> },
      { name: 'Keyspaces',   icon: <BsDatabase         className='text-violet-400' /> },
      { name: 'Athena',      icon: <BsSearch           className='text-cyan-400' /> },
    ],
  },
  {
    category: 'DevOps & Qualidade',
    label: '03',
    technologies: [
      { name: 'CI/CD',          icon: <SiGithubactions className='text-slate-300' /> },
      { name: 'Docker',         icon: <SiDocker        className='text-sky-400' /> },
      { name: 'Git (Avançado)', icon: <DiGit           className='text-orange-400' /> },
      { name: 'Scrum / Kanban', icon: <SiJira          className='text-blue-400' /> },
      { name: 'ServiceNow',     icon: <MdCloud         className='text-violet-400' /> },
    ],
  },
  {
    category: 'IA & Ferramentas',
    label: '04',
    technologies: [
      { name: 'IA para Dev',  icon: <GiBrain         className='text-cyan-400' /> },
      { name: 'Firebase',     icon: <SiFirebase      className='text-amber-400' /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss   className='text-cyan-400' /> },
      { name: 'Angular',      icon: <DiAngularSimple className='text-red-400' /> },
      { name: 'Bootstrap',    icon: <DiBootstrap     className='text-indigo-400' /> },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.04] hover:border-cyan-900/60 rounded-xl p-6 transition-all duration-300"
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
