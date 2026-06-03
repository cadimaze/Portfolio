import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    company: 'Comando G8',
    period: 'Set 2021 — Dez 2021',
    description: 'Colaboração no departamento de compras, adquirindo conhecimento em processos de aquisição e gestão de suprimentos.',
  },
  {
    company: 'DigiSystem — Back-end',
    period: 'Dez 2021 — Set 2023',
    description: 'Gestão de projetos utilizando eSQL (IBM Toolkit), estudos intensificados de AWS com acesso a ferramentas para treinamento. Conquista de diversos Badges IBM por cursos de aprimoramento técnico. Projeto FGC-SPG destinado à segmentação eficiente de tipos de clientes no FGC.',
  },
  {
    company: 'DigiSystem — Front-end',
    period: 'Set 2023 — Dez 2023',
    description: 'Participação ativa no desenvolvimento do DORA, prontuário eletrônico altamente inovador. Contribuições de integração de dados, performance e otimização de segurança, sempre com foco em usabilidade e experiência do usuário.',
  },
  {
    company: 'Itaú Unibanco',
    period: 'Abril 2024 — Presente',
    description: 'Desenvolvimento de soluções com Python e Terraform para gerenciamento de recursos na AWS, integração de serviços cloud e adoção da filosofia DevOps com metodologias ágeis.',
    bullets: [
      'Desenvolvimento aprofundado de pipelines de dados com AWS Glue, utilizando Python (PySpark) e Terraform para provisionamento e automação de recursos.',
      'Integração de serviços AWS como Keyspaces, Athena, IAM, CloudWatch, Lambda e Aurora RDS no processamento e orquestração de dados.',
      'Engenharia dos dados trabalhados, garantindo qualidade, consistência e eficiência nas transformações e ingestões.',
      'Estruturação e acompanhamento de projetos com metodologias ágeis (Scrum/Kanban), garantindo entregas iterativas e bem documentadas.',
      'Adoção da mentalidade DevOps, com foco em automação, observabilidade e melhoria contínua dos fluxos de dados.',
      'Configuração de ambientes para deploys, assegurando processos estáveis e replicáveis em diferentes estágios.',
      'Implementação de estratégias robustas de tratamento de erros e falhas nos processos de ETL.',
      'Execução de testes unitários e validações automatizadas com o framework TAAC.',
      'Experiência prática com pipelines de CI/CD, otimizando deploys e validações em ambientes produtivos.',
      'Utilização de dados reais de negócio para desenvolvimento de soluções analíticas e ingestão de grandes volumes com confiabilidade.',
    ],
  },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[760px] mx-auto' id="experience">
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-2'>Experiência</h1>
      <p className='text-gray-400 text-base text-center mb-12'>Minha trajetória profissional e as principais contribuições em cada etapa.</p>
      <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className='border border-purple-600 p-6 rounded-xl shadow-md hover:shadow-purple-900/40 hover:shadow-xl transition-all duration-300 bg-purple-700/10 hover:bg-purple-700/20'
            >
              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-1 gap-1'>
                <h2 className='text-gray-100 text-xl font-semibold'>{experience.company}</h2>
                <span className='text-purple-400 text-sm font-medium'>{experience.period}</span>
              </div>
              <p className='text-gray-400 mt-3 text-sm leading-relaxed'>{experience.description}</p>
              {experience.bullets && (
                <ul className='mt-4 space-y-2'>
                  {experience.bullets.map((bullet, i) => (
                    <li key={i} className='flex gap-2 text-gray-400 text-sm leading-relaxed'>
                      <span className='text-purple-500 mt-1 flex-shrink-0'>▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience
