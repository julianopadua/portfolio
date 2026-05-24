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
    id: 'instituto-forest',
    name: { pt: 'Instituto Forest', en: 'Instituto Forest' },
    shortDescription: {
      pt: 'Portal de dados abertos para decisões reais — catálogo público, API de metadados e relatórios analíticos.',
      en: 'Open data portal for real-world decisions — public catalog, metadata API, and analytical reports.',
    },
    longDescription: {
      pt: 'Ecossistema open source: portal (front-end e orquestração de URLs oficiais), pipelines Python com SDK forest-data, automação de conteúdo para redes sociais e geração de relatórios.',
      en: 'Open-source ecosystem: portal (front-end and official URL orchestration), Python pipelines with the forest-data SDK, social content automation, and report generation.',
    },
    stack: ['Next.js', 'TypeScript', 'Python', 'Open Data', 'Supabase'],
    status: 'active',
    period: '2025 – today',
    tags: ['open-data', 'environment', 'open-source'],
    hero: true,
    sitePreview: {
      url: 'https://institutoforest.org',
      title: { pt: 'Instituto Forest', en: 'Instituto Forest' },
      description: {
        pt: 'Dados abertos por meio de código aberto. Portal do Instituto Forest: catálogo público, relatórios analíticos e API de metadados.',
        en: 'Open data through open source. Instituto Forest portal: public catalog, analytical reports, and metadata API.',
      },
      imageUrl: 'https://institutoforest.org/og-image.png',
    },
    links: {
      demo: 'https://institutoforest.org',
      repository: 'https://github.com/julianopadua/forest-portal',
      other: [
        {
          label: { pt: 'Pipelines & SDK', en: 'Pipelines & SDK' },
          href: 'https://github.com/julianopadua/forest-open-data-pipelines',
        },
      ],
    },
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
