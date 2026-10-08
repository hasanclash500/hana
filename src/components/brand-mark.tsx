export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <span className={compact ? "brand-mark brand-mark--small" : "brand-mark"} aria-label="گالری عطر حنا">
    <span className="brand-mark__symbol" aria-hidden="true">✦</span>
    <span className="brand-mark__words"><strong>حَنا</strong><small>HANA PERFUME</small></span>
  </span>;
}
