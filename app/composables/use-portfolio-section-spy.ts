const SECTION_IDS = ['top', 'experience', 'projects', 'arsenal', 'contact'] as const

export type PortfolioSectionId = (typeof SECTION_IDS)[number]

/**
 * Tracks which portfolio section anchor is active for mobile bottom nav.
 */
export function usePortfolioSectionSpy(): Ref<PortfolioSectionId> {
  const activeId = useState<PortfolioSectionId>('portfolio-active-section', () => 'top')
  const ticking = ref(false)
  function executeUpdateFromScroll(): void {
    if (import.meta.server) {
      return
    }
    const scrollBottom = window.scrollY + window.innerHeight
    const docHeight = document.documentElement.scrollHeight
    if (scrollBottom >= docHeight - 32) {
      activeId.value = 'contact'
      return
    }
    const lineFromTop = 112
    let current: PortfolioSectionId = 'top'
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (!el) {
        continue
      }
      const top = el.getBoundingClientRect().top
      if (top <= lineFromTop) {
        current = id
      }
    }
    activeId.value = current
  }
  function scheduleUpdate(): void {
    if (ticking.value) {
      return
    }
    ticking.value = true
    requestAnimationFrame(() => {
      ticking.value = false
      executeUpdateFromScroll()
    })
  }
  onMounted(() => {
    if (import.meta.server) {
      return
    }
    executeUpdateFromScroll()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate, { passive: true })
  })
  onBeforeUnmount(() => {
    if (import.meta.server) {
      return
    }
    window.removeEventListener('scroll', scheduleUpdate)
    window.removeEventListener('resize', scheduleUpdate)
  })
  return activeId
}
