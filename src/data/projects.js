export const FEATURED_PROJECT = {
  id: 'tax-genius',
  title: 'Tax Genius AI',
  tagline: 'Autonomous Tax Intelligence & Deduction Engine',
  badge: 'Flagship Showcase',
  category: 'FinTech & AI Systems',
  status: 'In Production',
  overview: 'Tax Genius is an intelligent tax advisory and automation system designed to discover hidden write-offs, simulate cross-jurisdiction tax liabilities, and generate audit-proof IRS & international tax schedules with sub-second inference.',
  metrics: [
    { label: 'Calculated Deductions', value: '$14.2M+', change: '+28% avg user refund' },
    { label: 'Inference Latency', value: '< 140ms', change: 'GPU edge workers' },
    { label: 'Rulebook Accuracy', value: '99.94%', change: 'IRS Pub 535 verified' },
    { label: 'Active Business Clients', value: '18,500+', change: 'Across 12 countries' }
  ],
  keyFeatures: [
    {
      title: 'Neural Deduction Matching',
      desc: 'Parses complex receipts, bank ledgers, and invoices via multimodal OCR to match against 4,800+ tax credit rules.'
    },
    {
      title: 'Multi-Jurisdiction Simulation',
      desc: 'Simulates tax impacts across federal, state, and cross-border nexus regulations in real-time.'
    },
    {
      title: 'Audit Defense Dossier',
      desc: 'Automatically compiles cryptographic audit trails and statutory citations for every claim filed.'
    },
    {
      title: 'Live Bank Sync & Stream',
      desc: 'Plaid & Stripe webhook integration with automatic categorisation and quarterly estimated tax recalculation.'
    }
  ],
  techStack: ['Next.js 15', 'TypeScript', 'Python FastAPI', 'PyTorch / LangChain', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
  liveUrl: 'https://tax-genius.demo',
  githubUrl: 'https://github.com/mohammad-arman/tax-genius',
  architectureHighlight: 'Event-driven microservices architecture handling 10,000+ RPS with AES-256 encrypted ledger records.'
};

export const OTHER_PROJECTS = [
  {
    id: 'cloud-sentinel',
    title: 'CloudSentinel Observability',
    category: 'Cloud & DevOps',
    desc: 'High-throughput telemetry ingestion and real-time distributed tracing platform with anomaly detection.',
    metrics: '50M+ events/sec • eBPF • Rust & Go',
    tech: ['Rust', 'Go', 'ClickHouse', 'React', 'Tailwind CSS', 'OpenTelemetry'],
    stars: '1.4k',
    url: 'https://github.com/mohammad-arman/cloud-sentinel'
  },
  {
    id: 'nexus-flow',
    title: 'NexusFlow Automation Studio',
    category: 'Full-Stack SaaS',
    desc: 'Visual node-based workflow builder for enterprise data pipelines with real-time multiplayer canvas.',
    metrics: 'WebGL Canvas • WebSockets • 99.99% Uptime',
    tech: ['React', 'TypeScript', 'Zustand', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    stars: '890',
    url: 'https://github.com/mohammad-arman/nexus-flow'
  },
  {
    id: 'crypto-pulse',
    title: 'PulseFi Liquidity Engine',
    category: 'Web3 & Algorithms',
    desc: 'Decentralized automated market maker routing protocol with MEV mitigation and sub-tick execution.',
    metrics: '$80M TVL • Solidity • Arbitrum',
    tech: ['Solidity', 'Foundry', 'TypeScript', 'Ethers.js', 'GraphQL'],
    stars: '620',
    url: 'https://github.com/mohammad-arman/pulse-fi'
  }
];
