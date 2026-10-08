import type { Metadata } from "next";
export const metadata: Metadata = { title: "مجله عطر حنا", description: "راهنماهای کاربردی عطرشناسی در مجله گالری عطر حنا.", alternates: { canonical: "/magazine" } };
const entries = [
  { no: "01", topic: "آموزش عطرشناسی", title: "نت ابتدایی، میانی و پایه چه تفاوتی دارند؟", body: "نت ابتدایی نخستین برداشت از عطر است و معمولاً زودتر محو می‌شود. نت میانی شخصیت اصلی رایحه را نمایان می‌کند و نت پایه دیرتر خود را نشان می‌دهد و اغلب ماندگارتر است. البته هر عطر ساختار زمانی ویژه خود را دارد." },
  { no: "02", topic: "راهنمای انتخاب", title: "چگونه عطر را روی پوست امتحان کنیم؟", body: "عطر را روی پوست تمیز اسپری کنید و فرصت بدهید تا تغییرات رایحه را در طول زمان تجربه کنید. قضاوت فقط بر اساس لحظه اول، تصویر کاملی از عطر نمی‌دهد. پیش از انتخاب نهایی، تناسب آن را با سلیقه و موقعیت استفاده بسنجید." },
  { no: "03", topic: "اصطلاحات تخصصی", title: "ماندگاری و پخش بو یکسان نیستند", body: "ماندگاری به مدت باقی‌ماندن رایحه اشاره دارد، اما پخش بو توصیف می‌کند عطر تا چه اندازه در فضای اطراف احساس می‌شود. این ویژگی‌ها به فرمول، مقدار استفاده و شرایط محیطی وابسته‌اند و لزوماً با یکدیگر برابر نیستند." },
];
export default function MagazinePage() {
  return <div className="container listing-page"><div className="page-intro"><span className="section-label">THE HANA EDITORIAL</span><h1>مجله عطر حنا</h1><p>توضیح‌های روشن و کاربردی برای شناخت بهتر عطر.</p></div>
    <div className="magazine-list">{entries.map(entry => <article key={entry.no} className="magazine-article"><div className="magazine-article__no">{entry.no}</div><div><span className="section-label">{entry.topic}</span><h2>{entry.title}</h2><p>{entry.body}</p></div></article>)}</div>
    <p className="editorial-footnote">نسخه فعلی مجله شامل محتوای آموزشی پایه است؛ CMS، نویسندگان و سیستم انتشار در فاز بعدی اضافه می‌شوند.</p>
  </div>;
}
