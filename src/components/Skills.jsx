import { DiReact, DiJava, DiJsBadge, DiPython, DiGit, DiHtml5 } from 'react-icons/di'
import {
  SiAmazonapigateway, SiAmazoncloudwatch, SiAmazonsqs, SiTerraform, SiAwslambda,
  SiDocker, SiJira, SiGithubactions, SiNodedotjs, SiOpenapiinitiative,
  SiApachecassandra, SiAmazonrds, SiAmazons3, SiAmazonec2, SiKubernetes, SiAmazonecs,
} from 'react-icons/si'
import { FaAws, FaUserShield } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { BsDatabase, BsSearch, BsBraces, BsEyeglasses, BsBug, BsClipboardCheck, BsStars, BsRobot } from 'react-icons/bs'
import { MdArchitecture, MdCloud, MdOutlineModelTraining } from 'react-icons/md'
import { TbApi } from 'react-icons/tb'
import { HiOutlineCube } from 'react-icons/hi'
import { Card, IconTile, Section, SectionHeader } from './ui'
import GsapStagger from './fx/GsapStagger'
import { useLang } from '../i18n/LanguageContext'

// Ícone de cada tecnologia, na mesma ordem do dicionário de traduções
const techIcons = [
  [MdArchitecture, BsBraces, BsEyeglasses, BsBug, DiGit],
  [DiJava, DiPython, DiJsBadge, SiNodedotjs, DiReact, BsDatabase, DiHtml5],
  [TbApi, SiOpenapiinitiative, SiAmazonapigateway, SiAmazonsqs],
  [FaAws, BsSearch, SiApachecassandra, SiAmazonrds, SiAmazons3],
  [SiAwslambda, SiAmazonec2, SiAmazoncloudwatch, FaUserShield, SiTerraform],
  [SiDocker, SiKubernetes, SiAmazonecs],
  [SiGithubactions, MdCloud, BsClipboardCheck, SiJira],
  [GiBrain, BsStars, MdOutlineModelTraining, BsRobot],
]

const categoryIcons = [MdArchitecture, BsBraces, TbApi, FaAws, SiAwslambda, HiOutlineCube, SiGithubactions, GiBrain]

// Bento: os dois primeiros blocos são largos, o resto preenche a malha
const spans = [
  'sm:col-span-2 lg:col-span-3',
  'sm:col-span-2 lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
]

const Skills = () => {
  const { t } = useLang()

  return (
    <Section id="skills">
      <SectionHeader
        num={t.skills.num}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
        meta={t.skills.meta}
      />

      <GsapStagger
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
        selector=":scope > div"
      >
        {t.skills.categories.map((category, index) => {
          const CategoryIcon = categoryIcons[index]
          const wide = index < 2
          return (
            <div key={category.name} className={spans[index]}>
              <Card tilt max={7} className="h-full p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <IconTile size={wide ? 'md' : 'sm'}>{CategoryIcon && <CategoryIcon />}</IconTile>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  className={`font-extrabold leading-snug tracking-tight text-ink ${
                    wide ? 'text-[19px]' : 'text-[15.5px]'
                  }`}
                >
                  {category.name}
                </h3>

                <ul
                  className={`mt-4 grid gap-x-4 gap-y-2.5 ${wide ? 'sm:grid-cols-2' : ''}`}
                >
                  {category.techs.map((name, idx) => {
                    const Icon = techIcons[index][idx]
                    return (
                      <li key={name} className="flex items-center gap-2.5">
                        <span className="text-[15px] text-accent/70">{Icon && <Icon />}</span>
                        <span className="font-mono text-[12px] text-ink/70">{name}</span>
                      </li>
                    )
                  })}
                </ul>
              </Card>
            </div>
          )
        })}
      </GsapStagger>
    </Section>
  )
}

export default Skills
