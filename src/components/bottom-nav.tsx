import Link from "next/link";
export function BottomNav() {
  return <nav className="bottom-nav" aria-label="ناوبری موبایل">
    <Link href="/"><span aria-hidden="true">⌂</span><small>خانه</small></Link>
    <Link href="/perfumes"><span aria-hidden="true">◈</span><small>عطرها</small></Link>
    <Link href="/notes"><span aria-hidden="true">✳</span><small>نت‌ها</small></Link>
    <Link href="/magazine"><span aria-hidden="true">▤</span><small>مجله</small></Link>
  </nav>;
}
