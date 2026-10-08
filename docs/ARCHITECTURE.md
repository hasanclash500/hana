# HANA architecture: portable, modular, free-first
## Scope (first release)
- Persian, RTL and mobile-first UI; educational pages; product catalog READ only.
- Next.js App Router server components; TypeScript domain models.
- `src/modules/catalog/domain` contains provider-neutral interfaces; `application` implements use cases; `infrastructure` integrates Convex.
- Catalog stays empty if Convex is not configured. Real SKU, price, stock and images must be explicitly curated.
- SEO baseline: metadata, canonical, sitemap, robots; not a guarantee of search ranking.

## Future server migration
1. Run Next.js with Node 22 / Docker behind Nginx or Caddy on personal server.
2. Move catalog data from Convex to PostgreSQL (Neon first, self-hosted later) by implementing `CatalogRepository`; keep domain contracts unchanged.
3. Configure backups, PostgreSQL migrations and connection pooling; self-host object storage or S3-compatible storage behind `StorageProvider`.
4. Add authenticated administrative writes, inventory ledger, orders, payment and audit logging before permitting transactions.
5. Add job queue abstraction, search adapter, feature flags, service monitoring and rate limiting as needed.

## Boundaries
- Presentation does not import Convex directly.
- Domain layer does not contain provider-specific code.
- Public Convex functions are read-only. No secrets or credentials committed.
- UTC in storage, Jalali for UI when time-based features are implemented.
- Keep API versioned under `/api/v1`.
- No claims that a merchant/payment system is already implemented.

## Not yet implemented
Authentication, administrator UI, cart, order lifecycle, payment gateway, warehouse transaction ledger, CRM, AI SEO, 3D bottles, complete CMS and backup automation are future work.
