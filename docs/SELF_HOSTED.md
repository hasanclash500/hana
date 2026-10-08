# Migration from Vercel/Convex to a private server

This is an architecture guide, not a claim that production deployment or purchase workflows are ready.

## Stage A — host Next.js yourself
1. Provision a Linux VM with firewall, HTTPS reverse proxy (e.g. Caddy), backups and SSH access restricted to authorized administrators.
2. Set up Node 22 or Docker.
3. From the repo root run `docker build -t hana:dev .` and supply runtime variables outside the image, e.g. `docker run --rm -p 127.0.0.1:3000:3000 --env-file .env.production hana:dev`.
4. Put a TLS proxy in front of localhost port 3000. Never expose the service before authentication, monitoring and security controls are reviewed.
5. Set `NEXT_PUBLIC_SITE_URL` to the real origin. Keep `HANA_ALLOW_INDEXING=false` until the domain, HTTPS and production catalog are ready.

## Stage B — move the data provider
1. Provision PostgreSQL, define migrations and restore-tested automated backups.
2. Implement a PostgreSQL adapter for `CatalogRepository` in `src/modules/catalog/infrastructure/`; leave UI and domain service intact.
3. Export/transform/import validated entities, SKUs, variants, notes, media references; reconcile record counts and stock values.
4. Switch adapter by configuration, rehearse rollback, then decommission unused Convex workloads.

## Stage C — commerce release
Implement administrative authentication, RBAC, inventory movements, checkout, server-side price validation, payment callbacks, rate limiting, audit logs, privacy compliance, observability and automated tests first.

Note: the Docker recipe deliberately uses npm install until a vetted package-lock.json is committed; use npm ci for repeatable builds once available.
