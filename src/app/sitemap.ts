import type { MetadataRoute } from "next";
import { catalog } from "@/modules/catalog/application";
export const dynamic = "force-dynamic";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
  const pages = ["", "/perfumes", "/notes", "/magazine"].map(path => ({ url: origin + path, changeFrequency: "weekly" as const, priority: path ? 0.7 : 1 }));
  const items = await catalog.list();
  return [...pages, ...items.map(item => ({ url: origin + "/perfumes/" + encodeURIComponent(item.slug), changeFrequency: "weekly" as const, priority: 0.8 }))];
}
