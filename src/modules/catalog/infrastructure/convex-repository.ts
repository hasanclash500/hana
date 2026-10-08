import { ConvexHttpClient } from "convex/browser";
import { anyApi } from "convex/server";
import type { CatalogRepository, Perfume } from "../domain/types";

/** Provider boundary: no Convex-specific type crosses into the domain module. */
export class ConvexCatalogRepository implements CatalogRepository {
  private getClient(): ConvexHttpClient | null {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL?.trim();
    return url ? new ConvexHttpClient(url) : null;
  }
  async listPublished(): Promise<Perfume[]> {
    const client = this.getClient();
    if (!client) return []; // No imaginary catalog data.
    return await client.query(anyApi.catalog.listPublished, {}) as Perfume[];
  }
  async findPublishedBySlug(slug: string): Promise<Perfume | null> {
    const client = this.getClient();
    if (!client) return null;
    return await client.query(anyApi.catalog.bySlug, { slug }) as Perfume | null;
  }
}
