import { publicAsset } from '../lib/assets'
import { profile } from './profile'
import type { CvDocumentData } from './types'

export const cvDocument: CvDocumentData = {
  profile: {
    name: profile.name,
    headline: {
      pt: 'Machine Learning Researcher | Fraud Business Analyst | Data & Environmental Intelligence',
      en: 'Machine Learning Researcher | Fraud Business Analyst | Data & Environmental Intelligence',
    },
    summary: {
      pt: 'Estudante de Engenharia da Computação com experiência em ciência de dados, análise de mercado e desenvolvimento de soluções orientadas a resultados. Atuo na interseção entre engenharia de software, machine learning, estatística e BI, com exposição a inteligência de mercado e prevenção a fraudes.',
      en: 'Computer Engineering student with experience in data science, market analysis, and the development of results-oriented solutions. I work at the intersection of software engineering, machine learning, statistics, and BI, with exposure to market intelligence and fraud prevention.',
    },
    photoSrc: publicAsset('imgs/new-img.png'),
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    linkedin: profile.links.linkedin,
    github: profile.links.github,
    website: 'https://julianopadua.github.io',
  },

  professionalExperience: [
    {
      id: 'incomm',
      company: 'InComm Payments',
      location: { pt: 'Remoto', en: 'Remote' },
      period: { pt: 'Nov 2025 - Atual', en: 'Nov 2025 - Present' },
      roles: [
        {
          title: {
            pt: 'Estagiário em Fraud Business Analytics',
            en: 'Fraud Business Analytics Intern',
          },
          bullets: [
            {
              pt: 'Monitoramento de padrões de fraude e apoio à prevenção por meio de análise de dados em ambiente 100% em inglês.',
              en: 'Monitored fraud patterns and supported prevention efforts through data analysis in an English-only environment.',
            },
            {
              pt: 'Análises com Splunk, Accertify e dashboards para visibilidade de KPIs e qualidade de sinais de fraude.',
              en: 'Performed analytics with Splunk, Accertify, and dashboards for KPI visibility and fraud signal quality.',
            },
            {
              pt: 'Colaboração com equipes de negócio e tecnologia em fluxos de investigação e documentação de casos.',
              en: 'Collaborated with business and technology teams on investigation workflows and case documentation.',
            },
            {
              pt: 'Automações de procedimentos operacionais para amenizar a carga de trabalho própria e de colegas analistas.',
              en: 'Automated operational procedures to reduce workload for myself and fellow analyst colleagues.',
            },
          ],
        },
      ],
    },
    {
      id: 'hedgepoint',
      company: 'HedgePoint Global Markets',
      href: 'https://hedgepointglobal.com/',
      location: { pt: 'Campinas, Brasil', en: 'Campinas, Brazil' },
      period: { pt: 'Set 2024 - Mar 2025', en: 'Sep 2024 - Mar 2025' },
      roles: [
        {
          title: {
            pt: 'Estagiário de Inteligência de Mercado',
            en: 'Market Intelligence Intern',
          },
          bullets: [
            {
              pt: 'Criação de relatórios automatizados end-to-end com geração de conteúdo em PDF, utilizando fluxos com LLMs embutidas (Python, SQL, Excel e VBA).',
              en: 'Built end-to-end automated reports with PDF content generation using workflows with embedded LLMs (Python, SQL, Excel, and VBA).',
            },
            {
              pt: 'Construção de fluxos reutilizáveis e referência técnica entre TI e Inteligência de Mercado.',
              en: 'Built reusable workflows and served as a technical bridge between IT and Market Intelligence.',
            },
            {
              pt: 'Web scraping, ETL e consolidação de dados para suporte a decisões de hedge e análise fundamentalista.',
              en: 'Web scraping, ETL, and data consolidation to support hedging decisions and fundamental analysis.',
            },
          ],
        },
      ],
    },
  ],

  otherExperience: [
    {
      id: 'leadfy',
      company: 'Leadfy Imob',
      href: 'https://leadfy-imob.com.br/',
      title: { pt: 'Estagiário de Suporte Técnico', en: 'Technical Support Intern' },
      period: { pt: 'Mai 2024 - Set 2024', en: 'May 2024 - Sep 2024' },
      location: { pt: 'Remoto', en: 'Remote' },
    },
    {
      id: 'maricondi',
      company: 'Laboratório Maricondi',
      title: { pt: 'Estagiário de Projetos', en: 'Projects Intern' },
      period: { pt: 'Set 2025 - Nov 2025', en: 'Sep 2025 - Nov 2025' },
      location: { pt: 'São Carlos, SP', en: 'São Carlos, SP' },
    },
    {
      id: 'integralab',
      company: 'IntegraLab · Whirlpool',
      title: {
        pt: 'Líder de Projeto',
        en: 'Project Leader',
      },
      period: { pt: 'Set 2025 - Atual', en: 'Sep 2025 - Present' },
      location: { pt: 'UFSCar · São Carlos, SP', en: 'UFSCar · São Carlos, SP' },
    },
    {
      id: 'panda',
      company: 'PANDA · UFSCar',
      title: {
        pt: 'Diretor de Projetos e Tutor de Redes Neurais',
        en: 'Projects Director and Neural Networks Tutor',
      },
      period: { pt: 'Set 2025 - Atual', en: 'Sep 2025 - Present' },
      location: { pt: 'São Carlos, SP', en: 'São Carlos, SP' },
    },
  ],

  skills: [
    { label: { pt: 'Programação', en: 'Programming' } },
    { label: { pt: 'Análise e desenvolvimento de sistemas', en: 'Systems analysis & development' } },
    { label: { pt: 'Desenvolvimento full stack', en: 'Full stack development' } },
    { label: { pt: 'Análise de fraude', en: 'Fraud analytics' } },
    { label: { pt: 'Machine Learning', en: 'Machine Learning' } },
    { label: { pt: 'Python', en: 'Python' } },
    { label: { pt: 'SQL', en: 'SQL' } },
    { label: { pt: 'Power BI', en: 'Power BI' } },
    { label: { pt: 'Splunk', en: 'Splunk' } },
    { label: { pt: 'React / TypeScript', en: 'React / TypeScript' } },
    { label: { pt: 'Dados ambientais e geoespaciais', en: 'Environmental & geospatial data' } },
  ],

  languages: [
    {
      language: { pt: 'Português', en: 'Portuguese' },
      levelLabel: { pt: 'Nativo', en: 'Native' },
      score: 5,
    },
    {
      language: { pt: 'Inglês', en: 'English' },
      levelLabel: { pt: 'Avançado', en: 'Advanced' },
      score: 5,
    },
    {
      language: { pt: 'Espanhol', en: 'Spanish' },
      levelLabel: { pt: 'Intermediário', en: 'Intermediate' },
      score: 3,
    },
  ],

  education: [
    {
      id: 'ufscar-bsc',
      degree: {
        pt: 'Bacharelado em Engenharia da Computação',
        en: "Bachelor's in Computer Engineering",
      },
      institution: {
        pt: 'Universidade Federal de São Carlos (UFSCar)',
        en: 'Federal University of São Carlos (UFSCar)',
      },
      period: { pt: 'Ago 2021 - Jul 2026', en: 'Aug 2021 - Jul 2026' },
      location: { pt: 'São Carlos, SP', en: 'São Carlos, SP' },
      href: 'https://www.ufscar.br/',
    },
  ],

  certifications: [
    {
      id: 'alura',
      title: {
        pt: 'Python, Data Science, Machine Learning, SQL/PostgreSQL, Power BI, Excel e VBA',
        en: 'Python, Data Science, Machine Learning, SQL/PostgreSQL, Power BI, Excel and VBA',
      },
      issuer: { pt: 'Alura', en: 'Alura' },
      period: { pt: '2023 - 2025', en: '2023 - 2025' },
    },
    {
      id: 'udemy-git',
      title: { pt: 'Git e GitHub Bootcamp', en: 'Git and GitHub Bootcamp' },
      issuer: { pt: 'Udemy', en: 'Udemy' },
      period: { pt: '2024', en: '2024' },
    },
    {
      id: 'hedgepoint-academy',
      title: {
        pt: 'Hedging, Basis, Análise Fundamentalista e Coffee Hedging',
        en: 'Hedging, Basis, Fundamental Analysis and Coffee Hedging',
      },
      issuer: { pt: 'Hedgepoint Academy', en: 'Hedgepoint Academy' },
      period: { pt: '2024 - 2025', en: '2024 - 2025' },
    },
  ],

  volunteering: [
    {
      id: 'all-juice',
      organization: { pt: 'All Juice Capital', en: 'All Juice Capital' },
      role: { pt: 'Desenvolvedor voluntário', en: 'Volunteer Developer' },
      period: { pt: 'Mai 2025 - Set 2025', en: 'May 2025 - Sep 2025' },
      location: { pt: 'Remoto · Reino Unido', en: 'Remote · United Kingdom' },
      href: 'https://www.alljuicecapital.com/',
      bullets: [
        {
          pt: 'Desenvolvimento full-stack com Python e TypeScript para produtos internos e externos da startup.',
          en: 'Full-stack development with Python and TypeScript for internal and external startup products.',
        },
        {
          pt: 'Pipelines de dados, automação e suporte a trading systems e ferramentas analíticas.',
          en: 'Data pipelines, automation, and support for trading systems and analytics tools.',
        },
        {
          pt: 'Onboarding, documentação técnica e colaboração em fluxo ágil (Kanban).',
          en: 'Onboarding, technical documentation, and collaboration in agile Kanban workflows.',
        },
      ],
    },
  ],

  interests: [
    {
      id: 'history-economics-philosophy',
      title: {
        pt: 'História, economia e filosofia',
        en: 'History, Economics and Philosophy',
      },
      description: {
        pt: 'Leitura de obras originais de filósofos e economistas clássicos; história econômica e intelectual.',
        en: 'Reading original works by classical philosophers and economists; economic and intellectual history.',
      },
    },
    {
      id: 'open-source',
      title: { pt: 'Comunidade open source', en: 'Open source community' },
      description: {
        pt: 'Contribuição e manutenção de projetos públicos, com foco em dados abertos e ferramentas reutilizáveis.',
        en: 'Contributing to and maintaining public projects focused on open data and reusable tooling.',
      },
    },
    {
      id: 'travel-culture',
      title: { pt: 'Viagens e cultura', en: 'Travel and culture' },
      description: {
        pt: 'Viagens com conexão histórica, experiências ambientais e atividades ao ar livre.',
        en: 'Travel with historical context, environmental experiences, and outdoor activities.',
      },
    },
    {
      id: 'sports',
      title: { pt: 'Esportes', en: 'Sports' },
      description: {
        pt: 'Calistenia e corrida como rotina de disciplina e bem-estar.',
        en: 'Calisthenics and running as part of a discipline and wellness routine.',
      },
    },
  ],

  achievements: [
    {
      id: 'tcc-cerrado',
      title: {
        pt: 'TCC em Machine Learning - nota máxima',
        en: 'Undergraduate thesis in Machine Learning - top grade',
      },
      organization: { pt: 'UFSCar', en: 'UFSCar' },
      description: {
        pt: 'Previsão de focos de incêndio no Cerrado com variáveis climáticas (INMET e BDQueimadas); comparativo de modelos, feature engineering e tratamento de desbalanceamento. Defesa em mar/2026.',
        en: 'Cerrado fire hotspot prediction using climate variables (INMET and INPE records); model comparison, feature engineering, and class imbalance treatment. Defended Mar 2026.',
      },
      href: 'https://repositorio.ufscar.br/items/969fd627-d894-40be-89fb-b20127ba3f03',
    },
    {
      id: 'instituto-forest',
      title: {
        pt: 'Instituto Forest - ecossistema open source',
        en: 'Instituto Forest - open source ecosystem',
      },
      organization: { pt: 'Instituto Forest', en: 'Instituto Forest' },
      description: {
        pt: 'Desenvolvimento do cliente Python forest-data e pipelines de dados abertos ambientais para a API pública do Instituto Forest (institutoforest.org).',
        en: 'Development of the forest-data Python client and open environmental data pipelines for the Instituto Forest public API (institutoforest.org).',
      },
      href: 'https://github.com/julianopadua/forest-open-data-pipelines',
    },
  ],

  knowledge: [
    {
      label: { pt: 'Análise e ciência de dados', en: 'Data analysis & data science' },
      value: 55,
      color: '#1a5c47',
    },
    {
      label: { pt: 'Desenvolvimento full stack', en: 'Full stack development' },
      value: 30,
      color: '#2d7a5f',
    },
    {
      label: { pt: 'Finanças e economia', en: 'Finance & economics' },
      value: 15,
      color: '#5a9a82',
    },
  ],

  knowledgeSummary: {
    pt: 'Perfil que combina engenharia de dados, machine learning e desenvolvimento de software com exposição a mercados de commodities, prevenção a fraudes e ciência de dados ambiental.',
    en: 'Profile combining data engineering, machine learning, and software development with exposure to commodity markets, fraud prevention, and environmental data science.',
  },
}
