/**
 * Whether the window has been scrolled past a pixel threshold (e.g. for back-to-top).
 */
export function useScrollPastThreshold(thresholdPx: number): Readonly<Ref<boolean>> {
  const isPast = ref(false)
  const ticking = ref(false)
  function executeRead(): void {
    if (import.meta.server) {
      return
    }
    isPast.value = window.scrollY > thresholdPx
  }
  function scheduleRead(): void {
    if (ticking.value) {
      return
    }
    ticking.value = true
    requestAnimationFrame(() => {
      ticking.value = false
      executeRead()
    })
  }
  onMounted(() => {
    if (import.meta.server) {
      return
    }
    executeRead()
    window.addEventListener('scroll', scheduleRead, { passive: true })
  })
  onBeforeUnmount(() => {
    if (import.meta.server) {
      return
    }
    window.removeEventListener('scroll', scheduleRead)
  })
  return readonly(isPast)
}
