# HANA PERFUME | گالری عطر حنا

A Persian RTL, mobile-first fragrance catalog and editorial prototype.

**Phase 1 only:** No checkout, live payments, fictional prices, or unauthenticated administrative writes.

## Stack
- Next.js 15 / React 19 / TypeScript
- Convex for optional **development** catalog data, accessed through a replaceable repository interface
- GitHub for version control, Vercel for noncommercial testing only
- Future self-hosted deployment supported by design

## Start
```sh
npm install
cp .env.example .env.local
npm run dev
```

Pages: `/`, `/perfumes`, `/perfumes/[slug]`, `/notes`, `/magazine`, `/api/v1/health`, `/robots.txt`, `/sitemap.xml`.

The public catalog intentionally stays empty until real records are published in Convex. Read `docs/DEPLOYMENT.md` and `docs/ARCHITECTURE.md` for the self-hosted migration approach and setup notes.

> Never commit credentials, tokens, deploy keys, or real customer data. Vercel Hobby is for personal/noncommercial development, not operating the commercial store.
