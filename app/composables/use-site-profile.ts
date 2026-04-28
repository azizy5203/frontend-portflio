/**
 * Site-wide portfolio copy and navigation.
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
  readonly email: string
  readonly phoneDisplay: string
  readonly phoneTel: string
}

const siteProfile: SiteProfile = {
  siteName: 'Youssuf Abdulaziz',
  title: 'Youssuf Abdulaziz',
  tagline: 'Frontend Engineer',
  heroDescription:
    'Crafting high-performance, visually striking interfaces from complex ideas.',
  navItems: [
    { label: 'Home', to: '/#top' },
    { label: 'Experience', to: '/#experience' },
    { label: 'Work', to: '/#projects' },
    { label: 'Arsenal', to: '/#arsenal' },
    { label: 'Contact', to: '/#contact' }
  ],
  socialGithubUrl: 'https://github.com/azizy5203',
  socialLinkedInUrl: 'https://www.linkedin.com/in/youssuf-abdulaziz/',
  email: 'youssufabdulaziz@gmail.com',
  phoneDisplay: '+20 106 529 2537',
  phoneTel: '+201065292537'
}

export function useSiteProfile(): Readonly<SiteProfile> {
  return siteProfile
}
