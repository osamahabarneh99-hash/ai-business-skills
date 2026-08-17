---
name: ebay-listing-craft
description: "Writing eBay listings that Cassini surfaces, for a seller with no ad budget who depends entirely on organic search placement. Covers title construction from real search terms, item specifics as the dominant ranking and filtering factor, correct category selection, mobile-first descriptions, photo requirements, and the listing-side inputs to seller ranking. Includes a diagnostic loop from impressions and click-through back to the specific listing element at fault, and the salam constraint that rules out auctions and flags Best Offer. Trigger on: eBay listing, eBay title, item specifics, Cassini, eBay SEO, listing optimization, no impressions, low click-through, write a listing, eBay category."
metadata:
  emoji: "✍️"
  category: ecommerce
license: MIT
---

# eBay Listing Craft — Organic Placement Only

This operator buys no ads. Cassini placement is the entire traffic supply, so the listing *is* the
marketing. A listing that does not rank does not exist.

## 1. What Cassini actually weighs

Roughly, in order:

1. **Relevance** — does the query match the title *and* the item specifics
2. **Listing completeness** — filled item specifics, photos, condition, policies
3. **Seller performance** — your standards level feeds placement directly (see `ebay-post-sale-ops`)
4. **Price competitiveness** — against comparable sold listings
5. **Terms** — handling time, return policy, free shipping

Notice that two of the five are not about words at all. A well-written listing on a Below Standard
account still loses.

## 2. Item specifics — the most under-used lever

**Fill every field eBay offers.** Required, recommended, and optional. This is the single biggest
listing-side factor and most beginners half-complete it.

Two reasons it outweighs the description:

- Cassini matches queries against structured specifics far more reliably than against prose.
- Buyers use the **left-hand filter rail** to narrow results. Any specific you leave blank silently
  removes your listing from that filter — you are invisible to a buyer who filtered by, say, colour,
  even if your item matches.

Rules: never leave a recommended field blank; never enter "N/A" or "Does not apply" where a real value
exists; match eBay's own dropdown values rather than free-typing a synonym; get brand, model, size,
colour, material, type, and MPN right where applicable.

## 3. Title — 80 characters of search terms

Build it from **Terapeak's actual search data**, not from what reads well.

Working order: `[Brand/Type] [Model/Variant] [Key Attribute] [Size/Capacity] [Colour] [Material] [Use case]`

- Front-load the strongest term; the opening words carry the most weight.
- Use all 80 characters — unused space is discarded relevance.
- Include the plausible synonym a buyer might type when it fits naturally.
- **No** `L@@K`, `WOW`, `FREE SHIP`, `★`, ALL CAPS, or repeated words. Cassini treats these as spam
  signals and buyers read them as amateur.
- No competitor brand names for an unbranded item — that is keyword spam and a VeRO exposure.

## 4. Category

One correct category. Not the closest convenient one, and never multi-category listing as a reach
tactic. Check which category comparable **sold** items sit in via Terapeak and match it. Wrong category
suppresses ranking regardless of how good the title is.

Also relevant here: Jordan is a HiPO covered country, so some categories are closed to a seller with no
history and eBay does not publish which. Confirm eligibility with an unpublished draft before investing
in copy or images.

## 5. Description — mobile first

Most eBay traffic is mobile. Write for a narrow screen.

- Open with the three facts that decide the purchase: what it is, key spec, delivery window.
- Short blocks, plain text, scannable. No wall of prose.
- **No heavy HTML templates**, no external links, no contact details outside eBay, no other-site
  references — all violate policy and several break mobile rendering.
- State the delivery window explicitly. This is an eBay expectation and a salam condition simultaneously.
- Do not restate what item specifics already carry; use the space for context and reassurance.

## 6. Photos

Up to 12 free. Use most of them.

- Main image: product on **clean white background, no text, no borders, no watermark** — an eBay
  requirement for the main image and a ranking input.
- Then: multiple angles, scale reference, in-use context, packaging, any detail that pre-empts a question.
- Every question a photo answers is a message you do not have to write and a return you do not have to take.
- Image editing stays inside the truthfulness limit: presentation may be improved, the product's real
  appearance may not be altered. Under salam, description accuracy is a validity condition.
- **Never use another seller's photos** — copyright and VeRO, penalty is account closure. CJ imagery is
  licensed to CJ's sellers; competitors' is not.

## 7. Format, price, terms

- **Buy It Now with immediate payment required.** No auctions — the gap between winning and paying
  breaks payment-at-contract under salam.
- **Best Offer: treat as unresolved.** Accepting an offer creates the same acceptance-to-payment gap as
  an auction. The safe default is to leave it off; raise it with a scholar before enabling it.
- Price against Terapeak **sold** prices, not active listing prices. Active listings are what did not sell.
- Free shipping built into price where the margin allows — it is a ranking input and a conversion one.
- Shortest handling time you can genuinely honour every single time. Never promise a speed you cannot
  hold; late shipment rate is punished harder than a slower promise.
- Returns accepted. It lifts placement, and under salam you bear the risk until delivery regardless, so
  a restrictive policy buys nothing.

## 8. Diagnostic loop

Read the listing's own numbers in Seller Hub and work backwards:

| Symptom | Cause | Fix |
|---|---|---|
| Near-zero impressions | Cassini is not matching you | Title terms and **empty item specifics**; verify category |
| Impressions fine, low click-through | You appear but lose the click | Main image quality, then price against sold comps |
| Click-through fine, no sales | You lose them on the page | Trust (no feedback), delivery window, unanswered questions, price |
| Sales then returns | Expectation gap | Photos or specifics overstated something — a truthfulness problem, fix at source |

Change **one variable at a time** and give it a week. Changing four things at once teaches you nothing.

Do not import benchmark rates from the open web — pull comparable figures from Terapeak for your own
category and judge against those.

## 9. Multiple listings of one product

Running 2–3 listings of the same item with different titles and lead images is a legitimate way to
learn which terms Cassini rewards. Keep them genuinely differentiated. Do not spawn near-identical
duplicates — that is listing spam and gets them removed.

## Related

- `modules/dropshipping/en/ebay-cj-jordan/SKILL.md` — fees, cash cycle, salam mapping, image limits
- `modules/dropshipping/en/product-research-ebay-cj/SKILL.md` — choosing what to list
- `modules/dropshipping/en/ebay-post-sale-ops/SKILL.md` — the performance metrics feeding rank
