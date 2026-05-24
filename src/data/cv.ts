import type { CvEntry, CvPublication, CvSkill } from './types'

export const cvEducation: CvEntry[] = [
  {
    id: 'ufscar-bsc',
    title: {
      pt: 'Bacharelado em Engenharia da Computação',
      en: "Bachelor's in Computer Engineering",
    },
    organization: {
      pt: 'Universidade Federal de São Carlos (UFSCar)',
      en: 'Federal University of São Carlos (UFSCar)',
    },
    location: { pt: 'São Carlos, SP', en: 'São Carlos, SP' },
    period: { pt: 'Ago 2021 - Jul 2026', en: 'Aug 2021 - Jul 2026' },
    description: {
      pt: 'Formação em computação com projetos aplicados em software, dados e sistemas.',
      en: 'Computer engineering degree with applied projects in software, data, and systems.',
    },
  },
  {
    id: 'ufscar-ta',
    title: {
      pt: 'Monitor de Introdução à Computação',
      en: 'Introduction to Computing Teaching Assistant',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    period: { pt: 'Fev 2022 - Mai 2022', en: 'Feb 2022 - May 2022' },
    description: {
      pt: 'Monitoria em disciplina introdutória de computação.',
      en: 'Teaching assistant for introductory computing course.',
    },
  },
  {
    id: 'ufscar-tutor-geometry',
    title: {
      pt: 'Tutor de Geometria Analítica',
      en: 'Analytic Geometry Tutor',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    period: { pt: 'Mai 2023 - Set 2023', en: 'May 2023 - Sep 2023' },
    description: {
      pt: 'Tutoria em Geometria Analítica.',
      en: 'Tutoring in Analytic Geometry.',
    },
  },
  {
    id: 'integralab-leader',
    title: {
      pt: 'Líder de projeto IntegraLab',
      en: 'IntegraLab Project Leader',
    },
    organization: { pt: 'Whirlpool + UFSCar', en: 'Whirlpool + UFSCar' },
    period: { pt: 'Set 2025 - Jul 2026', en: 'Sep 2025 - Jul 2026' },
    description: {
      pt: 'Liderança do projeto acadêmico-industrial IntegraLab.',
      en: 'Led the IntegraLab academic-industry project.',
    },
  },
  {
    id: 'panda-tutor',
    title: {
      pt: 'Tutor de Redes Neurais (PANDA)',
      en: 'Neural Networks Tutor (PANDA)',
    },
    organization: { pt: 'Diretoria de Projetos PANDA, UFSCar', en: 'PANDA Projects Directorate, UFSCar' },
    period: { pt: 'Set 2025 - Atual', en: 'Sep 2025 - Present' },
    description: {
      pt: 'Tutoria em Redes Neurais.',
      en: 'Tutoring in Neural Networks.',
    },
  },
]

export const cvExperience: CvEntry[] = [
  {
    id: 'incomm',
    title: {
      pt: 'Estagiário em Fraud Business Analytics',
      en: 'Fraud Business Analytics Intern',
    },
    organization: { pt: 'InComm Payments', en: 'InComm Payments' },
    period: { pt: 'Nov 2025 - Atual', en: 'Nov 2025 - Present' },
    description: {
      pt: 'Monitoramento de padrões de fraude e apoio à prevenção via análise de dados, em ambiente 100% em inglês.',
      en: 'Monitored fraud patterns and supported prevention through data analysis in an English-only environment.',
    },
  },
  {
    id: 'maricondi',
    title: { pt: 'Estagiário de Projetos', en: 'Projects Intern' },
    organization: { pt: 'Laboratório Maricondi', en: 'Laboratório Maricondi' },
    period: { pt: 'Set 2025 - Nov 2025', en: 'Sep 2025 - Nov 2025' },
    description: {
      pt: 'Dashboards Power BI e consultas SQL para visibilidade de KPIs e qualidade de dados.',
      en: 'Built and maintained Power BI dashboards and SQL queries for KPI visibility and data quality.',
    },
  },
  {
    id: 'all-juice',
    title: { pt: 'Desenvolvedor Full-Stack', en: 'Full-Stack Developer' },
    organization: { pt: 'All Juice Capital', en: 'All Juice Capital' },
    period: { pt: 'Mai 2025 - Set 2025', en: 'May 2025 - Sep 2025' },
    description: {
      pt: 'Desenvolvimento full-stack, pipelines de dados e automações para analytics de trading e ferramentas internas.',
      en: 'Full-stack development, data pipelines, and automation for trading analytics and internal tools.',
    },
    href: 'https://www.alljuicecapital.com/',
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
    period: { pt: 'Set 2024 - Mar 2025', en: 'Sep 2024 - Mar 2025' },
    description: {
      pt: 'Automação de relatórios e análises com Python, SQL, Excel e VBA; fluxos reutilizáveis e interface entre TI e Inteligência de Mercado.',
      en: 'Automated reporting and analysis with Python, SQL, Excel, and VBA; reusable workflows and bridge between IT and Market Intelligence.',
    },
    href: 'https://hedgepointglobal.com/',
  },
  {
    id: 'leadfy',
    title: { pt: 'Estagiário de Suporte Técnico', en: 'Technical Support Intern' },
    organization: { pt: 'Leadfy Imob', en: 'Leadfy Imob' },
    period: { pt: 'Mai 2024 - Set 2024', en: 'May 2024 - Sep 2024' },
    description: {
      pt: 'Suporte técnico, troubleshooting e documentação em fluxo ágil; apoio a produto com machine learning.',
      en: 'Technical support, troubleshooting, and documentation in agile workflow; assisted ML-related product development.',
    },
    href: 'https://leadfy-imob.com.br/',
  },
]

export const cvResearch: CvEntry[] = [
  {
    id: 'tcc-cerrado',
    title: {
      pt: 'TCC: previsão e ranking de focos de incêndio no Cerrado',
      en: 'Thesis: fire hotspot prediction and ranking in the Cerrado',
    },
    organization: { pt: 'UFSCar', en: 'UFSCar' },
    period: { pt: 'Em andamento', en: 'In progress' },
    description: {
      pt: 'Pesquisa aplicada em modelagem preditiva e análise espacial de focos de incêndio.',
      en: 'Applied research on predictive modeling and spatial analysis of fire hotspots.',
    },
    placeholder: true,
  },
]

export const cvProjectsHighlight: CvEntry[] = [
  {
    id: 'integralab-cv',
    title: { pt: 'IntegraLab (Whirlpool + UFSCar)', en: 'IntegraLab (Whirlpool + UFSCar)' },
    period: { pt: 'Set 2025 - Jul 2026', en: 'Sep 2025 - Jul 2026' },
    description: {
      pt: 'Projeto acadêmico-industrial com liderança de equipe e entregas de engenharia.',
      en: 'Academic-industry project with team leadership and engineering deliverables.',
    },
  },
]

export const cvSoftSkills: CvSkill[] = [
  {
    name: { pt: 'Comunicação em inglês (ambiente profissional)', en: 'Professional English communication' },
    detail: {
      pt: 'Experiência em ambiente internacional na InComm Payments.',
      en: 'Experience in an international environment at InComm Payments.',
    },
  },
  {
    name: { pt: 'Trabalho em equipe e liderança de projeto', en: 'Teamwork and project leadership' },
    detail: {
      pt: 'IntegraLab, PANDA e projetos multidisciplinares.',
      en: 'IntegraLab, PANDA, and multidisciplinary projects.',
    },
  },
  {
    name: { pt: 'Resolução de problemas orientada a dados', en: 'Data-driven problem solving' },
  },
  {
    name: { pt: 'Gestão de tempo', en: 'Time management' },
  },
]

export const cvHardSkills: CvSkill[] = [
  {
    name: { pt: 'Data Analytics', en: 'Data Analytics' },
    detail: {
      pt: 'EDA, feature engineering, KPIs, Power BI (DAX, Power Query), Excel, Accertify, Splunk',
      en: 'EDA, feature engineering, KPIs, Power BI (DAX, Power Query), Excel, Accertify, Splunk',
    },
  },
  {
    name: { pt: 'Data Science', en: 'Data Science' },
    detail: {
      pt: 'Aprendizado supervisionado, avaliação de modelos',
      en: 'Supervised learning, model evaluation',
    },
  },
  {
    name: { pt: 'Programação', en: 'Programming' },
    detail: {
      pt: 'Python, SQL, VBA, TypeScript, JavaScript',
      en: 'Python, SQL, VBA, TypeScript, JavaScript',
    },
  },
  {
    name: { pt: 'Data Engineering', en: 'Data Engineering' },
    detail: {
      pt: 'Web scraping, ETL, consolidação de dados, agendamento, logging',
      en: 'Web scraping, ETL, data consolidation, scheduling, logging',
    },
  },
  {
    name: { pt: 'Bancos de dados e ferramentas', en: 'Databases and tools' },
    detail: {
      pt: 'PostgreSQL, SQL Server, SSAS, Git, GitHub',
      en: 'PostgreSQL, SQL Server, SSAS, Git, GitHub',
    },
  },
  {
    name: { pt: 'Web', en: 'Web' },
    detail: {
      pt: 'Next.js, React, Tailwind CSS, REST APIs',
      en: 'Next.js, React, Tailwind CSS, REST APIs',
    },
  },
  {
    name: { pt: 'Finanças', en: 'Finance' },
    detail: {
      pt: 'Commodities, trading systems, prevenção a fraudes',
      en: 'Commodities, trading systems, fraud prevention',
    },
  },
  {
    name: { pt: 'Idiomas', en: 'Languages' },
    detail: {
      pt: 'Português (nativo), inglês (avançado), espanhol (intermediário)',
      en: 'Portuguese (native), English (advanced), Spanish (intermediate)',
    },
  },
]

export const cvPublications: CvPublication[] = []

export const cvVolunteering: CvEntry[] = []
