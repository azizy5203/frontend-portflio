<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    numericValue: number
    suffix: string
    label: string
    aosDelay?: number
    layoutSpan?: 'full-row'
  }>(),
  { aosDelay: 80 }
)
const rootRef = useTemplateRef<HTMLElement>('rootRef')
const { displayValue } = useStatCounter({
  rootRef,
  target: () => props.numericValue,
  suffix: () => props.suffix,
  duration: 1.65
})
</script>

<template>
  <div
    ref="rootRef"
    class="rounded-xl border border-[var(--ui-border)] bg-[var(--portfolio-surface)] px-5 py-4"
    :class="{ 'max-sm:col-span-2': props.layoutSpan === 'full-row' }"
    data-aos="fade-up"
    :data-aos-delay="aosDelay"
  >
    <p class="text-3xl font-semibold text-[var(--portfolio-accent)] tabular-nums md:text-4xl">
      {{ displayValue }}
    </p>
    <p class="text-muted mt-1 text-sm font-medium">
      {{ label }}
    </p>
  </div>
</template>
