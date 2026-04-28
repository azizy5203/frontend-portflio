# frontend-portfolio

Personal frontend portfolio built with Nuxt 4, Vue 3, TypeScript, and SCSS.

## Stack
- Nuxt 4 + Vue 3 (Composition API, `<script setup>` only)
- TypeScript strict mode
- Pinia for state
- SCSS (no plain CSS)
- `$fetch` / `useFetch` for HTTP (no Axios)
- pnpm as package manager

## Project Structure
```
assets/styles/        SCSS variables, mixins, global styles
components/ui/        Generic reusable components (Base prefix)
components/sections/  Page sections (Hero, Projects, About, etc.)
composables/          use* composables
pages/                Nuxt pages
types/                Shared TypeScript interfaces
public/images/        Static images
```

## Key Rules
- Never commit to `main` directly — always use feature branches
- Branch naming: `feat/description`, `fix/description`, `chore/description`
- Commit format: `type(scope): message` (Conventional Commits)
- PRs always target `main`, created as **draft** unless explicitly asked to open for review
- No Syncfusion packages
- No Options API
- No `any` types
- SCSS variables only — no hardcoded color/spacing values

## Running the project
```bash
pnpm install
pnpm dev        # dev server
pnpm build      # production build
pnpm lint       # ESLint
pnpm typecheck  # tsc --noEmit
```

## For agents: more detail in `.cursor/rules/`
- `project.mdc` — full stack and conventions
- `vue-components.mdc` — Vue component standards
- `typescript.mdc` — TypeScript rules
- `scss.mdc` — SCSS/BEM conventions
- `git-workflow.mdc` — branching and PR rules
- `portfolio-domain.mdc` — portfolio-specific content and SEO
- `agent-behavior.mdc` — what to do/avoid when running as an agent
