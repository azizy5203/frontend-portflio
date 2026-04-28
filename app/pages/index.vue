<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const site = useSiteProfile()
const config = useRuntimeConfig()
const siteUrl = computed(() => {
  const base = (config.public.siteUrl as string | undefined) || ''
  return base.replace(/\/$/, '')
})
useSeoMeta({
  title: `${site.title} — ${site.tagline}`,
  description: site.heroDescription,
  ogTitle: `${site.title} — ${site.tagline}`,
  ogDescription: site.heroDescription,
  twitterCard: 'summary_large_image',
  ...(siteUrl.value ? { ogUrl: `${siteUrl.value}/` } : {})
})
useHead({
  link: computed(() =>
    siteUrl.value ? [{ rel: 'canonical', href: `${siteUrl.value}/` }] : []
  )
})
const heroLinks = [
  { label: 'View projects', to: '/#projects', color: 'primary' as const, variant: 'solid' as const },
  { label: 'Get in touch', to: '/#contact', color: 'neutral' as const, variant: 'outline' as const }
]
</script>

<template>
  <div>
    <UPageHero
      class="border-b border-[var(--ui-border)] py-16 md:py-24"
      :headline="site.tagline"
      :title="site.title"
      :description="site.heroDescription"
      :links="heroLinks"
    />

    <UContainer class="py-16 md:py-20">
      <section
        id="projects"
        class="scroll-mt-24"
        aria-labelledby="projects-heading"
      >
        <h2
          id="projects-heading"
          class="mb-4 text-2xl font-semibold tracking-tight text-[var(--ui-text)]"
        >
          Projects
        </h2>
        <p class="text-muted mb-8 max-w-2xl text-pretty">
          Add your featured work here. You can use
          <code class="rounded bg-[var(--ui-bg-elevated)] px-1.5 py-0.5 text-sm">components/sections/</code>
          and data from
          <code class="rounded bg-[var(--ui-bg-elevated)] px-1.5 py-0.5 text-sm">composables/</code>
          when you are ready.
        </p>
        <UCard>
          <template #header>
            <span class="font-medium">Placeholder project</span>
          </template>
          <p class="text-muted text-sm">
            Replace this card with a grid of project cards (title, stack, links).
          </p>
        </UCard>
      </section>

      <section
        id="contact"
        class="scroll-mt-24 mt-20"
        aria-labelledby="contact-heading"
      >
        <h2
          id="contact-heading"
          class="mb-4 text-2xl font-semibold tracking-tight text-[var(--ui-text)]"
        >
          Contact
        </h2>
        <p class="text-muted mb-6 max-w-2xl text-pretty">
          Swap this block for a form or a mailto button. Social links live in the header for now.
        </p>
        <UButton
          :to="`mailto:hello@example.com?subject=${encodeURIComponent('Portfolio inquiry')}`"
          icon="i-lucide-mail"
          size="lg"
        >
          Email me
        </UButton>
      </section>
    </UContainer>
  </div>
</template>
