# kabuk docs-site

User docs at kabuk.app/docs (GitHub repo `docs`, cloned here as `docs-site/`). VitePress, default
theme. Umbrella index and rules: [`../AGENTS.md`](../AGENTS.md).

## Commands

- `bun run dev` / `bun run build` (output goes to `dist/docs`)
- `bun run test` builds, then runs the Playwright scenario (each locale home opens under `/docs/`)

## Notes

- Content lives in `content/`: root is English, `tr/`, `kk/`, `ru/` hold the translations. Every
  page must exist in all four languages.
- `base` is `/docs/`. Markdown links are relative, without the base.
- `wrangler.jsonc` serves `dist` as static assets, routed to `kabuk.app/docs*`. Not deployed.
- There is no custom TypeScript besides `content/.vitepress/config.ts`, so no unit coverage
  applies. If custom theme code is added, it needs Vitest with 100% thresholds.
- The security page must keep matching the web limits in `../docs/architecture/security.md`.

Status: [docs/agents/status.md](docs/agents/status.md).
