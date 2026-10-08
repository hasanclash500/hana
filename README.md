# HANA PERFUME | گالری عطر حنا

Persian RTL, mobile-first perfume catalog and educational platform. **Development prototype — not a functioning store.**

## Current technologies
- Next.js 15 + React 19 + TypeScript
- Optional Convex free-tier data source through a provider-neutral catalog interface
- GitHub for source and CI, Vercel for noncommercial development and preview
- Optional Docker image for future migration to a private server

## Run locally
```sh
npm install
cp .env.example .env.local
npm run dev
```

Browse http://localhost:3000 . Pages: `/`, `/perfumes`, `/perfumes/[slug]`, `/notes`, `/magazine`. The product catalog stays empty until genuine product records are published through a secure workflow.

## Deployment
See [deployment](docs/DEPLOYMENT.md), [self-hosted migration](docs/SELF_HOSTED.md), [architecture](docs/ARCHITECTURE.md), [security](docs/SECURITY.md).
Dev and previews default to **noindex** (enable only after launching the verified production domain with `HANA_ALLOW_INDEXING=true`).
No checkouts, payment collection, customer records, or unauthenticated product writes are implemented yet.

GitHub: https://github.com/hasanclash500/hana

Use Vercel Hobby only for personal and noncommercial testing, not operating an online sales business.
