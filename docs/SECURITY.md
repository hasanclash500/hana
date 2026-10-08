# Security baseline
- Never commit `.env.local`, tokens, passwords, payment credentials, API keys or database secrets.
- Current Convex endpoints provide read-only public queries. Write paths require server-side authentication, authorization and audit events before release.
- An externally accessible demo is not a live commerce product.
- Rate limit all public mutations and sensitive endpoints when added.
- Use server-validated prices, SKU and inventory; never trust client-side totals.
- Protect admin routes with role-based controls and reliable session management.
- Back up source, database and media separately; test restores before moving to a self-hosted production environment.
