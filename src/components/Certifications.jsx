import { BsPatchCheckFill } from "react-icons/bs"
import Reveal from "./Reveal"

const certifications = [
  {
    name: 'Machine Learning Associate',
    issuer: 'IOX — Itaú',
    tag: 'Machine Learning',
    iconColor: 'text-orange-400',
    tagClass: 'text-orange-400 border-orange-900/40 bg-orange-950/20',
  },
  {
    name: 'Associate — Generative AI',
    issuer: 'IOX — Itaú',
    tag: 'Inteligência Artificial',
    iconColor: 'text-orange-400',
    tagClass: 'text-orange-400 border-orange-900/40 bg-orange-950/20',
  },
  {
    name: 'DEVA — AI Coding Agents',
    issuer: 'Cognition',
    tag: 'IA para Codificação',
    iconColor: 'text-violet-400',
    tagClass: 'text-violet-400 border-violet-900/40 bg-violet-950/20',
  },
  {
    name: 'Certificações em MySQL',
    issuer: 'MySQL / Oracle',
    tag: 'Banco de Dados',
    iconColor: 'text-blue-400',
    tagClass: 'text-blue-400 border-blue-900/40 bg-blue-950/20',
  },
  {
    name: 'IBM Integration Bus / API',
    issuer: 'IBM',
    tag: 'Integração',
    iconColor: 'text-sky-400',
    tagClass: 'text-sky-400 border-sky-900/40 bg-sky-950/20',
  },
  {
    name: 'Cloud Pak for Integration',
    issuer: 'IBM',
    tag: 'Cloud — Technical Sales',
    iconColor: 'text-sky-400',
    tagClass: 'text-sky-400 border-sky-900/40 bg-sky-950/20',
  },
  {
    name: 'QRadar XDR — SIEM',
    issuer: 'IBM',
    tag: 'Segurança — Tech Sales',
    iconColor: 'text-sky-400',
    tagClass: 'text-sky-400 border-sky-900/40 bg-sky-950/20',
  },
]

const Certifications = () => {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-24" id="certifications">
      <Reveal>
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-3">Certificações</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Formação complementar</h2>
        <p className="text-slate-400 text-sm md:text-base mb-14 max-w-[520px] leading-7">
          Certificações conquistadas ao longo da carreira em plataformas de tecnologia, IA e cloud.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.04] hover:border-cyan-900/60 rounded-xl p-5 transition-all duration-300 flex flex-col gap-3"
            >
              <BsPatchCheckFill className={`text-xl ${cert.iconColor}`} />
              <div>
                <p className="text-slate-200 font-semibold text-sm leading-snug">{cert.name}</p>
                <p className="text-slate-500 text-xs mt-1 font-mono">{cert.issuer}</p>
              </div>
              <span className={`self-start text-[10px] font-mono px-2.5 py-1 rounded-full border ${cert.tagClass}`}>
                {cert.tag}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

export default Certifications
