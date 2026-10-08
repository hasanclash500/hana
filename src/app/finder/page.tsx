import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { catalog } from "@/modules/catalog/application";
import { recommendPerfumes, type FinderPreferences } from "@/modules/finder/domain/recommend";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "عطر مناسب من را پیدا کن",
  description: "با انتخاب سلیقه بویایی و بودجه، عطرهای واقعی و منتشرشده در گالری حنا را پیدا کنید.",
  alternates: { canonical: "/finder" },
};

type Search = { gender?: string | string[]; family?: string | string[]; note?: string | string[]; budget?: string | string[] };
function first(value: string | string[] | undefined, limit: number) {
  return (typeof value === "string" ? value : "").slice(0, limit).trim();
}
function parsePreferences(search: Search): FinderPreferences {
  const genderValue = first(search.gender, 20);
  const gender = genderValue === "women" || genderValue === "men" || genderValue === "unisex" ? genderValue : "";
  const family = first(search.family, 50);
  const note = first(search.note, 50);
  const rawBudget = first(search.budget, 16);
  const candidate = rawBudget && /^\d+$/.test(rawBudget) ? Number(rawBudget) : 0;
  const budgetToman = Number.isSafeInteger(candidate) && candidate > 0 && candidate <= 10_000_000_000
    ? candidate : undefined;
  return { gender, family, note, budgetToman };
}

export default async function FinderPage({ searchParams }: { searchParams: Promise<Search> }) {
  const search = await searchParams;
  const prefs = parsePreferences(search);
  const submitted = Object.values(prefs).some(v => v !== undefined && v !== "");
  const products = submitted ? await catalog.list() : [];
  const matches = recommendPerfumes(products, prefs);

  return <div className="container listing-page">
    <div className="page-intro">
      <span className="section-label">HANA SCENT FINDER</span>
      <h1>عطر مناسب من را پیدا کن</h1>
      <p>چند ویژگی دلخواهتان را انتخاب کنید؛ پیشنهادها فقط بر پایه اطلاعات تأییدشده در کاتالوگ حنا هستند.</p>
    </div>
    <form className="finder-form" action="/finder" method="get">
      <div className="finder-form__grid">
        <label>دسته‌بندی موردنظر
          <select name="gender" defaultValue={prefs.gender ?? ""}>
            <option value="">محدودیتی ندارم</option>
            <option value="women">زنانه</option>
            <option value="men">مردانه</option>
            <option value="unisex">یونیسکس</option>
          </select>
        </label>
        <label>خانواده بویایی
          <input name="family" defaultValue={prefs.family ?? ""} maxLength={50} placeholder="مثلاً چوبی یا گلی" />
        </label>
        <label>نت محبوب
          <input name="note" defaultValue={prefs.note ?? ""} maxLength={50} placeholder="مثلاً وانیل، رز، عود" />
        </label>
        <label>سقف بودجه (تومان)
          <input name="budget" type="number" min="1" max="10000000000" step="1"
            defaultValue={prefs.budgetToman ?? ""} placeholder="اختیاری" />
        </label>
      </div>
      <div className="finder-form__actions">
        <button type="submit" className="button button--dark">پیدا کردن عطرها ←</button>
        <Link href="/finder" className="text-link">پاک کردن انتخاب‌ها</Link>
      </div>
      <p className="finder-hint">این ابزار یک تطبیق ساده و توضیح‌پذیر است؛ ادعای تشخیص سلیقه با هوش مصنوعی یا پیش‌بینی ماندگاری ندارد.</p>
    </form>

    {submitted ? <section aria-live="polite">
      <div className="results-heading"><h2>پیشنهادهای بر اساس انتخاب شما</h2>
        <span>{new Intl.NumberFormat("fa-IR").format(matches.length)} نتیجه</span></div>
      {matches.length ?
        <div className="finder-results">{matches.map(match => <article key={match.product.id} className="finder-result">
          <ProductCard product={match.product} />
          <div className="finder-result__reasons"><strong>چرا این عطر نمایش داده شد؟</strong>
            <ul>{match.reasons.map(reason => <li key={reason}>{reason}</li>)}</ul></div>
        </article>)}</div> :
        <div className="empty-state"><span aria-hidden="true">◈</span>
          <h2>{products.length ? "عطری با این ویژگی‌ها پیدا نشد" : "هنوز محصولی در گالری منتشر نشده است"}</h2>
          <p>{products.length ? "برای دیدن نتایج بیشتر، یکی از محدودیت‌ها را تغییر دهید." :
            "پس از ثبت محصولات واقعی و انتشار آن‌ها در Convex، پیشنهادهای متناسب اینجا نمایش داده می‌شوند."}</p>
          <Link href="/perfumes" className="button button--dark">دیدن گالری</Link></div>}
    </section> :
      <div className="finder-placeholder" role="note"><span aria-hidden="true">✧</span>
        <h2>رایحه از انتخاب‌های شما شروع می‌شود</h2>
        <p>دست‌کم یک معیار بالا انتخاب کنید. امکان انتخاب هم‌زمان چند معیار وجود دارد.</p></div>}
  </div>;
}
