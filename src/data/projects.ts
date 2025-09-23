export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web-app' | 'saas' | 'api' | 'mobile' | 'tool';
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'EcoTrack SaaS',
    description: 'Enterprise carbon footprint tracking platform with real-time analytics and automated reporting for sustainable business operations.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript', 'Chart.js'],
    liveUrl: 'https://ecotrack-demo.com',
    githubUrl: 'https://github.com/username/ecotrack',
    category: 'saas',
    featured: true
  },
  {
    id: '2', 
    title: 'CryptoWatch API',
    description: 'High-performance cryptocurrency tracking API serving 10M+ requests daily with WebSocket real-time price feeds.',
    techStack: ['Node.js', 'Redis', 'MongoDB', 'WebSocket', 'Docker', 'Kubernetes'],
    liveUrl: 'https://cryptowatch-api.dev',
    githubUrl: 'https://github.com/username/cryptowatch-api',
    category: 'api',
    featured: true
  },
  {
    id: '3',
    title: 'TaskFlow Mobile',
    description: 'Cross-platform productivity app with offline-first architecture and seamless team collaboration features.',
    techStack: ['React Native', 'TypeScript', 'SQLite', 'Firebase', 'Redux Toolkit'],
    liveUrl: 'https://taskflow.app',
    githubUrl: 'https://github.com/username/taskflow-mobile',
    category: 'mobile'
  },
  {
    id: '4',
    title: 'DevMetrics Dashboard',
    description: 'Real-time development team performance analytics with GitHub integration and custom KPI tracking.',
    techStack: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'D3.js', 'GitHub API'],
    liveUrl: 'https://devmetrics.io',
    githubUrl: 'https://github.com/username/devmetrics',
    category: 'web-app',
    featured: true
  },
  {
    id: '5',
    title: 'CloudDeploy CLI',
    description: 'Developer tool for one-command deployment to multiple cloud providers with automatic scaling configuration.',
    techStack: ['Go', 'Docker', 'AWS CLI', 'Terraform', 'Kubernetes'],
    githubUrl: 'https://github.com/username/clouddeploy-cli',
    category: 'tool'
  },
  {
    id: '6',
    title: 'MarketPulse Analytics',
    description: 'ML-powered market sentiment analysis platform processing social media and news data for trading insights.',
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Apache Kafka', 'Elasticsearch'],
    liveUrl: 'https://marketpulse.analytics',
    githubUrl: 'https://github.com/username/marketpulse',
    category: 'saas'
  }
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};