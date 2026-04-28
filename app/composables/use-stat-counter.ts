import { gsap } from 'gsap'

export interface UseStatCounterParams {
  readonly target: MaybeRefOrGetter<number>
  readonly suffix: MaybeRefOrGetter<string>
  readonly rootRef: Ref<HTMLElement | null>
  /** Rounded to integer for display */
  readonly duration?: number
}

/**
 * Animates displayed stat from 0 to target when the element enters the viewport.
 */
export function useStatCounter(params: UseStatCounterParams): { readonly displayValue: Ref<string> } {
  const displayValue = ref('0')
  const duration = params.duration ?? 1.6
  let tween: gsap.core.Tween | null = null
  let observer: IntersectionObserver | null = null
  const hasPlayed = ref(false)
  onMounted(() => {
    if (import.meta.server) {
      return
    }
    const root = params.rootRef.value
    if (!root) {
      return
    }
    const suffix = () => toValue(params.suffix)
    const targetNum = () => Math.round(toValue(params.target))
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting || hasPlayed.value) {
          return
        }
        hasPlayed.value = true
        const proxy = { n: 0 }
        tween?.kill()
        tween = gsap.to(proxy, {
          n: targetNum(),
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            displayValue.value = `${Math.round(proxy.n)}${suffix()}`
          },
          onComplete: () => {
            displayValue.value = `${targetNum()}${suffix()}`
          }
        })
        observer?.disconnect()
        observer = null
      },
      { root: null, threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(root)
  })
  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
    tween?.kill()
    tween = null
  })
  return { displayValue }
}
