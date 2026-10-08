import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { catalog } from "@/modules/catalog/application";
import { formatToman } from "@/lib/format";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await catalog.bySlug(slug);
  if (!item) return { title: "محصول یافت نشد", robots: { index: false } };
  return { title: item.nameFa, description: item.summary || "مشخصات عطر " + item.nameFa + " در گالری عطر حنا", alternates: { canonical: "/perfumes/" + encodeURIComponent(item.slug) } };
}
export default async function PerfumeDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await catalog.bySlug(slug);
  if (!item) notFound();
  return <div className="container detail-page">
    <div className="breadcrumbs"><Link href="/">خانه</Link><span> / </span><Link href="/perfumes">عطرها</Link><span> / </span><span>{item.nameFa}</span></div>
    <div className="detail-grid">
      <div className="detail-visual">{item.imageUrl ? <img alt={"تصویر عطر " + item.nameFa} src={item.imageUrl}/> : <span aria-hidden="true">H</span>}</div>
      <div className="detail-copy"><span className="section-label">{item.brand}</span><h1>{item.nameFa}</h1><p lang="en" dir="ltr" className="detail-en">{item.nameEn}</p><p>{item.summary || "توضیحات این محصول هنوز ثبت نشده است."}</p>
        <div className="detail-tags"><span>{item.family}</span><span>{item.concentration}</span><span>{item.gender === "unisex" ? "یونیسکس" : item.gender === "men" ? "مردانه" : "زنانه"}</span></div>
        <h2>حجم‌ها و موجودی</h2>
        {item.variants.length ? <div className="variant-list">{item.variants.map(variant => <div key={variant.id} className="variant-row"><strong>{new Intl.NumberFormat("fa-IR").format(variant.sizeMl)} میلی‌لیتر</strong><span>{formatToman(variant.priceToman)}</span><small>{variant.availableStock > 0 ? "موجود" : "ناموجود"}</small></div>)}</div> : <p>برای این عطر هنوز حجم قابل سفارش ثبت نشده است.</p>}
        <p className="checkout-notice">ثبت سفارش آنلاین هنوز فعال نشده است. موجودی و قیمت فقط از اطلاعات ثبت‌شده در کاتالوگ خوانده می‌شوند.</p>
        {item.notes.length ? <div className="detail-notes"><h2>نت‌ها</h2><p>{item.notes.join(" · ")}</p></div> : null}
      </div>
    </div>
  </div>;
}
