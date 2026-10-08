import Link from "next/link";
export default function NotFound() { return <div className="container listing-page notfound"><div className="page-intro"><span className="section-label">404 / NOT FOUND</span><h1>این صفحه پیدا نشد</h1><p>شاید نشانی تغییر کرده باشد. از صفحه اصلی مسیر تازه‌ای پیدا کنید.</p></div><Link href="/" className="button button--dark">بازگشت به خانه ←</Link></div>; }
