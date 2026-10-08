import { queryGeneric } from "convex/server";
import { v } from "convex/values";

// Public reads only. Never publish unauthenticated admin mutations.
async function mapProduct(ctx: any, item: any) {
  const [brand, variants] = await Promise.all([
    ctx.db.get(item.brandId),
    ctx.db.query("variants").withIndex("by_product", (q: any) => q.eq("productId", item._id)).collect(),
  ]);
  return {
    id: item._id as string,
    slug: item.slug as string,
    nameFa: item.nameFa as string,
    nameEn: item.nameEn as string,
    brand: (brand?.nameFa || brand?.nameEn || "") as string,
    family: item.family as string,
    gender: item.gender as "men" | "women" | "unisex",
    concentration: item.concentration as string,
    summary: (item.summary ?? null) as string | null,
    notes: item.notes as string[],
    imageUrl: (item.imageUrl ?? null) as string | null,
    variants: variants.filter((variant: any) => variant.active).map((variant: any) => ({
      id: variant._id as string,
      sku: variant.sku as string,
      sizeMl: variant.sizeMl as number,
      priceToman: variant.priceToman as number,
      availableStock: variant.availableStock as number,
    })),
  };
}
export const listPublished = queryGeneric({
  args: {},
  handler: async (ctx) => {
    const items = await ctx.db.query("products")
      .withIndex("by_published", (q: any) => q.eq("published", true))
      .take(48);
    return await Promise.all(items.map(item => mapProduct(ctx, item)));
  },
});
export const bySlug = queryGeneric({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const item = await ctx.db.query("products")
      .withIndex("by_slug", (q: any) => q.eq("slug", slug))
      .unique();
    if (!item || !item.published) return null;
    return mapProduct(ctx, item);
  },
});
