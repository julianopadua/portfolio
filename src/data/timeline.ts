import type { TimelineEvent } from './types'

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'ufscar-degree',
    kind: 'education',
    start: '2021-08',
    end: '2026-07',
    sortOrder: 1,
    logo: 'icons/ufscar-logo.png',
    displayPeriod: {
      pt: 'Ago 2021 - Jul 2026',
      en: 'Aug 2021 - Jul 2026',
    },
    title: {
      pt: 'Bacharelado em Engenharia da Computação',
      en: "Bachelor's in Computer Engineering",
    },
    organization: {
      pt: 'Universidade Federal de São Carlos (UFSCar)',
      en: 'Federal University of São Carlos (UFSCar)',
    },
    summary: {
      pt: 'Graduação em Engenharia da Computação no campus São Carlos.',
      en: 'Undergraduate degree in Computer Engineering at the São Carlos campus.',
    },
    href: 'https://www.ufscar.br/',
  },
  {
    id: 'ufscar-ta',
    kind: 'education',
    start: '2022-02',
    end: '2022-05',
    sortOrder: 2,
    logo: 'icons/ufscar-logo.png',
    displayPeriod: {
      pt: 'Fev 2022 - Mai 2022',
      en: 'Feb 2022 - May 2022',
    },
    title: {
      pt: 'Monitor de Introdução à Computação',
      en: 'Introduction to Computing Teaching Assistant',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    summary: {
      pt: 'Monitoria em Introdução à Computação.',
      en: 'Teaching assistant for Introduction to Computing.',
    },
  },
  {
    id: 'ufscar-tutor-geometry',
    kind: 'education',
    start: '2023-05',
    end: '2023-09',
    sortOrder: 3,
    logo: 'icons/ufscar-logo.png',
    displayPeriod: {
      pt: 'Mai 2023 - Set 2023',
      en: 'May 2023 - Sep 2023',
    },
    title: {
      pt: 'Tutor de Geometria Analítica',
      en: 'Analytic Geometry Tutor',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    summary: {
      pt: 'Tutoria em Geometria Analítica.',
      en: 'Tutoring in Analytic Geometry.',
    },
  },
  {
    id: 'leadfy-intern',
    kind: 'experience',
    start: '2024-05',
    end: '2024-09',
    sortOrder: 4,
    logo: 'icons/leadfy-logo.png',
    displayPeriod: {
      pt: 'Mai 2024 - Set 2024',
      en: 'May 2024 - Sep 2024',
    },
    title: {
      pt: 'Estagiário de Suporte Técnico',
      en: 'Technical Support Intern',
    },
    organization: { pt: 'Leadfy Imob', en: 'Leadfy Imob' },
    summary: {
      pt: 'Suporte técnico, troubleshooting e documentação de falhas em fluxo ágil; apoio a produto com machine learning.',
      en: 'Provided technical support, troubleshooting issues and documenting failures in an agile workflow. Assisted in product development involving machine learning.',
    },
    href: 'https://leadfy-imob.com.br/',
    tags: ['agile', 'support', 'machine-learning'],
  },
  {
    id: 'hedgepoint-intern',
    kind: 'experience',
    start: '2024-09',
    end: '2025-03',
    sortOrder: 5,
    logo: 'icons/hedgepoint-logo.png',
    displayPeriod: {
      pt: 'Set 2024 - Mar 2025',
      en: 'Sep 2024 - Mar 2025',
    },
    title: {
      pt: 'Estagiário de Inteligência de Mercado',
      en: 'Market Intelligence Intern',
    },
    organization: {
      pt: 'HedgePoint Global Markets',
      en: 'HedgePoint Global Markets',
    },
    summary: {
      pt: 'Automação de relatórios e análises com Python, SQL, Excel e VBA; fluxos reutilizáveis e interface entre TI e Inteligência de Mercado.',
      en: 'Automated reporting and analysis with Python, SQL, Excel, and VBA; reusable workflows and bridge between IT and Market Intelligence.',
    },
    href: 'https://hedgepointglobal.com/',
    tags: ['python', 'finance', 'data'],
  },
  {
    id: 'all-juice',
    kind: 'experience',
    start: '2025-05',
    end: '2025-09',
    sortOrder: 6,
    logo: 'icons/alljuice-logo.png',
    displayPeriod: {
      pt: 'Mai 2025 - Set 2025',
      en: 'May 2025 - Sep 2025',
    },
    title: {
      pt: 'Desenvolvedor voluntário',
      en: 'Volunteer Developer',
    },
    organization: { pt: 'All Juice Capital', en: 'All Juice Capital' },
    summary: {
      pt: 'Desenvolvimento full-stack, pipelines de dados e suporte a trading systems em startup do Reino Unido.',
      en: 'Volunteer full-stack development, data pipelines, and trading systems support at a UK startup.',
    },
    href: 'https://www.alljuicecapital.com/',
    tags: ['typescript', 'python', 'trading'],
  },
  {
    id: 'maricondi-intern',
    kind: 'experience',
    start: '2025-09',
    end: '2025-11',
    sortOrder: 7,
    logo: 'icons/maricondi-logo.png',
    displayPeriod: {
      pt: 'Set 2025 - Nov 2025',
      en: 'Sep 2025 - Nov 2025',
    },
    title: {
      pt: 'Estagiário de Projetos',
      en: 'Projects Intern',
    },
    organization: { pt: 'Laboratório Maricondi', en: 'Laboratório Maricondi' },
    summary: {
      pt: 'Dashboards Power BI e consultas SQL para visibilidade de KPIs e qualidade de dados.',
      en: 'Built and maintained Power BI dashboards and SQL queries for KPI visibility and data quality.',
    },
    tags: ['power-bi', 'sql', 'bi'],
  },
  {
    id: 'panda-tutor',
    kind: 'education',
    start: '2025-09',
    sortOrder: 8,
    logo: 'icons/panda-logo.png',
    displayPeriod: {
      pt: 'Set 2025 - Atual',
      en: 'Sep 2025 - Present',
    },
    title: {
      pt: 'Tutor de Redes Neurais',
      en: 'Neural Networks Tutor',
    },
    organization: { pt: 'PANDA, UFSCar', en: 'PANDA, UFSCar' },
    summary: {
      pt: 'Entrada na Diretoria de Projetos PANDA com tutoria em Redes Neurais.',
      en: 'Joined the PANDA Projects Directorate as Neural Networks tutor.',
    },
    tags: ['academic', 'machine-learning'],
  },
  {
    id: 'integra-lab-2025',
    kind: 'project',
    start: '2025-09',
    end: '2026-02',
    sortOrder: 9,
    logo: 'icons/whirlpool-logo.png',
    displayPeriod: {
      pt: 'Set 2025 - Fev 2026',
      en: 'Sep 2025 - Feb 2026',
    },
    title: {
      pt: 'IntegraLab + Whirlpool',
      en: 'IntegraLab + Whirlpool',
    },
    organization: { pt: 'UFSCar + Whirlpool', en: 'UFSCar + Whirlpool' },
    summary: {
      pt: 'Projeto voltado à criação de soluções com IoT, com atuação em front-end, back-end, análise e ciência de dados.',
      en: 'Project focused on IoT solutions, with work across front-end, back-end, analytics, and data science.',
    },
    tags: ['iot', 'full-stack', 'data-science'],
  },
  {
    id: 'incomm-payments',
    kind: 'experience',
    start: '2025-11',
    sortOrder: 10,
    logo: 'icons/incomm-logo.png',
    displayPeriod: {
      pt: 'Nov 2025 - Atual',
      en: 'Nov 2025 - Present',
    },
    title: {
      pt: 'Estagiário em Fraud Business Analytics',
      en: 'Fraud Business Analytics Intern',
    },
    organization: { pt: 'InComm Payments', en: 'InComm Payments' },
    summary: {
      pt: 'Monitoramento de padrões de fraude e apoio à prevenção via análise de dados, em ambiente 100% em inglês.',
      en: 'Monitored fraud patterns and supported prevention through data analysis in an English-only environment.',
    },
    tags: ['fraud', 'analytics', 'data'],
  },
  {
    id: 'integra-lab-2026',
    kind: 'project',
    start: '2026-03',
    sortOrder: 11,
    logo: 'icons/whirlpool-logo.png',
    displayPeriod: {
      pt: 'Mar 2026 - Atual',
      en: 'Mar 2026 - Present',
    },
    title: {
      pt: 'IntegraLab + Whirlpool (novo ciclo)',
      en: 'IntegraLab + Whirlpool (new cycle)',
    },
    organization: { pt: 'UFSCar + Whirlpool', en: 'UFSCar + Whirlpool' },
    summary: {
      pt: 'Novo ciclo do projeto acadêmico-industrial IntegraLab com Whirlpool.',
      en: 'New cycle of the IntegraLab academic-industry project with Whirlpool.',
    },
    tags: ['iot', 'industry'],
  },
  {
    id: 'tcc-cerrado',
    kind: 'research',
    start: '2026-03',
    sortOrder: 12,
    logo: 'icons/ufscar-logo.png',
    displayPeriod: {
      pt: 'Mar 2026',
      en: 'Mar 2026',
    },
    title: {
      pt: 'TCC: previsão de focos de incêndio no Cerrado com variáveis climáticas',
      en: 'Undergraduate thesis: Cerrado fire hotspot prediction using climate variables',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    summary: {
      pt: 'Análise comparativa de modelos clássicos de ML (Regressão Logística, Naive Bayes, SVM, Random Forest, XGBoost) com dados INMET e BDQueimadas, incluindo feature engineering e tratamento de desbalanceamento.',
      en: 'Comparative analysis of classical ML models (Logistic Regression, Naive Bayes, SVM, Random Forest, XGBoost) using INMET data and INPE fire records, with feature engineering and imbalance treatment.',
    },
    href: 'https://repositorio.ufscar.br/items/969fd627-d894-40be-89fb-b20127ba3f03',
    tags: ['machine-learning', 'cerrado', 'wildfire'],
  },
]
