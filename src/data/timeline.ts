import type { TimelineEvent } from './types'

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'ufscar-degree',
    kind: 'education',
    start: '2022',
    title: {
      pt: 'Engenharia da Computação',
      en: 'Computer Engineering',
    },
    organization: {
      pt: 'Universidade Federal de São Carlos (UFSCar)',
      en: 'Federal University of São Carlos (UFSCar)',
    },
    summary: {
      pt: 'Graduação em andamento com foco em programação, dados e sistemas.',
      en: 'Undergraduate degree in progress with focus on programming, data, and systems.',
    },
    href: 'https://www.ufscar.br/',
  },
  {
    id: 'ufscar-tutor',
    kind: 'education',
    start: '2023',
    title: {
      pt: 'Monitoria e tutoria acadêmica',
      en: 'Academic monitoring and tutoring',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    summary: {
      pt: 'Monitor de Introdução à Computação (Python) e tutor de Geometria Analítica.',
      en: 'Introduction to Computing monitor (Python) and Analytical Geometry tutor.',
    },
  },
  {
    id: 'leadfy-intern',
    kind: 'experience',
    start: '2024-05',
    end: '2024-08',
    title: {
      pt: 'Estagiário de Suporte',
      en: 'Support Intern',
    },
    organization: { pt: 'Leadfy Imob', en: 'Leadfy Imob' },
    summary: {
      pt: 'Atendimento ao cliente, suporte técnico e gestão com ClickUp e Kanban.',
      en: 'Customer service, technical support, and project management with ClickUp and Kanban.',
    },
    href: 'https://leadfy-imob.com.br/',
    tags: ['agile', 'support'],
  },
  {
    id: 'hedgepoint-intern',
    kind: 'experience',
    start: '2024-09',
    end: '2025-03',
    title: {
      pt: 'Estagiário de Inteligência de Mercado',
      en: 'Market Intelligence Intern',
    },
    organization: {
      pt: 'HedgePoint Global Markets',
      en: 'HedgePoint Global Markets',
    },
    summary: {
      pt: 'Automação com Python, Excel/VBA, web scraping e análise de commodities e hedging.',
      en: 'Automation with Python, Excel/VBA, web scraping, and commodities/hedging analysis.',
    },
    href: 'https://hedgepointglobal.com/',
    tags: ['python', 'finance', 'data'],
  },
  {
    id: 'all-juice-volunteer',
    kind: 'experience',
    start: '2025-05',
    title: {
      pt: 'Desenvolvedor voluntário',
      en: 'Volunteer Developer',
    },
    organization: { pt: 'All Juice Capital', en: 'All Juice Capital' },
    summary: {
      pt: 'Desenvolvimento com Python e TypeScript, trading systems, Kanban, onboarding e documentação.',
      en: 'Development with Python and TypeScript, trading systems, Kanban, onboarding, and documentation.',
    },
    href: 'https://www.alljuicecapital.com/',
    tags: ['typescript', 'python', 'trading'],
  },
  {
    id: 'incomm-payments',
    kind: 'experience',
    start: '2025',
    title: {
      pt: 'InComm Payments',
      en: 'InComm Payments',
    },
    summary: {
      pt: 'Experiência profissional — detalhes a serem adicionados.',
      en: 'Professional experience — details to be added.',
    },
    placeholder: true,
    tags: ['placeholder'],
  },
  {
    id: 'instituto-forest',
    kind: 'project',
    start: '2024',
    title: {
      pt: 'Instituto Forest',
      en: 'Instituto Forest',
    },
    summary: {
      pt: 'Projeto de pesquisa e tecnologia ambiental — detalhes a serem adicionados.',
      en: 'Environmental research and technology project — details to be added.',
    },
    placeholder: true,
    tags: ['research', 'environment'],
  },
  {
    id: 'tcc-cerrado',
    kind: 'research',
    start: '2025',
    title: {
      pt: 'TCC — Previsão e ranking de focos de incêndio no Cerrado',
      en: 'Undergraduate Thesis — Fire hotspot prediction and ranking in the Cerrado',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    summary: {
      pt: 'Trabalho de conclusão de curso sobre modelagem e análise de focos de incêndio.',
      en: 'Undergraduate thesis on modeling and analysis of fire hotspots.',
    },
    placeholder: true,
    tags: ['machine-learning', 'cerrado', 'wildfire'],
  },
  {
    id: 'integra-lab',
    kind: 'project',
    start: '2024',
    title: {
      pt: 'IntegraLab / Whirlpool',
      en: 'IntegraLab / Whirlpool',
    },
    summary: {
      pt: 'Projeto acadêmico-industrial — detalhes a serem adicionados.',
      en: 'Academic-industry project — details to be added.',
    },
    placeholder: true,
    tags: ['industry', 'engineering'],
  },
  {
    id: 'panda',
    kind: 'project',
    start: '2024',
    title: {
      pt: 'PANDA',
      en: 'PANDA',
    },
    summary: {
      pt: 'Projeto acadêmico — detalhes a serem adicionados.',
      en: 'Academic project — details to be added.',
    },
    placeholder: true,
  },
  {
    id: 'data-automation',
    kind: 'project',
    start: '2023',
    title: {
      pt: 'Automações de dados',
      en: 'Data automation projects',
    },
    summary: {
      pt: 'Scripts e pipelines para coleta, tratamento e relatórios automatizados.',
      en: 'Scripts and pipelines for automated data collection, processing, and reporting.',
    },
    tags: ['python', 'automation'],
  },
]
