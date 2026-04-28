<script setup lang="ts">
import type { PortfolioSectionId } from '~/composables/use-portfolio-section-spy'

const site = useSiteProfile()
const activeSection = usePortfolioSectionSpy()

interface NavIconItem {
  readonly sectionId: PortfolioSectionId
  readonly label: string
  readonly icon: string
}

const items: readonly NavIconItem[] = [
  { sectionId: 'top', label: 'Home', icon: 'i-lucide-home' },
  { sectionId: 'experience', label: 'Experience', icon: 'i-lucide-briefcase' },
  { sectionId: 'projects', label: 'Work', icon: 'i-lucide-layout-grid' },
  { sectionId: 'arsenal', label: 'Arsenal', icon: 'i-lucide-sparkles' },
  { sectionId: 'contact', label: 'Contact', icon: 'i-lucide-mail' }
]

function hrefForSection(sectionId: PortfolioSectionId): string {
  if (sectionId === 'top') {
    return '/#top'
  }
  return `/#${sectionId}`
}

function isActive(sectionId: PortfolioSectionId): boolean {
  return activeSection.value === sectionId
}
</script>

<template>
  <nav
    class="portfolio-bottom-nav md:hidden"
    aria-label="Section navigation"
  >
    <div class="portfolio-bottom-nav__sheet">
      <div class="portfolio-bottom-nav__row">
        <UButton
          v-for="item in items"
          :key="item.sectionId"
          :to="hrefForSection(item.sectionId)"
          variant="ghost"
          color="neutral"
          size="sm"
          square
          class="portfolio-bottom-nav__btn"
          :class="{ 'portfolio-bottom-nav__btn--active': isActive(item.sectionId) }"
          :aria-current="isActive(item.sectionId) ? 'true' : undefined"
          :aria-label="item.label"
        >
          <UIcon :name="item.icon" class="size-5" />
        </UButton>
      </div>
      <div class="portfolio-bottom-nav__meta">
        <UButton
          :to="site.socialGithubUrl"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-lucide-github"
          variant="ghost"
          color="neutral"
          size="xs"
          square
          class="portfolio-bottom-nav__ghost"
          aria-label="GitHub profile"
        />
        <UButton
          :to="site.socialLinkedInUrl"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-lucide-linkedin"
          variant="ghost"
          color="neutral"
          size="xs"
          square
          class="portfolio-bottom-nav__ghost"
          aria-label="LinkedIn profile"
        />
        <UColorModeButton
          class="portfolio-bottom-nav__ghost"
          aria-label="Toggle color mode"
        />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.portfolio-bottom-nav {
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  z-index: 50;
  padding-bottom: env(safe-area-inset-bottom, 0);
  padding-inline: 0.75rem;
  padding-top: 0.35rem;
  pointer-events: none;
}

.portfolio-bottom-nav__sheet {
  pointer-events: auto;
  margin-inline: auto;
  max-width: 28rem;
  border-radius: 1.25rem 1.25rem 0 0;
  border: 1px solid color-mix(in oklab, var(--ui-border) 85%, var(--portfolio-accent) 15%);
  border-bottom: none;
  background: color-mix(in oklab, var(--ui-bg-elevated) 92%, var(--portfolio-accent-muted) 8%);
  backdrop-filter: blur(12px);
  box-shadow:
    0 -8px 32px color-mix(in oklab, var(--portfolio-accent) 8%, transparent),
    0 0 0 1px color-mix(in oklab, var(--portfolio-accent) 6%, transparent);
}

.portfolio-bottom-nav__row {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 0.125rem;
  padding: 0.5rem 0.5rem 0.35rem;
}

.portfolio-bottom-nav__btn {
  flex: none;
  width: 2.75rem;
  min-width: 2.75rem;
  max-width: 100%;
  justify-content: center;
  color: var(--ui-text-muted);
  border-radius: 0.75rem;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.portfolio-bottom-nav__btn--active {
  color: var(--portfolio-accent);
  background: color-mix(in oklab, var(--portfolio-accent) 14%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--portfolio-accent) 35%, transparent);
}

.portfolio-bottom-nav__meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 0.5rem 0.5rem;
  border-top: 1px solid var(--ui-border);
}

.portfolio-bottom-nav__ghost {
  opacity: 0.85;
}
</style>
