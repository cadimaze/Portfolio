import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { SectionHeader } from './Terminal'

// git log --career  (mais recente primeiro)
const experiences = [
  {
    hash: 'e5d7a0f',
    head: true,
    company: 'Itaú Unibanco',
    period: 'Abril 2024 — Presente',
    description: 'Desenvolvimento de soluções com Python e Terraform para gerenciamento de recursos na AWS, integração de serviços cloud e adoção da filosofia DevOps com metodologias ágeis.',
    bullets: [
      'Desenvolvimento aprofundado de pipelines de dados com AWS Glue, utilizando Python (PySpark) e Terraform para provisionamento e automação de recursos.',
      'Integração de serviços AWS: Keyspaces, Athena, IAM, CloudWatch, Lambda e Aurora RDS no processamento e orquestração de dados.',
      'Engenharia dos dados trabalhados, garantindo qualidade, consistência e eficiência nas transformações e ingestões.',
      'Estruturação de projetos com metodologias ágeis (Scrum/Kanban), garantindo entregas iterativas e bem documentadas.',
      'Mentalidade DevOps com foco em automação, observabilidade e melhoria contínua dos fluxos de dados.',
      'Configuração de ambientes para deploys estáveis e replicáveis em diferentes estágios.',
      'Implementação de estratégias robustas de tratamento de erros e falhas nos processos de ETL.',
      'Testes unitários e validações automatizadas com o framework TAAC.',
      'Experiência prática com pipelines de CI/CD, otimizando deploys em ambientes produtivos.',
      'Utilização de dados reais de negócio para soluções analíticas e ingestão de grandes volumes.',
    ],
  },
  {
    hash: '3f8c112',
    company: 'DigiSystem — Front-end',
    period: 'Set 2023 — Dez 2023',
    description: 'Participação ativa no desenvolvimento do DORA, prontuário eletrônico inovador. Contribuições em integração de dados, performance e segurança, sempre com foco em usabilidade.',
  },
  {
    hash: 'b7e42dc',
    company: 'DigiSystem — Back-end',
    period: 'Dez 2021 — Set 2023',
    description: 'Gestão de projetos utilizando eSQL (IBM Toolkit), estudos intensificados de AWS com acesso a ferramentas para treinamento. Conquista de diversos Badges IBM. Projeto FGC-SPG destinado à segmentação eficiente de tipos de clientes.',
  },
  {
    hash: 'a1c09f4',
    company: 'Comando G8',
    period: 'Set 2021 — Dez 2021',
    description: 'Colaboração no departamento de compras, adquirindo conhecimento em processos de aquisição e gestão de suprimentos.',
  },
]

const Experience = () => {
  return (
    <div className='max-w-[780px] mx-auto px-6 py-24' id="experience">
      <Reveal>
        <SectionHeader
          path="~/experiência"
          cmd="git log --career"
          title="trajetória profissional"
          subtitle="Minha evolução ao longo dos anos e as principais contribuições em cada etapa."
        />
      </Reveal>

      <div className='relative'>
        <div className='absolute left-[5px] top-3 bottom-2 w-px bg-gradient-to-b from-amber-500/60 via-amber-800/30 to-transparent' />

        {experiences.map((exp, index) => (
          <Reveal key={index} width="100%">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className='relative pl-8 pb-10'
            >
              <div className='absolute left-0 top-2 w-[11px] h-[11px] rounded-full bg-amber-400 border-2 border-[#0b0906] shadow-[0_0_10px_rgba(245,165,36,0.5)]' />

              <div className='border border-stone-800 bg-[#100c07]/60 hover:border-amber-900/50 rounded-lg p-5 sm:p-6 transition-all duration-300'>
                <div className='font-mono text-xs text-stone-500 mb-3 flex flex-wrap items-center gap-x-2 gap-y-1'>
                  <span className="text-amber-500">commit {exp.hash}</span>
                  {exp.head && (
                    <span className="text-amber-400 border border-amber-800/60 bg-amber-950/30 rounded px-1.5 py-0.5">
                      HEAD → main
                    </span>
                  )}
                </div>

                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2'>
                  <h3 className='text-stone-100 text-base font-bold'>{exp.company}</h3>
                  <span className='font-mono text-amber-400/70 text-xs'>Date: {exp.period}</span>
                </div>

                <p className='text-stone-400 text-sm leading-7'>{exp.description}</p>

                {exp.bullets && (
                  <ul className='mt-4 space-y-2 font-mono'>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className='flex gap-2.5 text-stone-400 text-xs leading-6'>
                        <span className='text-amber-500 flex-shrink-0'>+</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Experience
