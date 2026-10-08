import test from "node:test";
import assert from "node:assert/strict";
import { normalizePersian, containsQuery } from "../src/modules/catalog/domain/search.ts";
test("normalizes Arabic yeh and kaf into Persian spellings", () => {
  assert.equal(normalizePersian("عطر كريمي"), "عطر کریمی");
});
test("matches words regardless of order and spacing", () => {
  assert.equal(containsQuery("عطر گرم   با رایحه وانیل", "وانيل گرم"), true);
});
test("does not return unrelated results", () => {
  assert.equal(containsQuery("عطر گلی خنک", "عود"), false);
});
