<script setup lang="ts">
const isVisible = useScrollPastThreshold(380)
function scrollToTop(): void {
  if (import.meta.server) {
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-2 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-2 scale-95"
  >
    <div
      v-show="isVisible"
      class="portfolio-back-to-top pointer-events-none fixed end-4 z-[60] max-md:bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:bottom-8"
    >
      <UButton
        icon="i-lucide-arrow-up"
        color="neutral"
        size="lg"
        square
        class="portfolio-back-to-top__btn pointer-events-auto shadow-lg"
        aria-label="Back to top"
        @click="scrollToTop"
      />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.portfolio-back-to-top__btn {
  background: linear-gradient(
    145deg,
    color-mix(in oklab, var(--portfolio-accent) 88%, transparent) 0%,
    color-mix(in oklab, var(--portfolio-accent-secondary) 75%, transparent) 100%
  );
  color: var(--portfolio-on-accent);
  border: 1px solid color-mix(in oklab, var(--portfolio-accent) 40%, transparent);
}
.portfolio-back-to-top__btn:hover {
  box-shadow:
    0 0 0 1px color-mix(in oklab, var(--portfolio-accent) 45%, transparent),
    0 10px 28px color-mix(in oklab, var(--portfolio-accent) 28%, transparent);
}
</style>
