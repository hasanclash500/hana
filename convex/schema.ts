import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
  brands: defineTable({
    slug: v.string(),
    nameFa: v.string(),
    nameEn: v.string(),
    description: v.optional(v.string()),
  }).index("by_slug", ["slug"]),

  products: defineTable({
    slug: v.string(),
    nameFa: v.string(),
    nameEn: v.string(),
    brandId: v.id("brands"),
    family: v.string(),
    gender: v.union(v.literal("men"), v.literal("women"), v.literal("unisex")),
    concentration: v.string(),
    summary: v.optional(v.string()),
    notes: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    published: v.boolean(),
    featured: v.boolean(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_featured", ["featured"]),

  variants: defineTable({
    productId: v.id("products"),
    sku: v.string(),
    sizeMl: v.number(),
    priceToman: v.number(),
    availableStock: v.number(),
    active: v.boolean(),
  })
    .index("by_product", ["productId"])
    .index("by_sku", ["sku"]),

  fragranceNotes: defineTable({
    slug: v.string(),
    nameFa: v.string(),
    nameEn: v.string(),
    description: v.string(),
    family: v.string(),
  }).index("by_slug", ["slug"]),
});
