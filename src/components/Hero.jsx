import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { Cursor, Window } from "./Terminal";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTikTok,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { DiDatabase, DiGithubBadge, DiPython } from "react-icons/di";
import { motion } from "framer-motion";
import { FaAws, FaReact } from "react-icons/fa";
import { SiAwslambda } from "react-icons/si";

const socials = [
  { icon: <AiOutlineGithub />,    url: "https://github.com/cadimaze",                                    label: "github" },
  { icon: <AiOutlineLinkedin />,  url: "https://www.linkedin.com/in/guilherme-cadima-b140871b5/",         label: "linkedin" },
  { icon: <AiOutlineInstagram />, url: "https://www.instagram.com/cadimaz/",                              label: "instagram" },
  { icon: <AiOutlineWhatsApp />,  url: "https://wa.me/5511947436291?text=Ol%C3%A1%20Guilherme",           label: "whatsapp" },
  { icon: <AiOutlineTikTok />,    url: "https://www.tiktok.com/@cadimaze",                                label: "tiktok" },
]

const stack = [
  { icon: <DiPython />,      label: 'python' },
  { icon: <FaAws />,         label: 'aws' },
  { icon: <SiAwslambda />,   label: 'lambda' },
  { icon: <DiGithubBadge />, label: 'github' },
  { icon: <DiDatabase />,    label: 'sql' },
  { icon: <FaReact />,       label: 'react' },
]

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-[880px] mx-auto px-6 relative pt-24 pb-12">

      <div className="scanlines relative" id="hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Window title="guilherme@cadima: ~" bodyClass="p-6 sm:p-10">
            <p className="font-mono text-xs sm:text-sm text-stone-500 mb-6">
              <span className="text-amber-500">$</span> whoami
            </p>

            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-stone-100 mb-5"
            >
              Guilherme<br />
              <span className="text-amber-400 glow">Cadima</span>
            </motion.h1>

            <div className="font-mono text-sm sm:text-lg mb-7">
              <span className="text-amber-500 mr-2">&gt;</span>
              <TypeAnimation
                sequence={[
                  "backend developer", 1200,
                  "data engineer",     1200,
                  "ml enthusiast",     1200,
                  "tech enthusiast",   1200,
                ]}
                speed={55}
                repeat={Infinity}
                className="text-stone-300"
              />
              <Cursor className="ml-0.5" />
            </div>

            <p className="text-stone-400 text-sm md:text-base max-w-[520px] leading-7 mb-9">
              <span className="text-stone-600"># </span>
              Desenvolvedor de Software &amp; Engenheiro de Dados com 6 anos de experiência,
              especializado em Python, AWS Cloud e pipelines de dados.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open("/curriculo.pdf", "_blank")}
                className="cursor-pointer font-mono font-bold text-[#0b0906] bg-amber-400 hover:bg-amber-300 transition-colors px-6 py-3 rounded text-sm tracking-tight"
              >
                ./baixar-curriculo.pdf
              </motion.button>

              <div className="flex gap-4 text-2xl text-stone-500">
                {socials.map(({ icon, url, label }, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, y: -2 }}
                    onClick={() => window.open(url, "_blank")}
                    title={label}
                    className="cursor-pointer hover:text-amber-400 transition-colors duration-200"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </Window>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8"
      >
        <p className="font-mono text-xs text-stone-600 mb-5">
          <span className="text-amber-500">$</span> ls ./stack
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-5">
          {stack.map(({ icon, label }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="flex items-center gap-2 text-2xl text-amber-400/70 hover:text-amber-400 transition-all duration-200 cursor-default"
              title={label}
            >
              {icon}
              <span className="text-xs font-mono text-stone-500 tracking-tight">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <ShinyEffect left={-100} top={-40} size={1200} />
      </div>
    </div>
  )
}

export default Hero
