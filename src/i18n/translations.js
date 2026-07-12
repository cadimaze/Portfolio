// Dicionário de traduções — PT (BR), EN, ES.
// Comandos de terminal (cmd) são mantidos iguais em todos os idiomas por serem "shell commands".
// Texto entre **asteriscos** é renderizado com destaque âmbar (ver renderRich em utils).

export const LANGS = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export const translations = {
  /* ---------------------------------------------------------------- PT */
  pt: {
    nav: {
      skills: 'habilidades',
      certifications: 'certificações',
      portfolio: 'projetos',
      experience: 'experiência',
      contact: 'sobre',
      menu: 'menu',
    },
    hero: {
      cmd: 'whoami',
      roles: ['backend developer', 'data engineer', 'ml enthusiast', 'tech enthusiast'],
      description:
        'Desenvolvedor de Software & Engenheiro de Dados com 6 anos de experiência, especializado em Python, AWS Cloud e pipelines de dados.',
      cta: './baixar-curriculo.pdf',
      stackCmd: 'ls ./stack',
    },
    skills: {
      cmd: 'ls --skills',
      title: 'o que eu sei fazer',
      subtitle:
        'Tecnologias e ferramentas que uso no dia a dia para construir soluções robustas e escaláveis.',
      categories: [
        { name: 'linguagens', techs: ['Python (PySpark)', 'JavaScript / TypeScript', 'SQL', 'React / React Native', 'HTML / CSS'] },
        { name: 'cloud & infra (aws)', techs: ['AWS Glue', 'Lambda', 'API Gateway', 'CloudWatch', 'SQS', 'Terraform', 'Keyspaces', 'Athena'] },
        { name: 'devops & qualidade', techs: ['CI/CD', 'Docker', 'Git (Avançado)', 'Scrum / Kanban', 'ServiceNow'] },
        { name: 'ia & ferramentas', techs: ['IA para Dev', 'Firebase', 'Tailwind CSS', 'Angular', 'Bootstrap'] },
      ],
    },
    certifications: {
      cmd: 'cat certificados.log',
      title: 'formação complementar',
      subtitle: 'Certificações conquistadas ao longo da carreira em plataformas de tecnologia, IA e cloud.',
      items: [
        { name: 'Machine Learning Associate', issuer: 'IOX — Itaú', tag: 'machine-learning' },
        { name: 'Associate — Generative AI', issuer: 'IOX — Itaú', tag: 'inteligência-artificial' },
        { name: 'DEVA — AI Coding Agents', issuer: 'Cognition', tag: 'ia-para-codificação' },
        { name: 'Certificações em MySQL', issuer: 'MySQL / Oracle', tag: 'banco-de-dados' },
        { name: 'IBM Integration Bus / API', issuer: 'IBM', tag: 'integração' },
        { name: 'Cloud Pak for Integration', issuer: 'IBM', tag: 'cloud · tech-sales' },
        { name: 'QRadar XDR — SIEM', issuer: 'IBM', tag: 'segurança · tech-sales' },
      ],
    },
    portfolio: {
      cmd: 'git show --projects',
      title: 'projetos selecionados',
      subtitle: 'Projetos desenvolvidos com foco em qualidade, usabilidade e boas práticas.',
      viewSite: 'ver-site',
      items: [
        {
          tags: ['educacional', 'javascript', 'interativo', 'didático'],
          description:
            'Plataforma educacional onde alunos aprendem e praticam operações CRUD de forma visual e didática. Execute cenários reais em tempo real, visualize o que acontece em cada etapa e entenda na prática como Create, Read, Update e Delete funcionam — sem precisar configurar nada.',
        },
        {
          tags: ['ia', 'hackathon', '2º-lugar'],
          description:
            '2º lugar em Hackathon com foco em StackSpot AI, utilizando Agent, Knowledge Source e QuickCommand para resolver o desafio proposto com agilidade e criatividade.',
        },
        {
          tags: ['firebase', 'pwa', 'javascript', 'tailwind'],
          description:
            'PWA de controle financeiro pessoal com sincronização em tempo real via Firebase. Dashboard, Transações, Histórico, Simulador, Investimentos, Cartões e Assinaturas — com autenticação via Google.',
        },
      ],
    },
    experience: {
      cmd: 'git log --career',
      title: 'trajetória profissional',
      subtitle: 'Minha evolução ao longo dos anos e as principais contribuições em cada etapa.',
      dateLabel: 'Date',
      items: [
        {
          period: 'Abril 2024 — Presente',
          description:
            'Desenvolvimento de soluções com Python e Terraform para gerenciamento de recursos na AWS, integração de serviços cloud e adoção da filosofia DevOps com metodologias ágeis.',
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
          period: 'Set 2023 — Dez 2023',
          description:
            'Participação ativa no desenvolvimento do DORA, prontuário eletrônico inovador. Contribuições em integração de dados, performance e segurança, sempre com foco em usabilidade.',
        },
        {
          period: 'Dez 2021 — Set 2023',
          description:
            'Gestão de projetos utilizando eSQL (IBM Toolkit), estudos intensificados de AWS com acesso a ferramentas para treinamento. Conquista de diversos Badges IBM. Projeto FGC-SPG destinado à segmentação eficiente de tipos de clientes.',
        },
        {
          period: 'Set 2021 — Dez 2021',
          description:
            'Colaboração no departamento de compras, adquirindo conhecimento em processos de aquisição e gestão de suprimentos.',
        },
      ],
    },
    contact: {
      cmd: 'cat sobre-mim.md',
      title: 'quem sou eu',
      aboutFile: 'sobre-mim.md',
      formFile: 'enviar-mensagem.sh',
      paragraphs: [
        'Me chamo **Guilherme Cadima**, tenho 25 anos e moro em São Paulo, Capital. Sou Desenvolvedor de Software graduado em Ciência de Dados pela Universidade Paulista, com foco em Engenharia de Dados e desenvolvimento back-end.',
        'Apaixonado por tecnologia há 6 anos, trabalho diariamente com Python, AWS Cloud e pipelines de dados — transformando dados brutos em soluções escaláveis e confiáveis. Uso IAs como ferramenta de produtividade para acelerar e aprimorar o desenvolvimento.',
        'Tenho uma paixão crescente por **Machine Learning** — estudo algoritmos, modelos preditivos e aplicações práticas com Python. Meu próximo objetivo é atuar de forma dedicada nessa área, unindo minha base sólida em Engenharia de Dados com a inteligência dos modelos.',
        'Fora do código, sou pai de uma linda menina, torcedor roxo do São Paulo FC, fã de academia, animais, Super-Heróis, RPG de Mesa e Cinema. Meu livro favorito é **“1984”** de George Orwell.',
      ],
      statExp: 'anos de experiência',
      statProjects: 'projetos entregues',
      formCmd: './contato --iniciar',
      labelName: 'nome',
      labelEmail: 'email',
      labelMessage: 'mensagem',
      phName: 'seu nome',
      phEmail: 'seu@email.com',
      phMessage: 'sua mensagem...',
      btn: '[ enviar_mensagem ]',
      btnSending: '[ enviando... ]',
      sending: '$ enviando mensagem...',
      success: '✓ mensagem enviada com sucesso — retorno em breve!',
      error: '✗ erro ao enviar. tente novamente ou me chame no e-mail.',
    },
    sites: {
      cmd: 'ls -la',
      title: 'acesse ao vivo',
      subtitle: 'Projetos publicados e disponíveis — experimente agora mesmo.',
      items: [
        { tagline: 'Plataforma educacional para aprender CRUD na prática, em tempo real.' },
        { tagline: 'Controle financeiro pessoal com dashboard, investimentos e sincronização em tempo real.' },
      ],
    },
    footer: {
      role: 'desenvolvedor de software & engenheiro de dados',
      copyright: '© 2026 guilherme cadima — feito com react & tailwind',
    },
  },

  /* ---------------------------------------------------------------- EN */
  en: {
    nav: {
      skills: 'skills',
      certifications: 'certifications',
      portfolio: 'projects',
      experience: 'experience',
      contact: 'about',
      menu: 'menu',
    },
    hero: {
      cmd: 'whoami',
      roles: ['backend developer', 'data engineer', 'ml enthusiast', 'tech enthusiast'],
      description:
        'Software Developer & Data Engineer with 6 years of experience, specialized in Python, AWS Cloud and data pipelines.',
      cta: './download-resume.pdf',
      stackCmd: 'ls ./stack',
    },
    skills: {
      cmd: 'ls --skills',
      title: 'what i can do',
      subtitle: 'Technologies and tools I use daily to build robust and scalable solutions.',
      categories: [
        { name: 'languages', techs: ['Python (PySpark)', 'JavaScript / TypeScript', 'SQL', 'React / React Native', 'HTML / CSS'] },
        { name: 'cloud & infra (aws)', techs: ['AWS Glue', 'Lambda', 'API Gateway', 'CloudWatch', 'SQS', 'Terraform', 'Keyspaces', 'Athena'] },
        { name: 'devops & quality', techs: ['CI/CD', 'Docker', 'Git (Advanced)', 'Scrum / Kanban', 'ServiceNow'] },
        { name: 'ai & tools', techs: ['AI for Dev', 'Firebase', 'Tailwind CSS', 'Angular', 'Bootstrap'] },
      ],
    },
    certifications: {
      cmd: 'cat certificados.log',
      title: 'complementary education',
      subtitle: 'Certifications earned throughout my career across technology, AI and cloud platforms.',
      items: [
        { name: 'Machine Learning Associate', issuer: 'IOX — Itaú', tag: 'machine-learning' },
        { name: 'Associate — Generative AI', issuer: 'IOX — Itaú', tag: 'artificial-intelligence' },
        { name: 'DEVA — AI Coding Agents', issuer: 'Cognition', tag: 'ai-for-coding' },
        { name: 'MySQL Certifications', issuer: 'MySQL / Oracle', tag: 'database' },
        { name: 'IBM Integration Bus / API', issuer: 'IBM', tag: 'integration' },
        { name: 'Cloud Pak for Integration', issuer: 'IBM', tag: 'cloud · tech-sales' },
        { name: 'QRadar XDR — SIEM', issuer: 'IBM', tag: 'security · tech-sales' },
      ],
    },
    portfolio: {
      cmd: 'git show --projects',
      title: 'selected projects',
      subtitle: 'Projects built with a focus on quality, usability and best practices.',
      viewSite: 'view-site',
      items: [
        {
          tags: ['educational', 'javascript', 'interactive', 'didactic'],
          description:
            'Educational platform where students learn and practice CRUD operations in a visual, hands-on way. Run real scenarios in real time, see what happens at each step and understand how Create, Read, Update and Delete work in practice — with zero setup.',
        },
        {
          tags: ['ai', 'hackathon', '2nd-place'],
          description:
            '2nd place in a Hackathon focused on StackSpot AI, using Agent, Knowledge Source and QuickCommand to solve the proposed challenge with agility and creativity.',
        },
        {
          tags: ['firebase', 'pwa', 'javascript', 'tailwind'],
          description:
            'Personal finance PWA with real-time sync via Firebase. Dashboard, Transactions, History, Simulator, Investments, Cards and Subscriptions — with Google authentication.',
        },
      ],
    },
    experience: {
      cmd: 'git log --career',
      title: 'professional journey',
      subtitle: 'My evolution over the years and the main contributions at each stage.',
      dateLabel: 'Date',
      items: [
        {
          period: 'April 2024 — Present',
          description:
            'Building solutions with Python and Terraform to manage AWS resources, integrating cloud services and adopting a DevOps philosophy with agile methodologies.',
          bullets: [
            'In-depth development of data pipelines with AWS Glue, using Python (PySpark) and Terraform for resource provisioning and automation.',
            'Integration of AWS services: Keyspaces, Athena, IAM, CloudWatch, Lambda and Aurora RDS for data processing and orchestration.',
            'Data engineering of the processed data, ensuring quality, consistency and efficiency in transformations and ingestions.',
            'Project structuring with agile methodologies (Scrum/Kanban), ensuring iterative and well-documented deliveries.',
            'DevOps mindset focused on automation, observability and continuous improvement of data flows.',
            'Environment setup for stable and reproducible deploys across different stages.',
            'Implementation of robust error and failure handling strategies in ETL processes.',
            'Unit tests and automated validations with the TAAC framework.',
            'Hands-on experience with CI/CD pipelines, optimizing deploys in production environments.',
            'Use of real business data for analytical solutions and large-volume ingestion.',
          ],
        },
        {
          period: 'Sep 2023 — Dec 2023',
          description:
            'Active participation in the development of DORA, an innovative electronic medical record. Contributions to data integration, performance and security, always focused on usability.',
        },
        {
          period: 'Dec 2021 — Sep 2023',
          description:
            'Project management using eSQL (IBM Toolkit), intensive AWS studies with access to training tools. Earned several IBM Badges. FGC-SPG project aimed at efficient customer segmentation.',
        },
        {
          period: 'Sep 2021 — Dec 2021',
          description:
            'Collaboration in the purchasing department, gaining knowledge in procurement processes and supply management.',
        },
      ],
    },
    contact: {
      cmd: 'cat about-me.md',
      title: 'who i am',
      aboutFile: 'about-me.md',
      formFile: 'send-message.sh',
      paragraphs: [
        'My name is **Guilherme Cadima**, I am 25 years old and live in São Paulo, Brazil. I am a Software Developer with a degree in Data Science from Universidade Paulista, focused on Data Engineering and back-end development.',
        'Passionate about technology for 6 years, I work daily with Python, AWS Cloud and data pipelines — turning raw data into scalable and reliable solutions. I use AI as a productivity tool to accelerate and improve development.',
        'I have a growing passion for **Machine Learning** — I study algorithms, predictive models and practical applications with Python. My next goal is to work dedicatedly in this field, combining my solid Data Engineering foundation with the intelligence of models.',
        'Beyond code, I am the father of a lovely girl, a passionate São Paulo FC fan, and a fan of the gym, animals, Super-Heroes, tabletop RPG and Cinema. My favorite book is **“1984”** by George Orwell.',
      ],
      statExp: 'years of experience',
      statProjects: 'delivered projects',
      formCmd: './contact --start',
      labelName: 'name',
      labelEmail: 'email',
      labelMessage: 'message',
      phName: 'your name',
      phEmail: 'you@email.com',
      phMessage: 'your message...',
      btn: '[ send_message ]',
      btnSending: '[ sending... ]',
      sending: '$ sending message...',
      success: '✓ message sent successfully — I will get back to you soon!',
      error: '✗ failed to send. please try again or reach me by e-mail.',
    },
    sites: {
      cmd: 'ls -la',
      title: 'live now',
      subtitle: 'Published and available projects — try them right now.',
      items: [
        { tagline: 'Educational platform to learn CRUD hands-on, in real time.' },
        { tagline: 'Personal finance control with dashboard, investments and real-time sync.' },
      ],
    },
    footer: {
      role: 'software developer & data engineer',
      copyright: '© 2026 guilherme cadima — built with react & tailwind',
    },
  },

  /* ---------------------------------------------------------------- ES */
  es: {
    nav: {
      skills: 'habilidades',
      certifications: 'certificaciones',
      portfolio: 'proyectos',
      experience: 'experiencia',
      contact: 'sobre mí',
      menu: 'menú',
    },
    hero: {
      cmd: 'whoami',
      roles: ['backend developer', 'data engineer', 'ml enthusiast', 'tech enthusiast'],
      description:
        'Desarrollador de Software e Ingeniero de Datos con 6 años de experiencia, especializado en Python, AWS Cloud y pipelines de datos.',
      cta: './descargar-cv.pdf',
      stackCmd: 'ls ./stack',
    },
    skills: {
      cmd: 'ls --skills',
      title: 'lo que sé hacer',
      subtitle: 'Tecnologías y herramientas que uso a diario para construir soluciones robustas y escalables.',
      categories: [
        { name: 'lenguajes', techs: ['Python (PySpark)', 'JavaScript / TypeScript', 'SQL', 'React / React Native', 'HTML / CSS'] },
        { name: 'cloud & infra (aws)', techs: ['AWS Glue', 'Lambda', 'API Gateway', 'CloudWatch', 'SQS', 'Terraform', 'Keyspaces', 'Athena'] },
        { name: 'devops & calidad', techs: ['CI/CD', 'Docker', 'Git (Avanzado)', 'Scrum / Kanban', 'ServiceNow'] },
        { name: 'ia & herramientas', techs: ['IA para Dev', 'Firebase', 'Tailwind CSS', 'Angular', 'Bootstrap'] },
      ],
    },
    certifications: {
      cmd: 'cat certificados.log',
      title: 'formación complementaria',
      subtitle: 'Certificaciones obtenidas a lo largo de mi carrera en plataformas de tecnología, IA y cloud.',
      items: [
        { name: 'Machine Learning Associate', issuer: 'IOX — Itaú', tag: 'machine-learning' },
        { name: 'Associate — Generative AI', issuer: 'IOX — Itaú', tag: 'inteligencia-artificial' },
        { name: 'DEVA — AI Coding Agents', issuer: 'Cognition', tag: 'ia-para-programación' },
        { name: 'Certificaciones en MySQL', issuer: 'MySQL / Oracle', tag: 'base-de-datos' },
        { name: 'IBM Integration Bus / API', issuer: 'IBM', tag: 'integración' },
        { name: 'Cloud Pak for Integration', issuer: 'IBM', tag: 'cloud · tech-sales' },
        { name: 'QRadar XDR — SIEM', issuer: 'IBM', tag: 'seguridad · tech-sales' },
      ],
    },
    portfolio: {
      cmd: 'git show --projects',
      title: 'proyectos seleccionados',
      subtitle: 'Proyectos desarrollados con foco en calidad, usabilidad y buenas prácticas.',
      viewSite: 'ver-sitio',
      items: [
        {
          tags: ['educativo', 'javascript', 'interactivo', 'didáctico'],
          description:
            'Plataforma educativa donde los alumnos aprenden y practican operaciones CRUD de forma visual y didáctica. Ejecuta escenarios reales en tiempo real, visualiza lo que ocurre en cada paso y entiende en la práctica cómo funcionan Create, Read, Update y Delete — sin configurar nada.',
        },
        {
          tags: ['ia', 'hackathon', '2º-lugar'],
          description:
            '2º lugar en un Hackathon centrado en StackSpot AI, utilizando Agent, Knowledge Source y QuickCommand para resolver el desafío propuesto con agilidad y creatividad.',
        },
        {
          tags: ['firebase', 'pwa', 'javascript', 'tailwind'],
          description:
            'PWA de control financiero personal con sincronización en tiempo real vía Firebase. Dashboard, Transacciones, Historial, Simulador, Inversiones, Tarjetas y Suscripciones — con autenticación vía Google.',
        },
      ],
    },
    experience: {
      cmd: 'git log --career',
      title: 'trayectoria profesional',
      subtitle: 'Mi evolución a lo largo de los años y las principales contribuciones en cada etapa.',
      dateLabel: 'Date',
      items: [
        {
          period: 'Abril 2024 — Presente',
          description:
            'Desarrollo de soluciones con Python y Terraform para la gestión de recursos en AWS, integración de servicios cloud y adopción de la filosofía DevOps con metodologías ágiles.',
          bullets: [
            'Desarrollo avanzado de pipelines de datos con AWS Glue, utilizando Python (PySpark) y Terraform para el aprovisionamiento y la automatización de recursos.',
            'Integración de servicios AWS: Keyspaces, Athena, IAM, CloudWatch, Lambda y Aurora RDS en el procesamiento y la orquestación de datos.',
            'Ingeniería de los datos trabajados, garantizando calidad, consistencia y eficiencia en las transformaciones e ingestas.',
            'Estructuración de proyectos con metodologías ágiles (Scrum/Kanban), garantizando entregas iterativas y bien documentadas.',
            'Mentalidad DevOps enfocada en automatización, observabilidad y mejora continua de los flujos de datos.',
            'Configuración de entornos para despliegues estables y reproducibles en diferentes etapas.',
            'Implementación de estrategias robustas de manejo de errores y fallos en los procesos de ETL.',
            'Pruebas unitarias y validaciones automatizadas con el framework TAAC.',
            'Experiencia práctica con pipelines de CI/CD, optimizando despliegues en entornos productivos.',
            'Uso de datos reales de negocio para soluciones analíticas e ingesta de grandes volúmenes.',
          ],
        },
        {
          period: 'Sep 2023 — Dic 2023',
          description:
            'Participación activa en el desarrollo de DORA, un historial médico electrónico innovador. Contribuciones en integración de datos, rendimiento y seguridad, siempre con foco en la usabilidad.',
        },
        {
          period: 'Dic 2021 — Sep 2023',
          description:
            'Gestión de proyectos utilizando eSQL (IBM Toolkit), estudios intensivos de AWS con acceso a herramientas de formación. Obtención de varios Badges IBM. Proyecto FGC-SPG destinado a la segmentación eficiente de tipos de clientes.',
        },
        {
          period: 'Sep 2021 — Dic 2021',
          description:
            'Colaboración en el departamento de compras, adquiriendo conocimiento en procesos de adquisición y gestión de suministros.',
        },
      ],
    },
    contact: {
      cmd: 'cat sobre-mi.md',
      title: 'quién soy',
      aboutFile: 'sobre-mi.md',
      formFile: 'enviar-mensaje.sh',
      paragraphs: [
        'Me llamo **Guilherme Cadima**, tengo 25 años y vivo en São Paulo, Brasil. Soy Desarrollador de Software graduado en Ciencia de Datos por la Universidade Paulista, con foco en Ingeniería de Datos y desarrollo back-end.',
        'Apasionado por la tecnología desde hace 6 años, trabajo a diario con Python, AWS Cloud y pipelines de datos — transformando datos en bruto en soluciones escalables y confiables. Uso IAs como herramienta de productividad para acelerar y mejorar el desarrollo.',
        'Tengo una pasión creciente por el **Machine Learning** — estudio algoritmos, modelos predictivos y aplicaciones prácticas con Python. Mi próximo objetivo es dedicarme de lleno a esta área, uniendo mi sólida base en Ingeniería de Datos con la inteligencia de los modelos.',
        'Fuera del código, soy padre de una hermosa niña, hincha del São Paulo FC, fan del gimnasio, los animales, los Superhéroes, el RPG de mesa y el Cine. Mi libro favorito es **“1984”** de George Orwell.',
      ],
      statExp: 'años de experiencia',
      statProjects: 'proyectos entregados',
      formCmd: './contacto --iniciar',
      labelName: 'nombre',
      labelEmail: 'email',
      labelMessage: 'mensaje',
      phName: 'tu nombre',
      phEmail: 'tu@email.com',
      phMessage: 'tu mensaje...',
      btn: '[ enviar_mensaje ]',
      btnSending: '[ enviando... ]',
      sending: '$ enviando mensaje...',
      success: '✓ ¡mensaje enviado con éxito — te responderé pronto!',
      error: '✗ error al enviar. inténtalo de nuevo o escríbeme por e-mail.',
    },
    sites: {
      cmd: 'ls -la',
      title: 'en vivo',
      subtitle: 'Proyectos publicados y disponibles — pruébalos ahora mismo.',
      items: [
        { tagline: 'Plataforma educativa para aprender CRUD en la práctica, en tiempo real.' },
        { tagline: 'Control financiero personal con dashboard, inversiones y sincronización en tiempo real.' },
      ],
    },
    footer: {
      role: 'desarrollador de software e ingeniero de datos',
      copyright: '© 2026 guilherme cadima — hecho con react & tailwind',
    },
  },
}
