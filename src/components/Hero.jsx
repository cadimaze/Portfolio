import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
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
  { icon: <AiOutlineGithub />,   url: "https://github.com/cadimaze" },
  { icon: <AiOutlineLinkedin />, url: "https://www.linkedin.com/in/guilherme-cadima-b140871b5/" },
  { icon: <AiOutlineInstagram />,url: "https://www.instagram.com/cadimaz/" },
  { icon: <AiOutlineWhatsApp />, url: "https://wa.me/5511947436291?text=Ol%C3%A1%20Guilherme" },
  { icon: <AiOutlineTikTok />,   url: "https://www.tiktok.com/@cadimaze" },
]

const stack = [
  { icon: <DiPython />,      color: 'text-yellow-400', label: 'Python' },
  { icon: <FaAws />,         color: 'text-orange-400', label: 'AWS' },
  { icon: <SiAwslambda />,   color: 'text-orange-300', label: 'Lambda' },
  { icon: <DiGithubBadge />, color: 'text-slate-300',  label: 'GitHub' },
  { icon: <DiDatabase />,    color: 'text-sky-400',    label: 'Database' },
  { icon: <FaReact />,       color: 'text-sky-300',    label: 'React' },
]

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-[860px] mx-auto px-6 relative">

      <div className="flex flex-col items-center text-center pt-20 pb-6" id="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-8"
          >
            — Bem-vindo ao meu portfólio —
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-slate-100 text-5xl md:text-8xl font-bold tracking-tight leading-none mb-3"
          >
            Guilherme<br />
            <span className="text-cyan-400">Cadima</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="my-5"
          >
            <TypeAnimation
              sequence={[
                "Backend Developer", 1200,
                "Data Engineer",     1200,
                "ML Enthusiast",     1200,
                "Tech Enthusiast",   1200,
              ]}
              speed={55}
              repeat={Infinity}
              className="font-mono text-slate-400 text-sm md:text-lg tracking-[0.15em]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-slate-400 text-sm md:text-base mb-10 max-w-[460px] mx-auto leading-7"
          >
            Desenvolvedor de Software & Engenheiro de Dados com 6 anos de experiência,
            especializado em Python, AWS Cloud e pipelines de dados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-2"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("https://drive.google.com/file/d/1jQUWnv1oSn1Brzg5rrLNyfSdyJTy-egy/view?usp=sharing", "_blank")}
              className="w-full sm:w-auto cursor-pointer font-semibold text-[#060d1a] bg-cyan-400 hover:bg-cyan-300 transition-colors px-8 py-3 rounded-lg text-sm tracking-wide"
            >
              Baixar Currículo
            </motion.button>

            <div className="flex gap-5 text-2xl text-slate-500">
              {socials.map(({ icon, url }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, y: -2 }}
                  onClick={() => window.open(url, "_blank")}
                  className="cursor-pointer hover:text-cyan-400 transition-colors duration-200"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="border-t border-white/[0.06] pt-10 pb-6"
      >
        <p className="text-center font-mono text-slate-600 text-[10px] tracking-[0.3em] uppercase mb-6">Stack principal</p>
        <div className="flex flex-wrap justify-center gap-8">
          {stack.map(({ icon, color, label }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className={`flex flex-col items-center gap-1.5 text-4xl ${color} opacity-60 hover:opacity-100 transition-all duration-200 cursor-default`}
              title={label}
            >
              {icon}
              <span className="text-[10px] font-mono text-slate-500 tracking-widest">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  )
}

export default Hero
