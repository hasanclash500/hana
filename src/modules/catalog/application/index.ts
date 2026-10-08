import { createCatalogService } from "./catalog-service";
import { ConvexCatalogRepository } from "../infrastructure/convex-repository";
export const catalog = createCatalogService(new ConvexCatalogRepository());
