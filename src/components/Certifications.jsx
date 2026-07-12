import Reveal from "./Reveal"
import { SectionHeader } from "./Terminal"
import { useLang } from "../i18n/LanguageContext"

const Certifications = () => {
  const { t } = useLang()

  return (
    <div className="max-w-[960px] mx-auto px-6 py-24" id="certifications">
      <Reveal>
        <SectionHeader
          path="~/certificações"
          cmd={t.certifications.cmd}
          title={t.certifications.title}
          subtitle={t.certifications.subtitle}
        />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {t.certifications.items.map((cert, index) => (
          <Reveal key={index} width="100%">
            <div className="h-full border border-stone-800 bg-[#100c07]/70 hover:border-amber-900/60 rounded-lg p-5 transition-all duration-300 flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <span className="text-amber-400 font-mono text-sm mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <p className="text-stone-100 font-mono font-medium text-sm leading-snug">{cert.name}</p>
                  <p className="text-stone-500 text-xs mt-1 font-mono">@ {cert.issuer}</p>
                </div>
              </div>
              <span className="self-start text-[10px] font-mono text-amber-400/70 border border-amber-900/40 bg-amber-950/20 px-2 py-0.5 rounded">
                #{cert.tag}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Certifications
