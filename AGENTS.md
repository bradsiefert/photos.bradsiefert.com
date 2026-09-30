# AGENTS.md

## Cursor Cloud specific instructions

This is a **Nuxt 4** static photography portfolio (`photos.bradsiefert.com`). It is a
frontend-only site with no backend, database, tests, or auth. Content is a set of
`pages/*.vue` galleries plus `components/`, `layouts/`, and static assets in `public/`.

### Services

Single service: the Nuxt dev server.

- Dev server: `pnpm run dev` → serves at http://localhost:3000/
- Production static build (what Netlify runs): `pnpm run generate` (publishes to `dist/`)
- Plain build / preview: `pnpm run build`, then `pnpm run preview`
- No lint or test scripts are defined in `package.json`.

### Non-obvious notes

- First-time `nuxt dev`/`nuxt build` shows an **interactive telemetry prompt** that
  blocks startup. Disable it non-interactively by exporting `NUXT_TELEMETRY_DISABLED=1`
  (or run `npx nuxt telemetry disable` once). The update script does not set this, so
  when starting the dev server in a fresh shell, prefix it: `NUXT_TELEMETRY_DISABLED=1 pnpm run dev`.
- Image optimization provider is selected via `NUXT_IMAGE_PROVIDER` (see `nuxt.config.ts`):
  defaults to `ipx` for local dev, and `netlify.toml` sets it to `netlify` for production
  builds. Leave unset locally.
- `pnpm install` runs a `postinstall` (`nuxt prepare`) that generates `.nuxt/` types; this
  is expected.
