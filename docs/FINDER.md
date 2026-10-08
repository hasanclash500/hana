# HANA scent finder — MVP

The finder at `/finder` is **not generative AI**. It ranks published catalog products using only recorded gender, fragrance family, notes and in-stock variant prices. It neither creates records nor invents notes, stock, seasonality, sillage, projection, longevity, or match percentages.

- Gender and budget are hard filters; unisex can satisfy female or male selections.
- Family/note preferences require at least one fragrance attribute match; matching both ranks ahead of matching just one.
- Budget compares against the least expensive **available** (stock > 0) variant in toman.
- Reasons shown alongside each product derive from actual fields.
- Maximum of five results; if the catalog is empty, the finder explicitly says so.
- All inputs are bounded server-side; no user answers are persisted or tracked.
- No user profile, checkout or hidden AI API calls.

Future extensions should use verified optional attributes (season, day/night, occasion, warmth, etc.), verified by human editors. Do not show a deceptive numerical confidence score.
