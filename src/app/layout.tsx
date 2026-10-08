import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { BottomNav } from "@/components/bottom-nav";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "گالری عطر حنا | دنیایی از رایحه", template: "%s | گالری عطر حنا" },
  description: "گالری عطر حنا؛ فضایی برای کشف، شناخت و انتخاب آگاهانه عطر و رایحه.",
  openGraph: { type: "website", locale: "fa_IR", siteName: "HANA PERFUME" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="fa" dir="rtl"><body>
    <SiteHeader />
    <main id="main-content">{children}</main>
    <footer className="site-footer"><div className="container footer-inner">
      <div><strong>HANA PERFUME</strong><p>زیبایی یک رایحه، در شناخت داستان آن است.</p></div>
      <p>گالری عطر حنا · آغاز یک تجربه متفاوت</p>
    </div></footer>
    <BottomNav />
  </body></html>;
}
