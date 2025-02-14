import profilepic from "../assets/ICONE.png";
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
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8" id="hero">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            > 
                <TypeAnimation 
                    sequence={[
                        "Backend Dev",
                        1000,
                        "Tech Enthusiast",
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    Ola, eu sou <br/>
                    <span className="text-purple-500">Guilherme Cadima</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    Um entusiasta da tecnologia apaixonado pelo ramo há 4 anos.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                    className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
                    onClick={() => window.open("https://drive.google.com/file/d/1jQUWnv1oSn1Brzg5rrLNyfSdyJTy-egy/view?usp=sharing", "_blank")}
                    >
                    Baixar Currículo
                    </motion.button>


                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-600 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} 
                        onClick={() => window.open("https://github.com/cadimaze")}>
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a 
                        whileHover={{ scale: 1.2 }} 
                        onClick={() => window.open("https://www.linkedin.com/in/guilherme-cadima-b140871b5/", "_blank", "noopener noreferrer")}>
                        <AiOutlineLinkedin />
                        </motion.a>


                        <motion.a whileHover={{ scale: 1.2 }}
                         onClick={() => window.open("https://www.instagram.com/cadimaz/")}>
                            <AiOutlineInstagram/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} 
                        onClick={() => window.open("https://wa.me/5511947436291?text=Olá%20Guilherme")}>
                            <AiOutlineWhatsApp/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} 
                        onClick={() => window.open("https://www.tiktok.com/@cadimaze")}>
                            <AiOutlineTikTok/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[399px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 2}}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">Meu Conjunto de Soluções</p>
            <DiPython className="text-yellow-600 mx-2" />
            <FaAws className="text-orange-500 mx-2" />
            <SiAwslambda className="text-orange-500 mx-2" />
            <DiGithubBadge className="text-white mx-2" />
            <DiDatabase className="text-blue-500 mx-2" />
            <FaReact className="text-blue-500 mx-2" />

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero