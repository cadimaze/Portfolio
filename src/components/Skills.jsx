import {
  DiReact, DiBootstrap, DiJsBadge, DiPython, DiGit, DiHtml5, DiAngularSimple,
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
import { SectionHeader } from "./Terminal"

const skills = [
  {
    category: 'linguagens',
    label: '01',
    technologies: [
      { name: 'Python (PySpark)',        icon: <DiPython /> },
      { name: 'JavaScript / TypeScript', icon: <DiJsBadge /> },
      { name: 'SQL',                     icon: <BsDatabase /> },
      { name: 'React / React Native',    icon: <DiReact /> },
      { name: 'HTML / CSS',              icon: <DiHtml5 /> },
    ],
  },
  {
    category: 'cloud & infra (aws)',
    label: '02',
    technologies: [
      { name: 'AWS Glue',    icon: <FaAws /> },
      { name: 'Lambda',      icon: <SiAwslambda /> },
      { name: 'API Gateway', icon: <SiAmazonapigateway /> },
      { name: 'CloudWatch',  icon: <SiAmazoncloudwatch /> },
      { name: 'SQS',         icon: <SiAmazonsqs /> },
      { name: 'Terraform',   icon: <SiTerraform /> },
      { name: 'Keyspaces',   icon: <BsDatabase /> },
      { name: 'Athena',      icon: <BsSearch /> },
    ],
  },
  {
    category: 'devops & qualidade',
    label: '03',
    technologies: [
      { name: 'CI/CD',          icon: <SiGithubactions /> },
      { name: 'Docker',         icon: <SiDocker /> },
      { name: 'Git (Avançado)', icon: <DiGit /> },
      { name: 'Scrum / Kanban', icon: <SiJira /> },
      { name: 'ServiceNow',     icon: <MdCloud /> },
    ],
  },
  {
    category: 'ia & ferramentas',
    label: '04',
    technologies: [
      { name: 'IA para Dev',  icon: <GiBrain /> },
      { name: 'Firebase',     icon: <SiFirebase /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Angular',      icon: <DiAngularSimple /> },
      { name: 'Bootstrap',    icon: <DiBootstrap /> },
    ],
  },
]

const Skills = () => {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-24" id="skills">
      <Reveal>
        <SectionHeader
          path="~/habilidades"
          cmd="ls --skills"
          title="o que eu sei fazer"
          subtitle="Tecnologias e ferramentas que uso no dia a dia para construir soluções robustas e escaláveis."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <Reveal key={index} width="100%">
            <div className="h-full border border-stone-800 bg-[#100c07]/70 hover:border-amber-900/60 rounded-lg overflow-hidden transition-all duration-300">
              <div className="flex items-center justify-between px-5 py-3 border-b border-stone-800 bg-[#0c0906]">
                <span className="font-mono text-sm text-amber-400">
                  <span className="text-stone-600">▸ </span>{skill.category}
                </span>
                <span className="font-mono text-xs text-stone-600">[{skill.label}]</span>
              </div>
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-3 p-5">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="text-base flex-shrink-0 text-amber-400/70">{tech.icon}</span>
                    <span className="text-xs text-stone-400 font-mono">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Skills
