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
    description: 'Gestão de projetos utilizando eSQL (IBM Toolkit), estudos intensificados de AWS com acesso a ferramentas para treinamento. Conquista de diversos Badges IBM. Projeto FGC-SPG destinado à segmentação eficiente de tipos de clientes.',
  },
  {
    company: 'DigiSystem — Front-end',
    period: 'Set 2023 — Dez 2023',
    description: 'Participação ativa no desenvolvimento do DORA, prontuário eletrônico inovador. Contribuições em integração de dados, performance e segurança, sempre com foco em usabilidade.',
  },
  {
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
]

const Experience = () => {
  return (
    <div className='max-w-[760px] mx-auto px-6 py-24' id="experience">
      <Reveal>
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-3">Experiência</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Trajetória profissional</h2>
        <p className='text-slate-400 text-sm md:text-base mb-14 max-w-[520px] leading-7'>
          Minha evolução ao longo dos anos e as principais contribuições em cada etapa.
        </p>
      </Reveal>

      <div className='relative'>
        <div className='absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-cyan-800/30 to-transparent' />

        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className='relative pl-8 pb-12'
            >
              <div className='absolute left-[-4px] top-5 w-[8px] h-[8px] rounded-full bg-cyan-400 border-2 border-[#060d1a]' />

              <div className='border border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.04] hover:border-cyan-900/40 rounded-xl p-6 transition-all duration-300'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3'>
                  <h2 className='text-slate-100 text-base font-semibold'>{experience.company}</h2>
                  <span className='font-mono text-cyan-400/70 text-xs'>{experience.period}</span>
                </div>
                <p className='text-slate-400 text-sm leading-7'>{experience.description}</p>
                {experience.bullets && (
                  <ul className='mt-4 space-y-2.5'>
                    {experience.bullets.map((bullet, i) => (
                      <li key={i} className='flex gap-3 text-slate-400 text-xs leading-6'>
                        <span className='text-cyan-500 mt-1 flex-shrink-0 text-base leading-none'>›</span>
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
