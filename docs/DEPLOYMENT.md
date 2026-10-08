# HANA deployment and migration

## Development locally
Node 22 recommended:
```sh
npm install
cp .env.example .env.local
npm run dev
```

## Convex (optional during UI-only testing)
1. Create a free Convex project in https://dashboard.convex.dev/ .
2. From the project root run `npx convex dev` and complete login.
3. Set `NEXT_PUBLIC_CONVEX_URL` from the public deployment URL.
4. Restart the app. The catalog remains empty until approved real products are published via an authenticated workflow.
5. Never put deploy keys in the git repository; use protected environment variables.

## GitHub
Main repository: https://github.com/hasanclash500/hana .
Feature branches and `develop` for preview changes; merges to `main` for the tested baseline.

## Vercel development/testing
Import the GitHub repo with Next.js, root `/`, production branch `main`.
Set `NEXT_PUBLIC_SITE_URL` to the assigned website URL (not localhost) and optional `NEXT_PUBLIC_CONVEX_URL`.
Use Vercel Hobby only for noncommercial personal development and tests.
A real store selling products requires eligible commercial hosting.

## Later: personal server
Deploy behind TLS + Caddy/Nginx with `npm run build` then `npm start`. Choose a self-hosted database or managed PostgreSQL and replace the repository adapter. Add isolated secret management, database backups, recoverability checks, logs, container hardening, security updates and rollback procedures.

## Build checks
```sh
npm run typecheck
npm test
npm run build
```
Generate a `package-lock.json` with `npm install` in a networked environment; replace CI `npm install` with `npm ci` after committing that lockfile.
