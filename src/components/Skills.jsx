import { DiReact, DiJava, DiJsBadge, DiPython } from 'react-icons/di'
import {
  SiAmazonapigateway, SiAmazoncloudwatch, SiAmazonsqs, SiTerraform, SiAwslambda,
  SiGithubactions, SiNodedotjs, SiApachecassandra, SiAmazonrds, SiAmazons3,
  SiAmazonecs, SiDatabricks, SiApacheairflow,
} from 'react-icons/si'
import { FaAws, FaUserShield } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import {
  BsDatabase, BsSearch, BsBraces, BsEyeglasses, BsBug, BsClipboardCheck,
  BsStars, BsLayers, BsShieldCheck, BsGraphUp,
} from 'react-icons/bs'
import { MdArchitecture, MdOutlineModelTraining, MdOutlineSupportAgent } from 'react-icons/md'
import { TbArrowsShuffle } from 'react-icons/tb'
import { LuBrainCircuit } from 'react-icons/lu'
import { Card, IconTile, Section, SectionHeader } from './ui'
import GsapStagger from './fx/GsapStagger'
import { useLang } from '../i18n/LanguageContext'

// Ícone de cada tecnologia, na mesma ordem do dicionário de traduções
const techIcons = [
  [BsDatabase, MdArchitecture, SiDatabricks, BsLayers, TbArrowsShuffle],
  [FaAws, BsSearch, SiApachecassandra, SiAmazonrds, SiAmazons3],
  [DiPython, DiJsBadge, DiJava, SiNodedotjs, DiReact],
  [SiAwslambda, SiAmazonecs, SiAmazonsqs, SiAmazonapigateway, SiAmazoncloudwatch, FaUserShield, SiTerraform],
  [BsShieldCheck, BsEyeglasses, BsBug, SiGithubactions, BsClipboardCheck],
  [BsStars, LuBrainCircuit, MdOutlineModelTraining, GiBrain, BsGraphUp],
  [SiApacheairflow, MdOutlineSupportAgent],
]

// Ícone da categoria (o "botão" extrudado no topo do card)
const categoryIcons = [
  SiDatabricks, FaAws, BsBraces, SiAwslambda, BsShieldCheck, LuBrainCircuit, SiApacheairflow,
]

// Bento: blocos largos abrem e fecham a malha, os estreitos formam a faixa do meio
const spans = [
  'sm:col-span-2 lg:col-span-3',
  'sm:col-span-2 lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'sm:col-span-2 lg:col-span-3',
  'sm:col-span-2 lg:col-span-3',
]

const isWide = (index) => index === 0 || index === 1 || index === 5 || index === 6

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
          const wide = isWide(index)
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

                <ul className={`mt-4 grid gap-x-4 gap-y-2.5 ${wide ? 'sm:grid-cols-2' : ''}`}>
                  {category.techs.map((name, idx) => {
                    const Icon = techIcons[index][idx]
                    return (
                      <li key={name} className="flex items-center gap-2.5">
                        <span className="shrink-0 text-[15px] text-accent/70">{Icon && <Icon />}</span>
                        <span className="font-mono text-[12px] leading-5 text-ink/70">{name}</span>
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
