/**
 * Site-wide portfolio copy and navigation (replace with your details).
 */
export interface SiteNavItem {
  readonly label: string
  readonly to: string
  readonly external?: boolean
}

export interface SiteProfile {
  readonly siteName: string
  readonly title: string
  readonly tagline: string
  readonly heroDescription: string
  readonly navItems: readonly SiteNavItem[]
  readonly socialGithubUrl: string
  readonly socialLinkedInUrl: string
}

const siteProfile: SiteProfile = {
  siteName: 'Portfolio',
  title: 'Your Name',
  tagline: 'Frontend developer',
  heroDescription:
    'I build fast, accessible web interfaces with Vue, Nuxt, and TypeScript. This site is a starting point—swap in your projects, bio, and links.',
  navItems: [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/#projects' },
    { label: 'Contact', to: '/#contact' }
  ],
  socialGithubUrl: 'https://github.com',
  socialLinkedInUrl: 'https://linkedin.com'
}

export function useSiteProfile(): Readonly<SiteProfile> {
  return siteProfile
}
