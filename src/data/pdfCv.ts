import { profile } from './profile'

export type PdfCvLocale = 'pt' | 'en'

export type PdfLocalized = Record<PdfCvLocale, string>
export type PdfLocalizedList = Record<PdfCvLocale, string[]>

export interface PdfCvSkillGroup {
  label: PdfLocalized
  items: string[]
}

export interface PdfCvEntry {
  id: string
  title: PdfLocalized
  organization: string
  href?: string
  location?: PdfLocalized
  period?: PdfLocalized
  bullets: PdfLocalized[]
}

export interface PdfCvDocument {
  profile: {
    name: string
    title: PdfLocalized
    summary: PdfLocalized
    email: string
    phone: string
    location: PdfLocalized
    linkedin: string
    github: string
    portfolio: string
    photoSrc: string
  }
  skills: PdfCvSkillGroup[]
  experience: PdfCvEntry[]
  additionalExperience: PdfCvEntry[]
  projects: PdfCvEntry[]
  certifications: PdfCvEntry[]
  education: PdfCvEntry[]
  languages: {
    label: PdfLocalized
    items: PdfLocalizedList
  }
}

export const pdfCvDocument: PdfCvDocument = {
  profile: {
    name: profile.name,
    title: {
      pt: 'Engenheiro de AI & Automação de Dados | Python, ML, Análise de Fraude, Pipelines de Dados',
      en: 'AI & Data Automation Engineer | Python, ML, Fraud Analytics, Data Pipelines',
    },
    summary: {
      pt: 'Estudante de Engenharia da Computação na UFSCar, com formação prevista para julho de 2026, experiência em análise de fraude, inteligência de mercado, automação em Python, pipelines de dados e machine learning aplicado a bases reais. Atuação atual em ambiente 100% em inglês na InComm Payments, usando Splunk, Accertify, KPIs e automações em Python para apoiar monitoramento de fraude e análise operacional.',
      en: 'Computer Engineering student at UFSCar, graduating in July 2026, with experience in fraud analytics, market intelligence, Python automation, data pipelines, and machine learning applied to real-world datasets. Currently working in a 100% English-speaking environment at InComm Payments, using Splunk, Accertify, KPIs, and Python automations to support fraud monitoring and operational analysis.',
    },
    email: profile.email,
    phone: '+55 (34) 99911-9610',
    location: profile.location,
    linkedin: profile.links.linkedin,
    github: profile.links.github,
    portfolio: 'https://julianopadua.github.io/portfolio/#/about',
    photoSrc: 'public/imgs/new-img.png',
  },
  skills: [
    {
      label: { pt: 'Programação', en: 'Programming' },
      items: ['Python', 'TypeScript', 'SQL', 'JavaScript', 'VBA'],
    },
    {
      label: { pt: 'Dados e automação', en: 'Data and Automation' },
      items: ['ETL', 'web scraping', 'data pipelines', 'APIs', 'probabilistic agentic pipelines'],
    },
    {
      label: { pt: 'ML e analytics', en: 'ML and Analytics' },
      items: ['scikit-learn', 'XGBoost', 'model evaluation', 'imbalanced classification', 'feature engineering'],
    },
    {
      label: { pt: 'Domínios de negócio', en: 'Business Domains' },
      items: ['fraud analytics', 'risk analysis', 'market intelligence', 'commodities', 'environmental data'],
    },
    {
      label: { pt: 'Ferramentas', en: 'Tools' },
      items: ['Splunk', 'Accertify', 'Power BI', 'Git', 'GitHub', 'Excel', 'Supabase', 'React'],
    },
  ],
  experience: [
    {
      id: 'incomm',
      organization: 'InComm Payments',
      title: {
        pt: 'Estagiário em Fraud Business Analytics',
        en: 'Fraud Business Analytics Intern',
      },
      location: { pt: 'Remoto - Atlanta, GA', en: 'Remote - Atlanta, GA' },
      period: { pt: 'Nov 2025 - Atual', en: 'Nov 2025 - Present' },
      bullets: [
        {
          pt: 'Atuação em ambiente corporativo 100% em inglês, com colaboração recorrente entre times de negócio, tecnologia e operação.',
          en: 'Work in a 100% English-speaking corporate environment, with recurring collaboration across business, technology, and operations teams.',
        },
        {
          pt: 'Apoio ao monitoramento de fraude e análise operacional usando Splunk, Accertify, KPIs e investigação de sinais.',
          en: 'Support fraud monitoring and operational analysis using Splunk, Accertify, KPIs, and signal investigation.',
        },
        {
          pt: 'Automação de procedimentos operacionais repetitivos para reduzir esforço manual e melhorar a consistência das rotinas analíticas.',
          en: 'Automate repetitive operational procedures to reduce manual effort and improve consistency across analytical routines.',
        },
      ],
    },
    {
      id: 'hedgepoint',
      organization: 'HedgePoint Global Markets',
      title: {
        pt: 'Estagiário de Inteligência de Mercado',
        en: 'Market Intelligence Intern',
      },
      location: { pt: 'Campinas, SP', en: 'Campinas, SP' },
      period: { pt: 'Set 2024 - Mar 2025', en: 'Sep 2024 - Mar 2025' },
      bullets: [
        {
          pt: 'Criação de relatórios automatizados end-to-end com Python, SQL, Excel, VBA e fluxos baseados em LLMs.',
          en: 'Built end-to-end automated reports with Python, SQL, Excel, VBA, and LLM-based workflows.',
        },
        {
          pt: 'Desenvolvimento de web scraping, ETL e consolidação de dados para apoiar decisões de hedge e análise fundamentalista.',
          en: 'Developed web scraping, ETL, and data consolidation workflows to support hedge decisions and fundamental analysis.',
        },
        {
          pt: 'Atuação como ponte técnica entre TI e Inteligência de Mercado, transformando necessidades analíticas em automações reutilizáveis.',
          en: 'Served as a technical bridge between IT and Market Intelligence, translating analytical needs into reusable automations.',
        },
      ],
    },
    {
      id: 'all-juice',
      organization: 'All Juice Capital',
      title: {
        pt: 'Desenvolvedor Full-Stack / Automação de Dados',
        en: 'Full-Stack / Data Automation Developer',
      },
      location: { pt: 'Remoto - Reino Unido', en: 'Remote - United Kingdom' },
      period: { pt: 'Mai 2025 - Set 2025', en: 'May 2025 - Sep 2025' },
      bullets: [
        {
          pt: 'Desenvolvimento em Python e TypeScript para produtos internos e externos em contexto técnico e startup.',
          en: 'Developed Python and TypeScript features for internal and external products in a technical, and startup context.',
        },
        {
          pt: 'Construção de pipelines de dados, automações, sistemas de trading, ferramentas analíticas e documentação técnica.',
          en: 'Built data pipelines, automations, trading systems, analytical tools, and technical documentation.',
        },
      ],
    },
    {
      id: 'integralab',
      organization: 'IntegraLab - Whirlpool + UFSCar',
      title: {
        pt: 'Líder de Projeto',
        en: 'Project Leader',
      },
      location: { pt: 'São Carlos, SP', en: 'São Carlos, SP' },
      period: { pt: 'Set 2025 - Atual', en: 'Sep 2025 - Present' },
      bullets: [
        {
          pt: 'Liderança de projeto acadêmico-industrial em parceria com Whirlpool e UFSCar, articulando escopo, execução técnica e alinhamento com stakeholders.',
          en: 'Lead an academic-industry project with Whirlpool and UFSCar, coordinating scope, technical execution, and stakeholder alignment.',
        },
        {
          pt: 'Organização de entregas, documentação e rotinas de acompanhamento para transformar necessidades de negócio em trabalho técnico executável.',
          en: 'Organize deliverables, documentation, and tracking routines to translate business needs into executable technical work.',
        },
      ],
    },
  ],
  additionalExperience: [
    {
      id: 'panda',
      organization: 'PANDA - UFSCar',
      title: {
        pt: 'Diretor de Projetos e Tutor de Redes Neurais',
        en: 'Projects Director and Neural Networks Tutor',
      },
      location: { pt: 'São Carlos, SP', en: 'São Carlos, SP' },
      period: { pt: 'Set 2025 - Atual', en: 'Sep 2025 - Present' },
      bullets: [
        {
          pt: 'Apoio a projetos, estudos e tutoria técnica em redes neurais e machine learning aplicado.',
          en: 'Support projects, study tracks, and technical tutoring in neural networks and applied machine learning.',
        },
      ],
    },
    {
      id: 'maricondi',
      organization: 'Laboratório Maricondi',
      title: { pt: 'Estagiário de Projetos', en: 'Projects Intern' },
      location: { pt: 'São Carlos, SP', en: 'São Carlos, SP' },
      period: { pt: 'Set 2025 - Nov 2025', en: 'Sep 2025 - Nov 2025' },
      bullets: [
        {
          pt: 'Apoio a rotinas de projetos, organização operacional e documentação em ambiente técnico.',
          en: 'Supported project routines, operational organization, and documentation in a technical environment.',
        },
      ],
    },
  ],
  projects: [
    {
      id: 'instituto-forest',
      organization: 'Instituto Forest',
      href: 'https://institutoforest.org/',
      title: {
        pt: 'Ecossistema open-source de inteligência em dados ambientais',
        en: 'Open-source environmental data intelligence ecosystem',
      },
      period: { pt: '2025 - Atual', en: '2025 - Present' },
      bullets: [
        {
          pt: 'Desenvolvimento de pipelines de dados abertos, catálogo público, API de metadados, integração com Supabase e portal público.',
          en: 'Develop open-data pipelines, a public catalog, metadata API, Supabase integration, and public portal workflows.',
        },
        {
          pt: 'Criação de fluxos Python, manifests e entrega reprodutível de dados ambientais e de commodities para uso público.',
          en: 'Create Python workflows, manifests, and reproducible delivery of environmental and commodity-oriented data for public use.',
        },
      ],
    },
    {
      id: 'cerrado-wildfire',
      organization: 'UFSCar',
      title: {
        pt: 'Previsão de focos de incêndio no Cerrado com Machine Learning',
        en: 'Cerrado Wildfire Prediction with Machine Learning',
      },
      period: { pt: '2026', en: '2026' },
      bullets: [
        {
          pt: 'Classificação binária de ocorrência de focos no Cerrado a partir de dados meteorológicos do INMET e detecções do BDQueimadas.',
          en: 'Binary classification of wildfire occurrence in the Brazilian Cerrado using INMET meteorological data and BDQueimadas fire detections.',
        },
        {
          pt: 'Feature engineering, tratamento de desbalanceamento e comparação de Logistic Regression, Naive Bayes, SVM, Random Forest e XGBoost.',
          en: 'Feature engineering, imbalance handling, and comparison of Logistic Regression, Naive Bayes, SVM, Random Forest, and XGBoost.',
        },
        {
          pt: 'Trabalho de Conclusão de Curso defendido na UFSCar com nota máxima.',
          en: 'Undergraduate thesis defended at UFSCar with top grade.',
        },
      ],
    },
  ],
  certifications: [
    {
      id: 'alura',
      organization: 'Alura',
      title: {
        pt: 'Python, Data Science, Machine Learning, SQL/PostgreSQL, Power BI, Excel e VBA',
        en: 'Python, Data Science, Machine Learning, SQL/PostgreSQL, Power BI, Excel and VBA',
      },
      period: { pt: '2023 - 2025', en: '2023 - 2025' },
      bullets: [],
    },
    {
      id: 'hedgepoint-academy',
      organization: 'Hedgepoint Academy',
      title: {
        pt: 'Hedging, Basis, Análise Fundamentalista e Coffee Hedging',
        en: 'Hedging, Basis, Fundamental Analysis and Coffee Hedging',
      },
      period: { pt: '2024 - 2025', en: '2024 - 2025' },
      bullets: [],
    },
    {
      id: 'udemy-git',
      organization: 'Udemy',
      title: { pt: 'Git e GitHub Bootcamp', en: 'Git and GitHub Bootcamp' },
      period: { pt: '2024', en: '2024' },
      bullets: [],
    },
  ],
  education: [
    {
      id: 'ufscar',
      organization: 'Universidade Federal de São Carlos (UFSCar)',
      title: {
        pt: 'Bacharelado em Engenharia da Computação',
        en: "BSc in Computer Engineering",
      },
      location: { pt: 'São Carlos, SP', en: 'São Carlos, SP' },
      period: { pt: 'Ago 2021 - Jul 2026', en: 'Aug 2021 - Jul 2026' },
      bullets: [
        {
          pt: 'Formação prevista para julho de 2026.',
          en: 'Expected graduation: July 2026.',
        },
      ],
    },
  ],
  languages: {
    label: { pt: 'Idiomas', en: 'Languages' },
    items: {
      pt: ['Português - Nativo', 'Inglês - Avançado', 'Espanhol - Intermediário'],
      en: ['Portuguese - Native', 'English - Advanced', 'Spanish - Intermediate'],
    },
  },
}
