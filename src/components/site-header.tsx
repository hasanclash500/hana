import Link from "next/link";
import { BrandMark } from "./brand-mark";
export function SiteHeader() {
  return <header className="site-header">
    <div className="container header-inner">
      <Link className="home-brand" href="/" aria-label="صفحه اصلی گالری عطر حنا"><BrandMark /></Link>
      <nav className="desktop-nav" aria-label="ناوبری اصلی">
        <Link href="/perfumes">عطرها</Link>
        <Link href="/finder">عطر مناسب من</Link>
        <Link href="/notes">نت‌های بویایی</Link>
        <Link href="/magazine">مجله عطر</Link>
      </nav>
      <Link href="/finder" className="header-discover">پیدا کردن رایحه <span aria-hidden="true">↖</span></Link>
    </div>
  </header>;
}
