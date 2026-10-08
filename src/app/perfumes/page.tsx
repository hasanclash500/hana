import type { Metadata } from "next";
import Link from "next/link";
import { catalog } from "@/modules/catalog/application";
import { ProductCard } from "@/components/product-card";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "گالری عطرها",
  description: "جستجوی عطرها بر اساس نام، برند، خانواده و نت بویایی.",
  alternates: { canonical: "/perfumes" },
};
export default async function PerfumesPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const term = q.slice(0, 120);
  const products = await catalog.list(term);
  return <div className="container listing-page">
    <div className="page-intro"><span className="section-label">PERFUME COLLECTION</span><h1>گالری عطرها</h1><p>رایحه‌ای را پیدا کنید که با حال‌وهوای شما هماهنگ باشد.</p></div>
    <form className="search-form" action="/perfumes" method="get" role="search">
      <label htmlFor="perfume-search">جستجو در گالری</label>
      <div className="search-control"><input id="perfume-search" name="q" type="search" maxLength={120} defaultValue={term} placeholder="نام عطر، برند، خانواده یا نت…" autoComplete="off"/><button type="submit">جستجو ←</button></div>
    </form>
    <div className="results-heading"><h2>{term ? "نتیجه جستجو برای «" + term + "»" : "همه محصولات منتشرشده"}</h2><span>{new Intl.NumberFormat("fa-IR").format(products.length)} محصول</span></div>
    {products.length ? <div className="product-grid">{products.map(product => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><span aria-hidden="true">◈</span><h2>{term ? "عطری با این مشخصات پیدا نشد" : "هنوز محصولی منتشر نشده است"}</h2><p>{term ? "عبارت جستجو را کوتاه‌تر کنید یا نام برند را امتحان کنید." : "به محض انتشار اولین محصولات، آن‌ها را اینجا خواهید دید."}</p>{term ? <Link href="/perfumes" className="button button--dark">نمایش همه عطرها</Link> : <Link href="/notes" className="button button--dark">آشنایی با نت‌های عطر</Link>}</div>}
  </div>;
}
