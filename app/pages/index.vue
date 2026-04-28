<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const site = useSiteProfile()
const content = usePortfolioContent()
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
  { label: 'View Work', to: '/#projects', color: 'neutral' as const, variant: 'outline' as const },
  {
    label: "Let's Talk",
    to: `mailto:${site.email}?subject=${encodeURIComponent('Portfolio inquiry')}`,
    color: 'neutral' as const,
    variant: 'solid' as const
  }
]
</script>

<template>
  <div id="top" class="font-display">
    <!-- Hero -->
    <section
      class="relative overflow-hidden border-b border-[var(--ui-border)] bg-[var(--ui-bg)] py-16 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div
        class="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[var(--portfolio-accent)]/10 blur-3xl md:right-0"
        aria-hidden="true"
      />
      <UContainer class="relative">
        <div class="mb-6 flex flex-wrap items-center gap-3">
          <UBadge
            color="neutral"
            variant="subtle"
            class="ring-1 ring-[var(--portfolio-border-glow)]"
          >
            {{ content.availabilityLabel }}
          </UBadge>
          <span class="text-muted text-sm">@azizy5203</span>
        </div>
        <h1
          id="hero-heading"
          class="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--ui-text)] md:text-6xl md:leading-[1.08]"
        >
          <span class="text-[var(--portfolio-accent)]">{{ content.heroAccent }}</span>
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-pretty text-[var(--ui-text-muted)] md:text-xl">
          I am {{ site.title }}, {{ content.heroLead }}
        </p>
        <div class="mt-10 flex flex-wrap gap-3">
          <UButton
            v-for="(link, index) in heroLinks"
            :key="index"
            :to="link.to"
            :color="link.color"
            :variant="link.variant"
            size="lg"
            class="min-w-[9rem] justify-center"
            :class="
              link.variant === 'solid'
                ? '!bg-[var(--portfolio-accent)] !text-[#0a0a0a] hover:!opacity-90'
                : 'border-[var(--portfolio-border-glow)]'
            "
          >
            {{ link.label }}
          </UButton>
        </div>
        <div class="mt-14 grid gap-4 sm:grid-cols-3">
          <div
            v-for="stat in content.stats"
            :key="stat.label"
            class="rounded-xl border border-[var(--ui-border)] bg-[var(--portfolio-surface)] px-5 py-4"
          >
            <p class="text-3xl font-semibold text-[var(--portfolio-accent)] md:text-4xl">
              {{ stat.value }}
            </p>
            <p class="text-muted mt-1 text-sm font-medium">
              {{ stat.label }}
            </p>
          </div>
        </div>
        <div class="mt-10 max-w-md rounded-xl border border-[var(--ui-border)] bg-[var(--ui-bg-elevated)] p-5">
          <p class="text-muted text-xs font-semibold uppercase tracking-wider">
            {{ content.currentRoleLabel }}
          </p>
          <p class="mt-1 text-lg font-semibold text-[var(--ui-text)]">
            @ {{ content.currentRoleCompany }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Marquee -->
    <div
      class="portfolio-marquee overflow-hidden border-b border-[var(--ui-border)] bg-[var(--ui-bg-elevated)] py-3"
      aria-hidden="true"
    >
      <div class="portfolio-marquee-track flex w-max">
        <div
          v-for="repeat in 2"
          :key="`row-${repeat}`"
          class="flex shrink-0 items-center gap-8 pe-8"
        >
          <span
            v-for="(tech, index) in content.marqueeTech"
            :key="`${repeat}-${tech}-${index}`"
            class="text-muted text-sm font-medium tracking-wide"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <UContainer class="space-y-20 py-16 md:py-20">
      <!-- Experience -->
      <section
        id="experience"
        class="scroll-mt-24"
        aria-labelledby="experience-heading"
      >
        <h2
          id="experience-heading"
          class="mb-10 text-2xl font-semibold tracking-tight text-[var(--ui-text)] md:text-3xl"
        >
          Experience
        </h2>
        <ol class="relative space-y-10 border-s border-[var(--ui-border)] ps-8 md:ps-10">
          <li
            v-for="(job, index) in content.experiences"
            :key="index"
            class="relative"
          >
            <span
              class="absolute -start-[calc(0.25rem+1px)] top-1.5 size-2 rounded-full bg-[var(--portfolio-accent)] ring-4 ring-[var(--ui-bg)]"
              aria-hidden="true"
            />
            <p class="text-muted text-sm font-medium">
              {{ job.period }}
            </p>
            <h3 class="mt-2 text-xl font-semibold text-[var(--ui-text)]">
              {{ job.role }}
            </h3>
            <p class="mt-3 max-w-3xl text-pretty text-[var(--ui-text-muted)]">
              {{ job.description }}
            </p>
          </li>
        </ol>
      </section>

      <!-- Featured work -->
      <section
        id="projects"
        class="scroll-mt-24"
        aria-labelledby="projects-heading"
      >
        <h2
          id="projects-heading"
          class="mb-10 text-2xl font-semibold tracking-tight text-[var(--ui-text)] md:text-3xl"
        >
          Featured Work
        </h2>
        <div class="grid gap-6 md:grid-cols-2">
          <UCard
            v-for="project in content.projects"
            :key="project.name"
            :ui="{ root: 'overflow-hidden border-[var(--ui-border)] bg-[var(--portfolio-surface)] transition-shadow hover:shadow-md hover:shadow-[var(--portfolio-accent)]/5' }"
          >
            <template #header>
              <div class="flex flex-wrap items-start justify-between gap-2">
                <ULink
                  v-if="project.href"
                  :to="project.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lg font-semibold text-[var(--ui-text)] hover:text-[var(--portfolio-accent)]"
                >
                  {{ project.name }}
                  <span class="text-muted ml-1 text-sm font-normal" aria-hidden="true">↗</span>
                </ULink>
                <span
                  v-else
                  class="text-lg font-semibold text-[var(--ui-text)]"
                >
                  {{ project.name }}
                </span>
              </div>
            </template>
            <p class="text-[var(--ui-text-muted)] text-sm leading-relaxed text-pretty">
              {{ project.description }}
            </p>
            <template #footer>
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="tag in project.stack"
                  :key="tag"
                  color="neutral"
                  variant="subtle"
                  size="sm"
                >
                  {{ tag }}
                </UBadge>
              </div>
            </template>
          </UCard>
        </div>
      </section>

      <!-- Arsenal -->
      <section
        id="arsenal"
        class="scroll-mt-24"
        aria-labelledby="arsenal-heading"
      >
        <h2
          id="arsenal-heading"
          class="mb-10 text-2xl font-semibold tracking-tight text-[var(--ui-text)] md:text-3xl"
        >
          Arsenal
        </h2>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="skill in content.arsenal"
            :key="skill"
            color="neutral"
            variant="outline"
            size="md"
            class="border-[var(--portfolio-border-glow)] px-3 py-1"
          >
            {{ skill }}
          </UBadge>
        </div>
        <div class="mt-14">
          <h3 class="mb-4 text-lg font-semibold text-[var(--ui-text)]">
            Education
          </h3>
          <UCard :ui="{ root: 'max-w-xl border-[var(--ui-border)] bg-[var(--ui-bg-elevated)]' }">
            <div class="flex items-start gap-4">
              <div
                class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[var(--portfolio-accent)]/15 text-sm font-bold text-[var(--portfolio-accent)]"
              >
                {{ content.education.shortLabel }}
              </div>
              <div>
                <p class="font-semibold text-[var(--ui-text)]">
                  {{ content.education.degree }}
                </p>
                <p class="text-muted mt-1 text-sm">
                  {{ content.education.school }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Contact CTA -->
      <section
        id="contact"
        class="scroll-mt-24"
        aria-labelledby="contact-heading"
      >
        <div
          class="rounded-2xl border border-[var(--portfolio-border-glow)] bg-[var(--portfolio-surface)] p-8 md:p-12"
        >
          <h2
            id="contact-heading"
            class="text-2xl font-semibold tracking-tight text-[var(--ui-text)] md:text-3xl"
          >
            {{ content.ctaTitle }}
          </h2>
          <p class="mt-4 max-w-2xl text-pretty text-[var(--ui-text-muted)]">
            {{ content.ctaDescription }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <UButton
              :to="`mailto:${site.email}?subject=${encodeURIComponent('Portfolio inquiry')}`"
              icon="i-lucide-mail"
              size="lg"
              class="!bg-[var(--portfolio-accent)] !text-[#0a0a0a] hover:!opacity-90"
            >
              Email me
            </UButton>
            <UButton
              :to="`tel:${site.phoneTel}`"
              icon="i-lucide-phone"
              color="neutral"
              variant="outline"
              size="lg"
              class="border-[var(--portfolio-border-glow)]"
            >
              {{ site.phoneDisplay }}
            </UButton>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>
