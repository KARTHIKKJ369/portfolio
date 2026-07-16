# Portfolio — Karthik Jayan

Personal developer portfolio, built as a single-page React app.

**Live site:** https://portfolio-one-lemon-97.vercel.app/

## Tech stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll-triggered animation
- [Lucide](https://lucide.dev) for icons

## Structure

```
src/
  data.ts             # all project/skill/experience content lives here
  App.tsx             # page composition
  components/         # one component per section (Hero, About, Skills, ...)
  index.css           # design tokens + shared utility classes
```

Content (projects, skills, timeline, socials) is centralized in `src/data.ts` —
add a new project or role by editing that file, not the components.

## Running locally

```bash
npm install
npm run dev       # starts the dev server
npm run build     # type-checks and builds for production
npm run preview   # serves the production build locally
```

## Deployment

Deployed on Vercel — pushing to `main` triggers a new build automatically.
