import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Comando G8',
        period: 'Set 2021 - Dez 2021',
        description: 'Colaboração no departamento de compras, adquirindo conhecimento em processos de aquisição e gestão de suprimentos.',
      },
      {
        company: 'DigiSystem (BackEnd)',
        period: 'Dez 2021 - Set 2023',
        description: 'Gestão de projetos utilizando a linguagem eSQL(exclusiva da ferramenta IBM Toolkit), estudos intensificados de AWS com acesso a ferramentas AWS para treinamento. Conquista de diversos Badges IBM por meio de cursos de aprimoramento técnico, Projeto FGC-SPG destinado à segmentação eficiente de tipos de clientes no FGC.',
      },
      {
        company: 'DigiSystem (FrontEnd)',
        period: 'Set 2023 - Dez 2023',
        description: 'Devido a minhas habilidades de comunicação, fui convidado a participar de um projeto interno e novo na empresa, mudando de área, assim tive uma participação ativa no desenvolvimento do DORA, um prontuário eletrônico altamente eficaz e inovador. Com a minha experiência em backend auxiliei com ideias de Integração de dados, performance e otimização da segurança, sempre pensando na usabilidade e experiência do usuário.',
      },
      {
        company: 'Itaú Unibanco',
        period: 'abril 2024 - Presente',
        description: 'Atuei no desenvolvimento de soluções utilizando Python e Terraform para o gerenciamento de recursos na AWS Lambda, integrando serviços como API Gateway, SQS e Lambda. Também fui responsável pela tratativa de eventos, incidentes e fluxos por meio da plataforma ServiceNow. Adotei a filosofia DevOps, aplicando metodologias ágeis na organização de projetos voltados à infraestrutura em AWS Cloud. Além disso, participei ativamente de processos de Integração e Entrega Contínuas (CI/CD) e conduzi troubleshooting nos produtos desenvolvidos. Durante o período, estudei e apliquei o desenvolvimento de APIs utilizando a especificação OpenAPI 3.0.',
      },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experiência</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                // eslint-disable-next-line react/jsx-key
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience