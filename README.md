# Personal Portfolio – SvelteKit + SCSS

This is a modern, immersive, and easy-to-update personal portfolio built with SvelteKit and SCSS modules.

## Features
- Hero & About sections (content in `/src/lib/data.js`)
- Featured Projects (manual list)
- Live GitHub feed (top 5 repos by stars)
- Social links (GitHub, LinkedIn)
- Responsive, modern design with dark mode toggle
- Animations using Svelte's `fly` and `fade`
- Tabler Icons via SVG imports
- Lightweight contact form (EmailJS or Netlify Forms)
- SEO & accessibility best practices
- Ready for Netlify/Vercel deployment
- Data abstracted in `/src/lib/data.js`
- Reusable components: `ProjectCard`, `SocialLink`, `SkillTag`
- SCSS modules with BEM naming

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deployment
- Ready for Netlify or Vercel. Add your GitHub API token as an environment variable if needed.

---

For more details, see `/src/lib/data.js` and the project structure.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
