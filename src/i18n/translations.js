// Dicionário de traduções — PT (BR), EN, ES.
// Conteúdo alinhado ao currículo de 21/08/2026 (Engenheiro de Dados —
// Databricks, PySpark e arquitetura de dados em ambiente bancário).
// Os níveis declarados no currículo ("em estudo aplicado", "familiaridade",
// "básico") são preservados aqui — não inflar habilidades.
// Texto entre **asteriscos** vira destaque (ver renderRich em LanguageContext).

export const LANGS = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export const translations = {
  "pt": {
    "nav": {
      "skills": "habilidades",
      "projects": "projetos",
      "experience": "experiência",
      "certifications": "certificações",
      "about": "sobre",
      "menu": "navegação"
    },
    "hero": {
      "eyebrow": "portfólio · 2026",
      "status": "Disponível para novos projetos · São Paulo, BR",
      "greeting": "Olá, eu sou",
      "roles": [
        "engenheiro de dados",
        "databricks & pyspark",
        "etl/elt distribuído",
        "dados bancários em escala"
      ],
      "description": "Engenheiro de Dados no Itaú Unibanco. Construo pipelines de dados bancários com Python (PySpark), AWS Glue e Databricks, em ambiente de alta exigência de governança e compliance.",
      "ctaPrimary": "Baixar currículo",
      "ctaSecondary": "Falar comigo",
      "toolkit": "ferramentas do dia a dia",
      "spec": [
        {
          "k": "base",
          "v": "São Paulo, BR"
        },
        {
          "k": "foco",
          "v": "Engenharia de Dados"
        },
        {
          "k": "stack",
          "v": "PySpark · Databricks · AWS"
        },
        {
          "k": "situação",
          "v": "Aberto a propostas"
        }
      ],
      "stats": [
        {
          "value": "6+",
          "label": "anos de experiência"
        },
        {
          "value": "4",
          "label": "projetos entregues"
        },
        {
          "value": "7",
          "label": "certificações"
        }
      ],
      "resume": {
        "menuLabel": "escolha o idioma do currículo",
        "recommended": "recomendado",
        "options": {
          "pt": "Currículo em português",
          "en": "Resume in English"
        }
      }
    },
    "skills": {
      "num": "01",
      "title": "o que eu sei fazer",
      "subtitle": "Tecnologias que uso para levar dado bruto até solução analítica confiável — com o nível real de profundidade em cada uma.",
      "meta": "7 categorias · 30+ tecnologias",
      "categories": [
        {
          "name": "dados & big data",
          "techs": [
            "SQL — consultas complexas",
            "Modelagem de dados",
            "Databricks (Spark/PySpark)",
            "Delta Lake (em estudo aplicado)",
            "ETL/ELT distribuído"
          ]
        },
        {
          "name": "cloud de dados (aws)",
          "techs": [
            "AWS Glue",
            "Athena",
            "Keyspaces",
            "RDS / Aurora",
            "S3"
          ]
        },
        {
          "name": "linguagens",
          "techs": [
            "Python (PySpark)",
            "JavaScript / TypeScript",
            "Java (básico)",
            "Node.js (básico)",
            "React / React Native"
          ]
        },
        {
          "name": "compute & infra (aws)",
          "techs": [
            "Lambda",
            "ECS / EC2",
            "SQS",
            "API Gateway",
            "CloudWatch",
            "IAM",
            "Terraform (IaC)"
          ]
        },
        {
          "name": "governança & qualidade",
          "techs": [
            "Conformidade de dados bancários",
            "Rastreabilidade e qualidade",
            "Testes automatizados (TAAC)",
            "CI/CD",
            "Code review"
          ]
        },
        {
          "name": "ia & mlops",
          "techs": [
            "IA generativa no dia a dia",
            "Feature stores (estudo aplicado)",
            "Pipelines para IA",
            "Versionamento de modelos",
            "Observabilidade (conceitos)"
          ]
        },
        {
          "name": "orquestração & fluxos",
          "techs": [
            "Airflow (familiaridade)",
            "ServiceNow"
          ]
        }
      ]
    },
    "projects": {
      "num": "02",
      "title": "projetos selecionados",
      "subtitle": "Coisas que construí do zero — do modelo de dados ao deploy. Algumas estão no ar agora mesmo.",
      "meta": "clique e explore",
      "band": "cada projeto abaixo foi construído do zero — do banco ao deploy.",
      "live": "no ar",
      "viewSite": "Abrir site",
      "code": "Código",
      "post": "Publicação",
      "items": [
        {
          "tags": [
            "react native",
            "ia generativa",
            "supabase",
            "mobile"
          ],
          "description": "App mobile em React Native/Expo com IA generativa aplicada à análise de dados de plantas de loja (Gemini Vision) e geração de listas por linguagem natural, com backend em Supabase."
        },
        {
          "tags": [
            "firebase",
            "pwa",
            "modelagem de dados",
            "tailwind"
          ],
          "description": "Controle financeiro pessoal com modelagem de despesas e orçamento, sincronização em tempo real via Firebase e autenticação Google. Dashboard, Transações, Histórico, Simulador, Investimentos, Cartões e Assinaturas."
        },
        {
          "tags": [
            "educacional",
            "javascript",
            "interativo",
            "didático"
          ],
          "description": "Plataforma educacional onde alunos aprendem e praticam operações CRUD de forma visual. Execute cenários reais em tempo real, veja o que acontece em cada etapa e entenda na prática como Create, Read, Update e Delete funcionam."
        },
        {
          "tags": [
            "ia",
            "hackathon",
            "2º-lugar"
          ],
          "description": "2º lugar em Hackathon com foco em StackSpot AI, utilizando Agent, Knowledge Source e QuickCommand para resolver o desafio proposto com agilidade e criatividade."
        }
      ],
      "personal": "projeto pessoal"
    },
    "experience": {
      "num": "03",
      "title": "trajetória profissional",
      "subtitle": "Onde trabalhei e o que efetivamente entreguei em cada etapa.",
      "meta": "linha do tempo",
      "current": "atual",
      "highlights": "principais entregas",
      "more": "ver todas as entregas",
      "less": "recolher",
      "items": [
        {
          "period": "Abril 2025 — atualmente",
          "description": "Engenharia de dados sobre produtos bancários: pipelines de ETL/ELT distribuído com AWS Glue e Databricks, modelagem em SQL e infraestrutura como código, em ambiente regulado.",
          "bullets": [
            "Desenvolvimento de pipelines de dados bancários com AWS Glue e Databricks, utilizando Python (PySpark) para ETL/ELT distribuído sobre grandes volumes de dados.",
            "Modelagem e arquitetura de dados com SQL em Athena, Aurora/RDS e Keyspaces, oferecendo suporte a soluções analíticas e de negócio.",
            "Provisionamento e automação de infraestrutura de dados como código com Terraform, garantindo ambientes replicáveis e auditáveis.",
            "Atuação com dados reais de produtos bancários, aplicando padrões de qualidade, consistência e conformidade exigidos em ambiente regulado.",
            "Integração assíncrona entre serviços com SQS, garantindo desacoplamento, resiliência e reprocessamento seguro de dados.",
            "Colaboração com frentes de IA e ciência de dados, incluindo desenvolvimento e sustentação de APIs REST (Java/Node.js) que suportam esses fluxos.",
            "Participação ativa em code reviews e definição de boas práticas de engenharia, com foco em legibilidade, manutenibilidade e confiabilidade.",
            "Adoção de mentalidade DevOps: automação, observabilidade e melhoria contínua de pipelines, com testes automatizados (framework TAAC) e CI/CD."
          ],
          "role": "Desenvolvedor Back-End Jr. (Engenheiro de Dados)"
        },
        {
          "period": "Abril 2024 — Abril 2025",
          "description": "Estágio focado em Python e Terraform para gerenciar recursos de dados na AWS, integrando serviços cloud com mentalidade DevOps.",
          "bullets": [
            "Desenvolvimento em Python e Terraform para gerenciamento de recursos de dados na AWS Lambda.",
            "Construção e integração de soluções com API Gateway, SQS, Lambda, S3 e ServiceNow.",
            "Desenvolvimento de APIs seguindo OpenAPI 3.0, com foco em padronização de contratos e integração entre sistemas.",
            "Aplicação de mentalidade DevOps à infraestrutura de dados em nuvem (AWS)."
          ],
          "role": "Estagiário — Python, Terraform & AWS"
        },
        {
          "period": "Dezembro 2021 — Dezembro 2023",
          "description": "Desenvolvimento back-end e front-end em projetos de segmentação de clientes e prontuário eletrônico, com foco em qualidade e confiabilidade dos dados.",
          "bullets": [
            "Contribuição para o projeto FGCSPG, de segmentação de tipos de clientes, com foco em qualidade e confiabilidade dos dados.",
            "Participação no desenvolvimento do DORA (prontuário eletrônico), com foco em integração de dados, performance e segurança.",
            "Estudos intensificados de AWS Solution Architect e certificações técnicas relacionadas a dados e integração."
          ],
          "role": "Desenvolvedor Back-End & Front-End"
        }
      ]
    },
    "certifications": {
      "num": "04",
      "title": "formação e certificações",
      "subtitle": "Bacharelado em Ciência da Computação e certificações conquistadas em dados, IA, cloud e integração.",
      "meta": "8 credenciais",
      "issued": "por",
      "items": [
        {
          "name": "Bacharelado em Ciência da Computação",
          "issuer": "Universidade Paulista (UNIP) · 2021—2025",
          "tag": "formação"
        },
        {
          "name": "Machine Learning Associate",
          "issuer": "IOX — Itaú",
          "tag": "machine-learning"
        },
        {
          "name": "Generative AI Associate",
          "issuer": "IOX — Itaú",
          "tag": "inteligência-artificial"
        },
        {
          "name": "DEVA — AI Coding Agents",
          "issuer": "Cognition",
          "tag": "ia-para-codificação"
        },
        {
          "name": "Certificações em MySQL",
          "issuer": "MySQL / Oracle",
          "tag": "banco-de-dados"
        },
        {
          "name": "IBM Integration Bus / API",
          "issuer": "IBM",
          "tag": "integração"
        },
        {
          "name": "Cloud Pak for Integration",
          "issuer": "IBM",
          "tag": "cloud · tech-sales"
        },
        {
          "name": "QRadar XDR — SIEM",
          "issuer": "IBM",
          "tag": "segurança · tech-sales"
        }
      ]
    },
    "about": {
      "num": "05",
      "title": "sobre mim",
      "subtitle": "Um pouco além do currículo — e o caminho mais rápido para me chamar.",
      "meta": "resposta em até 24h",
      "cardTitle": "quem sou eu",
      "paragraphs": [
        "Me chamo **Guilherme Cadima**, tenho 25 anos e moro em São Paulo. Sou **Engenheiro de Dados no Itaú Unibanco** e graduado em Ciência da Computação pela Universidade Paulista.",
        "Meu dia a dia é construir pipelines de dados bancários com **Python (PySpark)**, **AWS Glue** e **Databricks** — ETL/ELT distribuído sobre grandes volumes, modelagem de dados em SQL e infraestrutura como código com Terraform, dentro dos padrões de governança e compliance de uma instituição financeira.",
        "Estudo **MLOps e feature stores** de forma aplicada e trabalho perto dos times de IA e ciência de dados. Uso IA generativa todo dia para acelerar experimentação e desenvolvimento.",
        "Fora do código, sou pai de uma linda menina, torcedor roxo do São Paulo FC, fã de academia, animais, Super-Heróis, RPG de Mesa e Cinema. Meu livro favorito é **“1984”** de George Orwell."
      ],
      "statExp": "anos de experiência",
      "statProjects": "projetos entregues",
      "formTitle": "me mande uma mensagem",
      "formHint": "Preencha os campos e eu retorno no seu e-mail.",
      "labelName": "nome",
      "labelEmail": "email",
      "labelMessage": "mensagem",
      "phName": "seu nome",
      "phEmail": "seu@email.com",
      "phMessage": "sua mensagem...",
      "btn": "Enviar mensagem",
      "btnSending": "Enviando…",
      "sending": "Enviando sua mensagem…",
      "success": "Mensagem enviada com sucesso — retorno em breve!",
      "error": "Não consegui enviar. Tente novamente ou me chame por e-mail."
    },
    "footer": {
      "role": "engenheiro de dados · databricks, pyspark & aws",
      "copyright": "© 2026 guilherme cadima",
      "madeWith": "feito com React, Tailwind e muito café",
      "top": "voltar ao topo"
    },
    "ui": {
      "language": "idioma",
      "openMenu": "abrir menu",
      "closeMenu": "fechar menu"
    }
  },
  "en": {
    "nav": {
      "skills": "skills",
      "projects": "projects",
      "experience": "experience",
      "certifications": "certifications",
      "about": "about",
      "menu": "navigation"
    },
    "hero": {
      "eyebrow": "portfolio · 2026",
      "status": "Available for new projects · São Paulo, BR",
      "greeting": "Hi, I'm",
      "roles": [
        "data engineer",
        "databricks & pyspark",
        "distributed etl/elt",
        "banking data at scale"
      ],
      "description": "Data Engineer at Itaú Unibanco. I build banking data pipelines with Python (PySpark), AWS Glue and Databricks, in an environment with high governance and compliance requirements.",
      "ctaPrimary": "Download resume",
      "ctaSecondary": "Get in touch",
      "toolkit": "everyday toolkit",
      "spec": [
        {
          "k": "base",
          "v": "São Paulo, BR"
        },
        {
          "k": "focus",
          "v": "Data Engineering"
        },
        {
          "k": "stack",
          "v": "PySpark · Databricks · AWS"
        },
        {
          "k": "status",
          "v": "Open to offers"
        }
      ],
      "stats": [
        {
          "value": "6+",
          "label": "years of experience"
        },
        {
          "value": "4",
          "label": "projects delivered"
        },
        {
          "value": "7",
          "label": "certifications"
        }
      ],
      "resume": {
        "menuLabel": "choose the resume language",
        "recommended": "recommended",
        "options": {
          "pt": "Currículo em português",
          "en": "Resume in English"
        }
      }
    },
    "skills": {
      "num": "01",
      "title": "what i can do",
      "subtitle": "The technologies I use to take raw data all the way to reliable analytical solutions — with the honest depth level for each one.",
      "meta": "7 categories · 30+ technologies",
      "categories": [
        {
          "name": "data & big data",
          "techs": [
            "SQL — complex queries",
            "Data modeling",
            "Databricks (Spark/PySpark)",
            "Delta Lake (applied study)",
            "Distributed ETL/ELT"
          ]
        },
        {
          "name": "data cloud (aws)",
          "techs": [
            "AWS Glue",
            "Athena",
            "Keyspaces",
            "RDS / Aurora",
            "S3"
          ]
        },
        {
          "name": "languages",
          "techs": [
            "Python (PySpark)",
            "JavaScript / TypeScript",
            "Java (basic)",
            "Node.js (basic)",
            "React / React Native"
          ]
        },
        {
          "name": "compute & infra (aws)",
          "techs": [
            "Lambda",
            "ECS / EC2",
            "SQS",
            "API Gateway",
            "CloudWatch",
            "IAM",
            "Terraform (IaC)"
          ]
        },
        {
          "name": "governance & quality",
          "techs": [
            "Banking data compliance",
            "Traceability and quality",
            "Automated testing (TAAC)",
            "CI/CD",
            "Code review"
          ]
        },
        {
          "name": "ai & mlops",
          "techs": [
            "Generative AI daily",
            "Feature stores (applied study)",
            "Pipelines for AI",
            "Model versioning",
            "Observability (concepts)"
          ]
        },
        {
          "name": "orchestration & workflows",
          "techs": [
            "Airflow (familiarity)",
            "ServiceNow"
          ]
        }
      ]
    },
    "projects": {
      "num": "02",
      "title": "selected projects",
      "subtitle": "Things I built from scratch — from the data model to the deploy. Some are live right now.",
      "meta": "click and explore",
      "band": "every project below was built from scratch — from database to deploy.",
      "live": "live",
      "viewSite": "Open site",
      "code": "Code",
      "post": "Post",
      "items": [
        {
          "tags": [
            "react native",
            "generative ai",
            "supabase",
            "mobile"
          ],
          "description": "Mobile app in React Native/Expo with generative AI applied to store floor plan data analysis (Gemini Vision) and natural language list generation, with a Supabase backend."
        },
        {
          "tags": [
            "firebase",
            "pwa",
            "data modeling",
            "tailwind"
          ],
          "description": "Personal finance management with expense and budget data modeling, real-time sync via Firebase and Google authentication. Dashboard, Transactions, History, Simulator, Investments, Cards and Subscriptions."
        },
        {
          "tags": [
            "educational",
            "javascript",
            "interactive",
            "didactic"
          ],
          "description": "Educational platform where students learn and practice CRUD operations visually. Run real scenarios in real time, see what happens at each step and understand in practice how Create, Read, Update and Delete work."
        },
        {
          "tags": [
            "ai",
            "hackathon",
            "2nd-place"
          ],
          "description": "2nd place in a Hackathon focused on StackSpot AI, using Agent, Knowledge Source and QuickCommand to solve the proposed challenge with agility and creativity."
        }
      ],
      "personal": "personal project"
    },
    "experience": {
      "num": "03",
      "title": "professional path",
      "subtitle": "Where I worked and what I actually delivered at each step.",
      "meta": "timeline",
      "current": "current",
      "highlights": "key deliveries",
      "more": "see all deliveries",
      "less": "collapse",
      "items": [
        {
          "period": "April 2025 — Present",
          "description": "Data engineering on banking products: distributed ETL/ELT pipelines with AWS Glue and Databricks, SQL modeling and infrastructure as code, in a regulated environment.",
          "bullets": [
            "Development of banking data pipelines with AWS Glue and Databricks, using Python (PySpark) for distributed ETL/ELT over large data volumes.",
            "Data modeling and architecture with SQL on Athena, Aurora/RDS and Keyspaces, supporting analytical and business solutions.",
            "Provisioning and automation of data infrastructure as code with Terraform, ensuring reproducible and auditable environments.",
            "Work with real banking product data, applying the quality, consistency and compliance standards required in a regulated environment.",
            "Asynchronous integration between services with SQS, ensuring decoupling, resilience and safe data reprocessing.",
            "Collaboration with AI and data science teams, including development and maintenance of REST APIs (Java/Node.js) that support these flows.",
            "Active participation in code reviews and in defining engineering best practices, focused on readability, maintainability and reliability.",
            "DevOps mindset: automation, observability and continuous improvement of pipelines, with automated testing (TAAC framework) and CI/CD."
          ],
          "role": "Jr. Back-End Developer (Data Engineer)"
        },
        {
          "period": "April 2024 — April 2025",
          "description": "Internship focused on Python and Terraform to manage data resources on AWS, integrating cloud services with a DevOps mindset.",
          "bullets": [
            "Development in Python and Terraform to manage data resources on AWS Lambda.",
            "Building and integrating solutions with API Gateway, SQS, Lambda, S3 and ServiceNow.",
            "Development of APIs following OpenAPI 3.0, focused on contract standardization and integration between systems.",
            "Application of a DevOps mindset to cloud data infrastructure (AWS)."
          ],
          "role": "Intern — Python, Terraform & AWS"
        },
        {
          "period": "December 2021 — December 2023",
          "description": "Back-end and front-end development on customer segmentation and electronic medical record projects, focused on data quality and reliability.",
          "bullets": [
            "Contribution to the FGCSPG project, on customer type segmentation, focused on data quality and reliability.",
            "Participation in the development of DORA (electronic medical record), focused on data integration, performance and security.",
            "Intensified studies of AWS Solution Architect and technical certifications related to data and integration."
          ],
          "role": "Back-End & Front-End Developer"
        }
      ]
    },
    "certifications": {
      "num": "04",
      "title": "education and certifications",
      "subtitle": "B.Sc. in Computer Science plus certifications earned in data, AI, cloud and integration.",
      "meta": "8 credentials",
      "issued": "by",
      "items": [
        {
          "name": "B.Sc. in Computer Science",
          "issuer": "Universidade Paulista (UNIP) · 2021—2025",
          "tag": "education"
        },
        {
          "name": "Machine Learning Associate",
          "issuer": "IOX — Itaú",
          "tag": "machine-learning"
        },
        {
          "name": "Generative AI Associate",
          "issuer": "IOX — Itaú",
          "tag": "artificial-intelligence"
        },
        {
          "name": "DEVA — AI Coding Agents",
          "issuer": "Cognition",
          "tag": "ai-for-coding"
        },
        {
          "name": "MySQL certifications",
          "issuer": "MySQL / Oracle",
          "tag": "databases"
        },
        {
          "name": "IBM Integration Bus / API",
          "issuer": "IBM",
          "tag": "integration"
        },
        {
          "name": "Cloud Pak for Integration",
          "issuer": "IBM",
          "tag": "cloud · tech-sales"
        },
        {
          "name": "QRadar XDR — SIEM",
          "issuer": "IBM",
          "tag": "security · tech-sales"
        }
      ]
    },
    "about": {
      "num": "05",
      "title": "about me",
      "subtitle": "A bit beyond the resume — and the fastest way to reach me.",
      "meta": "reply within 24h",
      "cardTitle": "who i am",
      "paragraphs": [
        "My name is **Guilherme Cadima**, I'm 25 and I live in São Paulo, Brazil. I'm a **Data Engineer at Itaú Unibanco** and hold a B.Sc. in Computer Science from Universidade Paulista.",
        "My daily work is building banking data pipelines with **Python (PySpark)**, **AWS Glue** and **Databricks** — distributed ETL/ELT over large volumes, SQL data modeling and infrastructure as code with Terraform, within the governance and compliance standards of a financial institution.",
        "I study **MLOps and feature stores** in an applied way and work closely with AI and data science teams. I use generative AI every day to speed up experimentation and development.",
        "Outside of code, I am the father of a beautiful girl, a die-hard São Paulo FC fan, and a fan of the gym, animals, superheroes, tabletop RPGs and cinema. My favourite book is **“1984”** by George Orwell."
      ],
      "statExp": "years of experience",
      "statProjects": "projects delivered",
      "formTitle": "send me a message",
      "formHint": "Fill in the fields and I will reply to your e-mail.",
      "labelName": "name",
      "labelEmail": "email",
      "labelMessage": "message",
      "phName": "your name",
      "phEmail": "you@email.com",
      "phMessage": "your message...",
      "btn": "Send message",
      "btnSending": "Sending…",
      "sending": "Sending your message…",
      "success": "Message sent successfully — I will get back to you soon!",
      "error": "Could not send. Please try again or reach me by e-mail."
    },
    "footer": {
      "role": "data engineer · databricks, pyspark & aws",
      "copyright": "© 2026 guilherme cadima",
      "madeWith": "built with React, Tailwind and a lot of coffee",
      "top": "back to top"
    },
    "ui": {
      "language": "language",
      "openMenu": "open menu",
      "closeMenu": "close menu"
    }
  },
  "es": {
    "nav": {
      "skills": "habilidades",
      "projects": "proyectos",
      "experience": "experiencia",
      "certifications": "certificaciones",
      "about": "sobre mí",
      "menu": "navegación"
    },
    "hero": {
      "eyebrow": "portafolio · 2026",
      "status": "Disponible para nuevos proyectos · São Paulo, BR",
      "greeting": "Hola, soy",
      "roles": [
        "ingeniero de datos",
        "databricks & pyspark",
        "etl/elt distribuido",
        "datos bancarios a escala"
      ],
      "description": "Ingeniero de Datos en Itaú Unibanco. Construyo pipelines de datos bancarios con Python (PySpark), AWS Glue y Databricks, en un entorno de alta exigencia de gobernanza y compliance.",
      "ctaPrimary": "Descargar CV",
      "ctaSecondary": "Hablar conmigo",
      "toolkit": "herramientas del día a día",
      "spec": [
        {
          "k": "base",
          "v": "São Paulo, BR"
        },
        {
          "k": "enfoque",
          "v": "Ingeniería de Datos"
        },
        {
          "k": "stack",
          "v": "PySpark · Databricks · AWS"
        },
        {
          "k": "estado",
          "v": "Abierto a propuestas"
        }
      ],
      "stats": [
        {
          "value": "6+",
          "label": "años de experiencia"
        },
        {
          "value": "4",
          "label": "proyectos entregados"
        },
        {
          "value": "7",
          "label": "certificaciones"
        }
      ],
      "resume": {
        "menuLabel": "elige el idioma del currículum",
        "recommended": "recomendado",
        "options": {
          "pt": "Currículo em português",
          "en": "Resume in English"
        }
      }
    },
    "skills": {
      "num": "01",
      "title": "lo que sé hacer",
      "subtitle": "Las tecnologías que uso para llevar el dato crudo hasta una solución analítica confiable — con el nivel real de profundidad en cada una.",
      "meta": "7 categorías · 30+ tecnologías",
      "categories": [
        {
          "name": "datos & big data",
          "techs": [
            "SQL — consultas complejas",
            "Modelado de datos",
            "Databricks (Spark/PySpark)",
            "Delta Lake (en estudio aplicado)",
            "ETL/ELT distribuido"
          ]
        },
        {
          "name": "cloud de datos (aws)",
          "techs": [
            "AWS Glue",
            "Athena",
            "Keyspaces",
            "RDS / Aurora",
            "S3"
          ]
        },
        {
          "name": "lenguajes",
          "techs": [
            "Python (PySpark)",
            "JavaScript / TypeScript",
            "Java (básico)",
            "Node.js (básico)",
            "React / React Native"
          ]
        },
        {
          "name": "compute & infra (aws)",
          "techs": [
            "Lambda",
            "ECS / EC2",
            "SQS",
            "API Gateway",
            "CloudWatch",
            "IAM",
            "Terraform (IaC)"
          ]
        },
        {
          "name": "gobernanza & calidad",
          "techs": [
            "Conformidad de datos bancarios",
            "Trazabilidad y calidad",
            "Pruebas automatizadas (TAAC)",
            "CI/CD",
            "Code review"
          ]
        },
        {
          "name": "ia & mlops",
          "techs": [
            "IA generativa a diario",
            "Feature stores (estudio aplicado)",
            "Pipelines para IA",
            "Versionado de modelos",
            "Observabilidad (conceptos)"
          ]
        },
        {
          "name": "orquestación & flujos",
          "techs": [
            "Airflow (familiaridad)",
            "ServiceNow"
          ]
        }
      ]
    },
    "projects": {
      "num": "02",
      "title": "proyectos seleccionados",
      "subtitle": "Cosas que construí desde cero — del modelo de datos al deploy. Algunas están en línea ahora mismo.",
      "meta": "haz clic y explora",
      "band": "cada proyecto de abajo fue construido desde cero — de la base de datos al deploy.",
      "live": "en línea",
      "viewSite": "Abrir sitio",
      "code": "Código",
      "post": "Publicación",
      "items": [
        {
          "tags": [
            "react native",
            "ia generativa",
            "supabase",
            "mobile"
          ],
          "description": "App móvil en React Native/Expo con IA generativa aplicada al análisis de datos de planos de tienda (Gemini Vision) y generación de listas por lenguaje natural, con backend en Supabase."
        },
        {
          "tags": [
            "firebase",
            "pwa",
            "modelado de datos",
            "tailwind"
          ],
          "description": "Control financiero personal con modelado de gastos y presupuesto, sincronización en tiempo real vía Firebase y autenticación con Google. Dashboard, Transacciones, Historial, Simulador, Inversiones, Tarjetas y Suscripciones."
        },
        {
          "tags": [
            "educativo",
            "javascript",
            "interactivo",
            "didáctico"
          ],
          "description": "Plataforma educativa donde los alumnos aprenden y practican operaciones CRUD de forma visual. Ejecuta escenarios reales en tiempo real, observa lo que ocurre en cada etapa y entiende en la práctica cómo funcionan Create, Read, Update y Delete."
        },
        {
          "tags": [
            "ia",
            "hackathon",
            "2º-lugar"
          ],
          "description": "2º lugar en un Hackathon con foco en StackSpot AI, utilizando Agent, Knowledge Source y QuickCommand para resolver el desafío propuesto con agilidad y creatividad."
        }
      ],
      "personal": "proyecto personal"
    },
    "experience": {
      "num": "03",
      "title": "trayectoria profesional",
      "subtitle": "Dónde trabajé y qué entregué efectivamente en cada etapa.",
      "meta": "línea de tiempo",
      "current": "actual",
      "highlights": "principales entregas",
      "more": "ver todas las entregas",
      "less": "recoger",
      "items": [
        {
          "period": "Abril 2025 — actualmente",
          "description": "Ingeniería de datos sobre productos bancarios: pipelines de ETL/ELT distribuido con AWS Glue y Databricks, modelado en SQL e infraestructura como código, en un entorno regulado.",
          "bullets": [
            "Desarrollo de pipelines de datos bancarios con AWS Glue y Databricks, utilizando Python (PySpark) para ETL/ELT distribuido sobre grandes volúmenes de datos.",
            "Modelado y arquitectura de datos con SQL en Athena, Aurora/RDS y Keyspaces, dando soporte a soluciones analíticas y de negocio.",
            "Aprovisionamiento y automatización de infraestructura de datos como código con Terraform, garantizando entornos replicables y auditables.",
            "Trabajo con datos reales de productos bancarios, aplicando los estándares de calidad, consistencia y conformidad exigidos en un entorno regulado.",
            "Integración asíncrona entre servicios con SQS, garantizando desacoplamiento, resiliencia y reprocesamiento seguro de datos.",
            "Colaboración con equipos de IA y ciencia de datos, incluyendo desarrollo y mantenimiento de APIs REST (Java/Node.js) que soportan esos flujos.",
            "Participación activa en code reviews y en la definición de buenas prácticas de ingeniería, con foco en legibilidad, mantenibilidad y confiabilidad.",
            "Mentalidad DevOps: automatización, observabilidad y mejora continua de pipelines, con pruebas automatizadas (framework TAAC) y CI/CD."
          ],
          "role": "Desarrollador Back-End Jr. (Ingeniero de Datos)"
        },
        {
          "period": "Abril 2024 — Abril 2025",
          "description": "Prácticas centradas en Python y Terraform para gestionar recursos de datos en AWS, integrando servicios cloud con mentalidad DevOps.",
          "bullets": [
            "Desarrollo en Python y Terraform para la gestión de recursos de datos en AWS Lambda.",
            "Construcción e integración de soluciones con API Gateway, SQS, Lambda, S3 y ServiceNow.",
            "Desarrollo de APIs siguiendo OpenAPI 3.0, con foco en la estandarización de contratos y la integración entre sistemas.",
            "Aplicación de una mentalidad DevOps a la infraestructura de datos en la nube (AWS)."
          ],
          "role": "Prácticas — Python, Terraform & AWS"
        },
        {
          "period": "Diciembre 2021 — Diciembre 2023",
          "description": "Desarrollo back-end y front-end en proyectos de segmentación de clientes e historia clínica electrónica, con foco en calidad y confiabilidad de los datos.",
          "bullets": [
            "Contribución al proyecto FGCSPG, de segmentación de tipos de clientes, con foco en calidad y confiabilidad de los datos.",
            "Participación en el desarrollo de DORA (historia clínica electrónica), con foco en integración de datos, rendimiento y seguridad.",
            "Estudios intensificados de AWS Solution Architect y certificaciones técnicas relacionadas con datos e integración."
          ],
          "role": "Desarrollador Back-End & Front-End"
        }
      ]
    },
    "certifications": {
      "num": "04",
      "title": "formación y certificaciones",
      "subtitle": "Licenciatura en Ciencias de la Computación y certificaciones obtenidas en datos, IA, cloud e integración.",
      "meta": "8 credenciales",
      "issued": "por",
      "items": [
        {
          "name": "Licenciatura en Ciencias de la Computación",
          "issuer": "Universidade Paulista (UNIP) · 2021—2025",
          "tag": "formación"
        },
        {
          "name": "Machine Learning Associate",
          "issuer": "IOX — Itaú",
          "tag": "machine-learning"
        },
        {
          "name": "Generative AI Associate",
          "issuer": "IOX — Itaú",
          "tag": "inteligencia-artificial"
        },
        {
          "name": "DEVA — AI Coding Agents",
          "issuer": "Cognition",
          "tag": "ia-para-codificación"
        },
        {
          "name": "Certificaciones en MySQL",
          "issuer": "MySQL / Oracle",
          "tag": "bases-de-datos"
        },
        {
          "name": "IBM Integration Bus / API",
          "issuer": "IBM",
          "tag": "integración"
        },
        {
          "name": "Cloud Pak for Integration",
          "issuer": "IBM",
          "tag": "cloud · tech-sales"
        },
        {
          "name": "QRadar XDR — SIEM",
          "issuer": "IBM",
          "tag": "seguridad · tech-sales"
        }
      ]
    },
    "about": {
      "num": "05",
      "title": "sobre mí",
      "subtitle": "Un poco más allá del currículum — y la forma más rápida de contactarme.",
      "meta": "respuesta en 24h",
      "cardTitle": "quién soy",
      "paragraphs": [
        "Me llamo **Guilherme Cadima**, tengo 25 años y vivo en São Paulo, Brasil. Soy **Ingeniero de Datos en Itaú Unibanco** y licenciado en Ciencias de la Computación por la Universidade Paulista.",
        "Mi día a día es construir pipelines de datos bancarios con **Python (PySpark)**, **AWS Glue** y **Databricks** — ETL/ELT distribuido sobre grandes volúmenes, modelado de datos en SQL e infraestructura como código con Terraform, dentro de los estándares de gobernanza y compliance de una institución financiera.",
        "Estudio **MLOps y feature stores** de forma aplicada y trabajo cerca de los equipos de IA y ciencia de datos. Uso IA generativa todos los días para acelerar la experimentación y el desarrollo.",
        "Fuera del código, soy padre de una niña preciosa, hincha del São Paulo FC y fan del gimnasio, los animales, los superhéroes, los juegos de rol de mesa y el cine. Mi libro favorito es **“1984”** de George Orwell."
      ],
      "statExp": "años de experiencia",
      "statProjects": "proyectos entregados",
      "formTitle": "envíame un mensaje",
      "formHint": "Completa los campos y te respondo a tu e-mail.",
      "labelName": "nombre",
      "labelEmail": "email",
      "labelMessage": "mensaje",
      "phName": "tu nombre",
      "phEmail": "tu@email.com",
      "phMessage": "tu mensaje...",
      "btn": "Enviar mensaje",
      "btnSending": "Enviando…",
      "sending": "Enviando tu mensaje…",
      "success": "¡Mensaje enviado con éxito — te responderé pronto!",
      "error": "No se pudo enviar. Inténtalo de nuevo o escríbeme por e-mail."
    },
    "footer": {
      "role": "ingeniero de datos · databricks, pyspark & aws",
      "copyright": "© 2026 guilherme cadima",
      "madeWith": "hecho con React, Tailwind y mucho café",
      "top": "volver arriba"
    },
    "ui": {
      "language": "idioma",
      "openMenu": "abrir menú",
      "closeMenu": "cerrar menú"
    }
  }
}
