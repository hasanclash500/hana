# HANA development roadmap

## Completed foundations
- [x] Mobile-first Persian/RTL Next.js starter and fragrance editorial pages
- [x] Convex catalog adapter behind a replaceable repository interface
- [x] GitHub branches `main` and `develop`
- [x] GitHub Actions checks (typecheck, unit tests and build)
- [x] Dockerfile and self-hosting guide
- [x] Preview SEO indexing disabled by default
- [x] Rule-based perfume finder from actual catalog fields with 6 tests

## Next: free-first development environment
- [x] Connect `hasanclash500/hana` to Vercel project `hana` for noncommercial testing
- [x] Verify Vercel deployment `READY` and GitHub CI passing
- [ ] Verify latest merged `/finder` release smoke test
- [x] Configure supplied Convex Cloud/HTTP Actions public URLs in Vercel (no secrets)
- [ ] Publish Convex functions after securely adding scoped `CONVEX_DEV_DEPLOY_KEY`; first workflow run failed at missing-key check
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
