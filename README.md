# Portfolio

Minimalist personal portfolio. 

## Stack

| Layer | Choice | Role |
|-------|--------|------|
| Runtime | **React 19** | UI components and client-side routing |
| Language | **TypeScript** | Typed data models and components |
| Build | **Vite 8** | Dev server, HMR, and production static output |
| Routing | **react-router-dom 7** | `/#/about`, `/#/cv`, `/#/projects` with `HashRouter` for GitHub Pages |
| Styling | **Tailwind CSS 4** | Utility-first layout and theme via `@tailwindcss/vite` |
| Icons | **lucide-react** | Consistent icon set |
| Lint | **ESLint** + **typescript-eslint** | Project-wide checks |

Content is not baked into components: copy and records live under `src/data/` with `{ pt, en }` fields, while nav labels and buttons use `src/content/{pt,en}/ui.ts`. Locale is toggled in the UI and persisted in `localStorage`.

Print-friendly CV styling uses a dedicated `print.css` and browser print-to-PDF on `/#/cv`.

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output: dist/
npm run preview   # serve production build locally
npm run deploy    # publish dist/ to the gh-pages branch
npm run lint
```
