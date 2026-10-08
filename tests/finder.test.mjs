import test from "node:test";
import assert from "node:assert/strict";
import { recommendPerfumes } from "../src/modules/finder/domain/recommend.ts";

const base = {
  id:"a", slug:"test-vanilla", nameFa:"نمونه تست", nameEn:"Test", brand:"Test",
  family:"چوبی", gender:"unisex", concentration:"EDP",
  notes:["وانیل", "چوب صندل"], summary:null, imageUrl:null,
  variants:[{id:"v",sku:"TEST",sizeMl:50,priceToman:1500000,availableStock:2}]
};
const fresh = { ...base, id:"b",slug:"fresh",gender:"men", family:"مرکباتی",notes:["ترنج"],
  variants:[{id:"v2",sku:"TEST-2",sizeMl:100,priceToman:2900000,availableStock:4}] };

test("no preferences means no arbitrary recommendations", () => {
  assert.deepEqual(recommendPerfumes([base,fresh],{}), []);
});
test("Arabic and Persian spellings match real notes", () => {
  const results = recommendPerfumes([base,fresh],{note:"وانيل"});
  assert.equal(results.length, 1);
  assert.equal(results[0].product.slug,"test-vanilla");
  assert.match(results[0].reasons.join(" "), /نت مرتبط/);
});
test("gender filter permits unisex but excludes other gender", () => {
  assert.deepEqual(recommendPerfumes([base,fresh],{gender:"women"}).map(x=>x.product.slug),["test-vanilla"]);
});
test("budget considers in-stock variants only", () => {
  const results = recommendPerfumes([base,fresh],{budgetToman:2000000});
  assert.deepEqual(results.map(x=>x.product.slug),["test-vanilla"]);
});
test("products without in-stock variants never match a stated budget", () => {
  const sold = {...base, variants:[{...base.variants[0],availableStock:0}]};
  assert.equal(recommendPerfumes([sold],{budgetToman:2000000}).length,0);
});
test("a selected fragrance note must match data; no invented match", () => {
  assert.equal(recommendPerfumes([base],{note:"اسطوخودوس"}).length,0);
});
