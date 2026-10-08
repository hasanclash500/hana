/** Persian/Arabic spelling-normalized search; no user data is sent to a search provider. */
export function normalizePersian(value: string): string {
  return value
    .normalize("NFKC")
    .replace(/[يى]/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[أإآ]/g, "ا")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[\u200c\u200d]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("fa-IR");
}
export function containsQuery(text: string, query: string): boolean {
  const parts = normalizePersian(query).split(" ").filter(Boolean);
  const candidate = normalizePersian(text);
  return parts.every((part) => candidate.includes(part));
}
