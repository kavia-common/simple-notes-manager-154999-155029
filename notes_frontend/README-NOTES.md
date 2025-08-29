# Notes Frontend - Dev Notes

- Dynamic routes under `src/pages/notes/[id]` and `edit.astro` are marked `export const prerender = false;` so Astro does not require `getStaticPaths`. These routes fetch data client-side.
- ESLint ignores the `.astro/` generated types via `.eslintignore` to avoid strict TypeScript lint errors from generated files.
