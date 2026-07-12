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
import { useLang } from "../i18n/LanguageContext"

// Ícones por categoria (referências de componentes, na mesma ordem do dicionário)
const categoryIcons = [
  [DiPython, DiJsBadge, BsDatabase, DiReact, DiHtml5],
  [FaAws, SiAwslambda, SiAmazonapigateway, SiAmazoncloudwatch, SiAmazonsqs, SiTerraform, BsDatabase, BsSearch],
  [SiGithubactions, SiDocker, DiGit, SiJira, MdCloud],
  [GiBrain, SiFirebase, SiTailwindcss, DiAngularSimple, DiBootstrap],
]

const Skills = () => {
  const { t } = useLang()

  return (
    <div className="max-w-[960px] mx-auto px-6 py-24" id="skills">
      <Reveal>
        <SectionHeader
          path="~/habilidades"
          cmd={t.skills.cmd}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.skills.categories.map((skill, index) => (
          <Reveal key={index} width="100%">
            <div className="h-full border border-stone-800 bg-[#100c07]/70 hover:border-amber-900/60 rounded-lg overflow-hidden transition-all duration-300">
              <div className="flex items-center justify-between px-5 py-3 border-b border-stone-800 bg-[#0c0906]">
                <span className="font-mono text-sm text-amber-400">
                  <span className="text-stone-600">▸ </span>{skill.name}
                </span>
                <span className="font-mono text-xs text-stone-600">[0{index + 1}]</span>
              </div>
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-3 p-5">
                {skill.techs.map((name, idx) => {
                  const Icon = categoryIcons[index][idx]
                  return (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="text-base flex-shrink-0 text-amber-400/70">{Icon && <Icon />}</span>
                      <span className="text-xs text-stone-400 font-mono">{name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Skills
