<script setup lang="ts">
const site = useSiteProfile()
const isExternalLink = (to: string): boolean => to.startsWith('http')
</script>

<template>
  <div class="flex min-h-dvh flex-col bg-[var(--ui-bg)] text-[var(--ui-text)]">
    <UHeader
      :title="site.siteName"
      to="/"
      :toggle="false"
      class="border-b border-[var(--ui-border)]"
    >
      <template #right>
        <nav
          class="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          <UButton
            v-for="item in site.navItems"
            :key="item.to"
            :to="item.to"
            :target="item.external || isExternalLink(item.to) ? '_blank' : undefined"
            :rel="item.external || isExternalLink(item.to) ? 'noopener noreferrer' : undefined"
            variant="ghost"
            color="neutral"
            size="sm"
          >
            {{ item.label }}
          </UButton>
        </nav>
        <div class="hidden items-center gap-1 sm:flex md:ml-2">
          <UButton
            :to="site.socialGithubUrl"
            target="_blank"
            rel="noopener noreferrer"
            icon="i-lucide-github"
            color="neutral"
            variant="ghost"
            size="sm"
            aria-label="GitHub profile"
          />
          <UButton
            :to="site.socialLinkedInUrl"
            target="_blank"
            rel="noopener noreferrer"
            icon="i-lucide-linkedin"
            color="neutral"
            variant="ghost"
            size="sm"
            aria-label="LinkedIn profile"
          />
          <UColorModeButton aria-label="Toggle color mode" />
        </div>
      </template>
    </UHeader>

    <UMain class="flex-1">
      <slot />
    </UMain>

    <PortfolioBackToTop />
    <PortfolioMobileBottomNav />

    <UFooter class="border-t border-[var(--ui-border)] max-md:pb-[calc(5rem+env(safe-area-inset-bottom,0px))]">
      <template #left>
        <p class="text-muted text-sm">
          © {{ new Date().getFullYear() }} {{ site.siteName }}
        </p>
      </template>
      <template #right>
        <p class="text-muted text-sm">
          Built with
          <ULink
            to="https://nuxt.com"
            target="_blank"
            class="font-medium text-[var(--ui-text)]"
          >
            Nuxt
          </ULink>
          &
          <ULink
            to="https://ui.nuxt.com"
            target="_blank"
            class="font-medium text-[var(--ui-text)]"
          >
            Nuxt UI
          </ULink>
        </p>
      </template>
    </UFooter>
  </div>
</template>
