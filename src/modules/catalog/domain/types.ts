export type Variant = {
  id: string;
  sku: string;
  sizeMl: number;
  priceToman: number;
  availableStock: number;
};
export type Perfume = {
  id: string;
  slug: string;
  nameFa: string;
  nameEn: string;
  brand: string;
  family: string;
  gender: "women" | "men" | "unisex";
  concentration: string;
  summary: string | null;
  notes: string[];
  imageUrl: string | null;
  variants: Variant[];
};
export interface CatalogRepository {
  listPublished(): Promise<Perfume[]>;
  findPublishedBySlug(slug: string): Promise<Perfume | null>;
}
