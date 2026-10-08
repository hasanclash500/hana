import { normalizePersian } from "../../catalog/domain/search.ts";
import type { Perfume } from "../../catalog/domain/types";

export type FinderPreferences = {
  gender?: "" | "men" | "women" | "unisex";
  family?: string;
  note?: string;
  budgetToman?: number;
};

export type FinderMatch = {
  product: Perfume;
  score: number;
  reasons: string[];
  lowestAvailablePriceToman: number | null;
};

/**
 * Explainable, rules-based matching on real published catalog data.
 * No AI, inferred performance claims, fabricated products or percentages.
 */
export function recommendPerfumes(
  products: readonly Perfume[],
  preferences: FinderPreferences,
): FinderMatch[] {
  const family = normalizePersian(preferences.family ?? "");
  const note = normalizePersian(preferences.note ?? "");
  const gender = preferences.gender ?? "";
  const budget = preferences.budgetToman;
  const hasBudget = typeof budget === "number" && Number.isFinite(budget) && budget > 0;
  if (!gender && !family && !note && !hasBudget) return [];

  const results: FinderMatch[] = [];
  for (const product of products) {
    if (gender && product.gender !== gender && !(gender !== "unisex" && product.gender === "unisex")) continue;

    const prices = product.variants
      .filter(variant => variant.availableStock > 0 && Number.isFinite(variant.priceToman) && variant.priceToman >= 0)
      .map(variant => variant.priceToman).sort((a, b) => a - b);
    const minPrice = prices[0] ?? null;
    if (hasBudget && (minPrice === null || minPrice > budget)) continue;

    const familyMatches = !!family && normalizePersian(product.family).includes(family);
    const noteMatches = !!note && product.notes.some(value => normalizePersian(value).includes(note));
    // A fragrance preference must match at least one stated fragrance attribute.
    if ((family || note) && !familyMatches && !noteMatches) continue;

    const reasons: string[] = [];
    let score = 0;
    if (familyMatches) { score += 4; reasons.push("خانواده بویایی: " + product.family); }
    if (noteMatches) { score += 4; reasons.push("دارای نت مرتبط با «" + (preferences.note ?? "") + "»"); }
    if (gender) {
      score += 2;
      reasons.push(product.gender === "unisex" ? "عطر یونیسکس" :
        product.gender === "women" ? "دسته‌بندی زنانه" : "دسته‌بندی مردانه");
    }
    if (hasBudget) { score += 2; reasons.push("حداقل یک حجم موجود در محدوده بودجه"); }

    results.push({ product, reasons, score, lowestAvailablePriceToman: minPrice });
  }
  return results.sort((a, b) =>
    b.score - a.score ||
    (a.lowestAvailablePriceToman ?? Infinity) - (b.lowestAvailablePriceToman ?? Infinity) ||
    a.product.slug.localeCompare(b.product.slug)).slice(0, 5);
}
