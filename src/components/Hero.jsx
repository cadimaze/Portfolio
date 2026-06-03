import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTikTok,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {
  DiDatabase,
  DiGithubBadge,
  DiPython,
} from "react-icons/di";
import { motion } from "framer-motion";
import { FaAws, FaReact } from "react-icons/fa";
import { SiAwslambda } from "react-icons/si";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[900px] mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center" id="hero">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-[680px]"
            >
                <TypeAnimation
                    sequence={[
                        "Backend Dev",
                        1000,
                        "Data Engineer",
                        1000,
                        "ML Enthusiast",
                        1000,
                        "Tech Enthusiast",
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-4xl italic- mb-4 block"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    Olá, eu sou <br/>
                    <span className="text-purple-500">Guilherme Cadima</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 md:text-xl text-lg mb-8 max-w-[480px] mx-auto"
                >
                    Um entusiasta da tecnologia apaixonado pelo ramo há 6 anos.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-6 my-4"
                >
                    <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                    className="z-10 cursor-pointer font-bold text-gray-200 w-full sm:w-auto px-6 py-4 border border-purple-400 rounded-xl"
                    onClick={() => window.open("https://drive.google.com/file/d/1jQUWnv1oSn1Brzg5rrLNyfSdyJTy-egy/view?usp=sharing", "_blank")}
                    >
                    Baixar Currículo
                    </motion.button>

                    <div className="flex gap-5 flex-row text-4xl md:text-5xl text-purple-600 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer"
                        onClick={() => window.open("https://github.com/cadimaze")}>
                            <AiOutlineGithub/>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer"
                        onClick={() => window.open("https://www.linkedin.com/in/guilherme-cadima-b140871b5/", "_blank", "noopener noreferrer")}>
                            <AiOutlineLinkedin />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer"
                         onClick={() => window.open("https://www.instagram.com/cadimaz/")}>
                            <AiOutlineInstagram/>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer"
                        onClick={() => window.open("https://wa.me/5511947436291?text=Ol%C3%A1%20Guilherme")}>
                            <AiOutlineWhatsApp/>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer"
                        onClick={() => window.open("https://www.tiktok.com/@cadimaze")}>
                            <AiOutlineTikTok/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row flex-wrap text-6xl px-4 md:px-0 w-full justify-center items-center gap-3 py-20"
        >
            <p className="text-gray-200 mr-2 text-2xl md:text-3xl font-light w-full text-center mb-2">Meu Conjunto de Soluções</p>
            <DiPython className="text-yellow-500" />
            <FaAws className="text-orange-500" />
            <SiAwslambda className="text-orange-400" />
            <DiGithubBadge className="text-white" />
            <DiDatabase className="text-blue-500" />
            <FaReact className="text-blue-400" />
        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
    </div>
  )
}

export default Hero
