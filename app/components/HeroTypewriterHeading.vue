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
  <span class="hero-typewriter inline-flex flex-wrap items-center gap-0">
    <span ref="typeContainerRef" class="hero-typewriter__chars inline min-h-[1em]" aria-hidden="true" />
    <span
      class="hero-typewriter-cursor inline-flex h-[0.85em] min-w-[0.35ch] items-center justify-center self-center font-semibold leading-none text-[var(--portfolio-accent)]"
      aria-hidden="true"
    >{{ parsed.cursorChar }}</span>
    <span class="sr-only">{{ parsed.typingPart }}</span>
  </span>
</template>

<style lang="scss" scoped>
.hero-typewriter__chars :deep(span) {
  vertical-align: baseline;
}
</style>
