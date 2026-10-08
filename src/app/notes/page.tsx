import type { Metadata } from "next";
export const metadata: Metadata = { title: "نت‌های بویایی", description: "با نت‌های محبوب عطر، از ترنج و وانیل تا عود و مشک آشنا شوید.", alternates: { canonical: "/notes" } };
const notes = [
  { fa: "ترنج", en: "BERGAMOT", family: "مرکباتی", description: "مرکباتی، روشن و گاهی کمی تلخ؛ اغلب در شروع رایحه احساس می‌شود.", symbol: "◐" },
  { fa: "وانیل", en: "VANILLA", family: "شیرین و گرم", description: "ملایم، شیرین و آرامش‌بخش؛ در بسیاری از ترکیبات گرم و گورماند حضور دارد.", symbol: "✳" },
  { fa: "چوب صندل", en: "SANDALWOOD", family: "چوبی", description: "چوبی، نرم و خامه‌ای؛ به ترکیب عطر عمق و لطافت می‌دهد.", symbol: "⌁" },
  { fa: "رز", en: "ROSE", family: "گلی", description: "یکی از شناخته‌شده‌ترین نت‌های گلی که بسته به ترکیب می‌تواند شفاف یا عمیق باشد.", symbol: "✿" },
  { fa: "عود", en: "OUD", family: "چوبی و رزینی", description: "نتی پیچیده و غنی که می‌تواند وجوه چوبی، دودی و رزینی داشته باشد.", symbol: "✧" },
  { fa: "مشک", en: "MUSK", family: "مشکی", description: "در عطرسازی مدرن اغلب حالتی تمیز، نرم و پوست‌مانند به رایحه می‌دهد.", symbol: "◈" },
];
export default function NotesPage() {
  return <div className="container listing-page"><div className="page-intro"><span className="section-label">THE FRAGRANCE LIBRARY</span><h1>الفبای نت‌های بویایی</h1><p>هر عطر ترکیبی از لایه‌های مختلف رایحه است. با برخی از نت‌های مهم عطرسازی آشنا شوید.</p></div>
    <div className="note-grid">{notes.map(n => <article className="note-card" key={n.en}><div className="note-card__symbol" aria-hidden="true">{n.symbol}</div><small>{n.en}</small><h2>{n.fa}</h2><span>{n.family}</span><p>{n.description}</p></article>)}</div>
    <p className="editorial-footnote">این بخش آموزشی است. پایگاه داده کامل نت‌ها و ارتباط آن‌ها با محصولات در مراحل بعدی توسعه تکمیل می‌شود.</p>
  </div>;
}
