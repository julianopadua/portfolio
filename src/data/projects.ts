import type { ProjectItem } from './types'

export const projects: ProjectItem[] = [
  {
    id: 'comparativo-empresarial',
    name: {
      pt: 'Análise Comparativa de Empresas',
      en: 'Company Comparative Analysis',
    },
    shortDescription: {
      pt: 'App Streamlit para indicadores financeiros e gráficos históricos de ações.',
      en: 'Streamlit app for financial indicators and historical stock charts.',
    },
    longDescription: {
      pt: 'Aplicação web em Python com Streamlit para análise comparativa educacional de empresas e visualização de dados de mercado.',
      en: 'Python web application with Streamlit for educational comparative company analysis and market data visualization.',
    },
    stack: ['Python', 'Streamlit', 'Pandas'],
    status: 'completed',
    period: '2023',
    tags: ['finance', 'data-viz', 'streamlit'],
    links: {
      repository: 'https://github.com/julianopadua/Comparativo-Empresarial-Online',
    },
    featured: true,
  },
  {
    id: 'web-project-creator',
    name: {
      pt: 'Project Initialization App',
      en: 'Project Initialization App',
    },
    shortDescription: {
      pt: 'Gera estruturas de projetos personalizadas e exporta ZIP.',
      en: 'Generates customized project structures and exports ZIP archives.',
    },
    stack: ['Python', 'Streamlit'],
    status: 'completed',
    period: '2023',
    tags: ['productivity', 'streamlit'],
    links: {
      repository: 'https://github.com/julianopadua/web_project_creator/tree/main',
    },
    featured: true,
  },
  {
    id: 'dolar-direcao',
    name: {
      pt: 'Pra onde vai o Dólar?',
      en: 'Where is the Dollar Going?',
    },
    shortDescription: {
      pt: 'ML para classificar se USD/BRL sobe ou cai no dia seguinte.',
      en: 'ML to classify whether USD/BRL rises or falls the next day.',
    },
    stack: ['Python', 'Machine Learning', 'scikit-learn'],
    status: 'completed',
    period: '2023',
    tags: ['finance', 'ml', 'classification'],
    links: {
      repository: 'https://github.com/julianopadua/Aumento-ou-Diminuicao-Dolar',
    },
    featured: true,
  },
  {
    id: 'cotacao-dolar',
    name: {
      pt: 'Cotação do Dólar: Previsão com Machine Learning',
      en: 'Dollar Exchange Rate: Machine Learning Prediction',
    },
    shortDescription: {
      pt: 'Previsão de USD/BRL com séries temporais e ARIMA.',
      en: 'USD/BRL forecasting with time series and ARIMA.',
    },
    stack: ['Python', 'ARIMA', 'Time Series'],
    status: 'completed',
    period: '2023',
    tags: ['finance', 'ml', 'time-series'],
    links: {
      repository: 'https://github.com/julianopadua/cotacao-do-dolar',
    },
  },
  {
    id: 'financial-report',
    name: {
      pt: 'Relatório Financeiro Automatizado',
      en: 'Automated Financial Report',
    },
    shortDescription: {
      pt: 'Relatórios financeiros interativos com exportação em PDF.',
      en: 'Interactive financial reports with PDF export.',
    },
    stack: ['Python', 'Streamlit', 'PDF'],
    status: 'completed',
    period: '2024',
    tags: ['finance', 'automation', 'streamlit'],
    links: {
      repository: 'https://github.com/julianopadua/p03-web-report',
    },
    featured: true,
  },
  {
    id: 'folder-cleaner',
    name: {
      pt: 'Limpador de Pastas',
      en: 'Folder Cleaner',
    },
    shortDescription: {
      pt: 'Identifica arquivos e pastas que mais consomem disco.',
      en: 'Identifies files and folders consuming the most disk space.',
    },
    stack: ['Python'],
    status: 'completed',
    period: '2023',
    tags: ['utilities', 'automation'],
    links: {
      repository: 'https://github.com/julianopadua/Cleaner-com-Python',
    },
  },
  {
    id: 'tcc-cerrado-project',
    name: {
      pt: 'TCC: focos de incêndio no Cerrado (ML + variáveis climáticas)',
      en: 'Thesis: Cerrado fire hotspots (ML + climate variables)',
    },
    shortDescription: {
      pt: 'Comparativo de modelos clássicos de ML para previsão horária de focos de incêndio.',
      en: 'Comparative analysis of classical ML models for hourly fire hotspot prediction.',
    },
    longDescription: {
      pt: 'Integração INMET e BDQueimadas; feature engineering, SMOTE e métricas PR-AUC e F1.',
      en: 'INMET and INPE data integration; feature engineering, SMOTE, and PR-AUC and F1 metrics.',
    },
    stack: ['Python', 'Machine Learning', 'XGBoost', 'scikit-learn'],
    status: 'completed',
    period: '2026',
    tags: ['research', 'cerrado', 'wildfire'],
    links: {
      other: [
        {
          label: { pt: 'Repositório UFSCar', en: 'UFSCar repository' },
          href: 'https://repositorio.ufscar.br/items/969fd627-d894-40be-89fb-b20127ba3f03',
        },
      ],
    },
    featured: true,
  },
  {
    id: 'integra-lab-project',
    name: { pt: 'IntegraLab / Whirlpool', en: 'IntegraLab / Whirlpool' },
    shortDescription: {
      pt: 'Soluções IoT com front-end, back-end, análise e ciência de dados.',
      en: 'IoT solutions with front-end, back-end, analytics, and data science.',
    },
    longDescription: {
      pt: 'Projeto acadêmico-industrial UFSCar + Whirlpool (set/2025 - fev/2026 e novo ciclo desde mar/2026).',
      en: 'UFSCar + Whirlpool academic-industry project (Sep 2025 - Feb 2026 and new cycle from Mar 2026).',
    },
    stack: ['IoT', 'React', 'Python', 'Data Science'],
    status: 'active',
    period: '2025-2026',
    tags: ['industry', 'ufscar', 'iot'],
    links: {},
    featured: true,
  },
  {
    id: 'data-automation-project',
    name: { pt: 'Automações de dados', en: 'Data automation' },
    shortDescription: {
      pt: 'Pipelines e scripts para coleta, limpeza e relatórios.',
      en: 'Pipelines and scripts for collection, cleaning, and reporting.',
    },
    stack: ['Python', 'SQL', 'Excel/VBA'],
    status: 'active',
    tags: ['automation', 'data'],
    links: {
      repository: 'https://github.com/julianopadua',
    },
  },
]
