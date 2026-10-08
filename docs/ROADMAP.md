# HANA development roadmap

## Completed foundations
- [x] Mobile-first Persian/RTL Next.js starter and fragrance editorial pages
- [x] Convex catalog adapter behind a replaceable repository interface
- [x] GitHub branches `main` and `develop`
- [x] GitHub Actions checks (typecheck, unit tests and build)
- [x] Dockerfile and self-hosting guide
- [x] Preview SEO indexing disabled by default

## Next: free-first development environment
- [ ] Import `hasanclash500/hana` as `hana` in the correct Vercel account workspace; deployment must remain non-commercial testing only
- [ ] Confirm the initial deployment reaches `READY` and smoke-test `/`, `/perfumes`, `/notes`, `/magazine`, `/api/v1/health`
- [ ] Create a development Convex instance and set `NEXT_PUBLIC_CONVEX_URL` only in Vercel/local environment settings
- [ ] Import verified real product data through a secured management process, with no fabricated prices or stock
- [ ] Add an authenticated administrator panel and permissions before enabling mutations

## Later: personal server
- [ ] Provision Linux + HTTPS/reverse proxy and harden access
- [ ] Choose database approach: operate Convex separately or migrate repository adapter to self-hosted PostgreSQL
- [ ] Test backups, restore, observability, media storage and rate limiting
- [ ] Introduce transactional inventory, orders and payment integration only after security and operational testing
- [ ] Configure production canonical domain, enable indexing deliberately, and deploy commercial traffic to a compliant host

## Rules
The current build is a development prototype. Checkout and payments are not enabled. Secrets and customer data must never be committed to the public repository.
