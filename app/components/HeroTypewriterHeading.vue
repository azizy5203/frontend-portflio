<script setup lang="ts">
const props = defineProps<{
  fullAccent: string
}>()
const typeContainerRef = useTemplateRef<HTMLElement>('typeContainerRef')
const parsed = computed(() => parseHeroAccent(props.fullAccent))
useHeroTypewriter({
  textContainerRef: typeContainerRef,
  fullAccent: () => props.fullAccent,
  cps: 32
})
</script>

<template>
  <span class="inline-flex flex-wrap items-baseline gap-0">
    <span ref="typeContainerRef" class="inline min-h-[1em]" aria-hidden="true" />
    <span
      class="hero-typewriter-cursor inline text-[var(--portfolio-accent)]"
      aria-hidden="true"
    >{{ parsed.cursorChar }}</span>
    <span class="sr-only">{{ parsed.typingPart }}</span>
  </span>
</template>
