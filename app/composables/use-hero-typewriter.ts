import { gsap } from 'gsap'

export interface ParsedHeroAccent {
  readonly typingPart: string
  readonly cursorChar: string
}

/**
 * Splits accent like "FrontendEngineer.|" into typing segment and trailing cursor.
 */
export function parseHeroAccent(fullText: string): ParsedHeroAccent {
  const cursorChar = '|'
  if (fullText.endsWith(`.${cursorChar}`)) {
    return {
      typingPart: fullText.slice(0, -2),
      cursorChar
    }
  }
  if (fullText.endsWith(cursorChar)) {
    return {
      typingPart: fullText.slice(0, -1),
      cursorChar
    }
  }
  return { typingPart: fullText, cursorChar: '|' }
}

export interface UseHeroTypewriterParams {
  readonly textContainerRef: Ref<HTMLElement | null>
  readonly fullAccent: MaybeRefOrGetter<string>
  /** Typing speed in characters per second */
  readonly cps?: number
}

/**
 * GSAP typewriter: reveals each character in the typing segment (cursor stays visible).
 */
export function useHeroTypewriter(params: UseHeroTypewriterParams): void {
  const cps = params.cps ?? 28
  let timeline: gsap.core.Timeline | null = null
  function killAndClear(): void {
    timeline?.kill()
    timeline = null
    const el = params.textContainerRef.value
    if (el) {
      el.textContent = ''
    }
  }
  function runAnimation(): void {
    if (import.meta.server) {
      return
    }
    killAndClear()
    const el = params.textContainerRef.value
    const fullText = toValue(params.fullAccent)
    if (!el || !fullText) {
      return
    }
    const { typingPart } = parseHeroAccent(fullText)
    const chars = [...typingPart]
    const fragment = document.createDocumentFragment()
    const charSpans: HTMLSpanElement[] = []
    for (const ch of chars) {
      const span = document.createElement('span')
      span.textContent = ch
      span.style.opacity = '0'
      span.style.display = 'inline'
      charSpans.push(span)
      fragment.appendChild(span)
    }
    el.appendChild(fragment)
    timeline = gsap.timeline({ defaults: { ease: 'none' } })
    const stepDuration = 1 / cps
    charSpans.forEach((span, i) => {
      timeline!.to(span, { opacity: 1, duration: stepDuration }, i * stepDuration)
    })
  }
  onMounted(() => {
    nextTick(() => {
      runAnimation()
    })
  })
  watch(
    () => toValue(params.fullAccent),
    () => {
      nextTick(() => {
        runAnimation()
      })
    }
  )
  onBeforeUnmount(() => {
    killAndClear()
  })
}
