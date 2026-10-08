# HANA deployment and migration

## Development locally
Node 22 recommended:
```sh
npm install
cp .env.example .env.local
npm run dev
```

## Convex (optional during UI-only testing)
Development Cloud URL: `https://energetic-butterfly-143.eu-west-1.convex.cloud`

Optional HTTP Actions URL: `https://energetic-butterfly-143.eu-west-1.convex.site`

These URLs are public deployment identifiers, not write access or admin credentials.
The `NEXT_PUBLIC_CONVEX_URL` setting is configured in Vercel and mirrored in `.env.example`.
The `NEXT_PUBLIC_CONVEX_HTTP_ACTIONS_URL` setting is reserved for future HTTP Actions and is not actively used.

**Pointing the site at the URL does not publish backend functions.**
Until the matching schema and functions are deployed, the site keeps the catalog in a safe empty state rather than showing imaginary products.

### Publish the Convex backend securely from GitHub (no local terminal needed)
1. In [Convex dashboard](https://dashboard.convex.dev/), open the **exact development deployment** that matches the public Cloud URL above. Create a **deployment-scoped development deploy key**, not the project's production key.
2. In [HANA GitHub Actions secrets](https://github.com/hasanclash500/hana/settings/secrets/actions), create a repository secret named `CONVEX_DEV_DEPLOY_KEY`. Paste the key into GitHub's secret input, **never into chat or a tracked file**.
3. Open [Deploy HANA Convex development backend](https://github.com/hasanclash500/hana/actions/workflows/convex-dev-deploy.yml), choose `Run workflow`, branch `main`. It runs `npx convex deploy`, targeting the deployment attached to that secret.
4. In Convex dashboard, verify that `catalog:listPublished` and `catalog:bySlug` exist in the same development deployment.
5. Product listings remain empty until real products are added using an authenticated management workflow (not included in the MVP).

Alternatively, from the project root after logging into the *correct* Convex development deployment, run `npx convex dev --once`.

## GitHub
Main repository: https://github.com/hasanclash500/hana .
Feature branches and `develop` for preview changes; merges to `main` for the tested baseline.

## Vercel development/testing
Project: https://vercel.com/hasanclash500-1120/hana

Preview origin: https://hana-delta-eight.vercel.app

Vercel environment variables are configured:
- `NEXT_PUBLIC_CONVEX_URL` = public Convex Cloud URL above
- `NEXT_PUBLIC_CONVEX_HTTP_ACTIONS_URL` = optional public HTTP Actions URL
- `NEXT_PUBLIC_SITE_URL` = `https://hana-delta-eight.vercel.app`

GitHub is connected to Vercel. Pushes to `main` trigger the site's test deployment.
HANA stays a noncommercial **development prototype** on Vercel Hobby. Checkout and payments are disabled.
A live commercial store requires appropriate hosting.

## Later: personal server
Deploy behind TLS + Caddy/Nginx with `npm run build` then `npm start`, or use the repository's Dockerfile. Choose a self-hosted database or PostgreSQL and replace the catalog repository adapter. Add isolated secret management, backups, recoverability checks, logs, container hardening, security updates and rollback procedures.

## Build checks
```sh
npm run typecheck
npm test
npm run build
```
Generate a `package-lock.json` with `npm install` in a networked environment; replace CI `npm install` with `npm ci` after committing the lockfile.
