<script setup lang="ts">
const site = useSiteProfile()
const isExternalLink = (to: string): boolean => to.startsWith('http')
</script>

<template>
  <div class="flex min-h-dvh flex-col bg-[var(--ui-bg)] text-[var(--ui-text)]">
    <UHeader
      :title="site.siteName"
      to="/"
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

      <template #body>
        <nav
          class="flex flex-col gap-1 p-4 md:hidden"
          aria-label="Primary mobile"
        >
          <UButton
            v-for="item in site.navItems"
            :key="`m-${item.to}`"
            :to="item.to"
            :target="item.external || isExternalLink(item.to) ? '_blank' : undefined"
            variant="ghost"
            color="neutral"
            block
          >
            {{ item.label }}
          </UButton>
          <div class="mt-2 flex gap-2 border-t border-[var(--ui-border)] pt-4">
            <UButton
              :to="site.socialGithubUrl"
              target="_blank"
              rel="noopener noreferrer"
              icon="i-lucide-github"
              color="neutral"
              variant="soft"
              aria-label="GitHub profile"
            />
            <UButton
              :to="site.socialLinkedInUrl"
              target="_blank"
              rel="noopener noreferrer"
              icon="i-lucide-linkedin"
              color="neutral"
              variant="soft"
              aria-label="LinkedIn profile"
            />
            <UColorModeButton aria-label="Toggle color mode" />
          </div>
        </nav>
      </template>
    </UHeader>

    <UMain class="flex-1">
      <slot />
    </UMain>

    <UFooter class="border-t border-[var(--ui-border)]">
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
