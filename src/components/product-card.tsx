import Link from "next/link";
import type { Perfume } from "@/modules/catalog/domain/types";
import { formatToman } from "@/lib/format";
export function ProductCard({ product }: { product: Perfume }) {
  const prices = product.variants.map(v => v.priceToman);
  const price = prices.length ? Math.min(...prices) : null;
  return <article className="product-card">
    <Link href={"/perfumes/" + encodeURIComponent(product.slug)} className="product-card__link">
      <div className="product-card__visual">
        {product.imageUrl ? <img src={product.imageUrl} alt={"شیشه عطر " + product.nameFa} loading="lazy" /> : <span className="visual-monogram" aria-hidden="true">H</span>}
      </div>
      <div className="product-card__copy">
        <small>{product.brand}</small>
        <h3>{product.nameFa}</h3>
        <p lang="en" dir="ltr">{product.nameEn}</p>
        <div className="product-card__details"><span>{product.concentration}</span><span>{product.family}</span></div>
        <strong>{price !== null ? "از " + formatToman(price) : "قیمت هنوز ثبت نشده"}</strong>
      </div>
    </Link>
  </article>;
}
