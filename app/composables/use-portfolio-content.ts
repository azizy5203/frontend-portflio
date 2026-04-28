/**
 * Portfolio sections content (mirrors previous elegant-engineer portfolio).
 */
export interface PortfolioStat {
  readonly value: string
  readonly label: string
}

export interface PortfolioExperience {
  readonly period: string
  readonly role: string
  readonly description: string
}

export interface PortfolioProject {
  readonly name: string
  readonly description: string
  readonly href?: string
  readonly stack: readonly string[]
}

export interface PortfolioEducation {
  readonly degree: string
  readonly school: string
  readonly shortLabel: string
}

export interface PortfolioContent {
  readonly availabilityLabel: string
  readonly heroAccent: string
  readonly heroLead: string
  readonly stats: readonly PortfolioStat[]
  readonly currentRoleLabel: string
  readonly currentRoleCompany: string
  readonly marqueeTech: readonly string[]
  readonly experiences: readonly PortfolioExperience[]
  readonly projects: readonly PortfolioProject[]
  readonly arsenal: readonly string[]
  readonly education: PortfolioEducation
  readonly ctaTitle: string
  readonly ctaDescription: string
}

const portfolioContent: PortfolioContent = {
  availabilityLabel: 'Available for new opportunities',
  heroAccent: 'FrontendEngineer.|',
  heroLead:
    'Crafting high-performance, visually striking interfaces from complex ideas.',
  stats: [
    { value: '3+', label: 'Years Exp.' },
    { value: '20+', label: 'Dev Tools' },
    { value: '4+', label: 'Projects' }
  ],
  currentRoleLabel: 'Current Role',
  currentRoleCompany: 'Robusta Tech',
  marqueeTech: [
    'Vue.js',
    'React',
    'Angular',
    'TypeScript',
    'Vite',
    'Nuxt.js',
    'Node.js',
    'Pinia',
    'Vuex',
    'Tailwind',
    'SCSS',
    'GraphQL',
    'Git',
    'Figma',
    'C#',
    'SQL',
    'Express.js',
    'HTML5',
    'CSS3'
  ],
  experiences: [
    {
      period: 'Dec 2025 – Present',
      role: 'Frontend Engineer',
      description:
        'Serving as frontend engineer on a production e-commerce platform. Handling daily maintenance, bug fixes, and feature improvements across product management, checkout, payments, and profiles.'
    },
    {
      period: 'May 2023 – Nov 2025',
      role: 'Frontend Engineer',
      description:
        'Developed key features for an enterprise-scale Vue.js app. Optimized performance and build tooling, speeding the build process by 90%. Mentored junior developers.'
    },
    {
      period: 'Jan 2023 – Apr 2023',
      role: 'Frontend Intern',
      description:
        'Converted UI designs into functional SPAs using Vue.js, Bootstrap, SCSS, and Pinia. Collaborated with backend developers for smooth API integrations.'
    }
  ],
  projects: [
    {
      name: 'Impactor',
      description:
        'Strategy and project management platform. Built stage-based workflows, permission-based document management, and optimized build times by over 70%.',
      href: 'https://impactor.sa/',
      stack: ['Vue.js', 'Vite', 'Vuex', 'Vuetify']
    },
    {
      name: 'Anma',
      description:
        'E-learning platform providing seamless educational experiences with highly interactive user interfaces.',
      href: 'https://anma.edu.sa/',
      stack: ['React', 'TypeScript', 'Tailwind']
    },
    {
      name: 'Robox',
      description:
        'Attendance management system streamlining employee tracking and reporting with real-time dashboards.',
      href: 'https://robox.sa/',
      stack: ['Angular', 'RxJS', 'SCSS']
    },
    {
      name: 'Saudi NDF Secretariat',
      description:
        'Document management system with notification integration and secure file upload and download functionality.',
      stack: ['Angular', 'PrimeNG', 'ApexCharts']
    }
  ],
  arsenal: [
    'Vue.js',
    'React',
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Vite',
    'Nuxt.js',
    'Vuex',
    'Pinia',
    'Node.js',
    'Express.js',
    'C#',
    'SQL',
    'Git',
    'Figma',
    'Tailwind'
  ],
  education: {
    degree: 'Bachelor of Computer Science',
    school: 'Alexandria University, EG',
    shortLabel: 'CS'
  },
  ctaTitle: "Let's Build Something.",
  ctaDescription:
    'Ready to turn complex product requirements into scalable, high-impact web interfaces? I am available for work.'
}

export function usePortfolioContent(): Readonly<PortfolioContent> {
  return portfolioContent
}
