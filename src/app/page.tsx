import Link from "next/link";
import { catalog } from "@/modules/catalog/application";
import { ProductCard } from "@/components/product-card";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  const featured = (await catalog.list()).slice(0, 4);
  return <>
    <section className="hero">
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-line" /> گالری عطر حنا · HANA PERFUME</p>
          <h1>هر رایحه،<br/><em>یک داستان.</em></h1>
          <p className="hero-summary">سفری به دنیای عطرها، نت‌ها و احساس‌ها. برای انتخابی که شبیه هیچ‌کس جز شما نیست.</p>
          <div className="hero-actions"><Link href="/perfumes" className="button button--gold">کاوش عطرها <span aria-hidden="true">↖</span></Link><Link href="/notes" className="text-link">شناخت نت‌ها <span aria-hidden="true">←</span></Link></div>
        </div>
        <div className="hero-stage" aria-label="نمای هنری از یک شیشه عطر">
          <div className="hero-stage__halo" /><div className="perfume-bottle"><div className="perfume-bottle__cap" /><div className="perfume-bottle__neck" /><div className="perfume-bottle__body"><span className="perfume-bottle__shine"/><span className="perfume-bottle__label"><b>HANA</b><small>FRAGRANCE GALLERY</small><span>✧</span></span></div></div>
          <span className="stage-caption">THE ART OF SCENT — EST. 2026</span>
        </div>
      </div>
      <div className="container hero-bottom"><span>SCROLL TO EXPLORE</span><span>۰۱ / DISCOVER</span></div>
    </section>

    <section className="intro-band"><div className="container intro-band__inner"><span className="star" aria-hidden="true">✳</span><p>عطر، فقط یک انتخاب نیست؛ امضای حضور شماست.</p><span className="star" aria-hidden="true">✳</span></div></section>

    <section className="section container" aria-labelledby="discover-title">
      <div className="section-heading"><div><span className="section-label">SCENT EXPLORATION</span><h2 id="discover-title">از کجا شروع کنیم؟</h2></div><p>مسیر خودتان را در دنیای عطر پیدا کنید.</p></div>
      <div className="discovery-grid">
        <Link className="discovery-card discovery-card--amber" href="/notes"><div className="discovery-card__graphic">✿</div><span>۰۱ / SCENT NOTES</span><h3>الفبای رایحه‌ها</h3><p>از وانیل گرم تا ترنج تازه؛ نت‌هایی که هویت عطر را می‌سازند.</p><b>کشف نت‌ها ↖</b></Link>
        <Link className="discovery-card discovery-card--green" href="/perfumes"><div className="discovery-card__graphic">✧</div><span>۰۲ / PERFUME GALLERY</span><h3>گالری عطر</h3><p>کالکشن‌های عطر را با نام، برند و خانواده بویایی جستجو کنید.</p><b>دیدن عطرها ↖</b></Link>
        <Link className="discovery-card discovery-card--ivory" href="/magazine"><div className="discovery-card__graphic">❈</div><span>۰۳ / EDITORIAL</span><h3>مجله حنا</h3><p>راهنماهای کوتاه و کاربردی برای شناخت بهتر دنیای عطر.</p><b>مطالعه مجله ↖</b></Link>
      </div>
    </section>

    <section className="finder-promo container" aria-labelledby="finder-promo-title">
      <div><span className="section-label">PERSONAL FRAGRANCE DISCOVERY</span>
      <h2 id="finder-promo-title">عطر مناسب سلیقه‌ات را پیدا کن</h2>
      <p>نت محبوب، خانواده بویایی و بودجه‌ات را انتخاب کن؛ نتیجه فقط از میان عطرهای واقعی گالری است.</p></div>
      <Link href="/finder" className="button button--dark">شروع انتخاب عطر ↖</Link>
    </section>

    <section className="section container" aria-labelledby="products-title">
      <div className="section-heading"><div><span className="section-label">THE COLLECTION</span><h2 id="products-title">از گالری حنا</h2></div><Link className="section-action" href="/perfumes">نمایش همه عطرها ←</Link></div>
      {featured.length ? <div className="product-grid">{featured.map(product => <ProductCard key={product.id} product={product} />)}</div> : <div className="collection-empty"><span aria-hidden="true">✦</span><h3>گالری در حال آماده‌سازی است</h3><p>محصولات پس از ثبت و انتشار توسط مدیر فروشگاه در این بخش نمایش داده می‌شوند.</p><Link href="/notes" className="text-link">فعلاً دنیای نت‌ها را بشناسید ←</Link></div>}
    </section>
    <section className="quote-panel"><div className="container"><span>HANA JOURNAL</span><blockquote>«بهترین عطر، عطری است که وقتی از اتاق می‌روید، چیزی از شما به یاد می‌ماند.»</blockquote><Link href="/magazine">بیشتر درباره دنیای عطر بخوانید <span aria-hidden="true">↖</span></Link></div></section>
  </>;
}
