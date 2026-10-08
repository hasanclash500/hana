import type { CatalogRepository, Perfume } from "../domain/types";
import { containsQuery } from "../domain/search";
export function createCatalogService(repository: CatalogRepository) {
  return {
    async list(query = ""): Promise<Perfume[]> {
      const products = await repository.listPublished();
      if (!query.trim()) return products;
      return products.filter(item => containsQuery(
        [item.nameFa, item.nameEn, item.brand, item.family, ...item.notes].join(" "), query
      ));
    },
    bySlug: (slug: string) => repository.findPublishedBySlug(slug),
  };
}
