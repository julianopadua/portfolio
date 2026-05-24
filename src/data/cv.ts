import type { CvEntry, CvPublication, CvSkill } from './types'

export const cvEducation: CvEntry[] = [
  {
    id: 'ufscar-bsc',
    title: {
      pt: 'Bacharelado em Engenharia da Computação',
      en: 'Bachelor of Science in Computer Engineering',
    },
    organization: {
      pt: 'Universidade Federal de São Carlos (UFSCar)',
      en: 'Federal University of São Carlos (UFSCar)',
    },
    location: { pt: 'São Carlos, SP', en: 'São Carlos, SP' },
    period: { pt: 'Em andamento', en: 'In progress' },
    description: {
      pt: 'Formação com ênfase em programação, estruturas de dados, sistemas e projetos aplicados.',
      en: 'Degree with emphasis on programming, data structures, systems, and applied projects.',
    },
  },
]

export const cvExperience: CvEntry[] = [
  {
    id: 'ufscar-tutor',
    title: {
      pt: 'Monitor de Introdução à Computação e Tutor de Geometria Analítica',
      en: 'Introduction to Computing Monitor and Analytical Geometry Tutor',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    period: { pt: 'Acadêmico', en: 'Academic' },
    description: {
      pt: 'Monitoria em Python e fundamentos de programação; tutoria em Geometria Analítica e resolução de problemas.',
      en: 'Tutoring in Python and programming fundamentals; Analytical Geometry tutoring and problem-solving support.',
    },
  },
  {
    id: 'leadfy',
    title: { pt: 'Estagiário de Suporte', en: 'Support Intern' },
    organization: { pt: 'Leadfy Imob', en: 'Leadfy Imob' },
    period: { pt: 'Mai 2024 – Ago 2024', en: 'May 2024 – Aug 2024' },
    description: {
      pt: 'Atendimento ao cliente, suporte técnico, ClickUp e práticas Kanban em ambiente ágil.',
      en: 'Customer service, technical support, ClickUp and Kanban practices in an agile environment.',
    },
    href: 'https://leadfy-imob.com.br/',
  },
  {
    id: 'hedgepoint',
    title: {
      pt: 'Estagiário de Inteligência de Mercado',
      en: 'Market Intelligence Intern',
    },
    organization: {
      pt: 'HedgePoint Global Markets',
      en: 'HedgePoint Global Markets',
    },
    period: { pt: 'Set 2024 – Mar 2025', en: 'Sep 2024 – Mar 2025' },
    description: {
      pt: 'Python, Excel/VBA, web scraping, organização de grandes volumes de dados e análise de commodities e hedging.',
      en: 'Python, Excel/VBA, web scraping, large-scale data organization, and commodities/hedging market analysis.',
    },
    href: 'https://hedgepointglobal.com/',
  },
  {
    id: 'all-juice',
    title: { pt: 'Desenvolvedor voluntário', en: 'Volunteer Developer' },
    organization: { pt: 'All Juice Capital', en: 'All Juice Capital' },
    period: { pt: 'Mai 2025 – Atual', en: 'May 2025 – Present' },
    description: {
      pt: 'Python, TypeScript, trading systems, Kanban, gestão de equipe, onboarding e documentação técnica.',
      en: 'Python, TypeScript, trading systems, Kanban, team management, onboarding, and technical documentation.',
    },
    href: 'https://www.alljuicecapital.com/',
  },
  {
    id: 'incomm',
    title: { pt: 'InComm Payments', en: 'InComm Payments' },
    period: { pt: 'A confirmar', en: 'TBD' },
    description: {
      pt: 'Detalhes da experiência a serem adicionados.',
      en: 'Experience details to be added.',
    },
    placeholder: true,
  },
]

export const cvResearch: CvEntry[] = [
  {
    id: 'tcc-cerrado',
    title: {
      pt: 'TCC — Previsão e ranking de focos de incêndio no Cerrado',
      en: 'Thesis — Fire hotspot prediction and ranking in the Cerrado',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    period: { pt: 'Em andamento', en: 'In progress' },
    description: {
      pt: 'Pesquisa aplicada em modelagem preditiva e análise espacial de focos de incêndio.',
      en: 'Applied research on predictive modeling and spatial analysis of fire hotspots.',
    },
    placeholder: true,
  },
  {
    id: 'instituto-forest-research',
    title: { pt: 'Instituto Forest', en: 'Instituto Forest' },
    period: { pt: 'A confirmar', en: 'TBD' },
    description: {
      pt: 'Atividades de pesquisa — detalhes a serem adicionados.',
      en: 'Research activities — details to be added.',
    },
    placeholder: true,
  },
]

export const cvProjectsHighlight: CvEntry[] = [
  {
    id: 'integra-lab-cv',
    title: { pt: 'IntegraLab / Whirlpool', en: 'IntegraLab / Whirlpool' },
    period: { pt: 'A confirmar', en: 'TBD' },
    description: {
      pt: 'Projeto acadêmico-industrial — resumo a ser adicionado.',
      en: 'Academic-industry project — summary to be added.',
    },
    placeholder: true,
  },
]

export const cvSoftSkills: CvSkill[] = [
  {
    name: { pt: 'Comunicação clara e eficaz', en: 'Clear and effective communication' },
    detail: {
      pt: 'Tutoria acadêmica, atendimento e reuniões estratégicas.',
      en: 'Academic tutoring, customer service, and strategic meetings.',
    },
  },
  {
    name: { pt: 'Trabalho em equipe', en: 'Teamwork' },
    detail: {
      pt: 'Projetos acadêmicos, suporte e ambientes multidisciplinares.',
      en: 'Academic projects, support roles, and multidisciplinary environments.',
    },
  },
  {
    name: { pt: 'Resolução criativa de problemas', en: 'Creative problem-solving' },
  },
  {
    name: { pt: 'Gestão de tempo', en: 'Time management' },
  },
  {
    name: { pt: 'Liderança e mentoria', en: 'Leadership and mentoring' },
    detail: {
      pt: 'Onboarding e documentação técnica.',
      en: 'Onboarding and technical documentation.',
    },
  },
  {
    name: { pt: 'Adaptabilidade', en: 'Adaptability' },
  },
]

export const cvHardSkills: CvSkill[] = [
  { name: { pt: 'Python', en: 'Python' } },
  { name: { pt: 'TypeScript', en: 'TypeScript' } },
  { name: { pt: 'Trading Systems', en: 'Trading Systems' } },
  { name: { pt: 'Full-Stack Development', en: 'Full-Stack Development' } },
  { name: { pt: 'Metodologias Ágeis (Kanban, ClickUp)', en: 'Agile Methodologies (Kanban, ClickUp)' } },
  {
    name: { pt: 'Conhecimento econômico (hedging, commodities)', en: 'Economic knowledge (hedging, commodities)' },
  },
  { name: { pt: 'SQL', en: 'SQL' } },
  { name: { pt: 'Excel e VBA', en: 'Excel and VBA' } },
  { name: { pt: 'Git / GitHub', en: 'Git / GitHub' } },
  { name: { pt: 'C e C++', en: 'C and C++' } },
  { name: { pt: 'HTML e CSS', en: 'HTML and CSS' } },
]

export const cvPublications: CvPublication[] = [
  {
    id: 'pub-placeholder',
    title: {
      pt: 'Publicações e preprints — a serem adicionados',
      en: 'Publications and preprints — to be added',
    },
    placeholder: true,
  },
]

export const cvVolunteering: CvEntry[] = [
  {
    id: 'all-juice-volunteer-cv',
    title: { pt: 'Desenvolvedor voluntário', en: 'Volunteer Developer' },
    organization: { pt: 'All Juice Capital', en: 'All Juice Capital' },
    period: { pt: 'Mai 2025 – Atual', en: 'May 2025 – Present' },
    description: {
      pt: 'Contribuição voluntária em produtos de software para startup no Reino Unido.',
      en: 'Volunteer contribution to software products for a UK-based startup.',
    },
    href: 'https://www.alljuicecapital.com/',
  },
]
